// import node module libraries
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { Col, Row, Container, Card } from 'react-bootstrap';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
// import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ApplyForm from './ApplyForm.js';
import { isNotEmptyObj } from 'helper/utils.js';

const ItemPage = () => {
  const { competition_id, post_id } = useParams();
  const { Auth } = useOutletContext();
  const [postInfo, setPostInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // postInfo
    const data4 = {
      postId: post_id,
    };
    const user = Auth.getUser();
    if (user) {
      apiUtils
        .GetPostInfoChkByPostId(user, data4)
        .then((response) => {
          const getPostInfo = response.data;
          setPostInfo(getPostInfo);
        })
        .catch((error) => {
          // alert(error.response.data);
          const getPostInfo = {
            post_info_id: 1,
            user_info_id: 'www',
            competition_info_id: 1,
            board_type: 'SUBMIT',
            // board_type: 'NOTICE',
            title: 'API 에러',
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
            file_title: 'API 에러',
            file_type: null,
            file_extension: 'HWP',
            upload_datetime: '2023-08-05T00:09:12',
          }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
          setPostInfo(getPostInfo);
          handleLogError(error);
        });
    } else {
      alert('로그인하고 오세요!');
      navigate('/authentication/sign-in/');
    }
  }, [post_id]);

  console.log(postInfo.board_type);
  if (isNotEmptyObj(postInfo)) {
    return (
      <section className="bg-white">
        <Container>
          <Row>
            <div className="mb-5">
              {/* heading */}
              <div className="text-center mb-6">
                <h1 className="display-3 mb-4 fw-bold">{postInfo.title}</h1>
                {postInfo.created_date}
              </div>
            </div>
          </Row>
          <Row>
            {postInfo.board_type === 'SUBMIT' && (
              <Col
                xl={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                xs={12}
              >
                {postInfo.file_info_list ? ( // 제출 게시물 - 업로드한 상태
                  <ApplyForm Auth={Auth} fileList={postInfo.file_info_list} />
                ) : (
                  // 제출 게시물 - 업로드 안한 상태
                  <ApplyForm Auth={Auth} />
                )}
              </Col>
            )}
            <Col
              xl={{
                span: 8,
                offset: `${postInfo.board_type !== 'SUBMIT' && 2}`,
              }}
              lg={{
                span: 8,
                offset: `${postInfo.board_type !== 'SUBMIT' && 2}`,
              }}
              xs={12}
            >
              <Card className="mt-3 bg-light shadow-none">
                <Card.Body className="p-md-4">
                  <div className="mb-5">
                    {/* heading */}
                    <div className="mt-2">
                      <div className="mt-4">{postInfo.contents}</div>
                    </div>
                    {/* form to apply for this job */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
};

export default ItemPage;
