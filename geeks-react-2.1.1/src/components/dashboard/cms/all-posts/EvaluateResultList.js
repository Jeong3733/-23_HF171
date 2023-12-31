// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ResultTable from './ResultTable';

// import data files
import {
  loadCompetitionInfo,
  loadItemDetailList,
  loadItemList,
  loadJudgeList,
  loadPostInfo,
  loadResultList,
} from 'components/utils/LoadData';
import ResultByUser from './ResultByUser';

const EvaluateResultList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);

  const [userInfoList, setUserInfoList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [itemDetailList, setItemDetailList] = useState([]);
  const [judgeList, setJudgeList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    // competitionInfo
    loadCompetitionInfo(competition_id).then((getData) => {
      setCompetitionInfo(getData);
    });

    // postInfo
    loadPostInfo(post_id).then((getData) => {
      setPostInfo(getData);
    });

    loadJudgeList(post_id).then((getData) => {
      setJudgeList(getData.judge_info_list);
    });

    // resultList
    loadResultList(post_id).then((getData) => {
      setUserInfoList(getData.user_info_list);
      setItemList(getData.evaluation_info_list);
      setItemDetailList(getData.evaluation_detail_info_list);
      setResultList(getData.evaluation_score_list);
      setCommentList(getData.comment_list);
    });
  }, [isLoggedIn]);

  // console.log(userInfoList);
  // console.log(itemList);
  // console.log(itemDetailList);
  // console.log(judgeList);
  // console.log(resultList);
  // console.log(commentList);
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">평가 결과 조회</h1>
              <Breadcrumb>
                <Breadcrumb.Item
                  href={`/detail/${competitionInfo.competition_info_id}/`}
                >
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{postInfo.title}</Breadcrumb.Item>
                <Breadcrumb.Item active>평가 결과 조회</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <ResultByUser
            userInfoList={userInfoList}
            itemList={itemList}
            itemDetailList={itemDetailList}
            judgeList={judgeList}
            resultList={resultList}
            commentList={commentList}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluateResultList;
