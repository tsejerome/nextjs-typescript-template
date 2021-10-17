import ErrorsFT from '../models/ErrorsFT';
import jwt_decode from 'jwt-decode';
import firebase from 'firebase';
import { LocalStorageItems } from './generalUtilities';

export enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface FetchConfig {
  forceResolve?: boolean;
}

export interface FetchError {
  status: number;
  code: string;
  message: string;
}

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const awaitFirebaseInit = () => {
  return new Promise(async (resolve) => {
    await timeout(500);
    if (firebase.auth().currentUser) return resolve(true);
    return resolve(awaitFirebaseInit());
  });
};

const fetchWrapper = async (
  input: RequestInfo,
  method: MethodType,
  body?: string,
  token?: string,
  config?: FetchConfig
): Promise<unknown> => {
  try {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    if (token) {
      const data: any = jwt_decode(token);
      const exp = data.exp;
      if (typeof window !== 'undefined' && exp * 1000 < Date.now()) {
        await awaitFirebaseInit();
        token = await firebase.auth().currentUser.getIdToken(true);
        localStorage.setItem(LocalStorageItems.ACCESS_TOKEN, token);
      }
      headers.set('Authorization', `Bearer ${token}`);
    }

    const init: RequestInit = {
      method,
      body,
      headers,
    };
    const fetchSource = await fetch(input, init);
    if (!fetchSource.ok) throw await fetchSource.json();
    const result = await fetchSource.json();
    return Promise.resolve(result);
  } catch (error) {
    if (typeof window !== 'undefined')
      ErrorsFT.catcher(input as string, method || 'GET', error);
    if (config && config.forceResolve) return Promise.resolve(error);
    return Promise.reject(error);
  }
};

export default fetchWrapper;
