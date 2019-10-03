import React from 'react';
import { AccessibilityMenu } from '~/react/components/accessibility-menu';
import styles from './styles.module.css';

export const Header = (): React.ReactElement => (
  <header className={styles.header}>
    <div>
      <AccessibilityMenu />
    </div>
  </header>
);

Header.displayName = 'Header';
