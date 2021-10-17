import React from 'react';
import {
  H1,
  H2,
  InteractionContainer,
  Button,
} from '../components/Shared/GeneralComponents';
import { PageNames } from '../utils/generalUtilities';
import JPHeader from '../components/Shared/Header';
import { MAIN_URL } from '../config/seo';

const ErrorPage = () => (
  <>
    <JPHeader />
    <InteractionContainer>
      <H1 style={{ marginBottom: 20 }}>🔦</H1>
      <H2 style={{ marginBottom: 45 }}>Oops! This page doesn’t exist.</H2>
      <Button
        text={`Back to ${MAIN_URL}`}
        onClick={() => {
          return (window.location.href = PageNames.ROOT);
        }}
      />
    </InteractionContainer>
  </>
);

export default ErrorPage;
