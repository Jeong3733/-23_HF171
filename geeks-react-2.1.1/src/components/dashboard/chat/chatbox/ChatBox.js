// import node module libraries
import React, { useContext, useRef, useEffect } from 'react';
import SimpleBar from 'simplebar-react';

// import sub custom components
import ChatHeader from './ChatHeader';
import Message from './Message';
import ChatFooter from './ChatFooter';

// import context file
import { ChatContext } from 'context/Context';

// import hook file
import useChatOperations from 'hooks/useChatOperations';

const ChatBox = (props) => {
	const { hideChatBox, setHideChatBox } = props;
	const {
		ChatState: { activeThread }
	} = useContext(ChatContext);
	const { getThreadMessages } = useChatOperations();
	const thread = getThreadMessages(activeThread.messagesId);

	// Auto scroll to bottom when the new chat has been added.
	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest'
		});
	};
	useEffect(scrollToBottom);

	return (
		<div
			className={`chat-body w-100 vh-100 ${
				hideChatBox ? 'chat-body-visible' : ''
			}`}
		>
			<ChatHeader hideChatBox={hideChatBox} setHideChatBox={setHideChatBox} />
			<SimpleBar className="vh-100" style={{ maxHeight: '70vh' }}>
				<div className="px-4 py-4 h-100 messages-container">
					{thread === 0
						? null
						: thread.chatMessages.map((item, index) => {
								return <Message chatScript={item} key={index} />;
						  })}
				</div>
				<div ref={messagesEndRef} />
			</SimpleBar>
			<ChatFooter />
		</div>
	);
};
export default ChatBox;
