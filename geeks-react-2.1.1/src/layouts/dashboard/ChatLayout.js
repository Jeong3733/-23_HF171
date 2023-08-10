// import node module libraries
import { useOutlet } from 'react-router-dom';

// import context provider
import ChatProvider from 'context/providers/ChatProvider';

const ChatLayout = () => {
  const outlet = useOutlet();
  return <div>{outlet}</div>;
};
export default ChatLayout;
