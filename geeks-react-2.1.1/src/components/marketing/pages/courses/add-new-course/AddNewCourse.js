// import node module libraries
import React, { useState, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import GKStepper from "components/elements/stepper/GKStepper";

// import sub components ( Steps )
import BasicInformation from "./steps/BasicInformation";
import CoursesMedia from "./steps/CoursesMedia";
import Curriculum from "./steps/Curriculum";

const AddNewCourse = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const initialValue = `<p>공모전 소개 글을 입력하세요.</p>
                        <p><br /></p>        
                        <p><strong>이렇게</strong> <em>글자에</em> <u>스타일을</u> 적용할 수도 있습니다.</p>`;

  const [formData, setFormData] = useState({
    competition_name: "",
    competition_type: "",
    competition_description: "",
    competition_image: "",
    competition_docs: "",
    competition_intro: initialValue,
  });
  // console.log(formData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const pageCount = 3;

  const next = () => {
    setCurrentStep(currentStep === pageCount ? 1 : currentStep + 1);
  };
  const previous = () => {
    setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
  };
  const submit = () => {
    alert(JSON.stringify(formData));
  }

  const steps = [
    {
      id: 1,
      title: "기본 정보",
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
      title: "소개글",
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
      title: "미리보기",
      content: (
        <Curriculum
          data={formData}
          handleChange={handleChange}
          submit={submit}
          previous={previous}
        />
      ),
    }
  ];

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
                  <Link
                    to="/explore"
                    className="btn btn-white "
                  >
                    이전 페이지로
                  </Link>{" " /* <-- 이거 누구임 ㅋㅋ... */}
                  <Link
                    onClick={(e) => { alert("이런 고오급 기능은 아직 안 된다구..."); }}
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
};

export default AddNewCourse;
