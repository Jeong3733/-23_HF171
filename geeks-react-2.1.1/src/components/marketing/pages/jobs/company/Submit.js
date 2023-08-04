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

const Submit = () => {
  const sortByOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ];
  const data = ComapniesListData[0];
  const test_data = { competition_id: 1, schedule_id: 1 };
  return (
    <CommonHeaderTabs data={data} test_data={test_data}>
      <Fragment>
        <section className="py-8 bg-white">
          <Container>
            <Row>
              <Col xl={9} md={8} className="mb-6 mb-md-0">
                <Tab.Container defaultActiveKey="list">
                  <Row className="row align-items-center mb-4">
                    <Col xs>
                      <p className="mb-0">
                        1 - 20 of 86 IT Manager Jobs in India
                      </p>
                    </Col>
                    <Col className="col-auto">
                      <div className="d-flex ">
                        {/* <GridListViewButton keyGrid="grid" keyList="list" /> */}
                        <FormSelect
                          options={sortByOptions}
                          placeholder="Sorting"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Tab.Content>
                    <Tab.Pane eventKey="list" className="pb-4 px-0 react-code">
                      <JobsListView />
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="grid" className="pb-4 px-0">
                      <JobsGridView />
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    </CommonHeaderTabs>
  );
};

export default Submit;
