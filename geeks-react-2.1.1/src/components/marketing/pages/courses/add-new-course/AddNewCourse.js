// import node module libraries
import React, { useEffect, useState, Fragment } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import GKStepper from 'components/elements/stepper/GKStepper';

// import sub components ( Steps )
import BasicInformation from './steps/BasicInformation';
import CoursesMedia from './steps/CoursesMedia';
import Curriculum from './steps/Curriculum';

// impoort Auth module
// import { useCookies } from 'react-cookie';
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
// import { parseJwt } from 'components/utils/JwtUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const AddNewCourse = () => {
  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [competitionImage, setCompetitionImage] = useState(null);
  const [competitionDocs, setCompetitionDocs] = useState(null);

  // componentDidMount
  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const initialValue = `<p>공모전 소개 글을 입력하세요.</p>
                        <p><br /></p>        
                        <p><strong>이렇게</strong> <em>글자에</em> <u>스타일을</u> 적용할 수도 있습니다.</p>`;

  const [formData, setFormData] = useState({
    competitionName: '',
    competitionType: {
      개발: false,
      교육: false,
      엔터테인먼트: false,
      생활: false,
      업무: false,
      공공: false,
      금융: false,
      의료: false,
      기타: false,
    },
    competitionDescription: '',
    competitionImage: '',
    competitionDateStart: '',
    competitionDateEnd: '',
    competitionReadme: initialValue,
    competitionDocs: '',
  });

  const handleChange = (event) => {
    const newData = {};
    if (event.target.type === 'checkbox') {
      const [parentName, myName] = event.target.getAttribute('name').split(':');
      newData[parentName] = formData[parentName];
      newData[parentName][myName] = event.target.checked;
    } else if (event.target.name === 'competitionImage') {
      if (event.target.files[0]) {
        setCompetitionImage(event.target.files[0]);
        console.log('competitionImage 입니다.');
      }
    } else if (event.target.name === 'competitionDocs') {
      if (event.target.files[0]) {
        setCompetitionDocs(event.target.files[0]);
        console.log('competitionDocs 입니다.');
      }
    } else {
      newData[event.target.name] = event.target.value;
    }
    setFormData({ ...formData, ...newData });
    // console.log(newData);
  };

  const pageCount = 3;

  const next = () => {
    setCurrentStep(currentStep === pageCount ? 1 : currentStep + 1);
  };
  const previous = () => {
    setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
  };

  const navigate = useNavigate();
  const submit = () => {
    const formDataToSend = new FormData();
    formDataToSend.append(
      'data',
      new Blob([JSON.stringify(formData)], { type: 'application/json' }),
    );
    if (competitionImage != null) {
      formDataToSend.append('competitionImage', competitionImage);
    }
    if (competitionDocs != null) {
      formDataToSend.append('competitionDocs', competitionDocs);
    }

    // 로그인 정보 가져오기
    const user = Auth.getUser();
    apiUtils
      .AddCompetition(user, formDataToSend)
      .then((response) => {
        // console.log(response.data);
        // const { accessToken, refreshToken } = response.data;

        // 메인페이지 이동
        navigate('/');
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);
      });
  };

  const steps = [
    {
      id: 1,
      title: '기본 정보',
      content: (
        <BasicInformation
          data={formData}
          handleChange={handleChange}
          next={next}
        />
      ),
    },
    {
      id: 2,
      title: '소개글',
      content: (
        <CoursesMedia
          data={formData}
          handleChange={handleChange}
          next={next}
          previous={previous}
        />
      ),
    },
    {
      id: 3,
      title: '미리보기',
      content: (
        <Curriculum
          data={formData}
          handleChange={handleChange}
          submit={submit}
          previous={previous}
        />
      ),
    },
  ];

  // if (!isLoggedIn) {
  //   return <Navigate to="/authentication/sign-in/" />;
  // } else {
  return (
    <Fragment>
      <section className="py-4 py-lg-6 bg-primary">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="mb-4 mb-lg-0">
                  <h1 className="text-white mb-1">새로운 공모전 주최하기</h1>
                  <p className="mb-0 text-white lead">
                    Just fill the form and create your competition.
                  </p>
                </div>
                <div>
                  <Link to="/explore" className="btn btn-white ">
                    이전 페이지로
                  </Link>
                  <Link
                    onClick={(e) => {
                      alert('이런 고오급 기능은 아직 안 된다구...');
                    }}
                    className="btn btn-dark "
                  >
                    임시저장
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <GKStepper currentStep={currentStep} steps={steps} />
    </Fragment>
  );
  // };
};

export default AddNewCourse;
