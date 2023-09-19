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
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';

const ListNav = ({ data, type }) => {
  // if (type === 'file') {
  //   const resData = data.fileResultInfo;
  // } else {
  //   const resData = data.pageResultInfo;
  // }

  const pageResultInfo = data.pageResultInfo.data;
  const [getData, setGetData] = useState([]);

  function rankByScore() {
    // score 기준으로 오름차순 정렬
    const data = pageResultInfo;
    data.sort((a, b) => a.score - b.score);

    // rank를 1부터 부여
    for (let i = 0; i < data.length; i++) {
      data[i].rank = i + 1;
    }
    setGetData(data);
  }

  function searchCompFile(comp_page_id) {
    for (let item of data.compPageInfo.data) {
      if (item.page_id === comp_page_id) {
        return data.compFileInfo.data[item.comp_file_id];
      }
    }
    return '실패';
  }

  useEffect(() => {
    rankByScore();
  }, [data]);

  // paging setup start
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 5;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(getData.length / RecordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayRecords = getData
    .slice(pagesVisited, pagesVisited + RecordsPerPage)
    .map((item, index) => {
      if (item !== undefined) {
        const compFile = searchCompFile(item.comp_page_id);
        return (
          <Nav.Item key={index} className="ms-0">
            <Nav.Link eventKey={index} className="p-1 mb-sm-0 mb-md-0">
              <div className="d-flex flex-column justify-content-center align-items-start gap-1">
                <div className="d-flex justify-content-start align-items-center gap-1">
                  <div># {item.rank}</div>
                  <div>(score: {item.score.toFixed(3)})</div>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-1">
                  <div>비교 문서: {compFile.file_title}</div>
                  <div>/ {compFile.competition_name}</div>
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
        );
      }
    });

  const displayPages = pageResultInfo
    .slice(pagesVisited, pagesVisited + RecordsPerPage)
    .map((item, index) =>
      item !== undefined ? (
        <Tab.Pane key={index} eventKey={index} className="pb-4 pt-1 ps-0 pe-0">
          {type === 'file' ? (
            <FileText info={item} data={data} />
          ) : (
            <PageText info={item} data={data} />
          )}
        </Tab.Pane>
      ) : null,
    );

  // console.log(changePage);
  return (
    <Container>
      <Tab.Container defaultActiveKey="1">
        <Row className=" pt-4">
          <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
            <Nav className="nav-lb-tab flex-column pb-4 gap-3">
              {/* <div className="ms-0">
                <div className="p-1 mb-sm-0 mb-md-0">
                  <Row>
                    # {'랭크'}
                    {'파일명'}
                    {'공모전명'}
                  </Row>
                </div>
              </div> */}
              {displayRecords.length > 0 ? (
                displayRecords
              ) : (
                <div>No matching records found.</div>
              )}
            </Nav>
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
          </Col>
          <Col xl={{ span: 8, offset: 0 }} lg={8} xs={12}>
            <Tab.Content>
              {displayPages.length > 0 ? (
                displayPages
              ) : (
                <div>No matching Pages found.</div>
              )}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ListNav;
