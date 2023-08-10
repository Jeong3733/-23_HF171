// import node module libraries
import React, { useReducer, useState } from 'react';

// import context file
import { ChatContext } from 'context/Context';

// import data files
import { UsersList } from 'data/dashboard/chat/UsersData';
import MessagesData from 'data/dashboard/chat/MessagesData';
import ChatThreadsData from 'data/dashboard/chat/ChatThreadsData';
// import ChatGroupsData from 'data/dashboard/chat/ChatGroupsData';

// import reducer file
import { ChatReducer } from 'reducers/ChatReducer';

const ChatProvider = ({ children }) => {
  const [activeThread, setActiveThread] = useState(ChatThreadsData[0]);
  console.log(activeThread);
  const [ChatState, ChatDispatch] = useReducer(ChatReducer, {
    messages: MessagesData,
    // threads: ChatThreadsData,
    users: UsersList,
    // groups: ChatGroupsData,
    loggedInUserId: 1,
    activeThread,
    setActiveThread,
  });

  return (
    <ChatContext.Provider value={{ ChatState, ChatDispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
