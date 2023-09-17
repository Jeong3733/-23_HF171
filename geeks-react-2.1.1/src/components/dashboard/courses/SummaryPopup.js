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
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';

const SummaryPopup = ({ fileInfo, pageInfo }) => {
  const [groupPageList, setGroupPageList] = useState({});
  const [pageNumList, setPageNumList] = useState([]);
  // const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  function groupPage() {
    const result = {};
    for (const item of pageInfo) {
      result[item.page_num] = item.summary;
    }
    setGroupPageList(result);
    setPageNumList(Object.keys(result));
  }
  useEffect(() => {
    groupPage();
  }, [pageInfo]);

  // paging setup start
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 1;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(pageNumList.length / RecordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayRecords = pageNumList
    .slice(pagesVisited, pagesVisited + RecordsPerPage)
    .map((item, index) => (
      <div key={index} className="pb-3">
        <h2>
          # {parseInt(item) + 1} Page ({parseInt(item) + 1}/{pageNumList.length}
          )
        </h2>
        <div>Item # {groupPageList[item]}</div>
      </div>
    ));
  return (
    <Card className={`card-hover shadow-none`}>
      <Card.Header>
        <div>문서(페이지) 요약 내용을 제공합니다.</div>
      </Card.Header>
      <Card.Body>
        <Tab.Container defaultActiveKey="File">
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
          <Tab.Content className="pt-4">
            <Tab.Pane eventKey="File" className="pb-4 p-0 ps-0 pe-0">
              {fileInfo.summary}
            </Tab.Pane>
            <Tab.Pane eventKey="Page" className="pb-4 p-0 ps-0 pe-0">
              {displayRecords.length > 0 ? (
                displayRecords
              ) : (
                <div>No matching records found.</div>
              )}
              <ReactPaginate
                previousLabel={<ChevronLeft size="14px" />}
                nextLabel={<ChevronRight size="14px" />}
                pageCount={pageCount}
                onPageChange={changePage}
                marginPagesDisplayed={0}
                containerClassName={'justify-content-center mb-0 pagination'}
                previousLinkClassName={'page-link mx-1 rounded'}
                nextLinkClassName={'page-link mx-1 rounded'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link mx-1 rounded'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'active'}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Card.Body>
    </Card>
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
