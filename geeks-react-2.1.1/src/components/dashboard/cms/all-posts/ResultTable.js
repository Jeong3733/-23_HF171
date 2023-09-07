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
import { Col, Row, Dropdown, Image, Table, Button } from 'react-bootstrap';

const ResultTable = ({
  evaluations,
  itemList,
  judgeList,
  calcScoreItem,
  maxScore,
}) => {
  const extractTotalScore = (judge_id) => {
    let score = 0;
    itemList.forEach((item) => {
      if (evaluations[item.evaluation_id][judge_id]) {
        score += evaluations[item.evaluation_id][judge_id].score;
      } else {
        return '-';
      }
    });
    return score;
  };

  const searchItem = (evaluation_id) => {
    const foundItem = itemList.find(
      (item) => item.evaluation_id === evaluation_id,
    );
    if (foundItem) {
      return { name: foundItem.name, max: foundItem.max };
    }
    return { name: '-', max: '-' };
  };

  return (
    <Fragment>
      <Table className="text-nowrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            {itemList.map((item, index) => {
              const search = searchItem(item.evaluation_id);
              return (
                <th scope="col" key={index}>
                  <Row>
                    <Col>{search.name}</Col>
                  </Row>
                  <Row>
                    <Col>{search.max}</Col>
                  </Row>
                </th>
              );
            })}
            <th scope="col">
              <Row>
                <Col>총점</Col>
              </Row>
              <Row>
                <Col>{maxScore}</Col>
              </Row>
            </th>
          </tr>
        </thead>
        <tbody>
          {judgeList.map((judge, index) => (
            <tr key={index}>
              <th scope="col">{judge.judge_id.substr(0, 8) + '-...'}</th>
              {itemList.map((item, index) => {
                const search = searchItem(item.evaluation_id);
                return evaluations[item.evaluation_id][judge.judge_id] ? (
                  <td scope="col" key={index}>
                    <b>
                      {evaluations[item.evaluation_id][judge.judge_id].score}
                    </b>
                    {' / '}
                    {search.max}
                  </td>
                ) : (
                  <td
                    scope="col"
                    key={index}
                    style={{ backgroundColor: '#F9F9F9' }}
                  >
                    {'- / '}
                    {search.max}
                  </td>
                );
              })}
              <td scope="col">
                <b>{extractTotalScore(judge.judge_id)}</b>
                {' / '}
                {maxScore}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">최종</th>
            {itemList.map((item, index) => {
              const search = searchItem(item.evaluation_id);
              return calcScoreItem.evaluations[item.evaluation_id] ? (
                <td scope="col" key={index}>
                  <b>{calcScoreItem.evaluations[item.evaluation_id]}</b>
                  {' / '}
                  {search.max * judgeList.length}
                </td>
              ) : (
                <td
                  scope="col"
                  key={index}
                  style={{ backgroundColor: '#F9F9F9' }}
                >
                  {'- / '}
                  {search.max * judgeList.length}
                </td>
              );
            })}
            <td scope="col">
              <b>{calcScoreItem.totalScore}</b>
              {' / '}
              {maxScore * judgeList.length}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Fragment>
  );
};

export default ResultTable;
