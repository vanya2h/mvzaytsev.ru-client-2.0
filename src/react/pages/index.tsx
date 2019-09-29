import React from 'react';
import styles from './styles.module.css';

export const IndexPage = (): React.ReactElement => (
  <div><h1 className={styles.hello}>Hello world</h1></div>
);

IndexPage.displayName = 'IndexPage';

IndexPage.key = 'index';
