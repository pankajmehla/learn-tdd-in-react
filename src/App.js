import React, { useState } from 'react';
import NewMessageForm from './NewMessageForm';
import Messageist from './MessageList';

const App = () => {

  const [messages, setMessages] = useState([]);

  const sendHandler = newMessage => {
    console.log(newMessage);
    setMessages([newMessage, ...messages]);
  }
  return (
    <div>
      <NewMessageForm sendHandler={sendHandler} />
      <Messageist data={messages} />
    </div>
  );
};

export default App;
