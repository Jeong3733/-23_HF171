// import node module libraries
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ApplyForm from './ApplyForm.js';

const ItemPage = () => {
  const { competition_id, post_id } = useParams();
  return (
    <section className="bg-white">
      <Container>
        <Row>
          <div className="mb-5">
            {/* heading */}
            <div className="text-center mb-6">
              <h1 className="display-3 mb-4 fw-bold">
                post_id: {post_id}
                <br />
                competition_id: {competition_id}
              </h1>
              Canada <span className="text-muted">(Remote)</span>
            </div>
          </div>
        </Row>
        <Row>
          <Col xl={{ span: 3, offset: 1 }} lg={4} xs={12}>
            {/* <Col xl={{ span: 4, offset: 0 }} xs={12}> */}
            <ApplyForm />
          </Col>
          <Col xl={7} lg={8} xs={12}>
            <div className="mb-5">
              {/* heading */}
              <div className="mt-2">
                <h2>Responsibilities</h2>

                <div className="mt-4">
                  {/* list */}
                  <ul className="list-unstyled">
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary mt-1"></i>
                      Design, build, and maintain efficient, reusable, and
                      reliable Ruby code
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary  mt-1"></i>{' '}
                      Identify bottlenecks and bugs, and devise solutions to
                      these problems
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary mt-1"></i>{' '}
                      Integration of user-facing elements developed by front-end
                      developers with server side logic
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary  mt-1"></i>{' '}
                      Help maintain code quality, organization and
                      automatization
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
                      Experience with Ruby on Rails, along with other common
                      libraries such as RSpec and Resque
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
                      Basic understanding of front-end technologies, such as
                      JavaScript, HTML5, and CSS3
                    </li>
                    <li className="d-flex mb-4 ">
                      <i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
                      Ability to integrate multiple data sources and databases
                      into one system
                    </li>
                  </ul>
                </div>
              </div>
              {/* form to apply for this job */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItemPage;
