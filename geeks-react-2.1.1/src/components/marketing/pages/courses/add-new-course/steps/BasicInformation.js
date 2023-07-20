// import node module libraries
import { Card, Form, Button } from "react-bootstrap";
// import React, { useState, Fragment } from "react";

// import custom components
import { FormSelect } from "components/elements/form-select/FormSelect";
import ReactQuillEditor from "components/elements/editor/ReactQuillEditor";

const BasicInformation = (props) => {
  const { next, data, handleChange } = props;

  const CompetitionType = [
    { value: "분류1", label: "분류1" },
    { value: "분류2", label: "분류2" },
    { value: "분류3", label: "분류3" },
    { value: "분류4", label: "분류4" },
    { value: "분류5", label: "분류5" },
    { value: "분류6", label: "분류6" },
    { value: "분류7", label: "분류7" },
  ];

  // const initialValue = `<p>Insert course description</p>
  //                     <p><br /></p>
  //                     <p>Some initial <strong>bold</strong> text</p>
  //                     <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

  return (
    <Form>
      {/* Card */}
      <Card className="mb-3 ">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">공모전 정보</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          {/* 공모전 이름  */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competition_name">공모전 이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course Title"
              id="competition_name"
              name="competition_name"
              value={data.competition_name}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Write a 60 character course title.
            </Form.Text>
          </Form.Group>

          {/* 공모전 분류 */}
          <Form.Group className="mb-3">
            <Form.Label>공모전 분류</Form.Label>
            <FormSelect
              options={CompetitionType}
              id="competition_type"
              name="competition_type"
              placeholder="Select Type"
              value={data.competition_type}
              defaultselected={data.competition_type}
              onChange={handleChange}
            />
          </Form.Group>

          {/* 공모전 요약 설명 */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competition_description">
              공모전 요약 설명
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Course Title"
              id="competition_description"
              name="competition_description"
              value={data.competition_description}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Write a 60 character course title.
            </Form.Text>
          </Form.Group>

          {/* Cover image */}
          <Form.Label>Cover image</Form.Label>
          <Form.Group className="mb-1 input-group">
            <Form.Control
              id="inputfavicon"
              name="competition_image"
              type="file"
              className="form-control"
              // value={data.competition_image}
              onChange={handleChange}
            />
            <Form.Label
              htmlFor="competition_image"
              className="input-group-text mb-0"
            >
              Upload
            </Form.Label>
            <Form.Text className="text-muted">
              공모전 이미지를 업로드하세요. Important guidelines: 750x440
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </Form.Text>
          </Form.Group>

          {/* File upload */}
          <Form.Label>File upload</Form.Label>
          <Form.Group className="mb-1 input-group">
            <Form.Control
              id="inputfavicon"
              name="competition_docs"
              type="file"
              className="form-control"
              // value={data.competition_docs}
              onChange={handleChange}
            />
            <Form.Label
              htmlFor="competition_docs"
              className="input-group-text mb-0"
            >
              Upload
            </Form.Label>
            <Form.Text className="text-muted">
              공모전 관련 파일 업로드하세요. Important guidelines: 750x440
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </Form.Text>
          </Form.Group>

          {/* 공모전 소개글*/}
          <Form.Group className="mb-3">
            <Form.Label>공모전 소개글</Form.Label>
            <ReactQuillEditor
              initialValue={data.competition_intro}
              id="competition_intro"
              name="competition_intro"
              // value={data.competition_intro}
              handleChange={handleChange}
            />
            <Form.Text className="text-muted">
              A brief summary of your courses.
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
      {/* Button */}
      <Button variant="primary" onClick={next}>
        Next
      </Button>
    </Form>
  );
};

export default BasicInformation;
