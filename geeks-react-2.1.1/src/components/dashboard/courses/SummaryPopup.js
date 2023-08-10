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

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';
import FileListByFile from 'components/dashboard/courses/contents/FileListByFile';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const SummaryPopup = ({ data }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);
  console.log(data.file_info);
  console.log(data.page_info);
  return (
    <Fragment>
      <Row>
        <Col>
          <div>
            {
              '문서(페이지) 내용과 유사한 문서(페이지)가 있는지 확인하고, 어떠한 부분에서 유사하다고 판단했는지 알려드립니다. '
            }
          </div>
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
                    data.file_info.summary: {data.file_info.summary}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Page" className="pb-4 p-0 ps-0 pe-0">
                    data.page_info:{' '}
                    {data.page_info.map((page) => (
                      <div key={page.page_id}>
                        <div>page.page_id: {page.page_id}</div>
                        <div>page.summary: {page.summary}</div>
                      </div>
                    ))}
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

export default SummaryPopup;
