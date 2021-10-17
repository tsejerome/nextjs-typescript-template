import React from 'react';
import App from 'next/app';
import 'firebase/auth';
import { firebase } from '../services/firebase';
import '../assets/css/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/ReactModal.css';
import DocumentHead from '../components/Shared/DocumentHead';
import {
  LocalStorageItems,
  PageNames,
} from '../utils/generalUtilities';
import User from '../models/User';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  try {
  } catch (err) { }
  return {
    props: {},
  };
};

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  componentDidMount() {

  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DocumentHead />
        <React.Fragment>
          <Component {...pageProps} />
          {/* Go Top Button  */}
          {/*@ts-ignore*/}
          {/*<GoTop scrollStepInPx="50" delayInMs="16.66"/>*/}
        </React.Fragment>
      </>
    );
  }
}
