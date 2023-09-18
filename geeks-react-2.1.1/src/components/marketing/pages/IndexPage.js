// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

// import sub components
import HeroHeader from 'components/marketing/pages/courses/course-index/HeroHeader';
import BrowseCategories from 'components/marketing/pages/competition/competition-filter-page/BrowseCategories';
import MyCategories from 'components/marketing/pages/competition/competition-filter-page/MyCategories';

const IndexPage = () => {
  const { isLoggedIn, Auth, userInfo } = useOutletContext();
  // console.log(userInfo);
  return (
    <Fragment>
      {/*  Page Content  */}
      <HeroHeader isLoggedIn={isLoggedIn} UserInfo={userInfo} />

      <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <Container>
          {isLoggedIn && (
            <div className="position-relative">
              <MyCategories isLoggedIn={isLoggedIn} Auth={Auth} />
            </div>
          )}
          <div className="position-relative">
            <BrowseCategories isLoggedIn={isLoggedIn} Auth={Auth} />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default IndexPage;
