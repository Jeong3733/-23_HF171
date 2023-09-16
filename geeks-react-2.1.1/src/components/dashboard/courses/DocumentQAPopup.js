// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import sub components
import Chat from 'components/dashboard/chat/Chat';
import Chatbot from './Chatbot';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const DocumentQAPopup = ({ fileInfo, messages }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Card className={`card-hover shadow-none`}>
      <Card.Header>
        해당 문서에 정보를 찾기 위한 질문을 하면, 문서 내에 있는 얻을 수 있는
        정보 안에서 답변을 드립니다.
      </Card.Header>
      <Card.Body>
        <Chatbot fileInfo={fileInfo} messages={messages} />
      </Card.Body>
    </Card>
  );
};

export default DocumentQAPopup;
