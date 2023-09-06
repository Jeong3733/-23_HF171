import React, { useState, useEffect } from 'react';
import { apiUtils } from './ApiUtils';
import { handleLogError } from './ErrorUtils';

// 게시물 리스트 요청 by BoardType
export async function loadPostList(competition_id, boardType) {
  const formDataToSend = {
    competitionId: competition_id,
    boardType: boardType,
  };
  return await apiUtils
    .GetPostInfoByBoardType(formDataToSend)
    .then((response) => {
      const getPostList = response.data;
      return getPostList;
    })
    .catch((error) => {
      // alert(error.response.data);
      const getPostList = [
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
      handleLogError(error);
      return getPostList;
    });
}
