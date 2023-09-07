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

  useEffect(() => {
    setGroupUser(transformGroupUserData(resultList));
  }, [resultList]);

  // console.log(groupUser);
  return (
    <Fragment>
      <Accordion defaultActiveKey={0} flush>
        <div>
          {Object.entries(groupUser).map(([userId, evaluations], index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>최종 점수 : userId({userId}) </Accordion.Header>
              <Accordion.Body>
                <ResultTable
                  evaluations={evaluations}
                  itemList={itemList}
                  judgeList={judgeList}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </div>
      </Accordion>
    </Fragment>
  );
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
