// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const ManageMembers = () => {
  const { competition_id } = useParams();
  console.log(competition_id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userInfoList, setUserInfoList] = useState({});

  useEffect(() => {
    // postList
    const data10 = {
      competitionId: competition_id,
    };

    apiUtils
      .GetUseInforByCompetitionId(data10)
      .then((response) => {
        console.log(response.data);
        const getUserInfoList = response.data;
        setUserInfoList(getUserInfoList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getUserInfoList = [
          {
            competition_id: 1,
            team_id: 1,
            user_id: 1,
            role_type: 'Creator',
            email: '',
            social: 1,
            user_name: 1,
            password: 1,
            role: 1,
          },
          {
            competition_id: 1,
            team_id: 1,
            user_id: 1,
            role_type: 'Creator',
            email: '',
            social: 1,
            user_name: 1,
            password: 1,
            role: 1,
          },
        ];
        setUserInfoList(getUserInfoList);
        handleLogError(error);
      });
  }, [competition_id]);
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
                  <Breadcrumb.Item href="#">공모전 이름</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">관리</Breadcrumb.Item>
                  <Breadcrumb.Item active>인원 관리</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  Add New Category
                </Button>
                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Create New Category</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddNewCategoryPopup />
                  </Modal.Body>
                  <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                    {/*  Action Buttons  */}
                    <Button variant="primary" onClick={handleClose}>
                      Add New Category
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
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
                        심사위원
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3" className="mb-sm-3 mb-md-0">
                        주최자
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="All" className="pb-0">
                      <ManageMebersTable table_data={userInfoList} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1" className="pb-0">
                      <ManageMebersTable table_data={userInfoList} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2" className="pb-4">
                      <ManageMebersTable table_data={userInfoList} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="3" className="pb-4">
                      <ManageMebersTable table_data={userInfoList} />
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
