import { FunctionComponent } from 'react';
import { IndexPage } from './index/index';
import { IPage } from '~/interfaces/page';
import { ArticlePage } from './article';

export enum PageKey {
  index = 'index',
  article = 'article'
}

export const pages: Record<PageKey, IPage & FunctionComponent> = {
  index: IndexPage,
  article: ArticlePage,
};
