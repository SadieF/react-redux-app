import React from 'react';
import SingleMessage from './client/components/SingleMessage.js'
import Messages from './client/components/Messages.js'
import App from './client/components/App.react';

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: () => <div>Main</div>,
      },
      {
        path: 'messages',
        Component: Messages,
      },
      {
        path: 'messages/:id',
        Component: SingleMessage,
      },
    ],

  },
];
