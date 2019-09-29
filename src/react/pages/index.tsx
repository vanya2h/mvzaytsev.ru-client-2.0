import React from 'react';
import { Typo } from '../components/typo';

export const IndexPage = (): React.ReactElement => (
  <div>
    <Typo.Heading level={1}>Hello world</Typo.Heading>
    <Typo.Heading level={2}>Hello world</Typo.Heading>
    <Typo.Heading level={3}>Hello world</Typo.Heading>
    <Typo.Heading level={4}>Hello world</Typo.Heading>
    <Typo.Heading level={5}>Hello world</Typo.Heading>
    <Typo.Heading level={6}>Hello world</Typo.Heading>
    <Typo.Paragraph>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
      {' '}
      <Typo.Link href="#">nulla quidem iusto</Typo.Link>
    </Typo.Paragraph>
  </div>
);

IndexPage.displayName = 'IndexPage';

IndexPage.key = 'index';
