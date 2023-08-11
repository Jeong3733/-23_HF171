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
import { Col, Row, Dropdown, Image, Table } from 'react-bootstrap';
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

const DBUploadPageTable = ({ table_data }) => {
  const { competition_id } = useParams();
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  const ActionMenu = (original) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            <Edit size="15px" className="dropdown-item-icon" /> Edit
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Move size="15px" className="dropdown-item-icon" /> Move
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Copy size="15px" className="dropdown-item-icon" /> Copy
          </Dropdown.Item>
          <Dropdown.Item eventKey="4">
            <ToggleLeft size="15px" className="dropdown-item-icon" /> Publish
          </Dropdown.Item>
          <Dropdown.Item eventKey="5">
            <ToggleRight size="15px" className="dropdown-item-icon" /> Unpublish
          </Dropdown.Item>
          <Dropdown.Item eventKey="6">
            <Trash size="15px" className="dropdown-item-icon" /> Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      { accessor: 'page_id', Header: 'ID', show: false },
      {
        accessor: 'comp_file_id',
        Header: '원본 파일 ID',
        Cell: ({ value }) => {
          // console.log(row.original);
          return <h5 className="mb-0">{value}</h5>;
        },
      },
      {
        accessor: 'page_num',
        Header: '페이지 번호',
        Cell: ({ value }) => {
          return <div>{value + 1}</div>;
        },
      },
      {
        accessor: 'start_index',
        Header: '시작 INDEX',
        Cell: ({ value }) => {
          return <div>{value}</div>;
        },
      },
      {
        accessor: 'shortcutmenu',
        Header: '',
        Cell: ({ value, row }) => {
          return <ActionMenu original={row.original} />;
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
    setGlobalFilter,
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
      <div className=" overflow-hidden">
        <Row>
          <Col lg={12} md={12} sm={12} className="mb-lg-0 mb-2 py-4 px-5 ">
            <GlobalFilter
              filter={globalFilter}
              setFilter={setGlobalFilter}
              placeholder="Search Course"
            />
          </Col>
        </Row>
      </div>
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

export default DBUploadPageTable;
