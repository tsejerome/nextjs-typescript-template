import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import router from 'next/router';
import {
  getItem,
  LocalStorageItems,
  PageNames,
} from '../utils/generalUtilities';
import {
  H1,
  H2,
  InteractionContainer,
  Button,
} from '../components/Shared/GeneralComponents';
import JPHeader from '../components/Shared/Header';
import Colours from '../components/Shared/Colours';
import locale from '../locales/en-GB.json';
import User from '../models/User';
import { IconType } from '../components/Shared/Icon';


const CreateRecordingPage = () => {

  useEffect(() => {
  }, []);

  const redirectSample = () => {
    router
      .push({
        pathname: PageNames.EXPORT_VIDEO,
        query: {
        },
      })
      .then();
  };

  return (
    <>
      <JPHeader />
      <InteractionContainer>
        <H1 style={{ marginBottom: 20 }}>Make a title ✨</H1>
        <div style={{ marginBottom: 30 }}></div>
      </InteractionContainer>
    </>
  );
};

export default CreateRecordingPage;
