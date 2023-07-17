// import node module libraries
import React, { useMemo, Fragment } from 'react';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';
import { Card, Row, Col, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trash, Edit, MoreVertical } from 'react-feather';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// Import required utility file
import { numberWithCommas } from 'helper/utils';

// Import required data file
import { OrdersData } from 'data/marketing/OrdersData';

const Orders = () => {
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
						<Edit size="15px" className="dropdown-item-icon" /> Edit
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<Trash size="15px" className="dropdown-item-icon" /> Remove
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const columns = useMemo(
		() => [
			{ accessor: 'id', Header: 'ID', show: false },
			{ accessor: 'course', Header: 'Courses' },
			{
				accessor: 'amount',
				Header: 'Amount',
				Cell: ({ value, row }) => {
					return '$' + numberWithCommas(value);
				}
			},
			{
				accessor: 'invoice',
				Header: 'Invoice',
				Cell: ({ value, row }) => {
					return <Fragment>#{value}</Fragment>;
				}
			},
			{ accessor: 'date', Header: 'Date' },
			{ accessor: 'method', Header: 'Method' },
			{
				accessor: 'actionmenu',
				Header: '',
				Cell: () => {
					return <ActionMenu />;
				}
			}
		],
		[]
	);

	const data = useMemo(() => OrdersData, []);

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
		setGlobalFilter
	} = useTable(
		{
			columns,
			data,
			initialState: {
				pageSize: 6,
				hiddenColumns: columns.map((column) => {
					if (column.show === false) return column.accessor || column.id;
					else return false;
				})
			}
		},
		useFilters,
		useGlobalFilter,
		usePagination
	);

	const { pageIndex, globalFilter } = state;

	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Orders</h3>
						<p className="mb-0">
							Order Dashboard is a quick overview of all current orders.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<div className=" overflow-hidden">
						<Row>
							<Col lg={12} md={12} sm={12} className="mb-lg-0 mb-2">
								<GlobalFilter
									filter={globalFilter}
									setFilter={setGlobalFilter}
									placeholder="Search Orders"
								/>
							</Col>
						</Row>
					</div>
				</Card.Body>
				<Card.Body className="p-0 pb-5">
					<Row>
						<Col lg={12} md={12} sm={12}>
							<Table
								responsive
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
						</Col>
					</Row>
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
		</ProfileLayout>
	);
};

export default Orders;
