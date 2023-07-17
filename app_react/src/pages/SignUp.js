// import node module libraries
import {Fragment, useContext, useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
import { apiUtils } from "../components/utils/ApiUtils";

// import media files
import Logo from "assets/images/brand/logo/logo-icon.svg";
import {useAuth} from "../components/AuthContext";
import {handleLogError} from "../components/utils/ErrorUtils";

const SignUp = () => {
  const Auth = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // componentDidMount
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
    } else if (name === 'nickname') {
      setNickname(value);
    } else if (name === 'email') {
      setEmail(value);
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
    } else if (!nickname) {
      alert("닉네임을 작성해주세요!");
      return;
    } else if (!email) {
      alert("이메일을 작성해주세요!");
      return;
    }

    const user = { username, password, nickname, email }
    apiUtils.signUp(user)
        .then(response => {
          const data = response.data;
          alert(data);
          setIsLoggedIn(true);
        })
        .catch(error => {
          handleLogError(error);
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
                      <Image src={Logo} className="mb-4" alt="" />
                    </Link>
                    <h1 className="mb-1 fw-bold">Sign up</h1>
                    <span>
                  Already have an account?{" "}
                      <Link to="/signIn" className="ms-1">
                    Sign in
                  </Link>
                </span>
                  </div>
                  {/* Form */}
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} md={12} className="mb-3">
                        {/* User Name */}
                        <Form.Label>UserName</Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            name="username"
                            placeholder="User Name"
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
                        {/* email */}
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address here"
                            onChange={handleInputChange}
                            required
                        />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Nick Name */}
                        <Form.Label>NickName</Form.Label>
                        <Form.Control
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Nick Name"
                            onChange={handleInputChange}
                            required
                        />
                      </Col>
                      <Col lg={12} md={12} className="mb-3">
                        {/* Checkbox */}
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
                      </Col>
                      <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                        {/* Button */}
                        <Button variant="primary" type="submit">
                          Sign in
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  <hr className="my-4" />
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

export default SignUp;
