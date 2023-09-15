// import node module libraries
import React, { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from 'react-table';
import {
  Col,
  Row,
  Dropdown,
  Card,
  Breadcrumb,
  Button,
  Modal,
  Table,
} from 'react-bootstrap';
import { Trash, Send, Inbox, MoreVertical } from 'react-feather';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import Checkbox from 'components/elements/advance-table/Checkbox';
import DotBadge from 'components/elements/bootstrap/DotBadge';

// import sub components
import AddNewCategoryPopup from 'components/dashboard/courses/DocumentQAPopup';

// import data files
import { courses } from 'data/courses/CoursesCategoryData';

const Evaluate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    >
      {children}
    </Link>
  ));

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>ACTION</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            {' '}
            <Send size="18px" className="dropdown-item-icon" /> Publish
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            {' '}
            <Inbox size="18px" className="dropdown-item-icon" /> Moved Draft
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            {' '}
            <Trash size="18px" className="dropdown-item-icon" /> Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      { accessor: 'id', Header: 'ID' },
      { accessor: 'category', Header: 'CATEGORY' },
      { accessor: 'slug', Header: 'SLUG' },
      { accessor: 'posts', Header: 'POSTS' },
      { accessor: 'date_created', Header: 'DATE CREATED' },
      { accessor: 'date_updated', Header: 'DATE UPDATED' },
      {
        accessor: 'status',
        Header: 'STATUS',
        Cell: ({ value }) => {
          return (
            <DotBadge
              bg={value === 1 ? 'success' : value === 0 ? 'warning' : ''}
            ></DotBadge>
          );
        },
      },
      {
        accessor: 'action',
        Header: '',
        Cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    [],
  );

  const data = useMemo(() => courses, []);

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
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Courses Category</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Courses</Breadcrumb.Item>
                <Breadcrumb.Item active>Courses Category</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Add New Category
              </Button>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Create New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddNewCategoryPopup />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                  {/*  Action Buttons  */}
                  <Button variant="primary" onClick={handleClose}>
                    Add New Category
                  </Button>
                  <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body className="p-0">
              <div className=" overflow-hidden">
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="mb-lg-0 mb-2 px-5 py-4"
                  >
                    <GlobalFilter
                      filter={globalFilter}
                      setFilter={setGlobalFilter}
                      placeholder="Search Items..."
                    />
                  </Col>
                </Row>
              </div>

              <div className="table-responsive ">
                <Table {...getTableProps()} className="text-nowrap">
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
                              <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                              </td>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Evaluate;
