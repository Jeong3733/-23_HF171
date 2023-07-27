// import node module libraries
import { useState } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

// 이거 나중에 따로 파일로 빼야할듯
const CompetitionType = [
  { value: '개발', label: '개발' },
  { value: '교육', label: '교육' },
  { value: '엔터테인먼트', label: '엔터테인먼트' },
  { value: '생활', label: '생활' },
  { value: '업무', label: '업무' },
  { value: '공공', label: '공공' },
  { value: '금융', label: '금융' },
  { value: '의료', label: '의료' },
  { value: '기타', label: '기타' },
];

const handleSubmit = (e, next) => {
  e.preventDefault();

  next();
}

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
            <Form.Label htmlFor="competition_name">공모전 이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="공모전 이름 입력"
              id="competition_name"
              name="competition_name"
              value={data.competition_name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* 공모전 분류 */}
          {/* <Form.Group className="mb-3">
            <Form.Label>공모전 분류</Form.Label>
            <FormSelect
              options={CompetitionType}
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
            <Form.Label htmlFor="competition_type">공모전 분류</Form.Label>
            <Form.Text>최대 3개까지 선택할 수 있습니다.</Form.Text>
            <div
              className="mb-3"
              id="competition_type"
              name="competition_type"
            >
              {CompetitionType.map((item, index) =>
                <Form.Check
                  key={index}
                  inline
                  type="checkbox"
                  label={item.label}
                  name={'competition_type' + ':' + item.value}
                  checked={data.competition_type[item.value]}
                  onChange={handleChange}
                />
              )}
            </div>
          </Form.Group>

          {/* 공모전 요약 설명 */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="competition_description">
              공모전 한줄 설명
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="공모전 썸네일에 이름과 함께 표시됩니다. (30자 이내)"
              id="competition_description"
              name="competition_description"
              value={data.competition_description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Cover image */}
          <Form.Label htmlFor="competition_image">공모전 썸네일 이미지</Form.Label>
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                id="competition_image"
                name="competition_image"
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
                id="competition_date_start"
                name="competition_date_start"
                type="date"
                className="form-control"
                value={data.competition_date_start}
                onChange={handleChange}
                required
              />
              <InputGroup.Text>모집 마감일</InputGroup.Text>
              <Form.Control
                id="competition_date_end"
                name="competition_date_end"
                type="date"
                className="form-control"
                value={data.competition_date_end}
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
