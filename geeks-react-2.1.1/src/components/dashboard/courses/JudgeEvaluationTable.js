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

  const scoreList = table_data.scoreList.data;
  const setScoreList = table_data.scoreList.setData;

  const itemList = table_data.itemList.data;

  const [formData, setFormData] = useState([]);

  const initComment = '코멘트를 입력하세요.';
  const initScore = 0;

  const handleChange = (e) => {
    const [parentName, evId] = e.target.id.split(':');
    const newValue = e.target.value;

    // ID에 해당하는 데이터 찾기
    const index = formData.findIndex(
      (item) => item.evaluation_id.toString() === evId,
    );

    const newScoreList = [...formData];
    if (parentName === 'score') {
      newScoreList[index].score = parseInt(newValue);
    } else {
      newScoreList[index].comment = newValue;
    }
    setFormData(newScoreList);
  };

  const handleSubmit = () => {
    const reqData = { evaluation_score_list: formData };
    apiUtils
      .UpdateScore(reqData)
      .then((response) => {
        const getData = response.data;

        loadScoreFile(file_id, judge_id).then((getData) => {
          setScoreList(getData.evaluation_score_list);
        });
      })
      .catch((error) => {
        console.log(error.message);
        handleLogError(error);
        // 임시 데이터
      });
    console.log(reqData);
  };

  useEffect(() => {
    const updatedFormData = itemList.map((item) => {
      const foundScore = scoreList.find(
        (score) => score.evaluation_id === item.evaluation_id,
      );

      if (foundScore) {
        return {
          evaluation_id: item.evaluation_id,
          judge_id: judge_id,
          user_id: table_data.fileInfo.data.user_id,
          post_id: parseInt(post_id),
          score: foundScore.score,
          comment: foundScore.comment,
        };
      } else {
        return {
          evaluation_id: item.evaluation_id,
          judge_id: judge_id,
          user_id: table_data.fileInfo.data.user_id,
          post_id: parseInt(post_id),
          score: initScore, // 기본값 설정
          comment: initComment, // 기본값 설정
        };
      }
    });

    setFormData(updatedFormData);
  }, [scoreList]);

  function getFormDataById(evaluation_id) {
    const index = formData.findIndex(
      (item) => item.evaluation_id === evaluation_id,
    );

    return {
      score: formData[index].score,
      comment: formData[index].comment,
    };
  }
  if (formData.length === 0) {
    return <div>데이터가 없습니다.</div>;
  } else {
    return (
      <Fragment>
        {itemList.map((item, index) => {
          // console.log(item);
          const info = getFormDataById(item.evaluation_id);
          return (
            <Card className="p-3 mb-2 " key={index}>
              <Row>
                <Col>
                  <Row className="d-flex align-items-center justify-content-between">
                    <Col>
                      항목 이름 <h3>{item.name}</h3>
                    </Col>
                    <Col className="d-flex align-items-center">
                      <div>
                        최대 점수 <h3>{item.max}</h3>
                      </div>
                      <div>
                        입력 점수 <h3>{info.score}</h3>
                      </div>
                      <input
                        type="range"
                        id={'score:' + item.evaluation_id}
                        name={'score:' + item.evaluation_id}
                        min="0"
                        max={item.max}
                        onChange={handleChange}
                        value={info.score}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      코멘트
                      <br />
                      {/* <h3>{info.comment}</h3> */}
                      <input
                        type="text"
                        id={'comment:' + item.evaluation_id}
                        name={'comment:' + item.evaluation_id}
                        value={info.comment}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          );
        })}
        <Button variant="primary" onClick={handleSubmit}>
          점수 업데이트
        </Button>
      </Fragment>
    );
  }
};

export default JudgeEvaluationTable;
