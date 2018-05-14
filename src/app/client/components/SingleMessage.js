import React from 'react';
import LinkItem from './LinkItem.react';
import {connect} from 'react-redux';

function SingleMessagePresenter(props) {
  return (
    <div>
      <h1>{props.params.id}</h1>
      <ul>
        <LinkItem to="/messages/:id">
          Message
        </LinkItem>
      </ul>
      {props.children}
    </div>
  );
}
function mapStatetoProps(state, props) {
  return {
      messages: state.messages.messages.find(message => message.id.toString() === props.params.id)
  }
}

const SingleMessage = connect(mapStatetoProps)(SingleMessagePresenter)

export default SingleMessage;