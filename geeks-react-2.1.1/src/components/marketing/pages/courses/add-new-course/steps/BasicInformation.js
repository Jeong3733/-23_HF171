// import node module libraries
import { Card, Form, Button, InputGroup } from "react-bootstrap";
// import React, { useState, Fragment } from "react";

// import custom components
import { FormSelect } from "components/elements/form-select/FormSelect";

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
          <h4 className="mb-0">기본 정보</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          {/* 공모전 이름  */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competition_name">공모전 이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="공모전 이름 입력"
              id="competition_name"
              name="competition_name"
              value={data.competition_name}
              onChange={handleChange}
            />
            {/* <Form.Text className="text-muted">
              Write a 60 character course title.
            </Form.Text> */}
          </Form.Group>

          {/* 공모전 분류 */}
          <Form.Group className="mb-3">
            <Form.Label>공모전 분류</Form.Label>
            <FormSelect
              options={CompetitionType}
              id="competition_type"
              name="competition_type"
              placeholder="분류 선택"
              value={data.competition_type}
              // defaultselected={data.competition_type}
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
              placeholder="공모전을 잘 설명하는 60자 내외의 글을 입력하세요."
              id="competition_description"
              name="competition_description"
              value={data.competition_description}
              onChange={handleChange}
            />
            {/* <Form.Text className="text-muted">
              공모전의 내용을 잘 나타내는 60자 내외의 설명을 입력하세요.
            </Form.Text> */}
          </Form.Group>

          {/* Cover image */}
          <Form.Label>공모전 썸네일</Form.Label>
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                id="competition_image"
                name="competition_image"
                type="file"
                className="form-control"
                // value={data.competition_image}
                onChange={handleChange}
              />
            </InputGroup>
            <Form.Text className="text-muted">
              공모전 리스트에 표시되는 사진입니다. (권장사항: 750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.)
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
      {/* Button */}
      <Button variant="primary" onClick={next}>
        다음
      </Button>
    </Form>
  );
};

export default BasicInformation;
