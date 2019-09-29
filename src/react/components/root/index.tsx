import React from 'react';
import { Container } from 'inversify';
import { Router } from '~/react/components/router';
import { ContainerProvider } from '~/providers/container';

export interface IRootProps {
  container: Container
}

export const Root = ({ container }: IRootProps): React.ReactElement => (
  <ContainerProvider container={container}>
    <Router />
  </ContainerProvider>
);

Root.displayName = 'Root';
