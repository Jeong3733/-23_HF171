// import node module libraries
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Image, Dropdown, ListGroup } from 'react-bootstrap';

// simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import custom components
import DotBadge from 'components/elements/bootstrap/DotBadge';
import DarkLightMode from 'layouts/DarkLightMode';
import GKTippy from 'components/elements/tooltips/GKTippy';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

// import data files
import NotificationList from 'data/Notification';

// impoort Auth module
import { useCookies } from 'react-cookie';
import { useAuth } from 'components/AuthContext';
import { loadUser } from 'components/utils/LoadData';
import { isNotEmptyObj } from 'helper/utils';

const QuickMenu = ({ doLogOut, UserInfo }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const Notifications = () => {
    return (
      <SimpleBar style={{ maxHeight: '300px' }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? 'bg-light' : ''}
                key={index}
              >
                <Row>
                  <Col>
                    <Link className="text-body" to="#">
                      <div className="d-flex">
                        <Image
                          src={item.image}
                          alt=""
                          className="avatar-md rounded-circle"
                        />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item.sender}</h5>
                          <p className="mb-3">{item.message}</p>
                          <span className="fs-6 text-muted">
                            <span>
                              <span className="fe fe-thumbs-up text-success me-1"></span>
                              {item.date}
                            </span>
                            <span className="ms-1">{item.time}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="col-auto text-center me-2">
                    <GKTippy content="Mark as unread">
                      <Link to="#">
                        <DotBadge bg="secondary"></DotBadge>
                      </Link>
                    </GKTippy>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };
  // console.log(UserInfo);
  return (
    <Fragment>
      <DarkLightMode />
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-2 d-flex nav-top-wrap"
      >
        {/* <Dropdown as="li">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
            id="dropdownNotification"
          >
            <i className="fe fe-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={isDesktop ? true : false}
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-3 py-0"
            aria-labelledby="dropdownNotification"
            align="end"
          >
            <div className="border-bottom px-3 pt-3 pb-3 d-flex justify-content-between align-items-end">
              <span className="h4 mb-0">Notifications</span>
              <Link to="# " className="text-muted">
                <span className="align-middle">
                  <i className="fe fe-settings me-1"></i>
                </span>
              </Link>
            </div>
            <Notifications />
            <div className="border-top px-3 pt-3 pb-3">
              <Link
                to="/authentication/notifications"
                className="text-link fw-semi-bold"
              >
                See all Notifications
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown> */}

        <Dropdown as="li" className="ms-1">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image alt="avatar" src={Avatar1} className="rounded-circle" />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={isDesktop ? true : false}
            className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
            aria-labelledby="dropdownUser"
            align="end"
          >
            <Dropdown.Item className="mt-3">
              <div className="d-flex">
                <div className="avatar avatar-md avatar-indicators avatar-online">
                  <Image
                    alt="avatar"
                    src={Avatar1}
                    className="rounded-circle"
                  />
                </div>
                {UserInfo && isNotEmptyObj(UserInfo) && (
                  <div className="ms-3 lh-1">
                    <h5 className="mb-1">{UserInfo.user_name}</h5>
                    <p className="mb-0 text-muted">{UserInfo.email}</p>
                  </div>
                )}
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" href="/dashboard/common/">
              <i className="fe fe-user me-2"></i> MyPage
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="mb-3" onClick={doLogOut}>
              <i className="fe fe-power me-2"></i> 로그아웃
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    </Fragment>
  );
};

export default QuickMenu;
