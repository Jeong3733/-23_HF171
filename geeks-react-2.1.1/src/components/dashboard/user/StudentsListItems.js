// import node module libraries
import React, { Fragment, useMemo } from 'react';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';
import { Link } from 'react-router-dom';
import {
	Dropdown,
	Image,
	OverlayTrigger,
	Tooltip,
	Row,
	Col,
	Table
} from 'react-bootstrap';
import { MoreVertical, Trash, Edit, Mail } from 'react-feather';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';

// import utility file
import { numberWithCommas } from 'helper/utils';

// import data files
import { StudentsList } from 'data/users/StudentsData';

const StudentsListItems = () => {
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
						<Edit size="15px" className="dropdown-item-icon" /> Edit
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						{' '}
						<Trash size="15px" className="dropdown-item-icon" /> Remove
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const columns = useMemo(
		() => [
			{ accessor: 'id', Header: 'ID', show: false },
			{
				accessor: 'name',
				Header: 'Name',
				Cell: ({ value, row }) => {
					return (
						<div className="d-flex align-items-center">
							<Image
								src={row.original.image}
								alt=""
								className="rounded-circle avatar-md me-2"
							/>
							<h5 className="mb-0">{value}</h5>
						</div>
					);
				}
			},
			{ accessor: 'image', Header: '', show: false },
			{
				accessor: 'enrolled',
				Header: 'Enrolled',
				Cell: ({ value }) => {
					return value + ' Courses';
				}
			},
			{ accessor: 'joined', Header: 'Joined At' },
			{
				accessor: 'payment',
				Header: 'TotaL Payment',
				Cell: ({ value }) => {
					return '$' + numberWithCommas(value);
				}
			},
			{ accessor: 'locations', Header: 'Locations' },
			{
				accessor: 'message',
				Header: 'Action',
				Cell: () => {
					return (
						<div className="hstack gap-4">
							<OverlayTrigger
								key="top"
								placement="top"
								overlay={<Tooltip id={`tooltip-top`}>Message</Tooltip>}
							>
								<Link to="#">
									<Mail size="15px" className="dropdown-item-icon" />
								</Link>
							</OverlayTrigger>

							<OverlayTrigger
								key="top"
								placement="top"
								overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
							>
								<Link to="#">
									<Trash size="15px" className="dropdown-item-icon" />
								</Link>
							</OverlayTrigger>

							<ActionMenu />
						</div>
					);
				}
			}
		],
		[]
	);

	const data = useMemo(() => StudentsList, []);

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
				pageSize: 10,
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
		<Fragment>
			<div className=" overflow-hidden">
				<Row>
					<Col lg={12} md={12} sm={12} className="mb-lg-0 mb-2 px-5 py-4">
						<GlobalFilter
							filter={globalFilter}
							setFilter={setGlobalFilter}
							placeholder="Search Students"
						/>
					</Col>
				</Row>
			</div>

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
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
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

export default StudentsListItems;
