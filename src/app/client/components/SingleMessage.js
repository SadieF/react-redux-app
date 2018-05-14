import React from 'react';
import LinkItem from './LinkItem.react';

function SingleMessage(props) {
  return (
    <div>
      <h1>Message</h1>
      <ul>
        <LinkItem to="/messages/:id">
          Message
        </LinkItem>
      </ul>
      {props.children}
    </div>
  );
}

export default SingleMessage;