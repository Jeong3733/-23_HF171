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
import { getPostInfoChkByPostId } from 'components/utils/LoadData.js';

const ItemPage = () => {
  const { competition_id, post_id } = useParams();
  const { Auth } = useOutletContext();
  const [postInfo, setPostInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = Auth.getUser();
    if (user) {
      getPostInfoChkByPostId(user, post_id).then((getData) => {
        setPostInfo(getData);
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
                  <ApplyForm
                    Auth={Auth}
                    fileList={postInfo.file_info_list}
                    setPostInfo={setPostInfo}
                  />
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
