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

import SweetPagination from 'sweetpagination';

const SummaryPopup = ({ fileInfo, pageInfo }) => {
  const [groupPageList, setGroupPageList] = useState({});
  const [pageNumList, setPageNumList] = useState([]);
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  function groupPage() {
    const result = {};
    for (const item of pageInfo.data) {
      result[item.page_num] = item.summary;
    }
    setGroupPageList(result);
    setPageNumList(Object.keys(result));
  }
  useEffect(() => {
    groupPage();
  }, [pageInfo]);

  // console.log(groupPageList);
  // console.log(groupPageList);
  return (
    <Fragment>
      <Row>
        <Col>
          <div>문서(페이지) 요약 내용을 제공합니다.</div>
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
                    {fileInfo.data.summary}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Page" className="pb-4 p-0 ps-0 pe-0">
                    <div>
                      {currentPageData.map((item, index) => (
                        <div key={index}>
                          <h2>Page # {parseInt(item) + 1}</h2>
                          <h3>Item # {groupPageList[item]}</h3>
                        </div>
                      ))}
                      <SweetPagination
                        currentPageData={setCurrentPageData}
                        dataPerPage={1}
                        getData={pageNumList}
                        navigation={true}
                        getStyle={'style-1'}
                      />
                    </div>
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

// const A = [
//   {
//     file_id: 81,
//     page_num: 0,
//     start_index: 0,
//     summary: '0 page : summary',
//   },
//   {
//     file_id: 81,
//     page_num: 1,
//     start_index: 0,
//     summary: '1 page : summary',
//   },
//   {
//     file_id: 81,
//     page_num: 1,
//     start_index: 10,
//     summary: '1 page : summary',
//   },
//   {
//     file_id: 81,
//     page_num: 2,
//     start_index: 0,
//     summary: '2 page : summary',
//   },
// ];

// const B = [
//   {
//     0: '0 page : summary',
//     1: '0 page : summary',
//     2: '0 page : summary',
//   },
// ];
