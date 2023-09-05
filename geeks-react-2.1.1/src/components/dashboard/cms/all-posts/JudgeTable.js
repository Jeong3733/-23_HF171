// import node module libraries
import React, { Fragment, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Dropdown, Image, Table, Button } from 'react-bootstrap';
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

import { apiUtils } from 'components/utils/ApiUtils';
import { refreshPage } from 'helper/utils';
import { handleLogError } from 'components/utils/ErrorUtils';

const JudgeTable = ({ table_data }) => {
  const { post_id } = useParams();

  const handleClick = () => {
    console.log('handleClick');
    let formDataToSend = { postId: post_id };
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

  const data = useMemo(() => table_data, [table_data]);

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
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    },
  );

  const { pageIndex, globalFilter } = state;

  return (
    <Fragment>
      <div className="table-responsive border-0 overflow-y-hidden">
        <Table
          hover
          {...getTableProps()}
          className="text-nowrap table-centered"
        >
          <thead className="table-light">
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
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td className="align-middle " colSpan="7">
                <div className="d-flex align-items-center">
                  <Button
                    variant="link"
                    className="text-muted border border-2 rounded-3 card-dashed-hover p-0"
                    onClick={handleClick}
                  >
                    <div className="icon-shape icon-lg ">+</div>
                  </Button>
                  <div className="ms-3">
                    <h4 className="mb-0">
                      <div className="text-inherit">심사위원 추가</div>
                    </h4>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Pagination @ Footer */}
      <Pagination
        previousPage={previousPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        gotoPage={gotoPage}
        nextPage={nextPage}
      />
    </Fragment>
  );
};

export default JudgeTable;
