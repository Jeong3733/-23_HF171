// import node module libraries
import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const SignUp = () => {
  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // componentDidMount;
  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkPassword.value !== e.target.password.value) {
      alert('암호가 일치하지 않습니다.');
      return;
    }

    let postObject = {};
    for (let t of e.target) {
      // console.log(t);
      postObject[t.id] = t.value;
    }

    alert(JSON.stringify(postObject));

    apiUtils
      .signUp(postObject)
      .then((response) => {
        const data = response.data;

        // 요청 확인
        alert(data);

        // 성공페이지 이동
        navigate('/authentication/sign-up-success');
      })
      .catch((error) => {
        handleLogError(error);
      });

    // navigate('/authentication/sign-up-success');
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <Fragment>
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
          <Col lg={5} md={5} className="py-8 py-xl-0">
            <Card>
              <Card.Body className="p-6">
                <div className="mb-4">
                  <Link to="/">
                    <Image src={Logo} className="mb-4" alt="" />
                  </Link>
                  <h1 className="mb-1 fw-bold">회원가입</h1>
                  <span>
                    계정이 이미 있으신가요?
                    <Link to="/authentication/sign-in" className="ms-1">
                      로그인
                    </Link>
                  </span>
                </div>
                {/* Form */}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Label>이름 </Form.Label>
                      <Form.Control
                        type="text"
                        id="userName"
                        placeholder="예) 홍길동"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      <Form.Label>이메일 </Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="예) user@example.com"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      {/* User Name */}
                      <Form.Label>아이디 </Form.Label>
                      <Form.Control
                        type="id"
                        id="userId"
                        placeholder="아이디"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      {/* Password */}
                      <Form.Label>암호 </Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="암호"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      {/* Password */}
                      <Form.Label>암호 확인 </Form.Label>
                      <Form.Control
                        type="password"
                        id="checkPassword"
                        placeholder="암호 확인"
                        required
                      />
                    </Col>
                    {/* <Col lg={12} md={12} className="mb-3">
                      <Form.Check type="checkbox" id="check-api-checkbox">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label>
                          I agree to the
                          <Link to="/pages/terms-and-conditions">
                            Terms of Service{" "}
                          </Link>{" "}
                          and{" "}
                          <Link to="/pages/terms-and-conditions">
                            Privacy Policy.
                          </Link>
                        </Form.Check.Label>
                      </Form.Check>
                    </Col> */}
                    <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                      <Button variant="outline-secondary" type="button">
                        취소
                      </Button>
                      <Button variant="primary" type="submit">
                        가입하기
                      </Button>
                    </Col>
                  </Row>
                </Form>
                {/* <hr className="my-4" />
                <div className="mt-4 text-center">
                  <Link
                    to="#"
                    className="btn-social btn-social-outline btn-facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>{" "}
                  <Link
                    to="#"
                    className="btn-social btn-social-outline btn-twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>{" "}
                  <Link
                    to="#"
                    className="btn-social btn-social-outline btn-linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>{" "}
                  <Link
                    to="#"
                    className="btn-social btn-social-outline btn-github"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
};

export default SignUp;
