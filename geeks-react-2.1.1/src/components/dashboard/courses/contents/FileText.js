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
// import ResultFileTable from 'components/dashboard/courses/contents/ResultFileTable';
import ResultPageTable from 'components/dashboard/courses/contents/ResultPageTable';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const FileText = ({ data }) => {
  return (
    <Tab.Container defaultActiveKey="1">
      <Card className="bg-transparent shadow-none ">
        <Card.Header className="border-0 p-0 bg-transparent">
          <Nav className="nav-lb-tab">
            <Nav.Item className="ms-0">
              <Nav.Link eventKey="1" className="pt-0 mb-sm-3 mb-md-0">
                {' '}
                분석 결과
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="pt-0 mb-sm-3 mb-md-0">
                {' '}
                비교 문서 근거
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" className="pt-0 mb-sm-3 mb-md-0">
                {' '}
                검사 문서
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" className="pt-0 mb-sm-3 mb-md-0">
                {' '}
                Info
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="p-0">
          <Tab.Content>
            <Tab.Pane eventKey="1" className="pb-4 p-4 ps-0 pe-0">
              data.file_id: {data.file_id}
            </Tab.Pane>
            <Tab.Pane eventKey="2" className="pb-4 p-4 ps-0 pe-0">
              data.comp_file_id: {data.comp_file_id}
            </Tab.Pane>
            <Tab.Pane eventKey="3" className="pb-4 p-4 ps-0 pe-0">
              data.score: {data.score}
            </Tab.Pane>
            <Tab.Pane eventKey="4" className="pb-4 p-4 ps-0 pe-0">
              data.report: {data.report}
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

export default FileText;
