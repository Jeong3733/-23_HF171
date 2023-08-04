// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import SubmitTable from './SubmitTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluateSubmitList = () => {
  const { competition_id } = useParams();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // competitionInfo
    const data1 = {
      competitionId: competition_id,
    };
    apiUtils
      .GetCompetitionInfoByCompetitionId(data1)
      .then((response) => {
        const getCompetitionInfo = response.data;
        setCompetitionInfo(getCompetitionInfo[0]);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompetitionInfo = [
          {
            competition_id: 'competition_id',
            competition_name: 'competition_name',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompetitionInfo(getCompetitionInfo[0]);
        handleLogError(error);
      });

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
              <h1 className="mb-1 h2 fw-bold">Submit 리스트</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item active>Submit 리스트</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <Link to="/cms/add-new-post" className="btn btn-primary">
                New Post
              </Link>
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
                    <SubmitTable table_data={postList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="undone" className="pb-0">
                    <SubmitTable table_data={allPublishedPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="done" className="pb-4">
                    <SubmitTable table_data={allScheduledPosts} />
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

export default EvaluateSubmitList;
