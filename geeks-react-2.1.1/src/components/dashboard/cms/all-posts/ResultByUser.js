// import node module libraries
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
import { Link, useParams } from 'react-router-dom';
import {
  Col,
  Row,
  Dropdown,
  Image,
  Table,
  Button,
  Accordion,
} from 'react-bootstrap';

// Import required custom components
import Pagination from 'components/elements/advance-table/Pagination';
import Checkbox from 'components/elements/advance-table/Checkbox';
import ResultTable from './ResultTable';
import { getUserInfo, getUserInfoList } from 'components/utils/LoadData';
// import { getUserName } from 'components/utils/LoadData';

const ResultByUser = ({ resultList, itemList, judgeList }) => {
  const [groupUser, setGroupUser] = useState({});
  const transformGroupUserData = (arr) => {
    const result = {};

    arr.forEach((item) => {
      // Check if user_id exists in result
      if (!result[item.user_id]) {
        result[item.user_id] = {};
      }

      // Check if evaluation_id exists under user_id
      if (!result[item.user_id][item.evaluation_id]) {
        result[item.user_id][item.evaluation_id] = {};
      }

      // Set the score and comment under judge_id
      result[item.user_id][item.evaluation_id][item.judge_id] = {
        score: item.score,
        comment: item.comment,
      };
    });

    return result;
  };

  const calcScore = () => {
    if (resultList.length === 0) {
      return {};
    } else {
      return resultList.reduce((acc, item) => {
        // user_id 별 score 합계
        if (!acc[item.user_id]) {
          acc[item.user_id] = { totalScore: 0, evaluations: {} };
        }

        // evaluation_id 별 score 합계
        if (!acc[item.user_id].evaluations[item.evaluation_id]) {
          acc[item.user_id].evaluations[item.evaluation_id] = 0;
        }

        acc[item.user_id].evaluations[item.evaluation_id] += item.score;
        acc[item.user_id].totalScore += item.score;

        return acc;
      }, {});
    }
  };

  const extractMaxScore = () => {
    let score = 0;
    itemList.forEach((item) => {
      if (item) {
        score += item.max;
      } else {
        return '-';
      }
    });
    return score.toString();
  };

  const [userList, setUserList] = useState([]);
  const [userInfoList, setUserInfoList] = useState({});
  const [calcScoreList, setCalcScoreList] = useState({});
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    setGroupUser(transformGroupUserData(resultList));
    setUserList([...new Set(resultList.map((item) => item.user_id))]);

    getUserInfoList([...new Set(resultList.map((item) => item.user_id))]).then(
      (getData) => {
        setUserInfoList(getData);
      },
    );
    setCalcScoreList(calcScore());
    setMaxScore(extractMaxScore());
  }, [resultList]);

  const getUserName = (user_id) => {
    if (userInfoList.length === 0) {
      return 'X';
    } else {
      const foundUser = userInfoList.find((user) => user.user_id === user_id);
      if (foundUser) {
        return foundUser.user_name;
      }
      return 'X';
    }
  };

  console.log(userList);
  console.log(userInfoList);
  if (userList.length !== 0) {
    if (userList.length === userInfoList.length) {
      return (
        <Fragment>
          <Accordion defaultActiveKey={0} flush>
            <div>
              {Object.entries(groupUser).map(([userId, evaluations], index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>
                    | {getUserName(userId)} | {calcScoreList[userId].totalScore}
                    점
                  </Accordion.Header>
                  <Accordion.Body>
                    <ResultTable
                      evaluations={evaluations}
                      itemList={itemList}
                      judgeList={judgeList}
                      calcScoreItem={calcScoreList[userId]}
                      maxScore={maxScore}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </div>
          </Accordion>
        </Fragment>
      );
    }
  }
};

export default ResultByUser;

[
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '1',
    score: 11,
    comment: '되나?',
  },
  {
    evaluation_id: 2,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '1',
    score: 12,
    comment: '하하하',
  },
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '2',
    score: 21,
    comment: '되나?',
  },
  {
    evaluation_id: 2,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '2',
    score: 22,
    comment: '하하하',
  },
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '3',
    score: 31,
    comment: '되나?',
  },
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_2',
    user_id: '1',
    score: 11,
    comment: '되나?',
  },
  {
    evaluation_id: 2,
    post_id: 1,
    judge_id: 'judge_id_2',
    user_id: '1',
    score: 12,
    comment: '하하하',
  },
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_2',
    user_id: '2',
    score: 21,
    comment: '되나?',
  },
  {
    evaluation_id: 2,
    post_id: 1,
    judge_id: 'judge_id_2',
    user_id: '2',
    score: 22,
    comment: '하하하',
  },
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_2',
    user_id: '3',
    score: 31,
    comment: '되나?',
  },
];
[
  {
    1: {
      1: {
        judge_id_1: { score: 11, comment: '되나?' },
        judge_id_2: { score: 11, comment: '되나?' },
      },
      2: {
        judge_id_1: { score: 12, comment: '하하하?' },
        judge_id_2: { score: 12, comment: '하하하?' },
      },
    },
    2: {
      1: {
        judge_id_1: { score: 21, comment: '되나?' },
        judge_id_2: { score: 21, comment: '되나?' },
      },
      2: {
        judge_id_1: { score: 22, comment: '하하하?' },
        judge_id_2: { score: 22, comment: '하하하?' },
      },
    },
    3: {
      1: {
        judge_id_1: { score: 31, comment: '되나?' },
        judge_id_2: { score: 31, comment: '되나?' },
      },
    },
  },
];
[
  {
    evaluation_id: 1,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '1',
    score: 11,
    comment: '되나?',
  },
  {
    evaluation_id: 2,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '1',
    score: 12,
    comment: '하하하',
  },
  {
    evaluation_id: 3,
    post_id: 1,
    judge_id: 'judge_id_1',
    user_id: '2',
    score: 21,
    comment: '되나?',
  },
];

[
  {
    judge_id_1: { score: 11, comment: '되나?' },
    judge_id_2: { score: 11, comment: '되나?' },
  },
];

[
  {
    length: 2,
    total_score: 22,
  },
];
