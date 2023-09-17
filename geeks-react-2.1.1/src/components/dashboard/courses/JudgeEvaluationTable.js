// import node module libraries
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import {
  Col,
  Row,
  Dropdown,
  Image,
  Table,
  Button,
  Card,
} from 'react-bootstrap';
import DotBadge from 'components/elements/bootstrap/DotBadge';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { loadScoreFile } from 'components/utils/LoadData';

const JudgeEvaluationTable = ({ table_data }) => {
  const { judge_id, post_id, file_id } = useParams();

  const user_id = table_data.fileInfo.data.user_id;
  const scoreList = table_data.scoreList.data;
  const setScoreList = table_data.scoreList.setData;
  const commentJudge = table_data.commentJudge.data;
  const setCommentJudge = table_data.commentJudge.setData;

  const itemList = table_data.itemList.data;
  const itemDetailList = table_data.itemDetailList.data;

  const initComment = '코멘트를 입력하세요.';
  const initScore = 0;

  const handleChange = (e) => {
    if (e.target.type === 'number') {
      const id = parseInt(e.target.id);
      const value = parseInt(e.target.value);
      // 값이 정수이며 10에서 50 사이인지 검사
      // console.log(value, !isNaN(value));
      if (!isNaN(value)) {
        if (value >= 0 && value <= e.target.max) {
          const index = formData.findIndex(
            (item) => item.evaluation_detail_id === id,
          );
          // console.log(index);
          let updatedFormData = [...formData];
          updatedFormData[index].score = parseInt(value);
          setFormData(updatedFormData);
        }
      } else {
        const index = formData.findIndex(
          (item) => item.evaluation_detail_id === id,
        );
        // console.log(index);
        let updatedFormData = [...formData];
        updatedFormData[index].score = parseInt(value);
        setFormData(updatedFormData);
      }
    }
    if (e.target.type === 'text') {
      const value = e.target.value;
      setComment(value);
    }
  };

  const handleSubmit = () => {
    formData.map((item) => {
      if (isNaN(item.score)) {
        alert('점수를 입력해주세요.');
        return;
      }
    });

    const formScoreData = { evaluation_score_list: formData };

    const commentData = {
      post_id: parseInt(post_id),
      judge_id: judge_id,
      user_id: user_id,
      comment: comment,
    };

    // console.log(formScoreData);
    // alert(JSON.stringify(formScoreData));
    apiUtils
      .UpdateScore(formScoreData)
      .then(() => {
        apiUtils
          .UpdateComment(commentData)
          .then((response) => {
            console.log(response);
            alert('점수 및 코멘트가 업데이트 되었습니다.');
            // ScoreList
            loadScoreFile(file_id, judge_id).then((getData) => {
              setScoreList(getData.evaluation_score_list);
              setCommentJudge(getData.comment_list[0].comment);
            });
          })
          .catch((error) => {
            handleLogError(error);
          });
      })
      .catch((error) => {
        handleLogError(error);
      });
  };

  const [comment, setComment] = useState(
    commentJudge ? commentJudge : initComment,
  );
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    console.log(scoreList);
    const initData = [];
    itemList.map((item) => {
      const detailScoreList = itemDetailList[item.evaluation_id].map(
        ({ evaluation_detail_id }) => {
          const foundScore = scoreList.find(
            (score) => score.evaluation_detail_id === evaluation_detail_id,
          );
          if (foundScore) {
            return {
              evaluation_detail_id: evaluation_detail_id,
              judge_id: judge_id,
              post_id: parseInt(post_id),
              user_id: user_id,
              score: foundScore.score,
            };
          } else {
            return {
              evaluation_detail_id: evaluation_detail_id,
              judge_id: judge_id,
              post_id: parseInt(post_id),
              user_id: user_id,
              score: initScore, // 기본값 설정
            };
          }
        },
      );
      initData.push(...detailScoreList);
    });
    setFormData(initData);
  }, [scoreList]);

  function getFormScoreById(evaluation_detail_id) {
    const index = formData.findIndex(
      (item) => item.evaluation_detail_id === evaluation_detail_id,
    );

    return {
      score: formData[index].score,
    };
  }

  function calcSumScore(evaluation_id) {
    let sum = 0;
    itemDetailList[evaluation_id].map(({ evaluation_detail_id }) => {
      const foundScore = scoreList.find(
        (score) => score.evaluation_detail_id === evaluation_detail_id,
      );
      if (foundScore) {
        sum += foundScore.score;
      } else {
        sum += initScore; // 기본값 설정
      }
    });
    return sum;
  }

  if (formData.length === 0) {
    return <div>데이터가 없습니다.</div>;
  } else {
    return (
      <Fragment>
        <Table className="text-nowrap">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">항목명</th>
              <th scope="col">점수</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => {
              console.log(item);
              return (
                <tr key={index}>
                  <td scope="col" className="fw-bold">
                    {index + 1}
                  </td>
                  <td scope="col" className="fw-bold">
                    {item.name}
                  </td>
                  <td scope="col" className="d-flex flex-row gap-1">
                    <div className="fw-bold">
                      {calcSumScore(item.evaluation_id)}
                    </div>
                    <div>
                      {'/ '}
                      {item.max}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table className="text-nowrap">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">항목명</th>
              <th scope="col">점수</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map(({ evaluation_id }, index) => {
              return itemDetailList[evaluation_id].map(
                (itemDetail, detailIndex) => {
                  // console.log(itemDetail);
                  return (
                    <tr key={detailIndex}>
                      <td scope="col">
                        {index + 1} - {detailIndex + 1}
                      </td>
                      <td scope="col">{itemDetail.name}</td>
                      <td scope="col">
                        <input
                          type="number"
                          id={itemDetail.evaluation_detail_id}
                          max={itemDetail.max}
                          onChange={handleChange}
                          value={
                            getFormScoreById(itemDetail.evaluation_detail_id)
                              .score
                          }
                        />
                        {' / '}
                        {itemDetail.max}
                      </td>
                    </tr>
                  );
                },
              );
            })}
          </tbody>
        </Table>
        <div className="d-flex flex-column justify-content-center align-items-stretch gap-2">
          <input type="text" value={comment} onChange={handleChange} />
          <Button variant="primary" onClick={handleSubmit}>
            점수 업데이트
          </Button>
        </div>
      </Fragment>
    );
  }
};

export default JudgeEvaluationTable;
