// import node module libraries
import React, { useMemo } from 'react';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';
import { Row, Col, Image, Table, Card, Form } from 'react-bootstrap';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import data files
import QuizResultsData from 'data/marketing/quiz/QuizResultsData';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

const QuizResult = () => {
	const sortOptions = [
		{ value: 'Free', label: 'Free' },
		{ value: 'Newest', label: 'Newest' },
		{ value: 'Oldest', label: 'Oldest' }
	];

	const columns = useMemo(
		() => [
			{ accessor: 'id', Header: 'ID', show: false },
			{ accessor: 'image', Header: '', show: false },
			{
				accessor: 'name',
				Header: 'Students',
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
			{ accessor: 'score', Header: 'Score' },
			{
				accessor: 'attempts',
				Header: 'Attempts',
				Cell: ({ value }) => {
					return value + ' attempts';
				}
			},
			{ accessor: 'finishingTime', Header: 'Finishing Time' }
		],
		[]
	);

	const data = useMemo(() => QuizResultsData, []);

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

	const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
	const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
		return recordsOnCurrentPage < recordsPerPage
			? recordsPerPage * (pageNo + 1) - (recordsPerPage - recordsOnCurrentPage)
			: recordsPerPage * (pageNo + 1);
	};
	return (
		<ProfileLayout>
			<Card className="mb-4">
				<Card.Header>
					<h3 className="mb-0">Result - React Basic Quiz </h3>
				</Card.Header>
				<Card.Body className="border-bottom">
					<Row className="row-cols-lg-3 row-cols-1">
						<Col>
							<Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
								<Card.Body>
									<h4 className="mb-0">Participate</h4>
									<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
										<div>
											<span className="fs-3 text-dark fw-semi-bold">27</span>
										</div>
										<div className="align-middle">
											<i className="fe fe-users h2 text-danger"></i>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
								<Card.Body>
									<h4 className="mb-0">Scores</h4>
									<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
										<div>
											<span className="fs-3 text-dark fw-semi-bold">82</span>
										</div>
										<div className="align-middle">
											<i className="fe fe-clipboard h2 text-primary"></i>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="bg-gray-100 shadow-none mb-3 mb-lg-0">
								<Card.Body>
									<h4 className="mb-0">Average Time</h4>
									<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
										<div>
											<span className="fs-3 text-dark fw-semi-bold">
												00:00:42
											</span>
										</div>
										<div className="align-middle">
											<i className="fe fe-clock h2 text-success"></i>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Card.Body>
				<Card.Body className="card-body border-bottom">
					<Form className="row">
						<Col lg={9} md={7} xs={12} className="mb-lg-0 mb-2">
							<GlobalFilter
								filter={globalFilter}
								setFilter={setGlobalFilter}
								placeholder="Search"
							/>
						</Col>
						<Col lg={3} md={5} xs={12}>
							<Form.Control
								as={FormSelect}
								placeholder="Sort by"
								options={sortOptions}
							/>
						</Col>
					</Form>
				</Card.Body>
				{/* table */}
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
											<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
				<Card.Footer className="card-footer">
					{/* Pagination */}
					<div className="d-flex align-items-center w-100 justify-content-between">
						<span>
							Showing {setFromPage(page.length, pageIndex)} -
							{setToPage(page.length, pageIndex, page.length)} of{' '}
							{QuizResultsData.length} entries
						</span>
						<Pagination
							previousPage={previousPage}
							pageCount={pageCount}
							pageIndex={pageIndex}
							gotoPage={gotoPage}
							nextPage={nextPage}
						/>
					</div>
				</Card.Footer>
			</Card>
		</ProfileLayout>
	);
};

export default QuizResult;
