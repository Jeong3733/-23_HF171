// import node module libraries
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ApplyForm from './ApplyForm.js';

const ItemPage = () => {
  const { competition_id, post_id } = useParams();
  const { Auth } = useOutletContext();
  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    // postInfo
    const data4 = {
      postId: post_id,
    };
    const user = Auth.getUser();
    apiUtils
      .GetPostInfoChkByPostId(user, data4)
      .then((response) => {
        const getPostInfo = response.data;
        setPostInfo(getPostInfo[0]);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getPostInfo = [
          {
            post_info_id: 1,
            user_info_id: 'www',
            competition_info_id: 1,
            board_type: 'SUBMIT',
            // board_type: 'NOTICE',
            title: 'notice1',
            contents: '공지에요',
            created_date: '2023-08-04T20:18:21',
            upload_post_type_list: [
              {
                post_info_id: 1,
                type: 'pdf',
              },
              {
                post_info_id: 1,
                type: 'ppt',
              },
            ],
            file_info_id: 1,
            path: '168eeb95-883d-4252-969e-d3fb93f6cf11',
            file_title: 'sdfsdf',
            file_type: null,
            file_extension: 'HWP',
            upload_datetime: '2023-08-05T00:09:12',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setPostInfo(getPostInfo[0]);
        handleLogError(error);
      });
  }, [post_id]);
  console.log(postInfo);
  return (
    <section className="bg-white">
      <Container>
        <Row>
          <div className="mb-5">
            {/* heading */}
            <div className="text-center mb-6">
              <h1 className="display-3 mb-4 fw-bold">
                post_info_id: {postInfo.post_info_id}
                <br />
                competition_info_id: {postInfo.competition_info_id}
              </h1>
            </div>
          </div>
        </Row>
        <Row>
          {postInfo.board_type === 'SUBMIT' && postInfo.file_info_id ? (
            // 업로드한 상태
            <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
              {/* <Col xl={{ span: 4, offset: 0 }} xs={12}> */}
              <ApplyForm Auth={Auth} file={postInfo} />
            </Col>
          ) : (
            <Col xl={{ span: 4, offset: 0 }} lg={4} xs={12}>
              {/* <Col xl={{ span: 4, offset: 0 }} xs={12}> */}
              <ApplyForm Auth={Auth} />
            </Col>
          )}
          <Col
            xl={{
              span: 8,
              offset: `${postInfo.board_type === 'SUBMIT' ? 4 : 2}`,
            }}
            lg={{
              span: 8,
              offset: `${postInfo.board_type === 'SUBMIT' ? 4 : 2}`,
            }}
            xs={12}
          >
            <div className="mb-5">
              {/* heading */}
              <div className="mt-2">
                <div className="mt-4">{postInfo.contents}</div>
              </div>
              {/* form to apply for this job */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItemPage;
