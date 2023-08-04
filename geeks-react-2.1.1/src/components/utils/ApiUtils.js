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
  GetCompetitionInfoByCompetitionId,
  GetCompetitionInfoByCompetitionIdByUserId,
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
function GetCompetitionInfo() {
  const url = `/get/competitionInfo`;
  return instance.get(url, {
    headers: { 'Content-type': 'application/json' },
  });
}
// 공모전 리스트 요청 - output
// [
//   {
//     competition_id: 'competition_id',
//     competition_name: 'competition_name',
//     competition_image: 'competition_image',
//     competition_readme: 'competition_readme',
//     competition_description: 'competition_description',
//     competition_state: 'competition_state',
//     competition_start_date: 'competition_start_date',
//     competition_end_date: 'competition_end_date',
//   }
//   ...
// ];

// 내가 참가한 공모전 리스트 요청
// competitionInfo - UserByCompetition left join
function GetCompetitionInfoByUserId(user) {
  const url = `/get/competitionInfo/userId`;
  return instance.get(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}

// 내가 참가한 공모전 리스트 요청 - output
// [
//   {
//     competition_id: 'competition_id',
//     competition_name: 'competition_name',
//     competition_image: 'competition_image',
//     competition_readme: 'competition_readme',
//     competition_description: 'competition_description',
//     competition_state: 'competition_state',
//     competition_start_date: 'competition_start_date',
//     competition_end_date: 'competition_end_date',
//     user_id: 'sbe07032',
//     team_id: 'team_id',
//     role_type: 'role_type',
//   }
//   ...
// ];

// 공모전 정보 요청 by competitionId
function GetCompetitionInfoByCompetitionId(data) {
  const url = `/get/competitionInfo/competitionId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 공모전 정보 요청 by competitionId - data
// {
//   "competitionId": "1",
// }

// 공모전 정보 요청 by competitionId - output
// [
//   {
//     competition_id: 'competition_id',
//     competition_name: 'competition_name',
//     competition_image: 'competition_image',
//     competition_readme: 'competition_readme',
//     competition_description: 'competition_description',
//     competition_state: 'competition_state',
//     competition_start_date: 'competition_start_date',
//     competition_end_date: 'competition_end_date',
//   }
// ];

// 로그인된 상태에서
// 공모전 정보 요청 by competitionId
function GetCompetitionInfoByCompetitionIdByUserId(user, data) {
  const url = `/get/competitionInfo/competitionIdUserId`;
  return instance.post(url, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: bearerAccess(user),
    },
  });
}
// 공모전 정보 요청 by competitionId - data
// {
//   "competitionId": "1",
// }

// 공모전 정보 요청 by competitionId - output
// [
//   {
//     competition_id: 'competition_id',
//     competition_name: 'competition_name',
//     competition_image: 'competition_image',
//     competition_readme: 'competition_readme',
//     competition_description: 'competition_description',
//     competition_state: 'competition_state',
//     competition_start_date: 'competition_start_date',
//     competition_end_date: 'competition_end_date',
//     user_id: 'sbe07032',
//     team_id: 'team_id',
//     role_type: 'role_type',
//   }
// ];

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
// 게시물 요청 by postId - output
// [
//   {
//     post_id: '3',
//     title: '제출 3',
//     user_id: '1',
//     created_date: '0000-00-00',
//     contents: '',
//   }
// ];

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
//     post_id: '1',
//     title: '제출 1',
//     user_id: '1',
//     created_date: '0000-00-00',
//     contents: '',
//     board_type: '3',
//   }
//   ...
// ];

// 파일 리스트 요청 by PostId
function GetFileInfoByPostId(data) {
  const url = `/get/fileInfo/postId`;
  return instance.post(url, data, {
    headers: { 'Content-type': 'application/json' },
    // headers: { Authorization: bearerAccess(user) },
  });
}
// 게시물 요청 by PostId - data
// {
//   "postId": "1",
// }
// 게시물 요청 by PostId - output
// [
//   {
//     file_id: 'file_id',
//     user_id: 'user_id',
//     path: 'path',
//     file_title: 'file_title',
//     file_extension: 'file_extension',
//     upload_datetime: 'upload_datetime',
//     post_id: 'post_id',
//   },
//   ...
// ];

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
