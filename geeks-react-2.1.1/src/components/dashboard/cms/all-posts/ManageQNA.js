// import node module libraries
import React, { Fragment, useState } from 'react';
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

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const ManageQNA = () => {
  const { competition_id } = useParams();
  // alert(competition_id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">QNA 관리</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">공모전 이름</Breadcrumb.Item>
                <Breadcrumb.Item href="#">관리</Breadcrumb.Item>
                <Breadcrumb.Item active>QNA 관리</Breadcrumb.Item>
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
          <Tab.Container defaultActiveKey="all">
            <Card>
              <Card.Header className="border-bottom-0 p-0 bg-white">
                <Nav className="nav-lb-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="published" className="mb-sm-3 mb-md-0">
                      Published
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="scheduled" className="mb-sm-3 mb-md-0">
                      Scheduled
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="draft" className="mb-sm-3 mb-md-0">
                      Draft
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="deleted" className="mb-sm-3 mb-md-0">
                      Deleted
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="all" className="pb-0">
                    <PostsTable table_data={allposts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="published" className="pb-0">
                    <PostsTable table_data={allPublishedPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="scheduled" className="pb-4">
                    <PostsTable table_data={allScheduledPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="draft" className="pb-4">
                    <PostsTable table_data={allDraftPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="deleted" className="pb-4">
                    <PostsTable table_data={allDeletedPosts} />
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

export default ManageQNA;
