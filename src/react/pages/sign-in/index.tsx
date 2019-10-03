import React from 'react';
// import { Typo } from '~/react/components/typo';
import { IPage } from '~/interfaces/page';

export const SignInPage: React.FunctionComponent & IPage = (): React.ReactElement => (
  <div>
    SignIn
  </div>
);


SignInPage.displayName = 'SignInPage';

SignInPage.routeDescriptor = {
  path: '/sign-in',
  component: SignInPage,
  key: 'sign-in',
};
