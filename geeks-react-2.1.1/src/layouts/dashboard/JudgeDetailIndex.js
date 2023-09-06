// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// import sub components
import JudgeDetailVertical from './JudgeDetailVertical';
import HeaderDefault from './HeaderDefault';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const JudgeDetailIndex = (props) => {
  const { children, className, overflowHidden } = props;
  const { judge_id, file_id, post_id } = useParams();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const [fileList, setFileList] = useState([]);
  function loadFileList() {
    const formData = {
      postId: post_id,
    };

    const sample = [
      {
        file_id: 'file_id_1',
        user_id: 'user_id_1',
        path: 'path_1',
        file_title: 'file_title_1',
        file_extension: 'file_extension_1',
        upload_datetime: 'upload_datetime_1',
        post_info_id: 'post_info_id_1',
      },
      {
        file_id: 'file_id_2',
        user_id: 'user_id_2',
        path: 'path_2',
        file_title: 'file_title_2',
        file_extension: 'file_extension_2',
        upload_datetime: 'upload_datetime_2',
        post_info_id: 'post_info_id_2',
      },
      {
        file_id: 'file_id_3',
        user_id: 'user_id_3',
        path: 'path_3',
        file_title: 'file_title_3',
        file_extension: 'file_extension_3',
        upload_datetime: 'upload_datetime_3',
        post_info_id: 'post_info_id_3',
      },
    ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.

    apiUtils
      .GetFileInfoByPostId(formData)
      .then((response) => {
        const getData = response.data;
        setFileList(getData);
      })
      .catch((error) => {
        setFileList(sample);
        handleLogError(error);
      });
  }

  const [itemList, setItemList] = useState([]);
  function loadEvaluationItem() {
    const formData = {
      postId: post_id,
    };

    const sample = {
      evaluation_info_list: [
        {
          evaluation_id: 1,
          post_id: 1,
          name: '테스트1',
          max: 100,
        },
        {
          evaluation_id: 2,
          post_id: 1,
          name: '테스트2',
          max: 10,
        },
        {
          evaluation_id: 3,
          post_id: 1,
          name: '테스트3',
          max: 12,
        },
        {
          evaluation_id: 4,
          post_id: 1,
          name: '테스트4',
          max: 13,
        },
      ],
    }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.

    apiUtils
      .GetEvaluationItemByPostId(formData)
      .then((response) => {
        const getData = response.data;
        setItemList(getData.evaluation_info_list);
      })
      .catch((error) => {
        setItemList(sample.evaluation_info_list);
        handleLogError(error);
      });
  }

  const [scoreList, setScoreList] = useState([]);
  function loadScoreList() {
    const formData = {
      postId: post_id,
      judgeId: judge_id,
    };

    const sample = {
      evaluation_score_list: [
        {
          evaluation_id: 4,
          judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
          post_id: 1,
          user_id: 1,
          comment: 'comment comment',
          score: 4,
        },
        {
          evaluation_id: 5,
          judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
          post_id: 1,
          user_id: 1,
          comment: 'comment comment',
          score: 4,
        },
        {
          evaluation_id: 6,
          judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
          post_id: 1,
          user_id: 1,
          comment: 'comment comment',
          score: 10,
        },
        {
          evaluation_id: 8,
          judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
          post_id: 1,
          user_id: 1,
          comment: 'comment comment',
          score: 10,
        },
        {
          evaluation_id: 19,
          judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
          post_id: 1,
          user_id: 1,
          comment: '평가 항목 comment comment',
          score: 40,
        },
      ],
    }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.

    apiUtils
      .GetScore(formData)
      .then((response) => {
        const getData = response.data;
        setScoreList(getData.evaluation_score_list);
      })
      .catch((error) => {
        setScoreList(sample.evaluation_score_list);
        handleLogError(error);
      });

    // setScoreList(sample.evaluation_score_list);
    // console.log(scoreList);
  }

  const [fileInfo, setFileInfo] = useState({});
  const [pageInfo, setPageInfo] = useState([]);
  const [pageResultInfo, setPageResultInfo] = useState([]);
  const [fileResultInfo, setFileResultInfo] = useState([]);
  const [compFileInfo, setCompFileInfo] = useState([]);
  const [compPageInfo, setCompPageInfo] = useState([]);
  function loadResultData() {
    console.log('loadResultData');
    // resultData
    const formData = {
      fileId: file_id,
    };

    const sample = {
      file_info: {
        file_id: '1',
        user_id: 'user_id',
        file_title: 'file_title',
        file_extension: 'file_extension',
        path: 'path',
        upload_datetime: 'upload_datetime',
        summary: 'summary',
        post_id: 'post_id',
      },
      page_info: [
        {
          page_id: 'page_id_1',
          file_id: 1,
          page_num: 'page_num',
          start_index: 'start_index',
          summary: 'summary',
        },
        {
          page_id: 'page_id_2',
          file_id: 1,
          page_num: 'page_num',
          start_index: 'start_index',
          summary: 'summary',
        },
      ],
      page_result_info: [
        {
          page_id: 'page_id_1',
          comp_page_id: 'comp_page_id_10_0',
          score: 'score',
          report: 'report',
        },
        {
          page_id: 'page_id_1',
          comp_page_id: 'comp_page_id_11_1',
          score: 'score',
          report: 'report',
        },
        {
          page_id: 'page_id_2',
          comp_page_id: 'comp_page_id_10_0',
          score: 'score',
          report: 'report',
        },
        {
          page_id: 'page_id_2',
          comp_page_id: 'comp_page_id_11_0',
          score: 'score',
          report: 'report',
        },
      ],
      file_result_info: [
        {
          file_id: 1,
          comp_file_id: 10,
          score: 'score',
          report: 'report',
        },
        {
          file_id: 1,
          comp_file_id: 11,
          score: 'score',
          report: 'report',
        },
      ],
      comp_file_info: [
        {
          file_id: 10,
          depth_1: 'depth_1',
          depth_2: 'depth_2',
          depth_3: 'depth_3',
          depth_4: 'depth_4',
          link: 'link',
          file_title: 'file_title',
          file_extension: 'file_extension',
          path: 'path',
          upload_datetime: 'upload_datetime',
        },
        {
          file_id: 11,
          depth_1: 'depth_1',
          depth_2: 'depth_2',
          depth_3: 'depth_3',
          depth_4: 'depth_4',
          link: 'link',
          file_title: 'file_title',
          file_extension: 'file_extension',
          path: 'path',
          upload_datetime: 'upload_datetime',
        },
      ],
      comp_page_info: [
        {
          comp_page_id: 'comp_page_id_10_0',
          file_id: 10,
          page_num: 0,
          start_index: 'start_index',
          contents: 'contents',
        },
        {
          comp_page_id: 'comp_page_id_10_1',
          file_id: 10,
          page_num: 1,
          start_index: 'start_index',
          contents: 'contents',
        },
        {
          comp_page_id: 'comp_page_id_11_0',
          file_id: 11,
          page_num: 0,
          start_index: 'start_index',
          contents: 'contents',
        },
        {
          comp_page_id: 'comp_page_id_11_1',
          file_id: 11,
          page_num: 1,
          start_index: 'start_index',
          contents: 'contents',
        },
      ],
    }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.

    apiUtils
      .GetFileInfoByFileId(formData)
      .then((response) => {
        const getData = response.data;

        // setFileInfo(getData.file_info);
        // setPageInfo(getData.page_info);
        // setPageResultInfo(getData.page_result_info);
        // setFileResultInfo(getData.file_result_info);
        // setCompFileInfo(getData.comp_file_info);
        // setCompPageInfo(getData.comp_page_info);
      })
      .catch((error) => {
        handleLogError(error);
        console.log(sample);

        // setFileInfo(sample.file_info);
        // setPageInfo(sample.page_info);
        // setPageResultInfo(sample.page_result_info);
        // setFileResultInfo(sample.file_result_info);
        // setCompFileInfo(sample.comp_file_info);
        // setCompPageInfo(sample.comp_page_info);
      });

    setFileInfo(sample.file_info);
    setPageInfo(sample.page_info);
    setPageResultInfo(sample.page_result_info);
    setFileResultInfo(sample.file_result_info);
    setCompFileInfo(sample.comp_file_info);
    setCompPageInfo(sample.comp_page_info);
  }

  function getAllData() {
    loadFileList();
    loadEvaluationItem();
    loadResultData();
    loadScoreList();
  }

  useEffect(() => {
    // 접근 유무 확인
    const formData = { judgeId: judge_id, postId: post_id };
    apiUtils
      .GetCheckJudgeByPostId(formData)
      .then((response) => {
        const check = response.data.check;
        if (check) {
          getAllData();
          // loadResultData(file_id, setList);
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
        // getFileList();
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
    itemList: {
      data: itemList,
      setData: setItemList,
    },
    scoreList: {
      data: scoreList,
      setData: setScoreList,
    },
  };
  console.log(data);
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
          <HeaderDefault
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
          />
        </div>
        <div className={`container-fluid ${className ? className : 'p-4'}`}>
          {children}
          <Outlet />
        </div>
      </section>
    </div>
  );
};
export default JudgeDetailIndex;