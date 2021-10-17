import { UPLOAD_BUCKET } from '../config/constant';

enum PageNames {
  ROOT = '/',
  SIGNUP = '/signup',
  CREATE = '/create',
  LOGIN = '/login',
  EMAIL = '/email-signup',
  EMAIL_LOGIN = '/email-login',
  SET_AVATAR = '/set-avatar',
  SET_SLUG = '/set-slug',
  MAKE_AMA = '/make-ama',
  EXPORT_VIDEO = '/export',
  GENERATE_VIDEO = '/generate',
  GUIDE = '/guide',
  ERROR = '/404',
}

enum LocalStorageItems {
  URL_SLUG = 'username',
  AMA_TOPIC_NAME = 'amaTopicName',
  ACCESS_TOKEN = 'accessToken',
  DISPLAY_NAME = 'displayName',
  AVATAR = 'avatar',
  IS_WEBVIEW = 'is_webview',
}

const getItem = (item: LocalStorageItems): string => {
  return typeof window !== 'undefined' && window.localStorage.getItem(item);
};
const setItem = (key: LocalStorageItems, value: string): void =>
  typeof window !== 'undefined' && window.localStorage.setItem(key, value);
// const deleteItem = (key: LocalStorageItems): void => typeof window !== 'undefined' && window.localStorage.removeItem(key);
const clearAllItems = (): void =>
  typeof window !== 'undefined' && window.localStorage.clear();


export {
  PageNames,
  LocalStorageItems,
  clearAllItems,
  setItem,
  getItem,
};
