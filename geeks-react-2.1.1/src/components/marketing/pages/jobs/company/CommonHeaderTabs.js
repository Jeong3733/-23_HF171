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
import { isNotEmptyObj, refreshPage, s3Link } from 'helper/utils';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const CommonHeaderTabs = (props) => {
  const { competition_id } = useParams();
  const { info, isLoggedIn, Auth } = props;
  const location = useLocation();

  const tabItems = [
    {
      title: '소개글',
      link: '/detail/' + competition_id + '/readme',
      isLoggedIn: true,
    },
    // {
    //   title: "일정 (" + props.data.totalReviews + ")",
    //   link: "/marketing/jobs/company/reviews",
    // },
    {
      title: '공지사항',
      link: '/detail/' + competition_id + '/announcements',
      isLoggedIn: true,
    },
    {
      title: 'QA 게시판',
      link: '/detail/' + competition_id + '/qna',
      isLoggedIn: true,
    },
    {
      title: '제출 게시판',
      link: '/detail/' + competition_id + '/submits',
      isLoggedIn: false,
    },
    {
      title: '공모전 관리',
      link: '/manage/' + competition_id,
      isLoggedIn: false,
    },
    {
      title: '평가 관리',
      link: '/evaluate/' + competition_id,
      isLoggedIn: false,
    },
  ];
  const [status, setStatus] = useState({});

  useEffect(() => {
    // postList
    const data8 = {
      competitionId: competition_id,
    };
    const user = Auth.getUser();
    if (user) {
      apiUtils
        .GetUserByCompetition(user, data8)
        .then((response) => {
          console.log(response.data);
          const getStatus = response.data;
          setStatus(getStatus);
        })
        .catch((error) => {
          // alert(error.response.data);
          const getStatus = {
            competition_id: 1,
            team_id: 1,
            user_id: 1,
            role_type: 'Creator',
          };
          setStatus(getStatus);
          handleLogError(error);
        });
    } else {
      const getStatus = {
        competition_id: '',
        team_id: '',
        user_id: '',
        role_type: '',
      };
      setStatus(getStatus);
    }
  }, [competition_id]);

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
  if (isNotEmptyObj(status)) {
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
                        src={s3Link(info.competition_image)}
                        alt={info.competition_image}
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
                <Col xl={7} lg={7} md={7} sm={7}>
                  <div className="w-100 ms-md-4 mt-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        {/* heading */}
                        <h1 className="mb-0 ">{info.competition_name}</h1>

                        <div className="lh-1 mb-2 d-flex align-items-center">
                          <span>
                            {info.competition_start_date}
                            {' ~ '} {info.competition_end_date}
                          </span>
                        </div>
                        <div className="lh-1 mb-2 d-flex align-items-center">
                          <span>user_id:{info.user_id}</span>
                        </div>
                        <div>
                          {/* reviews */}
                          <span className="text-dark fw-medium">
                            뭐 넣지
                          </span>{' '}
                          <span className="ms-0">(Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3}>
                  <div className="w-100 ms-md-4 mt-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        {/* button */}
                        <Badge pill bg="primary" className="me-1">
                          <span className="">
                            {/* https://geeks-react.netlify.app/elements/badges */}
                            {'+23 day'}
                          </span>
                        </Badge>
                        {info.role_type ? (
                          // 참가 중
                          <Badge pill bg="primary" className="me-1">
                            <span className="">{info.role_type}</span>
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
                          // onClick={() => handleCopyClipBoard(location.pathname)}
                        >
                          링크 공유
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row as="header" className="mb-4">
              <span className="text-dark ms-3 fw-medium">
                {info.competition_description}
                {` `}
                {info.competition_description}
                {` `}
                {info.competition_description}
              </span>
            </Row>
            {/* 내비게이션 탭 */}
            <Row className="mb-6">
              <Col>
                {/* nav */}
                <Nav variant="line-bottom">
                  {tabItems.map((item, index) => {
                    if (isLoggedIn) {
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
                      if (item.isLoggedIn) {
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
  }
};

export default CommonHeaderTabs;
