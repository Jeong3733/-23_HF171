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
} from 'react-bootstrap';

// import data files
import JudgeEvaluationTable from './JudgeEvaluationTable';

const EvaluationPopup = ({ data }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      <Row>
        <Col>
          <div>{'평가 페이지'}</div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <JudgeEvaluationTable table_data={data} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluationPopup;
