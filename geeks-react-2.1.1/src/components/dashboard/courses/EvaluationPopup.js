// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  Nav,
  Tab,
  Breadcrumb,
  ListGroup,
} from 'react-bootstrap';

// import data files
import JudgeEvaluationTable from './JudgeEvaluationTable';

const EvaluationPopup = ({ data }) => {
  return (
    <Card className={`card-hover shadow-none`}>
      <Card.Header>
        <div>
          참여 인원에게 점수 및 코멘트를 남겨주세요. (입력 및 수정 후 업데이트
          버튼을 눌러주세요.)
        </div>
      </Card.Header>

      <Card.Body>
        <JudgeEvaluationTable table_data={data} />
      </Card.Body>
    </Card>
  );
};

export default EvaluationPopup;
