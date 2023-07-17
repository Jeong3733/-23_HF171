// import node module libraries
import React, { useMemo, Fragment } from 'react';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';
import { Row, Col, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';

// import data files
import { StudentsList } from 'data/users/StudentsData';

const StudentsListCard = () => {
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
			{ accessor: 'joined', Header: 'Enrolled' },
			{
				accessor: 'progress',
				Header: 'Progress',
				Cell: ({ value }) => {
					return value + '%';
				}
			},
			{ accessor: 'questionasked', Header: 'Q/A' },
			{
				accessor: 'locations',
				Header: 'Locations',
				Cell: ({ value }) => {
					return (
						<span className="fs-6">
							<i className="fe fe-map-pin me-1"></i>
							{value}
						</span>
					);
				}
			},
			{
				accessor: 'message',
				Header: 'Message',
				Cell: () => {
					return (
						<Link to="#" className="btn btn-outline-secondary btn-sm">
							Message
						</Link>
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
			<Row>
				<Col className="mb-lg-0 mb-2 ps-5 py-4">
					<GlobalFilter
						filter={globalFilter}
						setFilter={setGlobalFilter}
						placeholder="Search by Name"
					/>
				</Col>
				<Col className="col-auto mb-lg-0 mb-2 pe-5 py-4">
					<Link to="#" className="btn btn-secondary">
						Export CSV
					</Link>
				</Col>
			</Row>

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

export default StudentsListCard;
