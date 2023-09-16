// import node module libraries
import React, { useState, useEffect, Fragment } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

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
import { Accordion, Button, Col, Modal, Offcanvas, Row } from 'react-bootstrap';
import SummaryPopup from 'components/dashboard/courses/SummaryPopup';
import DocumentQAPopup from 'components/dashboard/courses/DocumentQAPopup';
import PlagiarismCheckPopup from 'components/dashboard/courses/PlagiarismCheckPopup';
import EvaluationPopup from 'components/dashboard/courses/EvaluationPopup';

const JudgeDetailIndex = ({ children }) => {
  const { judge_id, file_id, post_id } = useParams();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const [fileList, setFileList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [fileInfo, setFileInfo] = useState({});
  const [pageInfo, setPageInfo] = useState([]);
  const [pageResultInfo, setPageResultInfo] = useState([]);
  const [fileResultInfo, setFileResultInfo] = useState([]);
  const [compFileInfo, setCompFileInfo] = useState([]);
  const [compPageInfo, setCompPageInfo] = useState([]);
  const [compPageContent, setCompPageContent] = useState([{}]);
  const [messages, setMessages] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);

  function getAllData() {
    // FileList
    loadFileList(post_id).then((getData) => {
      setFileList(getData);
      // console.log(getData);
      getUserInfoList([
        ...new Set(getData.map((item) => item.user_info_id)),
      ]).then((getData) => {
        setUserInfoList(getData);
      });
    });
    // ItemList
    loadItemList(post_id).then((getData) => {
      setItemList(getData.evaluation_info_list);
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
      setScoreList(getData.evaluation_score_list);
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
    fileList: {
      data: fileList,
      setData: setFileList,
    },
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
    scoreList: {
      data: scoreList,
      setData: setScoreList,
    },
    messages: {
      data: messages,
      setData: setMessages,
    },
    userInfoList: {
      data: userInfoList,
      setData: setUserInfoList,
    },
  };

  const [showPlagiarismCheckPopup, setShowPlagiarismCheckPopup] =
    useState(false);

  // console.log(data);
  return (
    <div>
      <JudgeHeaderDefault
        data={{
          showMenu: showMenu,
          SidebarToggleMenu: ToggleMenu,
        }}
        AllData={data}
        navigate={navigate}
        setShowPlagiarismCheckPopup={setShowPlagiarismCheckPopup}
      />
      <div className="d-flex flex-row w- justify-content-center align-items-stretch">
        <div className="d-flex w-30 flex-column justify-content-start gap-3 m-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>문서 요약</Accordion.Header>
              <Accordion.Body>
                <SummaryPopup
                  fileInfo={data.fileInfo}
                  pageInfo={data.pageInfo}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>문서 QNA</Accordion.Header>
              <Accordion.Body>
                <DocumentQAPopup
                  fileInfo={data.fileInfo}
                  messages={data.messages}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="d-flex flex-column justify-content-start gap-3 m-3">
          {children}
          <Outlet context={{ fileInfo }} />
        </div>
      </div>
      <Modal
        show={showPlagiarismCheckPopup}
        onHide={() => setShowPlagiarismCheckPopup(false)}
        // onHide={test(11)}
        size="lg"
      >
        <Modal.Header closeButton>
          {/* <Modal.Header closeButton> */}
          <Modal.Title className="d-flex align-items-center">
            {/* <i className={`nav-icon fe me-2`}></i> */}
            {'표절검사 결과 보고서'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlagiarismCheckPopup data={data} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
          {/*  Action Buttons  */}
          <Button
            variant="outline-secondary"
            onClick={() => setShowPlagiarismCheckPopup(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default JudgeDetailIndex;

{
  /* <div
id="db-wrapper"
className={`${overflowHidden ? 'chat-layout' : ''} ${
  showMenu ? '' : 'toggled'
}`}
>
<div className="navbar-vertical navbar">
  <JudgeDetailVertical
    showMenu={showMenu}
    onClick={(value) => setShowMenu(value)}
    data={data}
  />
</div>
<section id="page-content">
  <div className="header">
    <JudgeHeaderDefault
      data={{
        showMenu: showMenu,
        SidebarToggleMenu: ToggleMenu,
      }}
      fileInfo={fileInfo}
      scoreList={scoreList}
      itemList={itemList}
    />
  </div>
  <div className={`container-fluid ${className ? className : 'p-4'}`}>
    {children}
    <Outlet context={{ fileInfo }} />
  </div>
</section>
</div> */
}
