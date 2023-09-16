// import node module libraries
import { Fragment, useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Col,
  Row,
  Container,
  Image,
  ListGroup,
  Button,
  Nav,
  Badge,
} from 'react-bootstrap';

// import media files
import CompanyBG from 'assets/images/background/company-bg.jpg';

// import utility filedata
import {
  calculateDday,
  isNotEmptyObj,
  refreshPage,
  s3Link,
  toDateByYYYYMMDD,
} from 'helper/utils';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { validateCreator } from 'components/utils/LoadData';

const CommonHeaderTabs = (props) => {
  const { competition_id } = useParams();
  const { competitionInfo, isLoggedIn, Auth, creatorInfo, userList } = props;
  const location = useLocation();

  const tabItems = [
    {
      title: '소개글',
      link: '/detail/' + competition_id + '/readme',
      isLoggedIn: 0,
    },
    // {
    //   title: "일정 (" + props.data.totalReviews + ")",
    //   link: "/marketing/jobs/company/reviews",
    // },
    {
      title: '공지사항',
      link: '/detail/' + competition_id + '/announcements',
      isLoggedIn: 0,
    },
    {
      title: 'QA 게시판',
      link: '/detail/' + competition_id + '/qna',
      isLoggedIn: 0,
    },
    {
      title: '제출 게시판',
      link: '/detail/' + competition_id + '/submits',
      isLoggedIn: 1,
    },
    {
      title: '공모전 관리',
      link: '/manage/' + competition_id,
      isLoggedIn: 2,
    },
    {
      title: '평가 관리',
      link: '/evaluate/' + competition_id,
      isLoggedIn: 2,
    },
  ];

  function getCompetitionStatus() {
    const today = new Date();
    const start = new Date(competitionInfo.competition_start_date);
    const end = new Date(competitionInfo.competition_end_date);
    // console.log(today, start, end);
    if (today < start) {
      return 'Coming Soon';
    } else if (today < end) {
      if (competitionInfo.role_type === 'PARTICIPANT_BASE') {
        return '참가 중';
      } else {
        return '참가 가능';
      }
    } else {
      return '공모전 종료';
    }
  }

  const navigate = useNavigate();
  const handleClick = () => {
    const data7 = {
      competitionId: competition_id,
    };
    const user = Auth.getUser();

    if (user) {
      apiUtils
        .AddParticipation(user, data7)
        .then((response) => {
          refreshPage();
        })
        .catch((error) => {
          // alert(error.response.data);
          handleLogError(error);
        });
    } else {
      alert('로그인하고 오세요!');
      navigate('/authentication/sign-in/');
    }
  };

  function userRole() {
    let txt = '';
    if (competitionInfo.role_type === 'CREATOR') {
      txt = '주최자';
    } else {
      txt = '참가자';
    }
    return txt;
  }
  console.log(competitionInfo);
  return (
    <Fragment>
      {/* 커버 이미지 (없애도 되려나?) */}
      <section
        className="py-10 bg-white"
        style={{
          backgroundImage: `url(${CompanyBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></section>

      <section className="bg-white">
        <Container>
          {/* 헤더 */}
          <Row as="header" className="mb-4">
            <Col className="d-md-flex align-items-center">
              <Col xl={2} lg={2} md={2} sm={2}>
                <div className="mt-n5">
                  <div
                    style={{
                      height: '160px',
                      width: '160px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={s3Link(competitionInfo.competition_image)}
                      alt={competitionInfo.competition_image}
                      className=" rounded-3 border"
                      style={{
                        objectFit: 'fill',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className="w-100 ms-md-4 mt-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      {/* heading */}
                      <h1 className="mb-0 ">
                        {competitionInfo.competition_name}
                      </h1>

                      <div className="lh-1 mb-2 d-flex align-items-center">
                        <span>
                          {toDateByYYYYMMDD(
                            competitionInfo.competition_start_date,
                          )}
                          {' ~ '}
                          {toDateByYYYYMMDD(
                            competitionInfo.competition_end_date,
                          )}
                        </span>
                      </div>
                      <div className="lh-1 mb-2 d-flex align-items-center">
                        <span>주최자 : {creatorInfo.user_name}</span>
                      </div>
                      <div>
                        {/* reviews */}
                        <span className="text-dark me-1 fw-bold">
                          참가자 : {userList.length} 명
                        </span>
                        {/* <span className="ms-0">(Reviews)</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4}>
                {/* <div className="w-100 ms-md-4 mt-4"> */}
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <Badge pill bg="primary" className="me-1">
                    {getCompetitionStatus()}
                  </Badge>
                  <Badge pill bg="primary" className="me-1">
                    {calculateDday(competitionInfo.competition_start_date)}
                  </Badge>
                  {competitionInfo.role_type ? (
                    // 참가 중
                    <Badge pill bg="primary" className="me-1">
                      <span className="">{userRole()}</span>
                    </Badge>
                  ) : (
                    <Button
                      to="#"
                      variant="outline-primary"
                      onClick={handleClick}
                    >
                      참가 신청
                    </Button>
                  )}
                  {/* button */}
                  <Button
                    to="#"
                    variant="outline-primary"
                    // onClick={() => handleCopyLinkClipBoard(location.pathname)}
                  >
                    링크 공유
                  </Button>
                </div>
                {/* </div> */}
              </Col>
            </Col>
          </Row>
          <Row as="header" className="mb-4">
            <span className="text-dark ms-3 fw-medium">
              {competitionInfo.competition_description}
              {` `}
              {competitionInfo.competition_description}
              {` `}
              {competitionInfo.competition_description}
            </span>
          </Row>
          {/* 내비게이션 탭 */}
          <Row className="mb-6">
            <Col>
              {/* nav */}
              <Nav variant="line-bottom">
                {tabItems.map((item, index) => {
                  if (isLoggedIn) {
                    if (competitionInfo.role_type === 'CREATOR') {
                      return (
                        <Nav.Item key={index}>
                          <Nav.Link
                            as={Link}
                            to={item.link}
                            className={
                              location.pathname === item.link ? 'active' : ''
                            }
                          >
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    } else {
                      if (item.isLoggedIn <= 1) {
                        return (
                          <Nav.Item key={index}>
                            <Nav.Link
                              as={Link}
                              to={item.link}
                              className={
                                location.pathname === item.link ? 'active' : ''
                              }
                            >
                              {item.title}
                            </Nav.Link>
                          </Nav.Item>
                        );
                      }
                    }
                  } else {
                    if (item.isLoggedIn <= 0) {
                      return (
                        <Nav.Item key={index}>
                          <Nav.Link
                            as={Link}
                            to={item.link}
                            className={
                              location.pathname === item.link ? 'active' : ''
                            }
                          >
                            {item.title}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    }
                  }
                  // <Nav.Item key={index}>
                  //   <Nav.Link
                  //     as={Link}
                  //     to={item.link}
                  //     className={
                  //       location.pathname === item.link ? 'active' : ''
                  //     }
                  //   >
                  //     {item.title}
                  //   </Nav.Link>
                  // </Nav.Item>;
                })}
              </Nav>
            </Col>
          </Row>

          {/* 본문 */}
          <Row as="main">
            <Col>{props.children}</Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CommonHeaderTabs;
