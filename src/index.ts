import 'reflect-metadata';
import './css/global.css';
import { run } from '~/runtime';
import { REACT_APP } from '~/consts';
import { ReactApp } from '~/stores/react-app';

(async () => {
  const container = await run();
  await container.get<ReactApp>(REACT_APP).init();
})();
