// import node module libraries
import { Link, useParams, useLocation } from 'react-router-dom';
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
import { Fragment } from 'react';

// import media files
import CompanyBG from 'assets/images/background/company-bg.jpg';

// import utility filedata
import { s3Link } from 'helper/utils';

const CommonHeaderTabs = (props) => {
  const { competition_id } = useParams();
  const { info, isLoggedIn } = props;
  const location = useLocation();
  console.log(info);
  console.log(info);
  console.log(info);
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
      title: '제출',
      link: '/detail/' + competition_id + '/submits',
      isLoggedIn: false,
    },
    {
      title: '평가',
      link: '/evaluate/' + competition_id,
      isLoggedIn: false,
    },
    {
      title: '관리',
      link: '/manage/' + competition_id,
      isLoggedIn: false,
    },
  ];
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
              <div className="w-100 ms-md-4 mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    {/* heading */}
                    <h1 className="mb-0 ">{info.competition_name} </h1>
                    <h1 className="mb-0 ">user_id:{info.user_id}</h1>

                    <div className="lh-1 mb-2 d-flex align-items-center">
                      <span>
                        {info.competition_start_date}
                        {' ~ '} {info.competition_end_date}
                      </span>
                    </div>
                    <div>
                      {/* reviews */}
                      <span className="text-dark fw-medium">뭐 넣지</span>{' '}
                      <span className="ms-0">(Reviews)</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* button */}
                    <Badge pill bg="primary" className="me-1">
                      <span className="">
                        {/* https://geeks-react.netlify.app/elements/badges */}
                        {'+23 day'}
                      </span>
                    </Badge>
                    <Button to="#" variant="outline-primary">
                      참가 신청
                    </Button>
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
};

export default CommonHeaderTabs;
