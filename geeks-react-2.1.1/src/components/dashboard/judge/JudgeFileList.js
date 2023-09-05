// import node module libraries
import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image, Tab, Nav } from 'react-bootstrap';

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg';

// impoort Auth module
import { useCookies } from 'react-cookie';
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { parseJwt } from 'components/utils/JwtUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { isNotEmptyObj } from 'helper/utils';
import FilesTable from '../cms/all-posts/FilesTable';
import { allPublishedPosts } from 'data/courses/AllPostsData';

const JudgeFileList = () => {
  const { judge_id, post_id } = useParams();
  const navigate = useNavigate();
  // console.log(competition_id);

  //
  const [fileList, setFileList] = useState([]);

  const getFileList = () => {
    // fileList
    // alert('파일 리스트를 불러옵니다.');
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
  };

  useEffect(() => {
    // 접근 유무 확인
    const formData = { judgeId: judge_id, postId: post_id };
    apiUtils
      .GetCheckJudgeByPostId(formData)
      .then((response) => {
        const check = response.data.check;
        if (check) {
          getFileList();
        } else {
          alert('심사위원 인증을 실패했습니다.');
          navigate(`/judge/sign-in/`);
        }
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);

        // case 1: 심사위원 인증 실패
        alert('API 호출 실패했습니다.');
        navigate(`/judge/sign-in/`);

        // case 2: 더미데이터를 사용하는 경우
        // alert('더미데이터를 사용하여 심사위원 인증을 합니다.');
        // getFileList();
      });
  }, []);

  console.log(fileList);
  return (
    <Fragment>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
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
                    <FilesTable table_data={fileList} evaluate={true} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="undone" className="pb-0">
                    <FilesTable
                      table_data={allPublishedPosts}
                      evaluate={true}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="done" className="pb-4">
                    <FilesTable
                      table_data={allPublishedPosts}
                      evaluate={true}
                    />
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

export default JudgeFileList;
