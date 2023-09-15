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
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      <ListGroup>
        <ListGroup.Item>
          참여 인원에게 점수 및 코멘트를 남겨주세요. (입력 및 수정 후 업데이트
          버튼을 눌러주세요.)
        </ListGroup.Item>
        <ListGroup.Item>
          <JudgeEvaluationTable table_data={data} />
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default EvaluationPopup;
