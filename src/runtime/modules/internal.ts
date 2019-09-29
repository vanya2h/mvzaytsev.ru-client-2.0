
import { ContainerModule } from 'inversify';
import { ROUTES } from '~/consts';
import { routes } from '~/common/routes';

export const internalModule = new ContainerModule(bind => {
  bind(ROUTES).toConstantValue(routes);
});
