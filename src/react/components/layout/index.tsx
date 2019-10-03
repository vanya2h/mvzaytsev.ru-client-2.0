import React, { HTMLProps, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.css';
import { Header } from '~/react/components/header';
import { Aside } from '~/react/components/aside';
import { Container } from '~/react/components/container';
import { useInjection } from '~/react/hooks/use-injection';
import { AccessibilityService, FontSizeEnum } from '~/services/accessibility';
import utility from '~/css/utility.module.css';

export interface ILayoutProps extends HTMLProps<HTMLDivElement> {}

export const Layout = observer(({ children }: ILayoutProps): React.ReactElement => {
  const accessibility = useInjection(AccessibilityService);

  useEffect(() => {
    if (accessibility.size === FontSizeEnum.Big) {
      document.body.classList.add(utility.bigger);
    }
    if (accessibility.blindness) {
      document.body.classList.add(utility.blindness);
    }

    return () => {
      document.body.classList.remove(utility.blindness);
      document.body.classList.remove(utility.bigger);
    };
  }, [accessibility.size, accessibility.blindness]);

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <div className={styles.content}>
        <Aside />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
});

Layout.displayName = 'Layout';
