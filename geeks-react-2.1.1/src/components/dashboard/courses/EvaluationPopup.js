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
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluationPopup = () => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      <Row>
        <Col>
          <div>{'평가 페이지 '}</div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Tab.Container defaultActiveKey="File">
            <Card className="bg-transparent shadow-none ">
              <Card.Header className="border-0 p-0 bg-transparent">
                <Nav className="nav-lb-tab">
                  <Nav.Item className="ms-0">
                    <Nav.Link eventKey="File" className="mb-sm-3 mb-md-0">
                      {' '}
                      File
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Page" className="mb-sm-3 mb-md-0">
                      Page
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="File" className="pb-4 p-0 ps-0 pe-0">
                    File
                  </Tab.Pane>
                  <Tab.Pane eventKey="Page" className="pb-4 p-0 ps-0 pe-0">
                    Page
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Tab.Container>
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluationPopup;
