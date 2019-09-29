import React, { HTMLProps } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export interface ILinkProps extends HTMLProps<HTMLAnchorElement> {}

export const Link = ({
  className,
  children,
  ...rest
}: ILinkProps): React.ReactElement => (
  <a
    className={classnames(styles.link, className)}
    {...rest}
  >
    {children}
  </a>
);

Link.displayName = 'Link';
