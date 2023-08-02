// import node module libraries
import React, { Fragment, useMemo } from 'react';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Dropdown,
  Card,
  Image,
  Breadcrumb,
  Table,
} from 'react-bootstrap';
import { Trash, Layers, MoreVertical } from 'react-feather';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';

// import utility file
import { numberWithCommas } from 'helper/utils';

// import data files
import { allcourses } from 'data/courses/CategorySingleData';

const CategorySingle = () => {
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

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            {' '}
            <Layers size="15px" className="dropdown-item-icon" /> Change
            Category
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            {' '}
            <Trash size="15px" className="dropdown-item-icon" /> Delete Course
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      { accessor: 'id', Header: 'ID', show: false },
      {
        accessor: 'title',
        Header: 'Courses',
        Cell: ({ value, row }) => {
          return (
            <Link className="text-inherit" to="#">
              <div className="d-lg-flex align-items-center">
                <div>
                  <Image
                    src={row.original.image}
                    alt=""
                    className="img-4by3-lg rounded"
                  />
                </div>
                <div className="ms-lg-3 mt-2 mt-lg-0">
                  <h4 className="mb-1 text-primary-hover">{value}...</h4>
                  <span className="text-inherit">
                    {row.original.date_added}
                  </span>
                </div>
              </div>
            </Link>
          );
        },
      },
      { accessor: 'date_added', Header: '', show: false },
      {
        accessor: 'instructor_name',
        Header: 'Instructor',
        Cell: ({ value, row }) => {
          return (
            <div className="d-flex align-items-center">
              <Image
                src={row.original.instructor_image}
                alt=""
                className="rounded-circle avatar-xs me-2"
              />
              <h5 className="mb-0">{value}</h5>
            </div>
          );
        },
      },
      {
        accessor: 'enrolled',
        Header: 'Enrolled',
        Cell: ({ value }) => {
          return numberWithCommas(value);
        },
      },
      {
        accessor: 'actionmenu',
        Header: '',
        Cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    [],
  );

  const data = useMemo(() => allcourses, []);

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
        pageSize: 8,
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
          else return false;
        }),
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const { pageIndex, globalFilter } = state;

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">
                {' '}
                Web Development <span className="fs-5">(210 Courses)</span>{' '}
              </h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                <Breadcrumb.Item active>Web Development</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <Link
                to="#"
                className="btn btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#newCatgory"
              >
                Back to All Category
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body>
              <div className=" overflow-hidden">
                <Row>
                  <Col lg={12} md={12} sm={12} className="mb-lg-0 mb-2">
                    <GlobalFilter
                      filter={globalFilter}
                      setFilter={setGlobalFilter}
                      placeholder="Search Course"
                    />
                  </Col>
                </Row>
              </div>
            </Card.Body>

            <Card.Body className="p-0">
              <div className="border-0 overflow-y-hidden">
                <Table
                  hover
                  responsive
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
export default CategorySingle;
