import axios from 'axios';
import { Cookies } from 'react-cookie';
import { parseJwt } from './JwtUtils';
import { config } from './Constants';

export const apiUtils = {
  signIn,
  signUp,
  getUserInfo,
  AddCompetition,
  AddParticipation,
  GetUserByCompetition,
  GetCompetitionInfo,
  GetUseInforByCompetitionId,
  GetCompetitionInfoByUserId,
  GetCompetitionInfoChkByUserId,
  GetCompetitionInfoByCompetitionId,
  GetCompetitionInfoChkByCompetitionId,
  GetPostInfoByPostId,
  GetPostInfoChkByPostId,
  GetPostInfoByBoardType,
  GetFileInfoByPostId,
  AddFileInfo,
  AddCompFileInfo,
  GetCompPageInfo,
  GetCompFileInfo,
};

const cookies = new Cookies();

function getTokenByRefreshToken(refreshToken) {
  return instance.get('/auth/refreshToken', {
    headers: { Authorization: bearerRefresh(refreshToken) },
  });
}

// {
//   "email":"sbe07032@naver.com",
//   "password":"1",
//   "formBasicCheckbox":"on",
//   "":""
// }

function signIn(data) {
  const url = '/auth/signIn';
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
  });
}

// {
//   "user_name": "1",
//   "email": "12222@22",
//   "user_id": "1",
//   "password": "1",
//   "check_password": "1",
//   "": ""
// }

function signUp(data) {
  const url = `/auth/signUp`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
  });
}

// JWT 토큰을 담아서 보내는 예시, 토큰을 갖고 개인 정보를 불러옴
function getUserInfo(user) {
  const url = `/user`;
  return instance.get(url, {
    headers: { Authorization: bearerAccess(user) },
  });
}

// 공모전 개설
function AddCompetition(user, data) {
  const url = `/add-competition`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: bearerAccess(user),
    },
  });
}

/* 공모전 참가
// Input
data = {
  competitionId: 1
}
// 예상 output
{
  msg:1,
}
0: 참가 완료
1: 이미 참가 중
*/
function AddParticipation(user, data) {
  const url = `/add/participation`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

/* user의 공모전 참가여부 확인 
// Input
data = {
  competitionId: 1
}
// 예상 output
{
    "competition_id": 2,
    "team_id": -1, -> TEAM 이 없을 경우 -1
    "user_id": "www",
    "role_type": "CREATOR"
}
*/
function GetUserByCompetition(user, data) {
  const url = `/get/userbycompetition`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

/* 해당 공모전 관련 인원 모두
// Input
data = {
  competitionId: 1
}
// 예상 output
[
    {
        "competition_id": 2,
        "team_id": -1,
        "user_id": "www",
        "role_type": "CREATOR",
        "email": "www@naver.com",
        "user_name": "정재욱",
        "social": "NONE",
        "system_role_type": "USER"
    },
    {
        "competition_id": 2,
        "team_id": 1,
        "user_id": "www2",
        "role_type": "PARTICIPANT_LEADER",
        "email": "www2@naver.com",
        "user_name": "정재욱2",
        "social": "NONE",
        "system_role_type": "USER"
    }
]
*/
function GetUseInforByCompetitionId(data) {
  const url = `/get/userInfo/competitionId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
  });
}

// 공모전 리스트 요청
/**
 * 공모전 리스트 요청
 * // 공모전 리스트 요청 - output
 * [
 *   {
 *     "competition_info_id": 1,
 *     "competition_name": "ICT 택관컴퍼니",
 *     "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
 *     "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
 *     "competition_description": "ICT 택관컴퍼니",
 *     "competition_state": null,
 *     "competition_start_date": "2023-08-02T00:00",
 *     "competition_end_date": "2023-08-25T00:00",
 *     "competition_type_list": [
 *       {
 *         "competition_info_id": 1,
 *         "type": "개발"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "교육"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "엔터테인먼트"
 *       }
 *     ],
 *     "competition_docs_list": [
 *       {
 *         "competition_info_id": 1,
 *         "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
 *         "file_title": "competitionDocs"
 *       }
 *     ]
 *   },
 *  ...
 * ]
 */
function GetCompetitionInfo() {
  const url = `/get/competitionInfo`;
  return instance.get(url, {
    headers: { 'Content-type': 'application/json' },
  });
}

// 내가 참가한 공모전 리스트 요청
// competitionInfo - UserByCompetition join
/**
 * 공모전 리스트 요청
 * competitionInfo - UserByCompetition join
 * // 내가 참가한 공모전 리스트 요청 - output
 * [
 *   {
 *     "competition_info_id": 1,
 *     "competition_name": "ICT 택관컴퍼니",
 *     "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
 *     "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
 *     "competition_description": "ICT 택관컴퍼니",
 *     "competition_state": null,
 *     "competition_start_date": "2023-08-02T00:00:00",
 *     "competition_end_date": "2023-08-25T00:00:00",
 *     "competition_type_list": [
 *       {
 *         "competition_info_id": 1,
 *         "type": "개발"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "교육"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "엔터테인먼트"
 *       }
 *     ],
 *     "competition_docs_list": [
 *       {
 *         "competition_info_id": 1,
 *         "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
 *         "file_title": "competitionDocs"
 *       }
 *     ],
 *     "user_id": "www",
 *     "team_id": 1,
 *     "role_type": "PARTICIPANT_LEADER"
 *   },
 *   {
 *     "competition_info_id": 2,
 *     "competition_name": "ICR TK CMP",
 *     "competition_image": "d5e83864-bbd5-4b31-8aeb-ed0d7527554d",
 *     "competition_readme": "<p>ㅎㅇㅎㅇ</p>",
 *     "competition_description": "택관 컴퍼니 입사시험",
 *     "competition_state": null,
 *     "competition_start_date": "2023-08-09T00:00:00",
 *     "competition_end_date": "2023-08-28T00:00:00",
 *     "competition_type_list": [
 *       {
 *         "competition_info_id": 2,
 *         "type": "개발"
 *       },
 *       {
 *         "competition_info_id": 2,
 *         "type": "교육"
 *       },
 *       {
 *         "competition_info_id": 2,
 *         "type": "기타"
 *       }
 *     ],
 *     "competition_docs_list": [
 *       {
 *         "competition_info_id": 2,
 *         "docs_path": "824eede2-4b57-4c59-883e-5895d4de252d",
 *         "file_title": "competitionDocs"
 *       }
 *     ],
 *     "user_id": "www",
 *     "team_id": 2,
 *     "role_type": "PARTICIPANT_BASE"
 *   }
 * ]
 */
function GetCompetitionInfoByUserId(user) {
  const url = `/get/competitionInfo/userId`;
  return instance.get(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 공모전 리스트 요청(내가 참가여부도 같이)
// competitionInfo - UserByCompetition left join
/**
 * 공모전 리스트 요청(내가 참가여부도 같이)
 * competitionInfo - UserByCompetition left join
 * // 내가 참가한 공모전 리스트 요청 - output
 * [
 *   {
 *     "competition_info_id": 1,
 *     "competition_name": "ICT 택관컴퍼니",
 *     "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
 *     "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
 *     "competition_description": "ICT 택관컴퍼니",
 *     "competition_state": null,
 *     "competition_start_date": "2023-08-02T00:00:00",
 *     "competition_end_date": "2023-08-25T00:00:00",
 *     "competition_type_list": [
 *       {
 *         "competition_info_id": 1,
 *         "type": "개발"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "교육"
 *       },
 *       {
 *         "competition_info_id": 1,
 *         "type": "엔터테인먼트"
 *       }
 *     ],
 *     "competition_docs_list": [
 *       {
 *         "competition_info_id": 1,
 *         "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
 *         "file_title": "competitionDocs"
 *       }
 *     ],
 *     "user_id": "www",
 *     "team_id": 1,
 *     "role_type": "PARTICIPANT_LEADER"
 *   },
 *   {
 *     "competition_info_id": 2,
 *     "competition_name": "ICR TK CMP",
 *     "competition_image": "d5e83864-bbd5-4b31-8aeb-ed0d7527554d",
 *     "competition_readme": "<p>ㅎㅇㅎㅇ</p>",
 *     "competition_description": "택관 컴퍼니 입사시험",
 *     "competition_state": null,
 *     "competition_start_date": "2023-08-09T00:00:00",
 *     "competition_end_date": "2023-08-28T00:00:00",
 *     "competition_type_list": [
 *       {
 *         "competition_info_id": 2,
 *         "type": "개발"
 *       },
 *       {
 *         "competition_info_id": 2,
 *         "type": "교육"
 *       },
 *       {
 *         "competition_info_id": 2,
 *         "type": "기타"
 *       }
 *     ],
 *     "competition_docs_list": [
 *       {
 *         "competition_info_id": 2,
 *         "docs_path": "824eede2-4b57-4c59-883e-5895d4de252d",
 *         "file_title": "competitionDocs"
 *       }
 *     ],
 *     "user_id": "",
 *     "team_id": '',
 *     "role_type": ""
 *   }
 * ]
 */
function GetCompetitionInfoChkByUserId(user) {
  const url = `/get/competitionInfo/chk/userId`;
  return instance.get(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 공모전 정보 요청 by competitionId
/**
 * 공모전 정보 요청 by competitionId
 *
 * // 공모전 정보 요청 by competitionId - data
 * {
 *   "competitionId": "1",
 * }
 *
 * // 공모전 정보 요청 by competitionId - output
 * {
 *   "competition_info_id": 1,
 *   "competition_name": "ICT 택관컴퍼니",
 *   "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
 *   "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
 *   "competition_description": "ICT 택관컴퍼니",
 *   "competition_state": null,
 *   "competition_start_date": "2023-08-02T00:00",
 *   "competition_end_date": "2023-08-25T00:00",
 *   "competition_type_list": [
 *   {
 *     "competition_info_id": 1,
 *     "type": "개발"
 *   },
 *   {
 *     "competition_info_id": 1,
 *     "type": "교육"
 *   },
 *   {
 *     "competition_info_id": 1,
 *     "type": "엔터테인먼트"
 *   }
 * ],
 *   "competition_docs_list": [
 *   {
 *     "competition_info_id": 1,
 *     "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
 *     "file_title": "competitionDocs"
 *   }
 * ]
 * }
 */
function GetCompetitionInfoByCompetitionId(data) {
  const url = `/get/competitionInfo/competitionId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}

// 공모전 정보 요청 by competitionId (내가 참가여부도 같이)
// competitionInfo - UserByCompetition left join
/**
 * 공모전 정보 요청 by competitionId (내가 참가여부도 같이)
 * competitionInfo - UserByCompetition left join
 *
 * // 공모전 정보 요청 by competitionId - data
 * {
 *   "competitionId": "1",
 * }
 *
 * // 공모전 정보 요청 by competitionId - output
 * {
 *   "competition_info_id": 1,
 *   "competition_name": "ICT 택관컴퍼니",
 *   "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
 *   "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
 *   "competition_description": "ICT 택관컴퍼니",
 *   "competition_state": null,
 *   "competition_start_date": "2023-08-02T00:00",
 *   "competition_end_date": "2023-08-25T00:00",
 *   "competition_type_list": [
 *   {
 *     "competition_info_id": 1,
 *     "type": "개발"
 *   },
 *   {
 *     "competition_info_id": 1,
 *     "type": "교육"
 *   },
 *   {
 *     "competition_info_id": 1,
 *     "type": "엔터테인먼트"
 *   }
 * ],
 *   "competition_docs_list": [
 *   {
 *     "competition_info_id": 1,
 *     "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
 *     "file_title": "competitionDocs"
 *   }
 * ],
 *   "user_id": "www",
 *   "role_type": "PARTICIPANT_LEADER",
 *   "team_id": 1
 * }
 */
function GetCompetitionInfoChkByCompetitionId(user, data) {
  const url = `/get/competitionInfo/chk/competitionId`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 게시물 요청 by postId
function GetPostInfoByPostId(data) {
  const url = `/get/postInfo/postId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 게시물 요청 by postId - data
// {
//   "postId": "3",
// }

// 게시물 요청 by post_id - output
// {
//   "post_info_id": 1,
//   "user_info_id": "www",
//   "competition_info_id": 1,
//   "board_type": "NOTICE",
//   "title": "notice1",
//   "contents": "공지에요",
//   "created_date": "2023-08-04T20:18:21"
// }

// 게시물 디테일 요청 by postId
/** 게시물 디테일 요청 by postId
 * 해당 게시물에 내가 파일 업로드 했는지 확인 유무 확인
 * 
 해당 postId와 연결된 upload_post 와 file_info 정보가 필요
 연결 안되어 있으면 null 값으로

 {
    "post_info_id": 1,
    "user_info_id": "www",
    "competition_id": 2,
    "board_type": "NOTICE",
    "title": "ㅎㅎㅎㅎ",
    "contents": "ㄴㅇㄹㄴㅇㄹㄴㅇㄹ",
    "created_date": "2023-08-11T23:07:48",
    "upload_post_type_list": [],
    "file_info_list": []
}

 {
    "post_info_id": 5,
    "user_info_id": "www",
    "competition_id": 3,
    "board_type": "NOTICE",
    "title": "ㅎㅎㅎㅎ",
    "contents": "ㄴㅇㄹㄴㅇㄹㄴㅇㄹ",
    "created_date": "2023-08-11T23:07:48",
    "upload_post_type_list": [
        {
            "post_info_id": 5,
            "upload_type": "hahahaha1"
        },
        {
            "post_info_id": 5,
            "upload_type": "hahahaha2"
        },
        {
            "post_info_id": 5,
            "upload_type": "hahahaha3"
        }
    ],
    "file_info_list": [
        {
            "file_info_id": 3,
            "post_id": 5,
            "user_info_id": "www",
            "path": "8c616499-dc9c-4218-a43c-6101acd80a23",
            "file_title": "스크린샷 2023-07-22 133117",
            "summary": null,
            "file_extension": "PNG",
            "upload_datetime": "2023-08-11T23:26:35.359355"
        },
        {
            "file_info_id": 4,
            "post_id": 5,
            "user_info_id": "www",
            "path": "951ef6d2-0a26-4eae-9003-f47624338f2a",
            "file_title": "스크린샷 2023-07-22 133117",
            "summary": null,
            "file_extension": "PNG",
            "upload_datetime": "2023-08-11T23:26:48.990563"
        },
        {
            "file_info_id": 5,
            "post_id": 5,
            "user_info_id": "www",
            "path": "97f9a8e8-dfdf-45f0-8983-6f409bbf0dcf",
            "file_title": "소프트웨어_보안약점_진단가이드(2021)",
            "summary": null,
            "file_extension": "PDF",
            "upload_datetime": "2023-08-11T23:26:59.530341"
        }
    ]
}


*/
function GetPostInfoChkByPostId(user, data) {
  const url = `/get/postInfo/chk/postId`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 게시물 요청 by BoardType
function GetPostInfoByBoardType(data) {
  const url = `/get/postInfo/boardType`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 게시물 요청 by BoardType - data
// {
//   "competitionId": "1",
//   "boardType": "3",
// }

// 게시물 요청 by BoardType - output
// [
//   {
//     "post_info_id": 2,
//     "user_info_id": "www",
//     "competition_info_id": 1,
//     "board_type": "QNA",
//     "title": "qna1",
//     "contents": "QNA에요",
//     "created_date": "2023-08-04T20:18:21"
//   },
//   {
//     "post_info_id": 7,
//     "user_info_id": "www",
//     "competition_info_id": 1,
//     "board_type": "QNA",
//     "title": "qna1-2",
//     "contents": "QNA에요2",
//     "created_date": "2023-08-04T20:18:21"
//   },
//   {
//     "post_info_id": 8,
//     "user_info_id": "www",
//     "competition_info_id": 1,
//     "board_type": "QNA",
//     "title": "qna1-3",
//     "contents": "QNA에요3",
//     "created_date": "2023-08-04T20:18:21"
//   },
//   {
//     "post_info_id": 9,
//     "user_info_id": "www",
//     "competition_info_id": 1,
//     "board_type": "QNA",
//     "title": "qna1-4",
//     "contents": "QNA에요4",
//     "created_date": "2023-08-04T20:18:21"
//   }
// ]

// 파일 리스트 요청 by PostId
function GetFileInfoByPostId(data) {
  const url = `/get/fileInfo/postId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 파일 요청 요청 by PostId - data
// [
//   {
//     "file_info_id": 1,
//     "post_id": 1,
//     "user_info_id": "www",
//     "path": "a941fab3-812a-4a6a-a008-28c70b01e52f",
//     "file_title": "sdfsdf",
//     "file_type": null,
//     "file_extension": "HWP",
//     "upload_datetime": "2023-08-05T00:09:12"
//   },
//   {
//     "file_info_id": 2,
//     "post_id": 1,
//     "user_info_id": "www",
//     "path": "d5e83864-bbd5-4b31-8aeb-ed0d7527554d",
//     "file_title": "sdfsdfsdfsdf",
//     "file_type": null,
//     "file_extension": "PDF",
//     "upload_datetime": "2023-08-05T00:09:12"
//   }
// ]

// 게시물 파일 업로드
// geeks-react-2.1.1/src/components/marketing/pages/jobs/company/ApplyForm.js
function AddFileInfo(user, data) {
  const url = `/add/fileInfo`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: bearerAccess(user),
    },
  });
}

// 표절 검사 파일 업로드
// geeks-react-2.1.1/src/components/dashboard/cms/all-posts/DBUpload.js
function AddCompFileInfo(user, data) {
  const url = `/add/compFileInfo`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'multipart/form-data',
      Authorization: bearerAccess(user),
    },
  });
}

/* GetCompPageInfo
CompPageInfo - CompFileInfo Left Join
*/
// [
//   {
//     "page_id": "aa",
//     "comp_file_id": 2,
//     "page_num": "344",
//     "start_index": "234"
//   },
//   {
//     "page_id": "aaa",
//     "comp_file_id": 5,
//     "page_num": "5",
//     "start_index": "12"
//   },
//   {
//     "page_id": "asdfsadfasdf",
//     "comp_file_id": 2,
//     "page_num": "2",
//     "start_index": "333"
//   },
//   {
//     "page_id": "ff",
//     "comp_file_id": 2,
//     "page_num": "3",
//     "start_index": "55"
//   },
//   {
//     "page_id": "fff",
//     "comp_file_id": 3,
//     "page_num": "12",
//     "start_index": "122"
//   },
//   {
//     "page_id": "ss",
//     "comp_file_id": 6,
//     "page_num": "33",
//     "start_index": "155"
//   },
//   {
//     "page_id": "sss",
//     "comp_file_id": 4,
//     "page_num": "2",
//     "start_index": "333"
//   }
// ]
function GetCompPageInfo(user) {
  const url = `/get/compPageInfo`;
  return instance.get(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// GetCompFileInfo
// [
//   {
//     "comp_file_id": 2,
//     "competition_name": "2",
//     "file_extension": "PNG",
//     "file_title": "스크린샷 2023-07-22 133117",
//     "user_id": "www",
//     "depth1": "2",
//     "depth2": "2",
//     "depth3": "2",
//     "depth4": "2",
//     "link": "2",
//     "path": "d15ab610-37b1-4f65-829d-898bcac81d6a",
//     "upload_datetime": "2023-08-11T23:15:47.403195"
//   },
//   {
//     "comp_file_id": 3,
//     "competition_name": "2",
//     "file_extension": "PNG",
//     "file_title": "스크린샷 2023-07-22 133117",
//     "user_id": "www",
//     "depth1": "3",
//     "depth2": "3",
//     "depth3": "3",
//     "depth4": "3",
//     "link": "3",
//     "path": "af389ecd-abb0-46ae-914d-71f898a0610e",
//     "upload_datetime": "2023-08-11T23:23:15.698044"
//   },
//   {
//     "comp_file_id": 4,
//     "competition_name": "3",
//     "file_extension": "PNG",
//     "file_title": "스크린샷 2023-07-22 133117",
//     "user_id": "www",
//     "depth1": "312",
//     "depth2": "312",
//     "depth3": "312",
//     "depth4": "312",
//     "link": "312",
//     "path": "b87b890c-3864-4c2c-b6d4-488a0ebc567d",
//     "upload_datetime": "2023-08-11T23:23:27.972501"
//   },
//   {
//     "comp_file_id": 5,
//     "competition_name": "3",
//     "file_extension": "PNG",
//     "file_title": "스크린샷 2023-07-22 133117",
//     "user_id": "www",
//     "depth1": "3121",
//     "depth2": "3121",
//     "depth3": "3121",
//     "depth4": "3121",
//     "link": "3121",
//     "path": "7c60b8e8-b3ff-472a-a79a-84832eed87a8",
//     "upload_datetime": "2023-08-11T23:23:35.209539"
//   },
//   {
//     "comp_file_id": 6,
//     "competition_name": "4",
//     "file_extension": "PNG",
//     "file_title": "스크린샷 2023-07-22 133117",
//     "user_id": "www",
//     "depth1": "3121111",
//     "depth2": "3121111",
//     "depth3": "3121111",
//     "depth4": "3121111",
//     "link": "3121111",
//     "path": "f6ac6a6c-b380-4602-86f1-2c704b52e64d",
//     "upload_datetime": "2023-08-11T23:23:44.278861"
//   }
// ]
function GetCompFileInfo(user) {
  const url = `/get/compFileInfo`;
  return instance.get(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// -- Axios
const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const error_msg = error.response.data;
    const status_code = error.response.status;
    const refreshToken = cookies.get('refreshToken');

    // 만약, JWT access token 이 유효하지 않아서 오류가 있다면,
    if (status_code === 401 && error_msg === 'JWT Exception') {
      if (refreshToken) {
        // refresh token 을 사용해서 다시 서버에 요청
        return (
          getTokenByRefreshToken(refreshToken)
            // 만약 refresh token 이 유효하다면
            .then((result) => {
              // 서버로 부터 새 access token, refresh token 을 발급 받음
              const { accessToken, refreshToken } = result.data;
              const data = parseJwt(accessToken);
              const user = { data, accessToken };

              // refresh token 을 쿠키에 저장
              cookies.set('refreshToken', refreshToken, {
                path: '/',
              });

              // access token 을 이용해서 localStorage 에 user 정보 업데이트
              localStorage.setItem('user', JSON.stringify(user));

              // 이전에 요청했던 것 수행 (access token 오류로 인해서 실행하지 못했던 것)
              const originalRequest = error.config;
              originalRequest.headers['Authorization'] = bearerAccess(user);
              return axios(originalRequest);
            })
            // 만약 refresh token 도 유효하지 않아서 오류가 발생한다면 로그인 페이지로 이동
            .catch((error) => {
              window.location.href = '/authentication/sign-in/';
            })
        );
      } else {
        window.location.href = '/authentication/sign-in/';
      }
    }
    return Promise.reject(error);
  },
);

// -- Helper functions

function bearerAccess(user) {
  return `Bearer ${user.accessToken}`;
}

function bearerRefresh(refreshToken) {
  return `Bearer ${refreshToken}`;
}
