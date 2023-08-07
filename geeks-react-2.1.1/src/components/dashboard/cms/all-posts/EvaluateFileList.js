// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluateFileList = () => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // competitionInfo
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

    // fileList
    const data3 = {
      postId: post_id,
    };

    apiUtils
      .GetFileInfoByPostId(data3)
      .then((response) => {
        const getFileList = response.data;
        setFileList(getFileList);
        if (getFileList.length === 0) {
          const getFileList = [
            {
              file_id: 'file_id_1',
              user_id: 'user_id_1',
              path: 'path_1',
              file_title: 'file_title_1',
              file_extension: 'file_extension_1',
              upload_datetime: 'upload_datetime_1',
              post_info_id: 'post_info_id_1',
            },
            {
              file_id: 'file_id_2',
              user_id: 'user_id_2',
              path: 'path_2',
              file_title: 'file_title_2',
              file_extension: 'file_extension_2',
              upload_datetime: 'upload_datetime_2',
              post_info_id: 'post_info_id_2',
            },
            {
              file_id: 'file_id_3',
              user_id: 'user_id_3',
              path: 'path_3',
              file_title: 'file_title_3',
              file_extension: 'file_extension_3',
              upload_datetime: 'upload_datetime_3',
              post_info_id: 'post_info_id_3',
            },
          ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
          setFileList(getFileList);
        }
      })
      .catch((error) => {
        // alert(error.response.data);
        const getFileList = [
          {
            file_id: 'file_id_1',
            user_id: 'user_id_1',
            path: 'path_1',
            file_title: 'file_title_1',
            file_extension: 'file_extension_1',
            upload_datetime: 'upload_datetime_1',
            post_info_id: 'post_info_id_1',
          },
          {
            file_id: 'file_id_2',
            user_id: 'user_id_2',
            path: 'path_2',
            file_title: 'file_title_2',
            file_extension: 'file_extension_2',
            upload_datetime: 'upload_datetime_2',
            post_info_id: 'post_info_id_2',
          },
          {
            file_id: 'file_id_3',
            user_id: 'user_id_3',
            path: 'path_3',
            file_title: 'file_title_3',
            file_extension: 'file_extension_3',
            upload_datetime: 'upload_datetime_3',
            post_info_id: 'post_info_id_3',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setFileList(getFileList);
        handleLogError(error);
      });
  }, [competition_id, post_id]);
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">파일 리스트</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  {competitionInfo.competition_name}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">평가</Breadcrumb.Item>
                <Breadcrumb.Item href="#">{postInfo.title}</Breadcrumb.Item>
                <Breadcrumb.Item active>파일 리스트</Breadcrumb.Item>
              </Breadcrumb>
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
                    <FilesTable table_data={fileList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="undone" className="pb-0">
                    <FilesTable table_data={allPublishedPosts} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="done" className="pb-4">
                    <FilesTable table_data={allScheduledPosts} />
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

export default EvaluateFileList;
