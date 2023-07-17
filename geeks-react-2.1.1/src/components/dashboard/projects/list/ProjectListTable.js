// import node module libraries
import React, { Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
	Col,
	Row,
	Dropdown,
	Table,
	Card,
	ProgressBar,
	Form,
	Button
} from 'react-bootstrap';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import { FormSelect } from 'components/elements/form-select/FormSelect';
import { AvatarGroup, Avatar } from 'components/elements/bootstrap/Avatar';

// import data files
import ProjectsListData from 'data/dashboard/projects/ProjectsListData';
import ProjectTeamMembersData from 'data/dashboard/projects/ProjectTeamMembersData';

// import utility file
import { numberWithCommas, getStatusColor } from 'helper/utils';

const ProjectListTable = ({ onNewProject }) => {
	const filterOptions = [
		{ value: 'In Progress', label: 'In Progress' },
		{ value: 'Pending', label: 'Pending' },
		{ value: 'Modified', label: 'Modified' },
		{ value: 'Finished', label: 'Finished' },
		{ value: 'Cancel', label: 'Cancel' }
	];

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
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>Settings</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<i className="fe fe-edit dropdown-item-icon"></i>Edit Details
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<i className="fe fe-link dropdown-item-icon"></i>Copy project link
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-save dropdown-item-icon"></i>Save as Default
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-copy dropdown-item-icon"></i>Duplicate
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-layout dropdown-item-icon"></i>Convert to
						Template
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="3">
						<i className="fe fe-upload dropdown-item-icon"></i>Import
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-printer dropdown-item-icon"></i>Export / Print
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-users dropdown-item-icon"></i>Move to another
						team
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="3">
						<i className="fe fe-archive dropdown-item-icon"></i>Archive
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-trash dropdown-item-icon"></i>Delete Project
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
				Header: 'Project Name',
				Cell: ({ value, row }) => {
					return (
						<div className="d-flex align-items-center">
							<div className="icon-shape icon-lg rounded-3 border p-4">
								<i className={`fe fe-${row.original.icon} fs-3 text-muted`}></i>
							</div>
							<div className="ms-3">
								<h4 className="mb-0">
									<Link to="#" className="text-inherit">
										{value}
									</Link>
								</h4>
							</div>
						</div>
					);
				}
			},
			{ accessor: 'duedate', Header: 'Dates' },
			{
				accessor: 'budget',
				Header: 'Budget',
				Cell: ({ value }) => {
					return '$' + numberWithCommas(value);
				}
			},
			{
				accessor: 'progress',
				Header: 'Task Progress',
				Cell: ({ value, row }) => {
					return (
						<div className="d-flex align-items-center">
							<div className="me-2">
								{' '}
								<span>{value}%</span>
							</div>
							<ProgressBar
								variant={getStatusColor(row.original.status)}
								now={value}
								className="flex-auto"
								style={{ height: '6px' }}
							/>
						</div>
					);
				}
			},

			{
				accessor: 'status',
				Header: 'Status',
				Cell: ({ value }) => {
					return (
						<span
							className={`badge bg-light-${getStatusColor(
								value
							)} text-dark-${getStatusColor(value)}`}
						>
							{value}
						</span>
					);
				}
			},
			{
				accessor: 'team',
				Header: 'Team',
				Cell: ({ value }) => {
					return (
						<AvatarGroup>
							{ProjectTeamMembersData.filter(function (dataSource) {
								return (
									dataSource.id === value[0] ||
									dataSource.id === value[1] ||
									dataSource.id === value[2]
								);
							}).map((member, index) => {
								return (
									<Avatar
										size="md"
										src={member.image}
										type={`${member.image == null ? 'initial' : 'image'}`}
										name={member.name}
										className="rounded-circle"
										imgtooltip
										key={index}
									/>
								);
							})}
							<Avatar
								size="md"
								type="initial"
								name={value.length - 3 + '+'}
								variant="light"
								className="rounded-circle text-dark"
								showExact
							/>
						</AvatarGroup>
					);
				}
			},
			{
				accessor: 'action',
				Header: '',
				Cell: () => {
					return <ActionMenu />;
				}
			}
		],
		[]
	);

	const data = useMemo(() => ProjectsListData, []);

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
			<Row className="justify-content-md-between mb-4 mb-xl-0 ">
				<Col xl={2} lg={4} md={6} xs={12}>
					{/* search records */}
					<div className="mb-2 mb-lg-4">
						<GlobalFilter
							filter={globalFilter}
							setFilter={setGlobalFilter}
							placeholder="Search by project name"
						/>
					</div>
				</Col>
				<Col xxl={2} lg={2} md={6} xs={12}>
					{/* records filtering options */}
					<Form.Control
						as={FormSelect}
						placeholder="Filter"
						options={filterOptions}
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12} md={12} sm={12}>
					<Card>
						<Card.Body className="p-0">
							<div className="table-responsive border-0 overflow-y-hidden">
								<Table
									hover
									{...getTableProps()}
									className="text-nowrap table-centered"
								>
									<thead>
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
															<td
																{...cell.getCellProps()}
																className="align-middle"
															>
																{cell.render('Cell')}
															</td>
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
														onClick={onNewProject}
													>
														<div className="icon-shape icon-lg ">+</div>
													</Button>
													<div className="ms-3">
														<h4 className="mb-0">
															<Link to="#" className="text-inherit">
																New Project
															</Link>
														</h4>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>

					{/* Pagination @ Footer */}
					<div className="mt-4">
						{' '}
						<Pagination
							previousPage={previousPage}
							pageCount={pageCount}
							pageIndex={pageIndex}
							gotoPage={gotoPage}
							nextPage={nextPage}
						/>
					</div>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ProjectListTable;
