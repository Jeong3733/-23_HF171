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
import {
  checkJudgeByPostId,
  getUserInfoList,
  loadFileList,
} from 'components/utils/LoadData';

const JudgeFileList = () => {
  const { judge_id, post_id } = useParams();
  const navigate = useNavigate();
  // console.log(competition_id);

  //
  const [fileList, setFileList] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    // 접근 유무 확인
    checkJudgeByPostId(judge_id, post_id).then((getData) => {
      const check = getData;
      if (check) {
        // fileList
        loadFileList(post_id).then((getData) => {
          setFileList(getData);
          // console.log(getData);
          getUserInfoList([
            ...new Set(getData.map((item) => item.user_info_id)),
          ]).then((getData) => {
            setUserInfoList(getData);
          });
        });
      } else {
        alert('심사위원 인증을 실패했습니다.');
        navigate(`/judge/sign-in/`);
      }
    });
  }, []);

  // console.log(fileList);
  console.log(userInfoList);
  if (userInfoList.length === 0) {
    return <Fragment></Fragment>;
  }
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
                    <FilesTable
                      table_data={fileList}
                      evaluate={true}
                      userInfoList={userInfoList}
                    />
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
