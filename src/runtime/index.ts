import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';
import { internalModule } from './modules/internal';
import { createReactAppModule } from './modules/react-app';

export const run = async (): Promise<Container> => {
  const container = new Container();

  container.load(internalModule, createReactAppModule(container));
  container.load(buildProviderModule());

  return container;
};
