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
import { handleCopyTextClipBoard, isNotEmptyObj } from 'helper/utils';

const JudgeSignIn = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log('handleClick');
    const judge_id = '32af249e-96e3-4524-a46d-c973c0d1b839';
    handleCopyTextClipBoard(judge_id);
  };

  const [formData, setFormData] = useState({
    judgeId: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(formData);
  };

  const resetForm = () => {
    setFormData({
      judgeId: '',
    });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(formData));
    apiUtils
      .GetCheckJudge(formData)
      .then((response) => {
        const checkJudge = response.data;
        navigate(
          `/judge/evaluate/${checkJudge.judge_id}/${checkJudge.post_id}/files/`,
        );
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);

        // case 1: 심사위원이 아닌 경우
        alert('올바르지 않은 심사위원 ID 입니다.');
        handleLogError(error);
        resetForm();

        // case 2: 더미데이터를 사용하는 경우
        // alert('더미데이터를 사용합니다.');
        // const checkJudge = {
        //   post_id: 1,
        //   judge_id: formData.judgeId,
        // }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        // navigate(
        //   `/judge/evaluate/${checkJudge.judge_id}/${checkJudge.post_id}/files/`,
        // );
      });
  };

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
                <h1 className="mb-1 fw-bold">평가 페이지 Sign in</h1>
                <button className="mb-1 fw-bold" onClick={handleClick}>
                  임시 심사위원 ID 복사
                </button>
              </div>
              {/* Form */}

              <Form>
                <Form.Group className="mb-3" controlId="judgeId">
                  <Form.Label>심사위원 ID</Form.Label>
                  <Form.Control
                    value={formData.judgeId}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                  Sign in
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default JudgeSignIn;
