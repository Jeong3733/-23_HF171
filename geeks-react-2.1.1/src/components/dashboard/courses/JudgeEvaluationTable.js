// import node module libraries
import React, { Fragment, useMemo, useState } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
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
import {
  Trash,
  MoreVertical,
  Edit,
  Move,
  Copy,
  ToggleLeft,
  ToggleRight,
  Video,
} from 'react-feather';
import LinkIcon from 'react-feather/dist/icons/link';
import ImageIcon from 'react-feather/dist/icons/image';

// Import required custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import Checkbox from 'components/elements/advance-table/Checkbox';
import DotBadge from 'components/elements/bootstrap/DotBadge';

const JudgeEvaluationTable = ({ table_data }) => {
  const { judge_id, post_id } = useParams();

  const score = table_data.scoreList.data;
  const setScore = table_data.scoreList.setData;

  const [formData, setFormData] = useState({
    comment: 'comment comment',
    evaluation_id: 3,
    judge_id: '32af249e-96e3-4524-a46d-c973c0d1b839',
    post_id: 1,
    score: 30,
    user_id: 1,
  });

  function getScoreById(id) {
    return score.find((item) => item.evaluation_id === id);
  }

  console.log(table_data);
  const columns = useMemo(
    () => [
      { accessor: 'evaluation_id', Header: 'ID', show: false },
      {
        accessor: 'name',
        Header: '평가 항목 이름',
        Cell: ({ value }) => {
          return <div className="text-inherit">{value}</div>;
        },
      },
      {
        accessor: 'max',
        Header: '점수',
        Cell: ({ value, row }) => {
          return (
            <h3>
              {value} : {getScoreById(row.original.evaluation_id).score}
            </h3>
          );
        },
      },
      {
        accessor: 'comment',
        Header: 'Comments',
        Cell: ({ value, row }) => {
          return (
            <div>
              {value} : {getScoreById(row.original.evaluation_id).comment}
            </div>
          );
        },
      },
    ],
    [],
  );

  // const { pageIndex, globalFilter } = state;

  return (
    <Fragment>
      {table_data.itemList.data.map((item, index) => {
        // console.log(item);
        const info = getScoreById(item.evaluation_id);
        console.log(info);
        return (
          <Card className="p-3 mb-2 bg-light shadow-none" key={index}>
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
                    <div>
                      <input
                        type="range"
                        id="score"
                        name="score"
                        min="0"
                        max={info.max}
                        value={info.score}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    코멘트
                    <br />
                    {/* <h3>{info.comment}</h3> */}
                    <input
                      type="text"
                      name="comment"
                      id="comment"
                      value={info.comment}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default JudgeEvaluationTable;
