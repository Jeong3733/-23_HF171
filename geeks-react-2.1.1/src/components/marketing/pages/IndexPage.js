// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import HeroHeader from 'components/marketing/pages/courses/course-index/HeroHeader';
import BrowseCategories from 'components/marketing/pages/competition/competition-filter-page/BrowseCategories';

// import custom components
import CourseSlider from 'components/marketing/pages/competition/CourseSlider';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const IndexPage = ({ isLoggedIn }) => {
  return (
    <Fragment>
      {/*  Page Content  */}
      <HeroHeader isLoggedIn={isLoggedIn} />

      <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">내 공모전</h2>
            </Col>
          </Row>
          <div className="position-relative">
            {/* <CourseSlider recommended={true} /> */}
            {/* <CourseSlider category="javascript" /> */}
            {/* <CourseSlider /> */}
          </div>
          <div className="position-relative">
            <BrowseCategories isLoggedIn={isLoggedIn} />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default IndexPage;
