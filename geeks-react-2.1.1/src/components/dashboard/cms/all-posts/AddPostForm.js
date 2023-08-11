// import node module libraries
import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
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
// import { downloadFile, s3Link } from 'helper/utils';

const AddPostForm = ({ Auth }) => {
  // const navigate = useNavigate();
  // if (!isLoggedIn) {
  //   navigate('/');
  // }
  const { competition_id, post_id } = useParams();
  const fileType = [
    { value: 'pdf', label: 'pdf' },
    { value: 'pptx', label: 'pptx' },
    { value: 'ppt', label: 'ppt' },
    { value: 'docx', label: 'docx' },
  ];

  const [form, setForm] = useState({
    fileType: {
      pdf: false,
      pptx: false,
      ppt: false,
      docx: false,
    },
    competitionId: competition_id,
    postId: post_id,
    boardType: '',
    title: '',
    contents: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const newData = {};
    if (e.target.type === 'checkbox') {
      const [parentName, myName] = e.target.getAttribute('id').split(':');
      newData[parentName] = form[parentName];
      newData[parentName][myName] = e.target.checked;
    } else if (e.target.id === 'formFile') {
      if (e.target.files[0]) {
        setFile(e.target.files[0]);
        console.log('formFile 입니다.');
      }
    } else {
      newData[e.target.id] = e.target.value;
    }
    setForm({ ...form, ...newData });
    console.log(form);
  };

  const resetForm = () => {
    setForm({
      fileType: {
        pdf: false,
        pptx: false,
        ppt: false,
        docx: false,
      },
      competitionId: competition_id,
      postId: post_id,
      boardType: '',
      title: '',
      contents: '',
    });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(formData));
    const formDataToSend = new FormData();
    formDataToSend.append(
      'data',
      new Blob([JSON.stringify(form)], { type: 'application/json' }),
    );
    formDataToSend.append('file', file);

    // 'Content-type': 'multipart/form-data',
    alert(JSON.stringify(formDataToSend));
    const user = Auth.getUser();
    // apiUtils
    //   .AddCompFileInfo(user, formDataToSend)
    //   .then((response) => {
    //     console.log(response.data);
    //     // const { accessToken, refreshToken } = response.data;
    //   })
    //   .catch((error) => {
    //     // alert(error.response.data);
    //     handleLogError(error);
    //   });
    resetForm();
  };

  return (
    <Card className="mt-3 bg-light shadow-none">
      <Card.Body className="p-md-4">
        <h3 className="mb-4">표절 DB 파일 추가 </h3>
        {/* form to apply for the job */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="boardType">
            <Form.Label>
              게시물 종류 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              value={form.boardType}
              onChange={handleChange}
              required
              aria-label="게시물 종류 선택하기"
            >
              <option value="QNA">QNA</option>
              <option value="SUBMIT">SUBMIT</option>
              <option value="NOTICE">NOTICE</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>
              제목 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              value={form.title}
              onChange={handleChange}
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contents">
            <Form.Label>
              내용 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              value={form.contents}
              onChange={handleChange}
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>업로드 가능한 파일 종류</Form.Label>
            <Form.Text>최대 3개까지 선택할 수 있습니다.</Form.Text>
            <div className="mb-3" id="fileType">
              {fileType.map((item, index) => (
                <Form.Check
                  key={index}
                  inline
                  type="checkbox"
                  label={item.label}
                  id={'fileType' + ':' + item.value}
                  checked={form.fileType[item.label]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>파일 업로드</Form.Label>
            <Form.Control onChange={handleChange} type="file" accept=".pdf" />
          </Form.Group>
          <Button variant="primary" type="submit">
            업로드
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddPostForm;
