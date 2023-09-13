// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Nav,
  Button,
  Modal,
  Tab,
  Breadcrumb,
} from 'react-bootstrap';

// import sub components
import PostsTable from './PostsTable';
import AddNewCategoryPopup from './AddNewCategoryPopup';
import ManageMebersTable from 'components/dashboard/cms/all-posts/ManageMebersTable';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { isNotEmptyObj } from 'helper/utils';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
import { loadUserList, validateCreator } from 'components/utils/LoadData';

const ManageMembers = () => {
  const { isLoggedIn, Auth, competitionInfo } = useOutletContext();
  const { competition_id } = useParams();
  console.log(competition_id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfoList, setUserInfoList] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const user = Auth.getUser();
    validateCreator(user, competition_id).then((getData) => {
      if (getData === 'yes') {
        // userinfo list
        loadUserList(competition_id).then((getData) => {
          setUserInfoList(getData);
        });
      } else if (getData === 'no') {
        alert('권한이 없습니다.');
        navigate('/');
      } else {
        alert('로그인하고 오세요!');
        navigate('/authentication/sign-in/');
      }
    });
  }, []);

  console.log(userInfoList);
  if (isNotEmptyObj(userInfoList)) {
    return (
      <Fragment>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">인원 관리</h1>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href={`/detail/${competitionInfo.competition_info_id}/`}
                  >
                    {competitionInfo.competition_name}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>관리</Breadcrumb.Item>
                  <Breadcrumb.Item active>인원 관리</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Tab.Container defaultActiveKey="All">
              <Card>
                <Card.Header className="border-bottom-0 p-0 bg-white">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="All" className="mb-sm-3 mb-md-0">
                        전체
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1" className="mb-sm-3 mb-md-0">
                        일반인
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2" className="mb-sm-3 mb-md-0">
                        주최자
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="All" className="pb-0">
                      <ManageMebersTable
                        table_data={userInfoList}
                        role={'ALL'}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1" className="pb-0">
                      <ManageMebersTable
                        table_data={userInfoList}
                        role={'USER'}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2" className="pb-4">
                      <ManageMebersTable
                        table_data={userInfoList}
                        role={'CREATOR'}
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
  }
};

export default ManageMembers;
