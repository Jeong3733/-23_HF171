// import node module libraries
import { useState } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

import { competitionCategories } from 'components/marketing/pages/competition/competition-filter-page/competitionCategories';
// 이거 나중에 따로 파일로 빼야할듯

const handleSubmit = (e, next) => {
  e.preventDefault();

  next();
};

const BasicInformation = (props) => {
  const { next, data, handleChange } = props;

  return (
    <Form onSubmit={(e) => handleSubmit(e, next)}>
      {/* Card */}
      <Card className="mb-3 ">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">기본 정보</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          {/* 공모전 이름  */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competitionName">공모전 이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="공모전 이름 입력"
              id="competitionName"
              name="competitionName"
              value={data.competitionName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* 공모전 분류 */}
          {/* <Form.Group className="mb-3">
            <Form.Label>공모전 분류</Form.Label>
            <FormSelect
              options={competitionCategories}
              id="competition_type"
              name="competition_type"
              placeholder="분류 선택 (최대 3개)"
              value={data.competition_type}
              // defaultselected={data.competition_type}
              onChange={handleChange}
              required
            />
          </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competitionType">공모전 분류</Form.Label>
            <Form.Text>최대 3개까지 선택할 수 있습니다.</Form.Text>
            <div className="mb-3" id="competitionType" name="competitionType">
              {competitionCategories.map((item, index) => (
                <Form.Check
                  key={index}
                  inline
                  type="checkbox"
                  label={item.label}
                  name={'competitionType' + ':' + item.value}
                  checked={data.competitionType[item.value]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Form.Group>

          {/* 공모전 요약 설명 */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competitionDescription">
              공모전 한줄 설명
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="공모전 썸네일에 이름과 함께 표시됩니다. (30자 이내)"
              id="competitionDescription"
              name="competitionDescription"
              value={data.competitionDescription}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Cover image */}
          <Form.Label htmlFor="competitionImage">
            공모전 썸네일 이미지
          </Form.Label>
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                id="competitionImage"
                name="competitionImage"
                type="file"
                // className="form-control"
                onChange={handleChange}
              />
            </InputGroup>
            <Form.Text className="text-muted">
              공모전 리스트에 표시되는 사진입니다. (권장사항: 750x440 pixels;
              .jpg, .jpeg,. gif, or .png. no text on the image.)
            </Form.Text>
          </Form.Group>

          {/* 모집기간 */}
          <Form.Label>공모전 모집기간</Form.Label>
          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>모집 시작일</InputGroup.Text>
              <Form.Control
                id="competitionDateStart"
                name="competitionDateStart"
                type="date"
                className="form-control"
                value={data.competitionDateStart}
                onChange={handleChange}
                required
              />
              <InputGroup.Text>모집 마감일</InputGroup.Text>
              <Form.Control
                id="competitionDateEnd"
                name="competitionDateEnd"
                type="date"
                className="form-control"
                value={data.competitionDateEnd}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Card.Body>
      </Card>
      {/* Button */}
      <Button variant="primary" type="submit">
        다음
      </Button>
    </Form>
  );
};

export default BasicInformation;
