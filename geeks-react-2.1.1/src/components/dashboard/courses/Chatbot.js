import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Chatbot.css';
import { getFileQNA } from 'components/utils/LoadData';

const Chatbot = ({ fileInfo, messages }) => {
  const [input, setInput] = useState('');
  const [newAiMessage, setNewAiMessage] = useState({
    text: '',
    source: [],
    user: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    messages.setData((prevMessages) => [...prevMessages, userMessage]);
    const aiMessage = { text: '...', source: [], user: false };
    messages.setData((prevMessages) => [...prevMessages, aiMessage]);

    // QA 요청
    getFileQNA(fileInfo.data.file_id, input)
      .then((getData) => {
        // console.log(getData);
        // console.log(getData.result);
        const newData = {
          text: getData.result,
          source: getData.source,
          user: false,
        };

        setNewAiMessage(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(messages.data);
    if (newAiMessage.text !== '') {
      const aiMessage = {
        text: newAiMessage.text,
        source: newAiMessage.source,
        user: false,
      };
      messages.setData((prevMessages) => [
        ...prevMessages.slice(0, -1),
        aiMessage,
      ]);
      console.log(messages.data);
      setInput('');
    } else if (messages.data.length === 0) {
      const aiMessage = {
        text: '이 문서에 대한 질문을 해주세요.',
        source: [],
        user: false,
      };
      messages.setData((prevMessages) => [...prevMessages, aiMessage]);
      console.log(messages.data);
    }
  }, [newAiMessage]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.data.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.user ? 'user-message' : 'ai-message'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Chatbot;
