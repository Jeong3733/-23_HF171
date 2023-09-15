// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// import sub components
import JudgeDetailVertical from './JudgeDetailVertical';
import JudgeHeaderDefault from './JudgeHeaderDefault';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import {
  checkJudgeByPostId,
  getUserInfoList,
  loadFileList,
  loadItemList,
  loadResultData,
  loadScoreFile,
} from 'components/utils/LoadData';

const JudgeDetailIndex = (props) => {
  const { children, className, overflowHidden } = props;
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
    checkJudgeByPostId(judge_id, post_id)
      .then((getData) => {
        if (getData) {
          getAllData();
        } else {
          alert('심사위원 인증을 실패했습니다.');
          navigate(`/judge/sign-in/`);
        }
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);

        // case 1: 심사위원 인증 실패
        alert('API 호출 실패했습니다.');
        navigate(`/judge/sign-in/`);

        // case 2: 더미데이터를 사용하는 경우
        // alert('더미데이터를 사용하여 심사위원 인증을 합니다.');
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

  // console.log(data);
  return (
    <div
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
          />
        </div>
        <div className={`container-fluid ${className ? className : 'p-4'}`}>
          {children}
          <Outlet context={{ fileInfo }} />
        </div>
      </section>
    </div>
  );
};
export default JudgeDetailIndex;
