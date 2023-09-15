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
import CreateReport from './CreateReport';

const PageText = ({ info, data }) => {
  // console.log(competition_id);
  const [content, setContent] = useState('');
  const [pageInfo, setPageInfo] = useState({});

  function searchCompPage() {
    let foundContent = null;
    let foundItem = null;
    for (let item of data.compPageContent.data) {
      if (item.pageId === info.comp_page_id) {
        foundContent = item.pageContent;
        break;
      }
    }
    for (let item of data.compPageInfo.data) {
      if (item.page_id === info.comp_page_id) {
        foundItem = item;
        break;
      }
    }

    if (foundContent) {
      // console.log(foundContent);
      setContent(foundContent);
    } else {
      setContent('실패');
    }
    if (foundItem) {
      // console.log(foundItem);
      setPageInfo(foundItem);
    } else {
      setPageInfo({});
    }
  }
  useEffect(() => {
    searchCompPage();
  }, [info]);
  console.log(content);
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
            <Tab.Pane
              eventKey="1"
              className="pb-4 p-4 ps-0 pe-0"
              style={{ whiteSpace: 'pre-line' }}
            >
              {info.report === '' ? (
                <CreateReport
                  file_id={data.fileInfo.data.file_id}
                  page_id={info.page_id}
                  comp_page_id={info.comp_page_id}
                  data={data}
                />
              ) : (
                info.report
              )}
            </Tab.Pane>
            <Tab.Pane
              eventKey="2"
              className="pb-4 p-4 ps-0 pe-0"
              style={{ whiteSpace: 'pre-line' }}
            >
              {content === '' ? (
                <>
                  info.comp_page_id: {info.comp_page_id}
                  <br />
                  pageInfo.comp_file_id: {pageInfo.comp_file_id}
                </>
              ) : (
                content
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="3" className="pb-4 p-4 ps-0 pe-0">
              info.page_id: {info.page_id}
              <br />
              info.score: {info.score}
            </Tab.Pane>
            <Tab.Pane eventKey="4" className="pb-4 p-4 ps-0 pe-0">
              info.rank: {info.rank}
              <br />
              data.fileInfo.data.file_id: {data.fileInfo.data.file_id}
              <br />
              info.page_id: {info.page_id}
              <br />
              info.comp_file_id: {pageInfo.comp_file_id}
              {/* {info.comp_page_id} */}
              <br />
              info.comp_page_id: {info.comp_page_id}
              <br />
              info.score: {info.score}
              <br />
              content: {content}
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

export default PageText;
