import React from 'react';

class MessagesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const messages = this.props.messages;
    return (
    <div>
      {messages.map(message => (
        <div key={`message-${message.id}`}>
          <ul>
            <li>{message.body}</li>
            <li>{message.from}</li>
          </ul>
        </div>
      ))}
    </div>
    );
  }
}

export default MessagesIndex;