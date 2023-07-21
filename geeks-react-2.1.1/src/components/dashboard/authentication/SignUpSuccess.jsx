import { Link } from "react-router-dom";

const { Card, Row, Col, Button, Image } = require("react-bootstrap");

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg';

const SignUpSuccess = () => {
    return (
        <>
            <Row className="align-items-center justify-content-center g-0 min-vh-100">
                <Col lg={5} md={5} className="py-8 py-xl-0">
                    <Card>
                        <Card.Header className="p-6">
                            <h1 className="m-0">환영합니다! 🎉</h1>
                            <span>회원가입이 완료되었습니다.</span>
                        </Card.Header>
                        <Card.Body className="p-6">
                            <div className="d-grid gap-2">
                                <Button type="button" href="/" variant="outline-primary">홈으로</Button>
                                <Button type="button" href="/authentication/sign-in">로그인</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default SignUpSuccess;