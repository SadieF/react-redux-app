import React from 'react';
import Messages from './client/components/Messages.js'
import App from './client/components/App.react';



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
