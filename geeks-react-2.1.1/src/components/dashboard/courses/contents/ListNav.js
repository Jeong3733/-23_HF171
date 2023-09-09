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
import FileText from 'components/dashboard/courses/contents/FileText';
import PageText from 'components/dashboard/courses/contents/PageText';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const ListNav = ({ data, type }) => {
  // if (type === 'file') {
  //   const resData = data.fileResultInfo;
  // } else {
  //   const resData = data.pageResultInfo;
  // }
  console.log(data.pageResultInfo);
  return (
    <Container>
      <Tab.Container defaultActiveKey="1">
        <Row className=" pt-4">
          <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
            <Nav className="nav-lb-tab flex-column">
              {type === 'file'
                ? data.fileResultInfo.data.map((result, index) => (
                    <Nav.Item key={index} className="ms-0">
                      <Nav.Link
                        eventKey={index}
                        className="p-1 mb-sm-0 mb-md-0"
                      >
                        <Row>
                          <Col>{index}</Col>
                          <Col>{result.score}</Col>
                          <Col>{result.comp_file_id}</Col>
                          <Col>{result.comp_file_id}</Col>
                        </Row>
                      </Nav.Link>
                    </Nav.Item>
                  ))
                : data.pageResultInfo.data.map((result, index) => (
                    <Nav.Item key={index} className="ms-0">
                      <Nav.Link
                        eventKey={index}
                        className="p-1 mb-sm-0 mb-md-0"
                      >
                        <Row>
                          <Col>{index}</Col>
                          <Col>{result.score}</Col>
                          <Col>{result.comp_page_id}</Col>
                          <Col>{result.comp_page_id}</Col>
                        </Row>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
            </Nav>
          </Col>

          <Col xl={{ span: 8, offset: 0 }} lg={8} xs={12}>
            <Tab.Content>
              {type === 'file'
                ? data.fileResultInfo.data.map((result, index) => (
                    <Tab.Pane
                      key={index}
                      eventKey={index}
                      className="pb-4 pt-1 ps-0 pe-0"
                    >
                      <FileText data={result} />
                    </Tab.Pane>
                  ))
                : data.pageResultInfo.data.map((result, index) => (
                    <Tab.Pane
                      key={index}
                      eventKey={index}
                      className="pb-4 pt-1 ps-0 pe-0"
                    >
                      <PageText data={result} />
                    </Tab.Pane>
                  ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ListNav;
