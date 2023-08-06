// import node module libraries
import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg';

// impoort Auth module
import { useCookies } from 'react-cookie';
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { parseJwt } from 'components/utils/JwtUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const SignIn = () => {
  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookie, setCookie] = useCookies(['refreshToken']);

  // componentDidMount
  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    let postObject = {};
    for (let t of e.target) {
      postObject[t.id] = t.value;
    }

    apiUtils
      .signIn(postObject)
      .then((response) => {
        const { accessToken, refreshToken } = response.data;
        const data = parseJwt(accessToken);

        // local storage 에 data, access token 저장
        const user = { data, accessToken };
        Auth.userLogin(user);

        // cookie 에 refresh token 저장
        setCookie('refreshToken', refreshToken, { path: '/' });

        setIsLoggedIn(true);

        // 성공페이지 이동
        navigate('/');
      })
      .catch((error) => {
        alert(error.response.data);
        handleLogError(error);
      });
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
                  <h1 className="mb-1 fw-bold">Sign in</h1>
                  <span>
                    Don’t have an account?{' '}
                    <Link to="/authentication/sign-up" className="ms-1">
                      Sign up
                    </Link>
                  </span>
                </div>
                {/* Form */}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      {/* Username or email */}
                      <Form.Label>ID </Form.Label>
                      <Form.Control
                        type="id"
                        id="userId"
                        placeholder="아이디"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      {/* Password */}
                      <Form.Label>Password </Form.Label>
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="비밀번호"
                        required
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      {/* Checkbox */}
                      <div className="d-md-flex justify-content-between align-items-center">
                        <Form.Group
                          className="mb-3 mb-md-0"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link to="/authentication/forget-password">
                          Forgot your password?
                        </Link>
                      </div>
                    </Col>
                    <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                      {/* Button */}
                      <Button variant="primary" type="submit">
                        Sign in
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

export default SignIn;
