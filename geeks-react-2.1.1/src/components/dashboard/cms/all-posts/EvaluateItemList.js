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
import {
  loadCompetitionInfo,
  loadItemList,
  loadPostInfo,
} from 'components/utils/LoadData';
import AddItemDetailForm from './AddItemDetailForm';

const EvaluateItemList = () => {
  const { competition_id, post_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();
  // console.log(competition_id);

  const [showAdd, setShowAdd] = useState(false);
  const [showAddDetail, setShowAddDetail] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseAddDetail = () => setShowAddDetail(false);
  const handleShowAddDetail = (id) => {
    setSelectedId(id);
    setShowAddDetail(true);
  };

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [postInfo, setPostInfo] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [itemDetailList, setItemDetailList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // competitionInfo
    loadCompetitionInfo(competition_id).then((getData) => {
      setCompetitionInfo(getData);
    });

    // postInfo

    loadPostInfo(post_id).then((getData) => {
      setPostInfo(getData);
    });

    // itemList
    loadItemList(post_id).then((getData) => {
      setItemList(getData.evaluation_info_list);
      setItemDetailList(getData.evaluation_detail_info_list);
    });
  }, [isLoggedIn]);

  // console.log(itemDetailList);
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
            <div className="d-md-flex align-items-center justify-content-between gap-2">
              <Button variant="primary" onClick={handleShowAdd}>
                평가 항목 추가
              </Button>
              <Button variant="primary" onClick={handleShowAddDetail}>
                평가 세부 항목 추가
              </Button>
              <Modal show={showAdd} onHide={handleCloseAdd} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>평가 항목 추가 페이지</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddItemForm setItemList={setItemList} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                  <Button variant="outline-secondary" onClick={handleCloseAdd}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showAddDetail}
                onHide={handleCloseAddDetail}
                size="lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>평가 세부 항목 추가 페이지</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddItemDetailForm
                    setItemDetailList={setItemDetailList}
                    itemList={itemList}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                  />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                  <Button
                    variant="outline-secondary"
                    onClick={handleCloseAddDetail}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <ItemTable
            itemList={itemList}
            itemDetailList={itemDetailList}
            handleShowAdd={handleShowAdd}
            handleShowAddDetail={handleShowAddDetail}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default EvaluateItemList;
