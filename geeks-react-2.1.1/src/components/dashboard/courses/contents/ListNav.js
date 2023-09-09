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
import Sweetpagination from 'sweetpagination';

const ListNav = ({ data, type }) => {
  // if (type === 'file') {
  //   const resData = data.fileResultInfo;
  // } else {
  //   const resData = data.pageResultInfo;
  // }

  const pageResultInfo = data.pageResultInfo.data;
  const fileResultInfo = data.fileResultInfo.data;
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
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
    if (type === 'file') {
      setGetData(fileResultInfo);
    } else {
      rankByScore();
    }
  }, [data]);

  return (
    <Container>
      <Tab.Container defaultActiveKey="1">
        <Row className=" pt-4">
          <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
            <Nav className="nav-lb-tab flex-column">
              {currentPageData.map((item, index) => {
                if (item !== undefined) {
                  const compFile = searchCompFile(item.comp_page_id);
                  return (
                    <Nav.Item key={index} className="ms-0">
                      <Nav.Link
                        eventKey={index}
                        className="p-1 mb-sm-0 mb-md-0"
                      >
                        <Row>
                          <Col># {item.rank}</Col>
                          {/* <Col>{item.page_id}</Col> */}
                          <Col>{compFile.file_title}</Col>
                          <Col>{compFile.competition_name}</Col>
                        </Row>
                      </Nav.Link>
                    </Nav.Item>
                  );
                }
              })}
              <Sweetpagination
                currentPageData={setCurrentPageData}
                dataPerPage={10}
                getData={getData}
                navigation={true}
                getStyle={'style-1'}
              />
            </Nav>
          </Col>

          <Col xl={{ span: 8, offset: 0 }} lg={8} xs={12}>
            <Tab.Content>
              {currentPageData.map((item, index) =>
                item !== undefined ? (
                  <Tab.Pane
                    key={index}
                    eventKey={index}
                    className="pb-4 pt-1 ps-0 pe-0"
                  >
                    {type === 'file' ? (
                      <FileText info={item} data={data} />
                    ) : (
                      <PageText info={item} data={data} />
                    )}
                  </Tab.Pane>
                ) : null,
              )}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ListNav;
