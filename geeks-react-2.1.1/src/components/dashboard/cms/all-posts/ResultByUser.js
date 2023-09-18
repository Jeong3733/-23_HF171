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
import { truncateString } from 'helper/utils';
// import { getUserName } from 'components/utils/LoadData';

const ResultByUser = (props) => {
  const { competition_id, post_id } = useParams();
  const {
    userInfoList,
    itemList,
    itemDetailList,
    judgeList,
    resultList,
    commentList,
  } = props;
  console.log(userInfoList);
  console.log(itemList);
  console.log(itemDetailList);
  console.log(judgeList);
  console.log(resultList);
  console.log(commentList);

  const [groupUser, setGroupUser] = useState([]);
  function getUniqueUser() {
    const uniqueMap = {};
    userInfoList.forEach((user) => {
      let id = user.user_id;
      if (!uniqueMap[id]) {
        uniqueMap[id] = user;
      }
    });
    setGroupUser(Object.values(uniqueMap));
    getUniqueItemJudgeUser(Object.values(uniqueMap));
  }

  useEffect(() => {
    getUniqueUser();
  }, [resultList]);

  function findMatchingResult(evaluation_detail_id, user_id, judge_id) {
    let res = resultList.find(
      (result) =>
        result.evaluation_detail_id === evaluation_detail_id &&
        result.user_id === user_id &&
        result.judge_id === judge_id,
    );
    if (res) {
      return res.score;
    }
    return 'X';
  }

  const [resultItemJudgeUser, setResultItemJudgeUser] = useState([]);

  function getUniqueItemJudgeUser(group) {
    const uniqueMap = {};
    group.forEach((user) => {
      let user_id = user.user_id;
      judgeList.forEach((judge) => {
        let judge_id = judge.judge_id;
        itemList.forEach((item) => {
          let evaluation_id = item.evaluation_id;
          itemDetailList[evaluation_id].forEach((itemDetail) => {
            let evaluation_detail_id = itemDetail.evaluation_detail_id;
            let res = resultList.find(
              (result) =>
                result.evaluation_detail_id === evaluation_detail_id &&
                result.user_id === user_id &&
                result.judge_id === judge_id,
            );
            if (res) {
              console.log(res.score);
              if (!uniqueMap[user_id]) {
                uniqueMap[user_id] = { sum: res.score };
              } else {
                uniqueMap[user_id].sum += res.score;
              }
              if (!uniqueMap[user_id][judge_id]) {
                uniqueMap[user_id][judge_id] = { sum: res.score };
              } else {
                uniqueMap[user_id][judge_id].sum += res.score;
              }
              if (!uniqueMap[user_id][judge_id][evaluation_id]) {
                uniqueMap[user_id][judge_id][evaluation_id] = res.score;
              } else {
                uniqueMap[user_id][judge_id][evaluation_id] += res.score;
              }
            }
          });
        });
      });
    });
    setResultItemJudgeUser(uniqueMap);
  }

  function matchItemJudge(user_id, judge_id, evaluation_id) {
    try {
      return resultItemJudgeUser[user_id][judge_id][evaluation_id];
    } catch (e) {
      return 0;
    }
  }

  function matchItemSum(user_id, judge_id) {
    try {
      return resultItemJudgeUser[user_id][judge_id].sum;
    } catch (e) {
      return 0;
    }
  }
  function matchUserSum(user_id) {
    try {
      return resultItemJudgeUser[user_id].sum;
    } catch (e) {
      return 0;
    }
  }

  if (!resultItemJudgeUser) {
    return;
  }
  console.log(resultItemJudgeUser);
  return (
    <Fragment>
      <Accordion defaultActiveKey={0} flush>
        <div>
          {groupUser.map((userInfo, index) => {
            let user_id = userInfo.user_id;
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  | {userInfo.user_name} | {matchUserSum(user_id)}점
                </Accordion.Header>
                <Accordion.Body>
                  <Table className="text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">항목명</th>
                        {/* <th scope="col">점수</th> */}
                        {judgeList.map((judge, judgeIndex) => (
                          <th scope="col" key={judgeIndex}>
                            {truncateString(judge.judge_id, 8)}
                          </th>
                        ))}
                        <th scope="col">{'총점'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemList.map((item, itemIndex) => {
                        let evaluation_id = item.evaluation_id;
                        let item_max = item.max;
                        let sumItem = 0;
                        return (
                          <Fragment key={itemIndex}>
                            <tr>
                              <td scope="col" className="fw-bold">
                                {item.name}
                              </td>
                              {judgeList.map((judge, judgeIndex) => {
                                let judge_id = judge.judge_id;
                                let score = matchItemJudge(
                                  user_id,
                                  judge_id,
                                  evaluation_id,
                                );
                                sumItem += score;
                                return (
                                  <td scope="col" key={judgeIndex}>
                                    <div className="d-flex flex-row gap-1">
                                      <div className="fw-bold">{score}</div>
                                      <div>/{item_max}</div>
                                    </div>
                                  </td>
                                );
                              })}

                              <td scope="col">
                                <div className="d-flex flex-row gap-1">
                                  <div className="fw-bold">{sumItem}</div>
                                  <div>/{item_max * itemList.length}</div>
                                </div>
                              </td>
                            </tr>
                            {/* 디테일 항목 점순 */}
                            {itemDetailList[evaluation_id].map(
                              (itemDetail, detailIndex) => {
                                let evaluation_detail_id =
                                  itemDetail.evaluation_detail_id;
                                let item_detail_max = itemDetail.max;
                                let sumItemDetail = 0;
                                return (
                                  <tr key={detailIndex}>
                                    <td scope="col">{itemDetail.name}</td>
                                    {judgeList.map((judge, judgeIndex) => {
                                      let judge_id = judge.judge_id;
                                      let score = findMatchingResult(
                                        evaluation_detail_id,
                                        user_id,
                                        judge_id,
                                      );
                                      sumItemDetail += score;
                                      return (
                                        <td scope="col" key={judgeIndex}>
                                          <div className="d-flex flex-row gap-1">
                                            <div className="fw-bold">
                                              {score}
                                            </div>
                                            <div>/ {item_detail_max}</div>
                                          </div>
                                        </td>
                                      );
                                    })}

                                    <td scope="col">
                                      <div className="d-flex flex-row gap-1">
                                        <div className="fw-bold">
                                          {sumItemDetail}
                                        </div>
                                        <div>
                                          /{item_detail_max * itemList.length}
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              },
                            )}
                          </Fragment>
                        );
                      })}
                      {/* 총점 */}
                      <tr>
                        <td scope="col" className="fw-bold">
                          총점
                        </td>
                        {judgeList.map((judge, judgeIndex) => {
                          let judge_id = judge.judge_id;
                          return (
                            <td scope="col" key={judgeIndex}>
                              <div className="d-flex flex-row gap-1">
                                <div className="fw-bold">
                                  {matchItemSum(user_id, judge_id)}
                                </div>
                                {/* <div>/ {userInfo.total_score}</div> */}
                              </div>
                            </td>
                          );
                        })}
                        <td scope="col" className="fw-bold">
                          {matchUserSum(user_id)}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </div>
      </Accordion>
    </Fragment>
  );
};

export default ResultByUser;
