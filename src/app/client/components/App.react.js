import * as React from 'react';
import LinkItem from './LinkItem.react';
import Messages from './Messages.js';
import Message from './SingleMessage.js';

function App(props) {
  return (
    <div>
      <h1>SVZ</h1>
      <ul>
        <LinkItem to="/">
          Main
        </LinkItem>
        <LinkItem to="/messages">
          messages
        </LinkItem>
        <LinkItem to="/messages/:id">
          message
        </LinkItem>
      </ul>
      {props.children}
    </div>
  );
}

export default App;
