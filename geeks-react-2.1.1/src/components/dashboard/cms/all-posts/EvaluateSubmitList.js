// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import EvaluateSubmitTable from './EvaluateSubmitTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
import { loadCompetitionInfo, loadPostList } from 'components/utils/LoadData';

const EvaluateSubmitList = () => {
  // const Auth = useAuth();
  const { competition_id } = useParams();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // competitionInfo
    loadCompetitionInfo(competition_id).then((getData) => {
      setCompetitionInfo(getData);
    });

    // postList
    loadPostList(competition_id, 'SUBMIT').then((getData) => {
      setPostList(getData);
    });
  }, [competition_id]);

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">제출 게시물 리스트</h1>
              <Breadcrumb>
                <Breadcrumb.Item
                  href={`/detail/${competitionInfo.competition_info_id}/`}
                >
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item active>제출 게시물 리스트</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <EvaluateSubmitTable table_data={postList} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluateSubmitList;
