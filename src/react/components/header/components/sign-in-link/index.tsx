import React from 'react';
import classnames from 'classnames';
import { LinkProps } from 'react-router-dom';
import { Link } from '~/react/components/typo/components/link';
import { SignInIcon } from '~/react/components/icons/sign-in';
import { SignInPage } from '~/react/pages/sign-in';
import styles from './styles.module.css';

export interface ISignInLinkProps extends Partial<LinkProps> {}

export const SignInLink = ({ className, ...restProps }: ISignInLinkProps) => (
  <Link
    className={classnames(className, styles.wrapper)}
    to={SignInPage.routeDescriptor.path}
    {...restProps}
  >
    <SignInIcon className={styles.icon} />
    <span className={styles.text}>Авторизация</span>
  </Link>
);

SignInLink.displayName = 'SignInLink';
