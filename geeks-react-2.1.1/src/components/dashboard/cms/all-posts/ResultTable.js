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

// Import required custom components
import Pagination from 'components/elements/advance-table/Pagination';
import Checkbox from 'components/elements/advance-table/Checkbox';

const ResultTable = ({ evaluations, itemList, judgeList }) => {
  const extractTotalScore = (judge_id) => {
    let score = 0;
    itemList.forEach((item) => {
      if (evaluations[item.evaluation_id][judge_id]) {
        score += evaluations[item.evaluation_id][judge_id].score;
      } else {
        return 'X';
      }
    });
    return score;
  };

  const extractMaxScore = () => {
    let score = 0;
    itemList.forEach((item) => {
      if (item) {
        score += item.max;
      } else {
        return 'X';
      }
    });
    return score.toString();
  };

  const searchItemName = (evaluation_id) => {
    const foundItem = itemList.find(
      (item) => item.evaluation_id === evaluation_id,
    );
    if (foundItem) {
      return { name: foundItem.name, max: foundItem.max };
    }
    return { name: 'X', max: 'X' };
  };

  return (
    <Fragment>
      <Table className="text-nowrap">
        <thead>
          <tr>
            <th scope="col">#</th>
            {itemList.map((item, index) => {
              const search = searchItemName(item.evaluation_id);
              return (
                <th scope="col" key={index}>
                  {search.name + '/' + search.max}
                </th>
              );
            })}
            <th scope="col">{'총점/' + extractMaxScore()}</th>
          </tr>
        </thead>
        <tbody>
          {judgeList.map((judge, index) => (
            <tr key={index}>
              <th scope="col" key={index}>
                {judge.judge_id.substr(0, 8) + '-...'}
              </th>
              {itemList.map((item, index) =>
                evaluations[item.evaluation_id][judge.judge_id] ? (
                  <td scope="col" key={index}>
                    {evaluations[item.evaluation_id][judge.judge_id].score}
                  </td>
                ) : (
                  <td scope="col" key={index}>
                    X
                  </td>
                ),
              )}
              <td scope="col">총점 : {extractTotalScore(judge.judge_id)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default ResultTable;
