// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Nav,
  Tab,
  Breadcrumb,
  Button,
  Modal,
} from 'react-bootstrap';

// impoort Auth module
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ItemTable from './ItemTable';
import AddItemForm from './AddItemForm';
import { refreshPage } from 'helper/utils';

const EvaluateItemList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();
  // console.log(competition_id);

  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => {
    setShowAdd(false);
    refreshPage();
  };
  const handleShowAdd = () => setShowAdd(true);

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    // competitionInfo
    console.log('competitionInfo');
    const data1 = {
      competitionId: competition_id,
    };
    apiUtils
      .GetCompetitionInfoByCompetitionId(data1)
      .then((response) => {
        const getCompetitionInfo = response.data;
        setCompetitionInfo(getCompetitionInfo);
        // console.log(competitionInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompetitionInfo = {
          competition_info_id: 1,
          competition_name: 'ICT 택관컴퍼니',
          competition_image: 'a941fab3-812a-4a6a-a008-28c70b01e52f',
          competition_readme: '<p>ICT 택관컴퍼니 입니다~</p>',
          competition_description: 'ICT 택관컴퍼니',
          competition_state: null,
          competition_start_date: '2023-08-02T00:00',
          competition_end_date: '2023-08-25T00:00',
          competition_type_list: [
            {
              competition_info_id: 1,
              type: '개발',
            },
            {
              competition_info_id: 1,
              type: '교육',
            },
            {
              competition_info_id: 1,
              type: '엔터테인먼트',
            },
          ],
          competition_docs_list: [
            {
              competition_info_id: 1,
              docs_path: '447d2d03-8d89-4b68-bcf3-20d9cdc864f8',
              file_title: 'competitionDocs',
            },
          ],
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompetitionInfo(getCompetitionInfo);
        handleLogError(error);
      });

    // postInfo
    const data2 = {
      postId: post_id,
    };
    apiUtils
      .GetEvaluationItemByPostId(data2)
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
          board_type: 'NOTICE',
          title: 'notice1',
          contents: '공지에요',
          created_date: '2023-08-04T20:18:21',
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setPostInfo(getPostInfo);
        handleLogError(error);
      });

    // itemList
    const formDataToSend = { postId: post_id };
    apiUtils
      .GetEvaluationItemByPostId(formDataToSend)
      .then((response) => {
        const getItemList = response.data;
        console.log(getItemList);
        setItemList(getItemList.evaluation_info_list);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getItemList = {
          judge_info_list: [
            {
              judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
              post_id: 1,
            },
            {
              judge_id: '365e1ca6-bd3d-413d-ba09-eb31c54849e2',
              post_id: 1,
            },
          ],
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setItemList(getItemList.evaluation_info_list);
        handleLogError(error);
        console.log(itemList);
      });
  }, [isLoggedIn]);

  console.log(itemList);
  if (itemList.length !== 0) {
    return (
      <Fragment>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">평가 항목 관리</h1>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href={`/detail/${competitionInfo.competition_info_id}/`}
                  >
                    {competitionInfo.competition_name}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>평가</Breadcrumb.Item>
                  <Breadcrumb.Item>{postInfo.title}</Breadcrumb.Item>
                  <Breadcrumb.Item active>평가 항목 관리</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="d-md-flex align-items-center justify-content-between">
                <div>
                  <Button variant="primary" onClick={handleShowAdd}>
                    평가 항목 추가
                  </Button>
                  <Modal show={showAdd} onHide={handleCloseAdd} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>평가 항목 추가 페이지</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AddItemForm Auth={Auth} />
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                      <Button
                        variant="outline-secondary"
                        onClick={handleCloseAdd}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <ItemTable table_data={itemList} />
          </Col>
        </Row>
      </Fragment>
    );
  }
};

export default EvaluateItemList;
