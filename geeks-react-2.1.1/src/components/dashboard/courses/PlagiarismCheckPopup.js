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

// import sub components
// import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';
import ListNav from 'components/dashboard/courses/contents/ListNav';

const PlagiarismCheckPopup = ({ data }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <div>
            {
              '제출물과 유사도가 높은 문서의 순위를 책정하여 정렬했습니다. 각 비교문서를 클릭하여 결과 보고서를 확인할 수 있습니다.'
            }
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="bg-transparent shadow-none ">
            <Card.Header className="border-0 p-0 bg-transparent"></Card.Header>
            <Card.Body className="p-0">
              <ListNav data={data} type={'page'} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PlagiarismCheckPopup;
