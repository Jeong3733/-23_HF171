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

const EvaluateItemList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);
  const [judgeList, setJudgeList] = useState([]);

  useEffect(() => {
    // competitionInfo
    console.log('competitionInfo');
    const data1 = {
      competitionId: competition_id,
    };
    apiUtils
      .GetCompetitionInfoByCompetitionId(data1)
      .then((response) => {
        const getCompetitionInfo = response.data;
        setCompetitionInfo(getCompetitionInfo);
        // console.log(competitionInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompetitionInfo = {
          competition_info_id: 1,
          competition_name: 'ICT 택관컴퍼니',
          competition_image: 'a941fab3-812a-4a6a-a008-28c70b01e52f',
          competition_readme: '<p>ICT 택관컴퍼니 입니다~</p>',
          competition_description: 'ICT 택관컴퍼니',
          competition_state: null,
          competition_start_date: '2023-08-02T00:00',
          competition_end_date: '2023-08-25T00:00',
          competition_type_list: [
            {
              competition_info_id: 1,
              type: '개발',
            },
            {
              competition_info_id: 1,
              type: '교육',
            },
            {
              competition_info_id: 1,
              type: '엔터테인먼트',
            },
          ],
          competition_docs_list: [
            {
              competition_info_id: 1,
              docs_path: '447d2d03-8d89-4b68-bcf3-20d9cdc864f8',
              file_title: 'competitionDocs',
            },
          ],
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompetitionInfo(getCompetitionInfo);
        handleLogError(error);
      });

    // postInfo
    const data2 = {
      postId: post_id,
    };
    apiUtils
      .GetPostInfoByPostId(data2)
      .then((response) => {
        const getPostInfo = response.data;
        setPostInfo(getPostInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getPostInfo = {
          post_info_id: 1,
          user_info_id: 'www',
          competition_info_id: 1,
          board_type: 'NOTICE',
          title: 'notice1',
          contents: '공지에요',
          created_date: '2023-08-04T20:18:21',
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setPostInfo(getPostInfo);
        handleLogError(error);
      });

    // judgeList
    const formDataToSend = { competitionId: competition_id };
    apiUtils
      .GetJudgeByCompetitionId(formDataToSend)
      .then((response) => {
        const getJudgeList = response.data;
        setJudgeList(getJudgeList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getJudgeList = [
          { competition_id: 1, post_id: 1, judge_id: 'str' },
          { competition_id: 1, post_id: 1, judge_id: 'str' },
          { competition_id: 1, post_id: 2, judge_id: 'str' },
          { competition_id: 1, post_id: 2, judge_id: 'str' },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setJudgeList(getJudgeList);
        handleLogError(error);
        console.log(judgeList);
      });
  }, [isLoggedIn]);

  console.log(judgeList);
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">평가 항목 관리</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{postInfo.title}</Breadcrumb.Item>
                <Breadcrumb.Item active>평가 항목 관리</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <JudgeTable table_data={judgeList} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluateItemList;
