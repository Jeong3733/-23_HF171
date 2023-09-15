// import node module libraries
import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Container, Tab } from 'react-bootstrap';

// import custom components
import FormSelect from 'components/elements/form-select/FormSelect';
import GridListViewButton from 'components/elements/miscellaneous/GridListViewButton';
import PageHeading from 'components/marketing/common/page-headings/PageHeading';

// import sub components
import FilterOptions from './FilterOptions';
import CourseGridView from './CourseGridView';
import CourseListView from './CourseListView';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import utility file
import { isNotEmptyObj } from 'helper/utils';
import {
  loadCompetitionList,
  loadCompetitionListByUserId,
} from 'components/utils/LoadData';
// function getDefaultFilter(index) {
//   let res = [];
//   for (let i = 0; i < 3; i++) {
//     res.append(i === index);
//   }
// }

const CourseFilterPage = ({ isLoggedIn }) => {
  console.log('CourseFilterPageCourseFilterPageCourseFilterPage');
  const sortByOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'free', label: 'Free' },
    { value: 'most-popular', label: 'Most Popular' },
    { value: 'highest-rated', label: 'Highest Rated' },
  ];

  const [competitionList, setCompetitionList] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      const Auth = useAuth();
      const user = Auth.getUser();
      loadCompetitionListByUserId(user).then((getData) => {
        setCompetitionList(getData);
      });
    } else {
      loadCompetitionList().then((getData) => {
        setCompetitionList(getData);
      });
    }
  }, []);
  console.log(competitionList);

  // const [selectedFilters, setSelectedFilters] = useState(getDefaultFilter( || -1));
  if (isNotEmptyObj(competitionList)) {
    return (
      <Fragment>
        {/* Page header */}
        <PageHeading pagetitle="공모전 탐색" />

        {/* Content */}
        <section className="py-6">
          <Container>
            <Tab.Container defaultActiveKey="grid">
              <Row>
                <Col lg={12} md={12} sm={12} className="mb-4">
                  <Row className="d-lg-flex justify-content-between align-items-center">
                    <Col md={6} lg={8} xl={9}>
                      <h4 className="mb-3 mb-lg-0">
                        Displaying {competitionList.length} Competitions
                      </h4>
                    </Col>
                    <Col md={6} lg={4} xl={3} className="d-inline-flex">
                      <div className="me-2">
                        <GridListViewButton keyGrid="grid" keyList="list" />
                      </div>
                      <FormSelect
                        options={sortByOptions}
                        placeholder="Sort by"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xl={3} lg={3} md={4} sm={12} className="mb-4 mb-lg-0">
                  <FilterOptions disa />
                </Col>
                {/* Tab content */}
                <Col xl={9} lg={9} md={8} sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="grid" className="pb-4 px-0">
                      <CourseGridView
                        data={competitionList}
                        isLoggedIn={isLoggedIn}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="list" className="pb-4 px-0 react-code">
                      <CourseListView
                        data={competitionList}
                        isLoggedIn={isLoggedIn}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>
      </Fragment>
    );
  }
};

export default CourseFilterPage;
