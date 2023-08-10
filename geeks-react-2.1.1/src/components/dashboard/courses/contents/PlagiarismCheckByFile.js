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
import ResultTable from 'components/dashboard/courses/contents/ResultTable';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const PlagiarismCheckByFile = () => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Row>
      <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
        <ResultTable />
      </Col>
      <Col xl={{ span: 8, offset: 0 }} lg={8} xs={12}>
        <Tab.Container defaultActiveKey="1">
          <Card className="bg-transparent shadow-none ">
            <Card.Header className="border-0 p-0 bg-transparent">
              <Nav className="nav-lb-tab">
                <Nav.Item className="ms-0">
                  <Nav.Link eventKey="1" className="mb-sm-3 mb-md-0">
                    {' '}
                    분석 결과
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" className="mb-sm-3 mb-md-0">
                    {' '}
                    비교 문서 근거
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3" className="mb-sm-3 mb-md-0">
                    {' '}
                    검사 문서
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4" className="mb-sm-3 mb-md-0">
                    {' '}
                    Info
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="1" className="pb-4 p-4 ps-0 pe-0">
                  분석 결과
                </Tab.Pane>
                <Tab.Pane eventKey="2" className="pb-4 p-4 ps-0 pe-0">
                  비교 문서 근거
                </Tab.Pane>
                <Tab.Pane eventKey="3" className="pb-4 p-4 ps-0 pe-0">
                  검사 문서
                </Tab.Pane>
                <Tab.Pane eventKey="4" className="pb-4 p-4 ps-0 pe-0">
                  Info
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Col>
    </Row>
  );
};

export default PlagiarismCheckByFile;
