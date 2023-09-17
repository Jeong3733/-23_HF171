// import node module libraries
import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Button, Form, Tab } from 'react-bootstrap';

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
import { loadItemList } from 'components/utils/LoadData';
// import { downloadFile, s3Link } from 'helper/utils';

const AddItemDetailForm = ({
  setItemDetailList,
  itemList,
  selectedId,
  setSelectedId,
}) => {
  const { post_id } = useParams();
  const defaultMax = 30;
  // console.log(selectedId);

  const [formData, setFormData] = useState({
    evaluationId: selectedId ? selectedId : '',
    name: '',
    max: defaultMax,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === 'evaluationId') {
      setSelectedId(e.target.value);
    }
  };

  const resetForm = () => {
    setFormData({
      evaluationId: '',
      name: '',
      max: defaultMax,
    });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(formData));
    if (formData.evaluationId === '') {
      alert('평가 항목을 선택해주세요.');
      return;
    }
    if (formData.name === '') {
      alert('평가 항목 이름을 입력해주세요.');
      return;
    }
    if (formData.name === '') {
      alert('평가 항목 이름을 입력해주세요.');
      return;
    }
    apiUtils
      .AddEvaluationItemDetail(formData)
      .then((response) => {
        const checkJudge = response.data;
        alert('평가 세부 항목이 추가되었습니다.');
        resetForm();
        loadItemList(post_id).then((getData) => {
          setItemDetailList(getData.evaluation_detail_info_list);
        });
      })
      .catch((error) => {
        // alert(error.response.data);
        alert('에러가 발생했습니다.');
        handleLogError(error);
        resetForm();
      });
  };

  return (
    <Card className="mt-3 bg-light shadow-none">
      <Card.Body className="p-md-4">
        <h3 className="mb-4">평가 세부 항목 추가 </h3>
        {/* form to apply for the job */}
        <Form>
          <Form.Group className="mb-3" controlId="evaluationId">
            <Form.Label>
              메인 항목 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              value={formData.evaluationId}
              onChange={handleChange}
              required
              aria-label="게시물 종류 선택하기"
            >
              <option value="">메인 항목 선택하기</option>
              {itemList.map((item, index) => (
                <option value={item.evaluation_id} key={index}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>
              평가 세부 항목 이름 <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="max">
            <Form.Label>
              최대 점수 <h3>{formData.max}</h3>
            </Form.Label>

            <Form.Control
              value={formData.max} // Current value of range slider
              type="range" // Form type
              min={1} // Lowest possible value
              max={100} // Highest possible value
              step={1} // Incremental change of 1
              // defaultValue={defaultMax}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            평가 세부 항목 추가
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddItemDetailForm;
