import React from 'react';
import MessagesIndexItem from "./messages_index_item";

class MessagesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const messages = this.props.messages;
    return (
    <div>
      {messages.map(message => (
        <MessagesIndexItem
          key = {`message__id--${message.id}`}
          message={ message }
        />
      ))}
    </div>
    );
  }
}

export default MessagesIndex;