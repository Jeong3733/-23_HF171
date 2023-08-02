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
} from 'react-bootstrap';
import { Fragment } from 'react';

// import media files
import CompanyBG from 'assets/images/background/company-bg.jpg';

const CommonHeaderTabs = (props) => {
  const { competiton_id } = useParams();
  // const { test_data } = props;
  const location = useLocation();

  const tabItems = [
    {
      title: '소개글',
      link: '/detail/' + competiton_id + '/readme',
    },
    // {
    //   title: "일정 (" + props.data.totalReviews + ")",
    //   link: "/marketing/jobs/company/reviews",
    // },
    {
      title: '공지사항',
      link: '/detail/' + competiton_id + '/announcements',
    },
    {
      title: 'QA 게시판',
      link: '/detail/' + competiton_id + '/qna',
    },
    {
      title: '제출',
      link: '/detail/' + competiton_id + '/submits',
    },
    {
      title: '평가',
      link: '/evaluate/' + competiton_id,
    },
    {
      title: '관리',
      link: '/manage/' + competiton_id,
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
                <Image
                  src={props.data.logo}
                  alt=""
                  className=" rounded-3 border"
                  width={120}
                />
              </div>
              <div className="w-100 ms-md-4 mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    {/* heading */}
                    <h1 className="mb-0 ">{props.data.company} </h1>
                    <div>
                      {/* reviews */}
                      <span className="text-dark fw-medium">
                        {props.data.rating}{' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="currentColor"
                          className="bi bi-star-fill text-warning align-baseline"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>{' '}
                      <span className="ms-0">
                        ({props.data.totalReviews} Reviews)
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* button */}
                    <Button to="#" variant="outline-primary">
                      참가 신청
                    </Button>
                    {/* button */}
                    <Button to="#" variant="outline-primary">
                      링크 공유
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* 내비게이션 탭 */}
          <Row className="mb-6">
            <Col>
              {/* nav */}
              <Nav variant="line-bottom">
                {tabItems.map((item, index) => (
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
                ))}
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
