
import { ContainerModule } from 'inversify';
import { ROUTES } from '~/consts';
import { routes } from '~/common/routes';
import { LocalStorageClient } from '~/services/local-storage-client';

export const internalModule = new ContainerModule(bind => {
  bind(ROUTES).toConstantValue(routes);
  bind(LocalStorageClient).toConstantValue(new LocalStorageClient());
});
