import React, { useState, useEffect } from 'react';
import { apiUtils } from './ApiUtils';
import { handleLogError } from './ErrorUtils';
import { useAuth } from 'components/AuthContext';

/* 게시물 리스트 요청 by BoardType */
export async function loadPostList(competition_id, boardType) {
  const formDataToSend = {
    competitionId: competition_id,
    boardType: boardType,
  };
  const sample = [
    {
      post_id: '1',
      title: '제출 1',
      user_id: '1',
      created_date: '0000-00-00',
      contents: '',
    },
    {
      post_id: '2',
      title: '제출 2',
      user_id: '1',
      created_date: '0000-00-00',
      contents: '',
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetPostInfoByBoardType(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 공모전 정보 요청 by competition_id */
export async function loadCompetitionInfo(competition_id) {
  const formDataToSend = {
    competitionId: competition_id,
  };
  const sample = {
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

  return await apiUtils
    .GetCompetitionInfoByCompetitionId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 게시물 정보 요청 by post_id */
export async function loadPostInfo(post_id) {
  const formDataToSend = {
    postId: post_id,
  };
  const sample = {
    post_info_id: 1,
    user_info_id: 'www',
    competition_info_id: 1,
    board_type: 'NOTICE',
    title: 'notice1',
    contents: '공지에요',
    created_date: '2023-08-04T20:18:21',
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetPostInfoByPostId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 평가 결과 by postId */
export async function loadResultList(post_id) {
  const formDataToSend = {
    postId: post_id,
  };
  const sample = {
    evaluation_score_list: [
      {
        evaluation_id: 3,
        post_id: 1,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        user_id: '1',
        score: 35,
        comment: '되나?',
      },
      {
        evaluation_id: 4,
        post_id: 1,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        user_id: '1',
        score: 4,
        comment: '하하하',
      },
    ],
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetAllScore(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 평가 항목 리스트 요청 by post_id */
export async function loadItemList(post_id) {
  const formDataToSend = {
    postId: post_id,
  };
  const sample = {
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
  return await apiUtils
    .GetEvaluationItemByPostId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 심사위원 점수 불러오기 by postId */
export async function loadScorePost(post_id, judge_id) {
  const formDataToSend = {
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
        comment: '변경완료',
        score: 4,
      },
      {
        evaluation_id: 5,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: '변경완료',
        score: 4,
      },
      {
        evaluation_id: 6,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: '변경완료',
        score: 10,
      },
      {
        evaluation_id: 8,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: '변경완료',
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
  return await apiUtils
    .GetScore(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 심사위원 점수 불러오기 by fileId */
export async function loadScoreFile(file_id, judge_id) {
  const formDataToSend = {
    fileId: file_id,
    judgeId: judge_id,
  };
  const sample = {
    evaluation_score_list: [
      {
        evaluation_id: 4,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: 'loadScoreFile',
        score: 4,
      },
      {
        evaluation_id: 5,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: 'loadScoreFile',
        score: 4,
      },
      {
        evaluation_id: 6,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: 'loadScoreFile',
        score: 10,
      },
      {
        evaluation_id: 8,
        judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
        post_id: 1,
        user_id: 1,
        comment: 'loadScoreFile',
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
  return await apiUtils
    .GetScoreFile(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 심사위원 리스트 요청 by post_id */
export async function loadJudgeList(post_id) {
  const formDataToSend = {
    postId: post_id,
  };
  const sample = {
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
  return await apiUtils
    .GetJudgeByPostId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 제출물 파일 QNA 요청*/
export async function getFileQNA(file_id, query) {
  const formDataToSend = {
    fileId: file_id,
    query: query,
  };
  const sample = {
    result: 'result sample',
    source: ['source', 'source', 'source'],
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetFileQNA(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 제출물 파일 QNA 요청*/
export async function getCompetitionFileQNA(competition_id, query) {
  const formDataToSend = {
    competitionId: competition_id,
    query: query,
  };
  const sample = {
    result: 'result sample',
    source: ['source', 'source', 'source'],
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetCompetitionFileQNA(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 제출물 페이지 표절 검사 리포트 요청*/
export async function getPageReport(file_id, page_id, comp_page_id) {
  const formDataToSend = {
    file_id: file_id,
    page_id: page_id,
    comp_page_id: comp_page_id,
  };
  const sample = {
    report: 'report sample',
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetPageReport(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 유저 정보 by userId */
export async function getUserInfo(user_id) {
  const formDataToSend = {
    userId: user_id,
  };
  const sample = {
    user_id: '1',
    email: 'email',
    role: 'ADMIN',
    user_name: '홍길동',
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetUserInfo(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 유저 정보 리스트by userIdList */
export async function getUserInfoList(user_id_list) {
  const formDataToSend = {
    user_id_list: user_id_list,
  };
  const sample = [
    {
      user_id: '1',
      email: 'email',
      role: 'ADMIN',
      user_name: '홍길동',
    },
    {
      user_id: '1',
      email: 'email',
      role: 'ADMIN',
      user_name: '홍길동',
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetUserInfoList(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 파일 디테일 요청 by file_id */
export async function loadResultData(file_id) {
  const formDataToSend = {
    fileId: file_id,
  };
  const sample = 'sample'; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetFileInfoByFileId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 파일 리스트 요청 by post_id */
export async function loadFileList(post_id) {
  const formDataToSend = {
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
  return await apiUtils
    .GetFileInfoByPostId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 게시물 리스트 요청 by BoardType */
export async function checkJudgeByPostId(judge_id, post_id) {
  const formDataToSend = { judgeId: judge_id, postId: post_id };
  const sample = false; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetCheckJudgeByPostId(formDataToSend)
    .then((response) => {
      const getData = true;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* PageResultInfo Json 요청 */
export async function getPageResultInfo(page_id, comp_page_id) {
  const formDataToSend = {
    pageId: page_id,
    compPageId: comp_page_id,
  };
  const sample = 'sample'; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetPageResult(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

// const Auth = useAuth();

/* 제출물 파일 업로드 요청 */
export async function updateFile(user, post_id, fileData) {
  const formData = {
    postId: post_id,
  };
  const formDataToSend = new FormData();
  formDataToSend.append(
    'data',
    new Blob([JSON.stringify(formData)], { type: 'application/json' }),
  );
  if (fileData !== null) {
    formDataToSend.append('file', fileData);
  }
  const sample = 'sample'; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .AddFileInfo(user, formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 게시물 정보 요청 */
export async function getPostInfoChkByPostId(user, post_id) {
  const formDataToSend = {
    postId: post_id,
  };
  const sample = {
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

  return await apiUtils
    .GetPostInfoChkByPostId(user, formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 유저 리스트 요청 */
export async function loadUserList(competition_id) {
  const formDataToSend = {
    competitionId: competition_id,
  };
  const sample = [
    {
      competition_id: 1,
      team_id: 1,
      user_id: 1,
      role_type: 'Creator',
      email: '',
      social: 1,
      user_name: 1,
      password: 1,
      role: 1,
    },
    {
      competition_id: 1,
      team_id: 1,
      user_id: 1,
      role_type: 'Creator',
      email: '',
      social: 1,
      user_name: 1,
      password: 1,
      role: 1,
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetUseInforByCompetitionId(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 주최자 검증 */
export async function validateCreator(user, competition_id) {
  const formDataToSend = {
    competitionId: competition_id,
  };
  const sample = {
    competition_id: 2,
    team_id: -1,
    user_id: 'www',
    role_type: 'PARTICIPANT_BASE',
  }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetUserByCompetition(user, formDataToSend)
    .then((response) => {
      // console.log(response.data);
      if (response.data.role_type === 'CREATOR') {
        // console.log('주최자입니다.');
        return 'yes';
      } else {
        return 'no';
      }
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      return 'fail';
    });
}

/* 유저 참여 공모전 리스트 요청 */
export async function loadCompetitionListByUserId(user) {
  const sample = [
    {
      competition_info_id: '11111',
      competition_name: '11111',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '엔터테인먼트' },
      ],
    },
    {
      competition_info_id: '22222',
      competition_name: '22222',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: '',
      team_id: '',
      role_type: '',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '33333',
      competition_name: '33333',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: '',
      team_id: '',
      role_type: '',
      competition_type_list: [{ type: '개발' }, { type: '교육' }],
    },
    {
      competition_info_id: '44444',
      competition_name: '44444',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '55555',
      competition_name: '55555',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '66666',
      competition_name: '66666',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '금융' },
      ],
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetCompetitionInfoByUserId(user)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 공모전 리스트 요청 */
export async function loadCompetitionList() {
  const sample = [
    {
      competition_info_id: '11111',
      competition_name: '11111',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '엔터테인먼트' },
      ],
    },
    {
      competition_info_id: '22222',
      competition_name: '22222',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '33333',
      competition_name: '33333',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [{ type: '개발' }, { type: '교육' }],
    },
    {
      competition_info_id: '44444',
      competition_name: '44444',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '55555',
      competition_name: '55555',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '66666',
      competition_name: '66666',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '금융' },
      ],
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetCompetitionInfo()
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 공모전 리스트 + 디테일 */
export async function loadCompetitionDetailList(user) {
  const sample = [
    {
      competition_info_id: '11111',
      competition_name: '11111',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '엔터테인먼트' },
      ],
    },
    {
      competition_info_id: '22222',
      competition_name: '22222',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: '',
      team_id: '',
      role_type: '',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '33333',
      competition_name: '33333',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: '',
      team_id: '',
      role_type: '',
      competition_type_list: [{ type: '개발' }, { type: '교육' }],
    },
    {
      competition_info_id: '44444',
      competition_name: '44444',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '55555',
      competition_name: '55555',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
    },
    {
      competition_info_id: '66666',
      competition_name: '66666',
      competition_image: 'competition_image',
      competition_readme: 'competition_readme',
      competition_description: 'competition_description',
      competition_state: 'competition_state',
      competition_start_date: 'start_date',
      competition_end_date: 'end_date',
      user_id: 'sbe07032',
      team_id: 'team_id',
      role_type: 'role_type',
      competition_type_list: [
        { type: '개발' },
        { type: '교육' },
        { type: '금융' },
      ],
    },
  ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
  return await apiUtils
    .GetCompetitionInfoChkByUserId(user)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 유저 정보 로그인 */
export async function loadUser(user) {
  const sample = {
    user_id: 'test_id',
    email: 'test@test.com',
    password: 'test_pw',
    role: 'test_role',
    social: 'test_social',
    user_name: 'test_name',
  };

  return await apiUtils
    .getUserInfo(user)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

/* 유저 정보 by userId */
export async function loadUserByUserId(user_id) {
  const formDataToSend = {
    userId: user_id,
  };
  const sample = {
    user_id: 'test_id',
    email: 'test@test.com',
    password: 'test_pw',
    role: 'test_role',
    social: 'test_social',
    user_name: 'test_name',
  };

  return await apiUtils
    .GetUserInfo(formDataToSend)
    .then((response) => {
      const getData = response.data;
      return getData;
    })
    .catch((error) => {
      // alert(error.response.data);
      handleLogError(error);
      const getData = sample;
      return getData;
    });
}

// loadSample(competition_id).then((getData) => {
//   setPostList(getData);
// });

/* 게시물 리스트 요청 by BoardType */
// export async function loadSample(competition_id) {
//   const formDataToSend = {
//     competitionId: competition_id,
//   };
//   const sample = 'sample'; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
//   return await apiUtils
//     .GetPostInfoByBoardType(formDataToSend)
//     .then((response) => {
//       const getData = response.data;
//       return getData;
//     })
//     .catch((error) => {
//       // alert(error.response.data);
//       handleLogError(error);
//       const getData = sample;
//       return getData;
//     });
// }
