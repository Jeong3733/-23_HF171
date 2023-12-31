// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import {
  Link,
  useParams,
  useOutletContext,
  useNavigate,
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
import AddPostForm from './AddPostForm';
import ManageJudgeForm from './ManageJudgeForm';
import ManageSubmitTable from 'components/dashboard/cms/all-posts/ManageSubmitTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

// impoort Auth module
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { loadPostList, validateCreator } from 'components/utils/LoadData';

const ManageSubmits = () => {
  const { isLoggedIn, Auth, competitionInfo } = useOutletContext();
  const { competition_id } = useParams();
  // alert(competition_id);
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const user = Auth.getUser();
    validateCreator(user, competition_id).then((getData) => {
      // console.log(getData);
      if (getData === 'yes') {
        loadPostList(competition_id, 'SUBMIT').then((getData) => {
          setPostList(getData);
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

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">제출 게시판 관리</h1>
              <Breadcrumb>
                <Breadcrumb.Item
                  href={`/detail/${competitionInfo.competition_info_id}/`}
                >
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item>관리</Breadcrumb.Item>
                <Breadcrumb.Item active>제출 게시판 관리</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="d-md-flex align-items-center justify-content-between">
              <div>
                <Button variant="primary" onClick={handleShowAdd}>
                  게시물 추가
                </Button>
                <Modal show={showAdd} onHide={handleCloseAdd} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>게시물 추가 페이지</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddPostForm Auth={Auth} />
                  </Modal.Body>
                  <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                    <Button
                      variant="outline-secondary"
                      onClick={handleCloseAdd}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
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
                    <ManageSubmitTable table_data={postList} />
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

export default ManageSubmits;
