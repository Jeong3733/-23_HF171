// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
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

const ManageSubmits = () => {
  const { isLoggedIn, Auth, competitionInfo } = useOutletContext();
  const { competition_id } = useParams();
  // alert(competition_id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // postList
    const data4 = {
      competitionId: competition_id,
      boardType: 'SUBMIT',
    };
    apiUtils
      .GetPostInfoByBoardType(data4)
      .then((response) => {
        const getPostList = response.data;
        setPostList(getPostList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getPostList = [
          {
            post_id: '1',
            title: '제출 1',
            user_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
          {
            post_id: '2',
            title: '제출 2',
            user_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setPostList(getPostList);
        handleLogError(error);
      });
  }, [competition_id]);

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
            <div>
              <Button variant="primary" onClick={handleShow}>
                게시물 추가
              </Button>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>게시물 추가 페이지</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddPostForm Auth={Auth} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                  {/*  Action Buttons  */}
                  {/* <Button variant="primary" onClick={handleClose}>
                    Add New Category
                  </Button> */}
                  {/* <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                  </Button> */}
                </Modal.Footer>
              </Modal>
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
                  <Nav.Item>
                    <Nav.Link eventKey="undone" className="mb-sm-3 mb-md-0">
                      미완료
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="done" className="mb-sm-3 mb-md-0">
                      완료
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="all" className="pb-0">
                    <ManageSubmitTable table_data={postList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="undone" className="pb-0">
                    <ManageSubmitTable table_data={allPublishedPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="done" className="pb-4">
                    <ManageSubmitTable table_data={allScheduledPosts} />
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
