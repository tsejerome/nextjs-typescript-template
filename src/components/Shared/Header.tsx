import React, { useEffect, useState } from 'react';
import Colours from './Colours';
import locale from '../../locales/en-GB.json';
import {
  clearAllItems,
  getItem,
  LocalStorageItems,
  PageNames,
} from '../../utils/generalUtilities';
import { useRouter } from 'next/router';
import User from '../../models/User';
import { IS_PROD } from '../../config/constant';
import firebase from 'firebase';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

interface JPHeaderProps {
  customStyle?: any;
}

const JPHeader = ({ customStyle }: JPHeaderProps) => {
  const TOASTER_DELAY_IN_MS = 7000; // default 5 seconds, ie 5000ms

  useEffect(() => {
  }, []);

  return (
    <>
      <ToastContainer icon={false} theme="light" autoClose={TOASTER_DELAY_IN_MS} />
    </>
  );
};
export default JPHeader;
