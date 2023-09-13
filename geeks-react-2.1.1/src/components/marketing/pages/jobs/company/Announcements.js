// import node module libraries
import { Col, Row, Container, Tab } from 'react-bootstrap';
import { Fragment } from 'react';

// import custom components
import FormSelect from 'components/elements/form-select/FormSelect';

// import sub components
import JobsListView from './JobsListView';

const Announcements = () => {
  const sortByOptions = [
    { value: 'newest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
  ];
  // const test_data = { competition_id: 1, schedule_id: 1 };
  return (
    <Container className="mb-6">
      <Row className="align-items-center mb-4">
        <Col>1 - 20 of 86 IT Manager Jobs in India</Col>
        <Col className="col-auto">
          <FormSelect options={sortByOptions} placeholder="정렬 기준" />
        </Col>
      </Row>
      <Row>
        <Col>
          <JobsListView boardType={'NOTICE'} />
        </Col>
      </Row>
    </Container>
  );
};

export default Announcements;
