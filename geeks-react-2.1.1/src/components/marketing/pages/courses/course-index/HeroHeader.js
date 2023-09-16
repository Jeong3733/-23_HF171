// Section : Hero Header
// Style : Welcome Text on left and image on right

// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import media files
import Together from 'assets/images/together-2.png';

const HeroHeader = (props) => {
  const { isLoggedIn, UserInfo } = props;
  console.log(UserInfo.role);
  return (
    <section className="bg-primary">
      <Container>
        {/*  Hero Section  */}
        <Row className="align-items-center g-0">
          <Col xl={8} lg={7} md={12}>
            <div className="py-5 py-lg-0">
              <h1 className="text-white display-4 fw-bold">
                미래의 공모전 플랫폼을 만나보세요!
              </h1>
              <p className="text-white-50 mb-4 lead">
                주최자와 심사위원의 고민을 함께 합니다. <br />
                AI를 활용한 최적의 공모전 플랫폼 <br />
                효율적인 심사 지원부터 표절 검사까지, 공모전의 모든 과정을
                지원합니다
              </p>
              <Link to="/explore/" className="btn btn-dark">
                공모전 둘러보기
              </Link>{' '}
              <Link to="/guide/" className="btn btn-dark">
                사용 설명서
              </Link>{' '}
              {isLoggedIn ? (
                <Link to="/dashboard/common/" className="btn btn-white">
                  마이페이지 🧐
                </Link>
              ) : (
                <Link to="/authentication/sign-in/" className="btn btn-white">
                  로그인 🧐
                </Link>
              )}{' '}
              {isLoggedIn && UserInfo && UserInfo.role === 'ADMIN' && (
                <Link to="/dbupload/" className="btn btn-white">
                  표절DB 추가
                </Link>
              )}
            </div>
          </Col>
          <Col
            xl={4}
            lg={5}
            md={12}
            className="text-lg-end text-center d-flex justify-content-center"
          >
            <Image src={Together} alt="" height={400} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroHeader;
