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

const ItemTable = ({ table_data, handleShow }) => {
  const { post_id } = useParams();

  const columns = useMemo(
    () => [
      {
        accessor: 'evaluation_id',
        Header: 'evaluation_id',
        show: false,
      },
      {
        accessor: 'post_id',
        Header: 'post_id',
        show: false,
      },
      {
        accessor: 'name',
        Header: '항목 이름',
        Cell: ({ value }) => {
          return <h1 className="text-inherit">{value}</h1>;
        },
      },
      {
        accessor: 'max',
        Header: '최대 점수',
        Cell: ({ value }) => {
          return <div>{value}</div>;
        },
      },
      {
        accessor: 'shortcutmenu',
        Header: '',
        Cell: () => {
          return <div>옵션</div>;
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
                    onClick={handleShow}
                  >
                    <div className="icon-shape icon-lg ">+</div>
                  </Button>
                  <div className="ms-3">
                    <h4 className="mb-0">
                      <div className="text-inherit">항목 추가</div>
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

export default ItemTable;
