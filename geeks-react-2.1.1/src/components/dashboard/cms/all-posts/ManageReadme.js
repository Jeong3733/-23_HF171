// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { Col, Row, Button, Breadcrumb } from 'react-bootstrap';

// import sub components

// import data files
import {
  loadCompetitionInfo,
  updateReadme,
  validateCreator,
} from 'components/utils/LoadData';
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';

const ManageReadme = () => {
  const { Auth, competitionInfo, setCompetitionInfo } = useOutletContext();
  const { competition_id } = useParams();
  // alert(competition_id);

  const [readme, setReadme] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const user = Auth.getUser();
    validateCreator(user, competition_id).then((getData) => {
      if (getData === 'yes') {
        // console.log('관리자입니다.');
        // console.log(competitionInfo.competition_readme);
        setReadme(competitionInfo.competition_readme);
      } else if (getData === 'no') {
        alert('권한이 없습니다.');
        navigate('/');
      } else {
        alert('로그인하고 오세요!');
        navigate('/authentication/sign-in/');
      }
    });
  }, []);

  const handleChange = (event) => {
    setReadme(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(readme);
    updateReadme(competition_id, readme).then((getData) => {
      // console.log(getData);    // competitionInfo
      loadCompetitionInfo(competition_id).then((response) => {
        setCompetitionInfo(response);
      });
      if (getData === 'success') {
        alert('소개글이 수정되었습니다.');
      } else {
        alert('소개글 수정에 실패하였습니다.');
      }
    });
  };

  if (readme) {
    return (
      <Fragment>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">소개글 관리</h1>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href={`/detail/${competitionInfo.competition_info_id}/`}
                  >
                    {competitionInfo.competition_name}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>관리</Breadcrumb.Item>
                  <Breadcrumb.Item active>소개글 관리</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <Button variant="primary" onClick={handleSubmit}>
                  소개글 수정하기
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12}>
            <ReactQuillEditor
              initialValue={readme}
              id="competitionReadme"
              name="competitionReadme"
              value={readme}
              handleChange={handleChange}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
};

export default ManageReadme;
