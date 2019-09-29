import React, { HTMLProps } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export interface IParagraphProps
  extends Omit<HTMLProps<HTMLParagraphElement>, 'size'> {
  light?: boolean;
}

export const Paragraph = ({
  className,
  children,
  light,
  ...rest
}: IParagraphProps): React.ReactElement => (
  <p
    className={classnames(styles.paragraph, className, { [styles['paragraph--light']]: light })}
    {...rest}
  >
    {children}
  </p>
);

Paragraph.displayName = 'Paragraph';
