// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import JudgeTable from 'components/dashboard/cms/all-posts/JudgeTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
import {
  loadCompetitionInfo,
  loadJudgeList,
  loadPostInfo,
} from 'components/utils/LoadData';

const EvaluateJudgeList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);
  const [judgeList, setJudgeList] = useState([]);

  useEffect(() => {
    // competitionInfo
    loadCompetitionInfo(competition_id).then((getData) => {
      setCompetitionInfo(getData);
    });

    // postInfo
    loadPostInfo(post_id).then((getData) => {
      setPostInfo(getData);
    });

    // judgeList
    loadJudgeList(post_id).then((getData) => {
      setJudgeList(getData.judge_info_list);
    });
  }, [isLoggedIn]);

  console.log(judgeList);
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">심사위원 관리</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{postInfo.title}</Breadcrumb.Item>
                <Breadcrumb.Item active>심사위원 관리</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <JudgeTable table_data={judgeList} setJudgeList={setJudgeList} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluateJudgeList;
