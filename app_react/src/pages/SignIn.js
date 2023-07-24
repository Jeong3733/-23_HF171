// import node module libraries
import {Fragment, useContext, useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";

// import media files
import Logo from "assets/images/brand/logo/logo-icon.svg";
import AuthContext from "../components/AuthContext";
import {apiUtils} from "../components/utils/ApiUtils";
import {handleLogError} from "../components/utils/ErrorUtils";
import {parseJwt} from "../components/utils/JwtUtils";
import {useCookies} from "react-cookie";

const SignIn = () => {

  const Auth = useContext(AuthContext);

  const [cookie, setCookie] = useCookies(['refreshToken']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username) {
      alert("아이디를 작성해주세요!");
      return;
    } else if (!password) {
      alert("비밀번호를 작성해주세요!");
      return;
    }

    apiUtils.signIn(username, password)
        .then(response => {
          const { accessToken, refreshToken } = response.data;
          const data = parseJwt(accessToken);
          
          // local storage 에 data, access token 저장
          const user = { data, accessToken };
          
          // cookie 에 refresh token 저장
          setCookie('refreshToken', refreshToken, {path: '/'});

          Auth.userLogin(user);

          setIsLoggedIn(true);
        })
        .catch(error => {
          handleLogError(error);
          alert(error.response.data);
        })
  };

  if (isLoggedIn) {
    return <Navigate to='/' />
  } else {
    return (
        <Fragment>
          <Row className="align-items-center justify-content-center g-0 min-vh-100">
            <Col lg={5} md={5} className="py-8 py-xl-0">
              <Card>
                <Card.Body className="p-6">
                  <div className="mb-4">
                    <Link to="/">
                      <Image src={Logo} className="mb-4" alt=""/>
                    </Link>
                    <h1 className="mb-1 fw-bold">Sign in</h1>
                    <span>
                  Don’t have an account?{" "}
                      <Link to="/signUp" className="ms-1">
                    Sign up
                  </Link>
                </span>
                  </div>
                  {/* Form */}
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Username or email */}
                        <Form.Label>Username </Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Email address here"
                            onChange={handleInputChange}
                            required
                        />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Password */}
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            name="password"
                            placeholder="**************"
                            onChange={handleInputChange}
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
                            <Form.Check type="checkbox" label="Remember me"/>
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
                  <hr className="my-4"/>
                  <div className="mt-4 text-center">
                    {/* Facebook */}
                    <Link
                        to="#"
                        className="btn-social btn-social-outline btn-facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </Link>{" "}
                    {/* Twitter */}
                    <Link
                        to="#"
                        className="btn-social btn-social-outline btn-twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>{" "}
                    {/* LinkedIn */}
                    <Link
                        to="#"
                        className="btn-social btn-social-outline btn-linkedin"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>{" "}
                    {/* GitHub */}
                    <Link
                        to="#"
                        className="btn-social btn-social-outline btn-github"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Fragment>
    );
  }
};

export default SignIn;
