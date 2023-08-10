// import node module libraries
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub custom components
import Sidebar from './sidebar/Sidebar';
import ChatBox from './chatbox/ChatBox';

// import context provider
import ChatProvider from 'context/providers/ChatProvider';

const Chat = () => {
  return (
    <ChatProvider>
      <ChatBox />
    </ChatProvider>
  );
};

export default Chat;
