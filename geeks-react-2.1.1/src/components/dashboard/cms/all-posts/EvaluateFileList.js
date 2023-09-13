// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
import {
  getUserInfoList,
  loadCompetitionInfo,
  loadFileList,
  loadPostInfo,
} from 'components/utils/LoadData';

const EvaluateFileList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth, competitionInfo } = useOutletContext();
  // console.log(competition_id);
  const [postInfo, setPostInfo] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userInfoList, setUserInfoList] = useState({});

  useEffect(() => {
    // postInfo
    loadPostInfo(post_id).then((getData) => {
      setPostInfo(getData);
    });

    // fileList
    loadFileList(post_id).then((getData) => {
      setFileList(getData);
    });
    // setUserList([...new Set(fileList.map((item) => item.user_info_id))]);
    // // console.log('userList', userList);
    // if (userList.length !== 0) {
    //   getUserInfoList(userList).then((getData) => {
    //     setUserInfoList(getData);
    //   });
    // }
  }, []);

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">문서 리스트</h1>
              <Breadcrumb>
                <Breadcrumb.Item
                  href={`/detail/${competitionInfo.competition_info_id}/`}
                >
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{postInfo.title}</Breadcrumb.Item>
                <Breadcrumb.Item active>문서 리스트</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Tab.Container defaultActiveKey="all">
            <Card>
              <Card.Header className="border-bottom-0 p-0 bg-white">
                <Nav className="nav-lb-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                      전체
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="all" className="pb-0">
                    <FilesTable
                      table_data={fileList}
                      evaluate={false}
                      // userInfoList={userInfoList}
                    />
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

export default EvaluateFileList;
