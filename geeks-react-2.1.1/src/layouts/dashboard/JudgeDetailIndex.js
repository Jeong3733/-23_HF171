// import node module libraries
import React, { useState, useEffect, Fragment } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

// import sub components
import JudgeDetailVertical from './JudgeDetailVertical';
import JudgeHeaderDefault from './JudgeHeaderDefault';

// impoort Auth module
import { handleLogError } from 'components/utils/ErrorUtils';
import {
  checkJudgeByPostId,
  getUserInfoList,
  loadFileList,
  loadItemList,
  loadResultData,
  loadScoreFile,
} from 'components/utils/LoadData';
import {
  Accordion,
  Button,
  Col,
  Modal,
  Navbar,
  Offcanvas,
  Row,
} from 'react-bootstrap';
import SummaryPopup from 'components/dashboard/courses/SummaryPopup';
import DocumentQAPopup from 'components/dashboard/courses/DocumentQAPopup';
import PlagiarismCheckPopup from 'components/dashboard/courses/PlagiarismCheckPopup';
import EvaluationPopup from 'components/dashboard/courses/EvaluationPopup';
import { Menu } from 'react-feather';
import PDFViewer from 'components/dashboard/judge/PDFViewer';

const JudgeDetailIndex = ({ children }) => {
  const { judge_id, file_id, post_id } = useParams();
  const navigate = useNavigate();

  const [itemList, setItemList] = useState([]);
  const [itemDetailList, setItemDetailList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [fileInfo, setFileInfo] = useState({});
  const [pageInfo, setPageInfo] = useState([]);
  const [pageResultInfo, setPageResultInfo] = useState([]);
  const [fileResultInfo, setFileResultInfo] = useState([]);
  const [compFileInfo, setCompFileInfo] = useState([]);
  const [compPageInfo, setCompPageInfo] = useState([]);
  const [compPageContent, setCompPageContent] = useState([{}]);
  const [messages, setMessages] = useState([]);

  function getAllData() {
    // ItemList
    loadItemList(post_id).then((getData) => {
      setItemList(getData.evaluation_info_list);
      setItemDetailList(getData.evaluation_detail_info_list);
    });

    loadResultData(file_id).then((getData) => {
      // console.log(getData);
      // FileInfo
      const {
        file_id,
        user_id,
        file_title,
        file_extension,
        path,
        summary,
        upload_datetime,
      } = getData;
      setFileInfo({
        file_id,
        user_id,
        file_title,
        file_extension,
        path,
        summary,
        upload_datetime,
      });

      setPageInfo(getData.page_info_list);

      const newPageResultInfo = [];
      getData.page_info_list.forEach((item) => {
        newPageResultInfo.push(...item.page_result_info_list);
      });
      // console.log(pageResultInfoLists);
      setPageResultInfo(newPageResultInfo);
      setFileResultInfo(getData.file_result_info_list);

      const newCompFileInfo = {};
      getData.comp_file_info_list.forEach((item) => {
        newCompFileInfo[item.comp_file_id] = item;
      });
      setCompFileInfo(newCompFileInfo);
      setCompPageInfo(getData.comp_page_info_list);
      setCompPageContent(getData.page_content_list.pageInfo);
    });

    // ScoreList
    loadScoreFile(file_id, judge_id).then((getData) => {
      setScoreList(getData);
    });
  }

  useEffect(() => {
    // 접근 유무 확인
    checkJudgeByPostId(judge_id, post_id).then((getData) => {
      if (getData) {
        getAllData();
      } else {
        alert('심사위원 인증을 실패했습니다.');
        navigate(`/judge/sign-in/`);
      }
    });
  }, []);

  const data = {
    fileInfo: {
      data: fileInfo,
      setData: setFileInfo,
    },
    pageInfo: {
      data: pageInfo,
      setData: setPageInfo,
    },
    pageResultInfo: {
      data: pageResultInfo,
      setData: setPageResultInfo,
    },
    fileResultInfo: {
      data: fileResultInfo,
      setData: setFileResultInfo,
    },
    compFileInfo: {
      data: compFileInfo,
      setData: setCompFileInfo,
    },
    compPageInfo: {
      data: compPageInfo,
      setData: setCompPageInfo,
    },
    compPageContent: {
      data: compPageContent,
      setData: setCompPageContent,
    },
    itemList: {
      data: itemList,
      setData: setItemList,
    },
    itemDetailList: {
      data: itemDetailList,
      setData: setItemDetailList,
    },
    scoreList: {
      data: scoreList,
      setData: setScoreList,
    },
    messages: {
      data: messages,
      setData: setMessages,
    },
  };

  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  console.log(itemList);
  console.log(itemDetailList);
  console.log(scoreList);
  return (
    <div>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center gap-2 ps-2">
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Button>
            <Link id="nav-toggle" onClick={() => ToggleMenu(!showMenu)}>
              <Menu size="18px" />
            </Link>
            {fileInfo.file_title}
          </div>
          <div className="d-flex align-items-center gap-2">
            <Button onClick={() => setShowPopup(true)}>표절 검사</Button>
            <Button variant="primary" onClick={toggleShow}>
              평가하기
            </Button>
            <Offcanvas
              show={show}
              placement={'end'}
              onHide={handleClose}
              scroll={true}
              backdrop={false}
              style={{ '--geeks-offcanvas-width': '500px' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>참가자 평가</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <EvaluationPopup data={data} />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </Navbar>
      <div className="d-flex flex-row w- justify-content-center align-items-stretch">
        <div className="d-flex w-30 flex-column justify-content-start gap-3 m-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>문서 요약</Accordion.Header>
              <Accordion.Body>
                <SummaryPopup fileInfo={fileInfo} pageInfo={pageInfo} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>문서 QNA</Accordion.Header>
              <Accordion.Body>
                <DocumentQAPopup
                  fileInfo={fileInfo}
                  messages={messages}
                  setMessages={setMessages}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="d-flex flex-column justify-content-start gap-3 m-3">
          {fileInfo && <PDFViewer fileInfo={fileInfo} />}
        </div>
      </div>
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        // size="lg"
        style={{ '--geeks-modal-width': '1100px' }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            {/* <i className={`nav-icon fe me-2`}></i> */}
            {'표절검사 결과 보고서'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlagiarismCheckPopup data={data} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
          <Button
            variant="outline-secondary"
            onClick={() => setShowPopup(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default JudgeDetailIndex;
