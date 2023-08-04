// import node module libraries
import { Col, Row, Container, Tab } from 'react-bootstrap';
import { Fragment } from 'react';

// import custom components
import FormSelect from 'components/elements/form-select/FormSelect';

// import sub components
// import JobSearchBox from "components/marketing/common/jobs/JobSearchBox";
import JobsListView from './JobsListView';
// import GridListViewButton from "components/elements/miscellaneous/GridListViewButton";
// import JobsGridView from "./JobsGridView";

// import sub component
import CommonHeaderTabs from './CommonHeaderTabs';
// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const Announcements = () => {
  const sortByOptions = [
    { value: 'newest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
  ];
  const data = ComapniesListData[0];
  // const test_data = { competition_id: 1, schedule_id: 1 };
  return (
    <CommonHeaderTabs data={data}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col>1 - 20 of 86 IT Manager Jobs in India</Col>
          <Col className="col-auto">
            <FormSelect options={sortByOptions} placeholder="정렬 기준" />
          </Col>
        </Row>
        <Row>
          <Col>
            <JobsListView />
          </Col>
        </Row>
      </Container>
    </CommonHeaderTabs>
  );
};

export default Announcements;
