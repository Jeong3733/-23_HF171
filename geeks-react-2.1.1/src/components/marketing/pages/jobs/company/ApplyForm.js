// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import {
  Card,
  Form,
  Button,
  ButtonGroup,
  Col,
  Row,
  Container,
} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

// impoort Auth module
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { downloadFile, refreshPage, s3Link } from 'helper/utils';

const ApplyForm = ({ Auth, fileList }) => {
  const { competition_id, post_id } = useParams();

  const [fileData, setFileData] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFileData(e.target.files[0]);
      console.log('formFileData 입니다.');
      console.log(e.target.files);
    }
  };

  const handleSubmit = (e) => {
    console.log(e);

    let formData = { postId: post_id };
    const formDataToSend = new FormData();
    formDataToSend.append(
      'data',
      new Blob([JSON.stringify(formData)], { type: 'application/json' }),
    );
    if (fileData !== null) {
      formDataToSend.append('file', fileData);
    }

    const user = Auth.getUser();
    apiUtils
      .AddFileInfo(user, formDataToSend)
      .then((response) => {
        console.log(response.data);
        refreshPage();
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);
      });
  };
  console.log(fileList);
  return (
    <div className="mt-2 mb-12">
      <Card className="bg-light shadow-none">
        {fileList && (
          <Card.Body className="p-md-4">
            <Container>
              <Row>
                <h3 className="mb-4">현재 파일 </h3>
              </Row>
              {fileList.map((file, index) => (
                <Row key={index}>
                  <h5 className="mb-1">{file.file_title}</h5>
                  <ButtonGroup
                    size="sm"
                    aria-label="Basic mixed styles example"
                  >
                    <Button
                      sm={8}
                      lg={8}
                      variant="outline-primary"
                      onClick={() => downloadFile(file.path)}
                    >
                      다운로드
                    </Button>
                    <Button variant="secondary" href={s3Link(file.path)}>
                      미리보기
                    </Button>
                  </ButtonGroup>
                </Row>
              ))}
            </Container>
          </Card.Body>
        )}
      </Card>
      <Card className="mt-3 bg-light shadow-none">
        <Card.Body className="p-md-4">
          <h3 className="mb-4">파일 제출 </h3>
          {/* form to apply for the job */}
          <Form onSubmit={handleSubmit}>
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
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplyForm;
