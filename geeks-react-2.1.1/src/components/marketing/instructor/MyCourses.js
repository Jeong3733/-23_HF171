// import node module libraries
import React, { useMemo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Trash, Edit, MoreVertical } from 'react-feather';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';
import {
	Card,
	Row,
	Col,
	Dropdown,
	Image,
	Badge,
	Table,
	ListGroup,
	ProgressBar
} from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import LevelIcon from 'components/marketing/common/miscellaneous/LevelIcon';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// import data files
import { MyCoursesData as data_ } from 'data/courses/MyCoursesData';

// import utility file
import { numberWithCommas } from 'helper/utils';

const MyCourses = () => {
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
			{
				accessor: 'image',
				Header: 'Courses',
				Cell: ({ value, row }) => {
					return (
						<div className="d-lg-flex">
							<div>
								<Link to="#">
									<Image src={value} alt="" className="rounded img-4by3-lg" />
								</Link>
							</div>
							<div className="ms-lg-3 mt-2 mt-lg-0">
								<h4 className="mb-1 h5">
									<Link to="#" className="text-inherit">
										{row.original.title}
									</Link>
								</h4>
								<ListGroup as="ul" bsPrefix="list-inline" className="fs-6 mb-0">
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<i className="far fa-clock me-1"></i>
										{row.original.duration}
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<LevelIcon level={row.original.level} />
										{row.original.level}
									</ListGroup.Item>
								</ListGroup>
								{row.original.progress && (
									<ProgressBar
										variant="success"
										className="mt-2"
										now={row.original.progress}
										style={{ height: '3px' }}
									/>
								)}
							</div>
						</div>
					);
				}
			},
			{
				accessor: 'students',
				Header: 'Students',
				Cell: ({ value, row }) => {
					return numberWithCommas(value);
				}
			},

			{
				accessor: 'rating',
				Header: 'Rating',
				Cell: ({ value, row }) => {
					return (
						<Fragment>
							<span className="text-warning">
								{value}
								<Icon path={mdiStar} size={0.6} />
							</span>
							({numberWithCommas(row.original.votes)})
						</Fragment>
					);
				}
			},

			{
				accessor: 'status',
				Header: 'Status',
				Cell: ({ value }) => {
					return (
						<Badge
							bg={`${
								value === 'Draft'
									? 'info'
									: value === 'Live'
									? 'success'
									: value === 'Deleted'
									? 'danger'
									: 'warning'
							} `}
						>
							{value}
						</Badge>
					);
				}
			},
			{
				accessor: 'action',
				Header: '',
				Cell: () => {
					return <ActionMenu />;
				}
			},
			{
				accessor: 'level',
				Header: '',
				show: false
			},
			{
				accessor: 'votes',
				Header: '',
				show: false
			},
			{
				accessor: 'title',
				Header: '',
				show: false
			},
			{
				accessor: 'duration',
				Header: '',
				show: false
			}
		],
		[]
	);

	const data = useMemo(() => data_, []);

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

	const sortby = [
		{ value: 'Date Created', label: 'Date Created' },
		{ value: 'Newest', label: 'Newest' },
		{ value: 'High Rated', label: 'High Rated' },
		{ value: 'Law Rated', label: 'Law Rated' },
		{ value: 'High Earned', label: 'High Earned' }
	];

	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Courses</h3>
						<p className="mb-0">
							Manage your courses and its update like live, draft and insight.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col lg={9} md={7} sm={12} className="mb-lg-0 mb-2">
							<GlobalFilter
								filter={globalFilter}
								setFilter={setGlobalFilter}
								placeholder="Search Your Courses"
							/>
						</Col>
						<Col lg={3} md={5} sm={12}>
							<FormSelect options={sortby} placeholder="Sort by" />
						</Col>
					</Row>
				</Card.Body>
				<Card.Body className="p-0 pb-5">
					<Row>
						<Col lg={12} md={12} sm={12}>
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

export default MyCourses;
