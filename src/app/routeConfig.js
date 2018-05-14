import React from 'react';

import App from './client/components/App.react';

const Foo = ({ props }) => (
  <div>foo</div>
);

const Messages = ({ props }) => (
  <div>Messages</div>
);

const SingleMessage = ({ props }) => (
  <div>Message</div>
);


export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        getComponent: () => <div>Main</div>,
      },
      {
        path: 'foo',
        getComponent: Foo,
      },
      {
        path: 'messages',
        getComponent: Messages,
      },
      {
        path: 'messages/:id',
        getComponent: SingleMessage,
      },
    ],

  },
];
