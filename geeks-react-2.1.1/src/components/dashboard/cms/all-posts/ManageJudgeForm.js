// import node module libraries
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Col,
  Row,
  Card,
  Nav,
  Button,
  Form,
  Tab,
  Table,
  Pagination,
  Dropdown,
} from 'react-bootstrap';

// import sub components
import PostsTable from './PostsTable';
import { FormSelect } from 'components/elements/form-select/FormSelect';
import ReactQuillEditorPost from 'components/elements/editor/ReactQuillEditorPost';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';
// impoort Auth module
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from 'react-table';
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import {
  Copy,
  Edit,
  MoreVertical,
  Move,
  ToggleLeft,
  ToggleRight,
  Trash,
} from 'react-feather';
import { refreshPage } from 'helper/utils';
// import { downloadFile, s3Link } from 'helper/utils';

const ManageJudgeForm = () => {
  const { competition_id } = useParams();

  const handleSubmit = () => {
    console.log('handleSubmit');
    console.log(filterSelect);
    let formDataToSend = { post_id: filterSelect };
    apiUtils
      .AddJudge(formDataToSend)
      .then((response) => {
        console.log(response.data);
        refreshPage();
      })
      .catch((error) => {
        // alert(error.response.data);
        handleLogError(error);
      });
  };

  const handleClickAdd = () => {
    console.log('handleClickAdd');
    if (filterSelect === '') {
      alert('심사위원을 추가할 제출 게시물을 선택해주세요.');
    } else {
      handleSubmit();
    }
  };

  const [judgeList, setJudgeList] = useState([]);

  useEffect(() => {
    // judgeList
    const formDataToSend = { competitionId: competition_id };
    apiUtils
      .GetJudgeByCompetitionId(formDataToSend)
      .then((response) => {
        const getJudgeList = response.data;
        setJudgeList(getJudgeList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getJudgeList = [
          { competition_id: 1, post_id: 1, judge_id: 'str' },
          { competition_id: 1, post_id: 1, judge_id: 'str' },
          { competition_id: 1, post_id: 2, judge_id: 'str' },
          { competition_id: 1, post_id: 2, judge_id: 'str' },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setJudgeList(getJudgeList);
        handleLogError(error);
        console.log(judgeList);
      });
  }, []);

  const data = useMemo(() => judgeList, []);
  const filterOptions = [{ value: 'value', label: 'label' }];

  // Create a state
  const [filterSelect, setFilterSelect] = useState('');

  // Update the state when Select changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('post_id', value);
    setFilterSelect(value);
  };

  const columns = useMemo(
    () => [
      {
        accessor: 'judge_id',
        Header: '심사ID',
        Cell: ({ value }) => {
          return (
            <Link to="#" className="text-inherit">
              {value}
            </Link>
          );
        },
      },
      { accessor: 'post_id', Header: '' },
      {
        accessor: 'options',
        Header: 'Options',
        Cell: ({ value, row }) => {
          return <h3>test</h3>;
        },
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setFilter,
    // setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
          else return false;
        }),
      },
    },
    useFilters,
    usePagination,
  );

  const { pageIndex, globalFilter } = state;

  return (
    <Fragment>
      <Row className="justify-content-md-between mb-4 mb-xl-0 ">
        <Col>
          <Form.Control
            as={FormSelect}
            placeholder="Filter"
            options={filterOptions}
            // onChange={getFilterTerm}
            onChange={handleFilterChange}
          />
        </Col>
      </Row>
      {/* displaying records */}
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body className="p-0">
              <div className="table-responsive border-0 overflow-y-hidden">
                <Table
                  hover
                  {...getTableProps()}
                  className="text-nowrap table-centered"
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="align-middle"
                              >
                                {cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                    {filterSelect !== '' ? (
                      <tr>
                        <td className="align-middle " colSpan="7">
                          <div className="d-flex align-items-center">
                            <Button
                              variant="link"
                              className="text-muted border border-2 rounded-3 card-dashed-hover p-0"
                              onClick={handleClickAdd}
                            >
                              <div className="icon-shape icon-lg ">+</div>
                            </Button>
                            <div className="ms-3">
                              <h4 className="mb-0">
                                <div className="text-inherit">
                                  심사위원 추가
                                </div>
                              </h4>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>

          <div className="mt-4">
            {' '}
            <Pagination
              previousPage={previousPage}
              pageCount={pageCount}
              pageIndex={pageIndex}
              gotoPage={gotoPage}
              nextPage={nextPage}
            />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ManageJudgeForm;
