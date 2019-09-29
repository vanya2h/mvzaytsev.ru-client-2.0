import { useContext } from 'react';
import { interfaces } from 'inversify';
import { InversifyContext } from '~/providers/container';

export const useInjection = <T extends {}>(identifier: interfaces.ServiceIdentifier<T>): T => {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error('No container provided');
  }
  return container.get<T>(identifier);
};
