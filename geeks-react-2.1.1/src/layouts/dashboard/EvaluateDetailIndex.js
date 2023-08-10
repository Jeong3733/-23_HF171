// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// import sub components
import EvaluateDetailVertical from './EvaluateDetailVertical';
import HeaderDefault from './HeaderDefault';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const EvaluateDetailIndex = (props) => {
  const { children, className, overflowHidden } = props;
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const { file_id, post_id } = useParams();
  const [fileList, setFileList] = useState([]);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    // fileList
    const data3 = {
      postId: post_id,
    };

    apiUtils
      .GetFileInfoByPostId(data3)
      .then((response) => {
        const getFileList = response.data;
        setFileList(getFileList);
        if (getFileList.length === 0) {
          const getFileList = [
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
          setFileList(getFileList);
        }
      })
      .catch((error) => {
        // alert(error.response.data);
        const getFileList = [
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
        setFileList(getFileList);
        handleLogError(error);
      });

    // resultData
    const data5 = {
      fileId: file_id,
    };

    const getResultData = {
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
    setResultData(getResultData);

    // apiUtils
    //   .Test(data5)
    //   .then((response) => {
    //     const getResultData = response.data;
    //     setResultData(getResultData);
    //   })
    //   .catch((error) => {
    //     // alert(error.response.data);
    //     const getResultData = [
    //       {
    //         file_id: 'file_id_1',
    //         user_id: 'user_id_1',
    //         path: 'path_1',
    //         file_title: 'file_title_1',
    //         file_extension: 'file_extension_1',
    //         upload_datetime: 'upload_datetime_1',
    //         post_info_id: 'post_info_id_1',
    //       },
    //       {
    //         file_id: 'file_id_2',
    //         user_id: 'user_id_2',
    //         path: 'path_2',
    //         file_title: 'file_title_2',
    //         file_extension: 'file_extension_2',
    //         upload_datetime: 'upload_datetime_2',
    //         post_info_id: 'post_info_id_2',
    //       },
    //       {
    //         file_id: 'file_id_3',
    //         user_id: 'user_id_3',
    //         path: 'path_3',
    //         file_title: 'file_title_3',
    //         file_extension: 'file_extension_3',
    //         upload_datetime: 'upload_datetime_3',
    //         post_info_id: 'post_info_id_3',
    //       },
    //     ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
    //     setResultData(getResultData);
    //     handleLogError(error);
    //   });
  }, []);

  console.log(fileList);
  console.log(resultData);
  return (
    <div
      id="db-wrapper"
      className={`${overflowHidden ? 'chat-layout' : ''} ${
        showMenu ? '' : 'toggled'
      }`}
    >
      <div className="navbar-vertical navbar">
        <EvaluateDetailVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
          data={{ fileList: fileList, resultData: resultData }}
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
export default EvaluateDetailIndex;
