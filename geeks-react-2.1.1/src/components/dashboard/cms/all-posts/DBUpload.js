// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Nav, Button, Form, Tab } from 'react-bootstrap';

// import sub components
import PostsTable from './PostsTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
// impoort Auth module
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import DBUploadFileTable from 'components/dashboard/cms/all-posts/DBUploadFileTable';
import DBUploadPageTable from 'components/dashboard/cms/all-posts/DBUploadPageTable';
import { isNotEmptyObj, refreshPage } from 'helper/utils';
// import { downloadFile, s3Link } from 'helper/utils';

const DBUpload = () => {
  const { isLoggedIn, Auth } = useOutletContext();
  // const navigate = useNavigate();
  // if (!isLoggedIn) {
  //   navigate('/');
  // }
  const [formData, setFormData] = useState({
    competitionName: '',
    depth1: '',
    depth2: '',
    depth3: '',
    depth4: '',
    link: '',
  });

  const [fileData, setFileData] = useState(null);

  const handleChange = (e) => {
    if (e.target.id === 'formFileData') {
      if (e.target.files[0]) {
        setFileData(e.target.files[0]);
        console.log('formFileData 입니다.');
        console.log(e.target.files);
      }
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const resetForm = () => {
    setFormData({
      competitionName: '',
      depth1: '',
      depth2: '',
      depth3: '',
      depth4: '',
      link: '',
    });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(formData));
    const formDataToSend = new FormData();
    formDataToSend.append(
      'data',
      new Blob([JSON.stringify(formData)], { type: 'application/json' }),
    );
    if (fileData != null) {
      formDataToSend.append('file', fileData);
    }

    alert(JSON.stringify(formDataToSend));
    const user = Auth.getUser();
    apiUtils
      .AddCompFileInfo(user, formDataToSend)
      .then((response) => {
        console.log(response.data);
        refreshPage();
        // const { accessToken, refreshToken } = response.data;
      })
      .catch((error) => {
        // alert(error);
        // alert(error.response.data);
        handleLogError(error);
      });
    resetForm();
  };

  const [compPageInfo, setCompPageInfo] = useState([]);
  const [compFileInfo, setCompFileInfo] = useState([]);

  useEffect(() => {
    // compPageInfo
    const user = Auth.getUser();
    apiUtils
      .GetCompPageInfo(user)
      .then((response) => {
        const getCompPageInfo = response.data;
        setCompPageInfo(getCompPageInfo);
        // console.log(competitionInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompPageInfo = [
          {
            page_id: 'aa',
            comp_file_id: 2,
            page_num: '344',
            start_index: '234',
          },
          {
            page_id: 'aaa',
            comp_file_id: 5,
            page_num: '5',
            start_index: '12',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompPageInfo(getCompPageInfo);
        handleLogError(error);
      });

    // compFileInfo
    apiUtils
      .GetCompFileInfo(user)
      .then((response) => {
        const getCompFileInfo = response.data;
        setCompFileInfo(getCompFileInfo);
        // console.log(getCompFileInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompFileInfo = [
          {
            comp_file_id: 2,
            competition_name: '2',
            file_extension: 'PNG',
            file_title: '스크린샷 2023-07-22 133117',
            user_id: 'www',
            depth1: '2',
            depth2: '2',
            depth3: '2',
            depth4: '2',
            link: '2',
            path: 'd15ab610-37b1-4f65-829d-898bcac81d6a',
            upload_datetime: '2023-08-11T23:15:47.403195',
          },
          {
            comp_file_id: 3,
            competition_name: '2',
            file_extension: 'PNG',
            file_title: '스크린샷 2023-07-22 133117',
            user_id: 'www',
            depth1: '3',
            depth2: '3',
            depth3: '3',
            depth4: '3',
            link: '3',
            path: 'af389ecd-abb0-46ae-914d-71f898a0610e',
            upload_datetime: '2023-08-11T23:23:15.698044',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompFileInfo(getCompFileInfo);
        handleLogError(error);
      });
  }, []);

  console.log(compPageInfo);
  console.log(compFileInfo);
  if (isNotEmptyObj(compPageInfo) & isNotEmptyObj(compFileInfo)) {
    return (
      <Fragment>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <Card className="mt-3 bg-light shadow-none">
              <Card.Body className="p-md-4">
                <h3 className="mb-4">표절 DB 파일 추가 </h3>
                {/* form to apply for the job */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="competitionName">
                    <Form.Label>
                      공모전명 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.competitionName}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="link">
                    <Form.Label>
                      링크 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.link}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="depth1">
                    <Form.Label>
                      formDepth1 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.depth1}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="depth2">
                    <Form.Label>
                      formDepth2 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.depth2}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="depth3">
                    <Form.Label>
                      formDepth3 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.depth3}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="depth4">
                    <Form.Label>
                      formDepth4 <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.depth4}
                      onChange={handleChange}
                      type="text"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formFileData">
                    <Form.Label>
                      파일 업로드 <span className="text-danger">*</span>
                      <br /> 업로드 가능한 파일 종류
                    </Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="file"
                      required
                      accept=".pdf"
                    />
                    {/* 기간 만료 */}
                    {/* <Form.Control type="file" disabled /> */}
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit}>
                    업로드
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={8} sm={12}>
            <Tab.Container defaultActiveKey="file">
              <Card>
                <Card.Header className="border-bottom-0 p-0 bg-white">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="file" className="mb-sm-3 mb-md-0">
                        파일별
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="page" className="mb-sm-3 mb-md-0">
                        페이지별
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="file" className="pb-0">
                      <DBUploadFileTable table_data={compFileInfo} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="page" className="pb-0">
                      <DBUploadPageTable table_data={compPageInfo} />
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

export default DBUpload;
