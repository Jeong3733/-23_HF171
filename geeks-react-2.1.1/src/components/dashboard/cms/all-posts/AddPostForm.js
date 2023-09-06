// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Nav,
  Button,
  Form,
  Tab,
  Spinner,
} from 'react-bootstrap';

// import sub components
import PostsTable from './PostsTable';
import ReactQuillEditorPost from 'components/elements/editor/ReactQuillEditorPost';

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
import { refreshPage } from 'helper/utils';
// import { downloadFile, s3Link } from 'helper/utils';

const AddPostForm = ({ Auth }) => {
  // const navigate = useNavigate();
  // if (!isLoggedIn) {
  //   navigate('/');
  // }
  const { competition_id } = useParams();
  const fileType = [
    { value: 'pdf', label: 'pdf' },
    { value: 'pptx', label: 'pptx' },
    { value: 'ppt', label: 'ppt' },
    { value: 'docx', label: 'docx' },
  ];

  const [formData, setFormData] = useState({
    fileType: {
      pdf: false,
      pptx: false,
      ppt: false,
      docx: false,
    },
    competitionId: competition_id,
    boardType: '',
    title: '',
    contents: '',
  });

  const [fileData, setFileData] = useState(null);

  const handleChange = (e) => {
    const newData = {};
    if (e.target.type === 'checkbox') {
      const [parentName, myName] = e.target.getAttribute('id').split(':');
      newData[parentName] = formData[parentName];
      newData[parentName][myName] = e.target.checked;
    } else if (e.target.id === 'formFile') {
      if (e.target.files[0]) {
        setFileData(e.target.files[0]);
        console.log('formFile 입니다.');
      }
    } else {
      newData[e.target.id] = e.target.value;
    }
    setFormData({ ...formData, ...newData });
    // console.log(formData);
  };

  const resetForm = () => {
    setFormData({
      fileType: {
        pdf: false,
        pptx: false,
        ppt: false,
        docx: false,
      },
      competitionId: competition_id,
      boardType: '',
      title: '',
      contents: '',
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true); // Start loading
    // alert(JSON.stringify(formData));
    const formDataToSend = new FormData();
    formDataToSend.append(
      'data',
      new Blob([JSON.stringify(formData)], { type: 'application/json' }),
    );
    if (fileData !== null) {
      console.log('fileData is not null');
      formDataToSend.append('file', fileData);
    }

    const user = Auth.getUser();
    apiUtils
      .AddPost(user, formDataToSend)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);
      })
      .finally(() => {
        resetForm();
        setIsLoading(false); // Stop loading irrespective of success or failure
      });
  };

  useEffect(() => {
    const newData = {};
    if (formData.boardType !== 'SUBMIT') {
      fileType.map((item) => {
        newData['fileType'] = formData['fileType'];
        newData['fileType'][item.label] = false;
      });
    }
    setFormData({ ...formData, ...newData });
    console.log('useEffect');
  }, [formData.boardType]);

  return (
    <>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : null}
      <Form>
        <Form.Group className="mb-3" controlId="boardType">
          <Form.Label>
            게시물 종류 <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            value={formData.boardType}
            onChange={handleChange}
            required
            aria-label="게시물 종류 선택하기"
          >
            <option>게시물 종류 선택하기</option>
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
            value={formData.title}
            onChange={handleChange}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>소개글 내용</Form.Label>
          <ReactQuillEditorPost
            initialValue={formData.contents}
            id="contents"
            value={formData.contents}
            handleChange={handleChange}
          />
          <Form.Text className="text-muted">
            A brief summary of your courses.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>업로드 가능한 파일 종류</Form.Label>
          <Form.Text>최대 3개까지 선택할 수 있습니다.</Form.Text>
          <div className="mb-3" id="fileType">
            {fileType.map((item, index) => (
              <Form.Check
                key={index}
                inline
                disabled={formData.boardType !== 'SUBMIT' ? true : false}
                type="checkbox"
                label={item.label}
                id={'fileType' + ':' + item.value}
                checked={formData.fileType[item.label]}
                onChange={handleChange}
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>파일 업로드</Form.Label>
          <Form.Control onChange={handleChange} type="file" accept=".pdf" />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          업로드
        </Button>
      </Form>
    </>
  );
};

export default AddPostForm;
