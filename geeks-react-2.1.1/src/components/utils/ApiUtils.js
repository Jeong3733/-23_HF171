import axios from 'axios';
import { Cookies } from 'react-cookie';
import { parseJwt } from './JwtUtils';
import { config } from './Constants';

export const apiUtils = {
  signIn,
  signUp,
  getUserInfo,
  AddCompetition,
  GetCompetitionInfo,
  GetCompetitionInfoByUserId,
  GetCompetitionInfoChkByUserId,
  GetCompetitionInfoByCompetitionId,
  GetCompetitionInfoChkByCompetitionId,
  GetPostInfoByPostId,
  GetPostInfoByBoardType,
  GetFileInfoByPostId,
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
// [
//   {
//     "competition_info_id": 1,
//     "competition_name": "ICT 택관컴퍼니",
//     "competition_image": "a941fab3-812a-4a6a-a008-28c70b01e52f",
//     "competition_readme": "<p>ICT 택관컴퍼니 입니다~</p>",
//     "competition_description": "ICT 택관컴퍼니",
//     "competition_state": null,
//     "competition_start_date": "2023-08-02T00:00:00",
//     "competition_end_date": "2023-08-25T00:00:00",
//     "competition_type_list": [
//       {
//         "competition_info_id": 1,
//         "type": "개발"
//       },
//       {
//         "competition_info_id": 1,
//         "type": "교육"
//       },
//       {
//         "competition_info_id": 1,
//         "type": "엔터테인먼트"
//       }
//     ],
//     "competition_docs_list": [
//       {
//         "competition_info_id": 1,
//         "docs_path": "447d2d03-8d89-4b68-bcf3-20d9cdc864f8",
//         "file_title": "competitionDocs"
//       }
//     ],
//     "user_id": "www",
//     "team_id": 1,
//     "role_type": "PARTICIPANT_LEADER"
//   },
//   {
//     "competition_info_id": 6,
//     "competition_name": "111212",
//     "competition_image": "5eea3c72-31b6-4a80-8212-02fec6e55db6",
//     "competition_readme": "<p>공모전 소개 글을 입력하세요.</p><p><br></p><p><strong>이렇게</strong> <em>글자에</em> <u>스타일을</u> 적용할 수도 있습니다.</p>",
//     "competition_description": "1",
//     "competition_state": null,
//     "competition_start_date": "2023-08-04T00:00:00",
//     "competition_end_date": "2023-08-17T00:00:00",
//     "competition_type_list": [
//       {
//         "competition_info_id": 6,
//         "type": "엔터테인먼트"
//       }
//     ],
//     "competition_docs_list": [
//       {
//         "competition_info_id": 6,
//         "docs_path": "168eeb95-883d-4252-969e-d3fb93f6cf11",
//         "file_title": "competitionDocs"
//       }
//     ],
//     "user_id": null,
//     "team_id": null,
//     "role_type": null
//   }
// ]
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
// {
//   "competition_info_id": 2,
//   "competition_name": "ICR TK CMP",
//   "competition_image": "d5e83864-bbd5-4b31-8aeb-ed0d7527554d",
//   "competition_readme": "<p>ㅎㅇㅎㅇ</p>",
//   "competition_description": "택관 컴퍼니 입사시험",
//   "competition_state": null,
//   "competition_start_date": "2023-08-09T00:00:00",
//   "competition_end_date": "2023-08-28T00:00:00",
//   "competition_type_list": [
//   {
//     "competition_info_id": 2,
//     "type": "개발"
//   },
//   {
//     "competition_info_id": 2,
//     "type": "교육"
//   },
//   {
//     "competition_info_id": 2,
//     "type": "기타"
//   }
// ],
//   "competition_docs_list": [
//   {
//     "competition_info_id": 2,
//     "docs_path": "824eede2-4b57-4c59-883e-5895d4de252d",
//     "file_title": "competitionDocs"
//   }
// ],
//   "user_id": "www",
//   "team_id": 2,
//   "role_type": "PARTICIPANT_BASE"
// }

// 다른 예시
// {
//   "competition_info_id": 6,
//   "competition_name": "111212",
//   "competition_image": "5eea3c72-31b6-4a80-8212-02fec6e55db6",
//   "competition_readme": "<p>공모전 소개 글을 입력하세요.</p><p><br></p><p><strong>이렇게</strong> <em>글자에</em> <u>스타일을</u> 적용할 수도 있습니다.</p>",
//   "competition_description": "1",
//   "competition_state": null,
//   "competition_start_date": "2023-08-04T00:00:00",
//   "competition_end_date": "2023-08-17T00:00:00",
//   "competition_type_list": [
//   {
//     "competition_info_id": 6,
//     "type": "엔터테인먼트"
//   }
// ],
//   "competition_docs_list": [
//   {
//     "competition_info_id": 6,
//     "docs_path": "168eeb95-883d-4252-969e-d3fb93f6cf11",
//     "file_title": "competitionDocs"
//   }
// ],
//   "user_id": null,
//   "team_id": null,
//   "role_type": null
// }
function GetCompetitionInfoChkByCompetitionId(data, user) {
  const url = `/get/competitionInfo/chk/competitionId`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 게시물 요청 by post_id
function GetPostInfoByPostId(data) {
  const url = `/get/postInfo/postId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 게시물 요청 by post_id - data
// {
//   "post_id": "3",
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
// 게시물 요청 by PostId - data
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
              window.location.href = '/signIn';
            })
        );
      } else {
        window.location.href = '/signIn';
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
