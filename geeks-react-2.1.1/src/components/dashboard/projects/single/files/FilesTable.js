// import node module libraries
import React, { Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Dropdown, Table, Card, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import {
	useTable,
	useFilters,
	useGlobalFilter,
	usePagination
} from 'react-table';

// import bootstrap icons
import {
	FileImage,
	FileWord,
	FileEarmarkSpreadsheet,
	FilePpt,
	FileText,
	FileEarmarkSlides,
	Exclamation
} from 'react-bootstrap-icons';

// import custom components
import GlobalFilter from 'components/elements/advance-table/GlobalFilter';
import Pagination from 'components/elements/advance-table/Pagination';
import GKTippy from 'components/elements/tooltips/GKTippy';
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import data files
import { filesdata } from 'data/dashboard/projects/FilesData';

// import utility file
import { getFileExtension, getRandomNo } from 'helper/utils';

const FilesTable = () => {
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
				<Dropdown.Menu align={'end'}>
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const getFileTypeIcon = (value) => {
		let color = null;
		let extension = getFileExtension(value);
		extension === 'xlsx'
			? (color = 'primary')
			: extension === 'jpeg'
			? (color = 'info')
			: extension === 'doc'
			? (color = 'success')
			: extension === 'ppt'
			? (color = 'danger')
			: extension === 'txt'
			? (color = 'warning')
			: extension === 'mov'
			? (color = 'danger')
			: (color = 'danger');

		return (
			<div className={`icon-shape icon-lg rounded-3 bg-light-${color}`}>
				<Link to="#">
					{extension === 'xlsx' ? (
						<FileEarmarkSpreadsheet size={24} className="text-primary" />
					) : extension === 'jpeg' ? (
						<FileImage size={24} className="text-info" />
					) : extension === 'doc' ? (
						<FileWord size={24} className="text-success" />
					) : extension === 'ppt' ? (
						<FilePpt size={24} className="text-danger" />
					) : extension === 'txt' ? (
						<FileText size={24} className="text-warning" />
					) : extension === 'mov' ? (
						<FileEarmarkSlides size={24} className="text-danger" />
					) : (
						<Exclamation size={24} className="text-danger" />
					)}
				</Link>
			</div>
		);
	};

	const columns = useMemo(
		() => [
			{ accessor: 'id', Header: 'ID', show: false },
			{
				accessor: 'filename',
				Header: 'Name',
				Cell: ({ value }) => {
					return (
						<div className="d-flex align-items-center">
							{getFileTypeIcon(value)}
							<div className="ms-3">
								<h5 className="mb-0">
									<Link to="#" className="text-inherit">
										{value}{' '}
									</Link>
								</h5>
							</div>
						</div>
					);
				}
			},

			{ accessor: 'filesize', Header: 'File Size' },
			{ accessor: 'date_modified', Header: 'Modified' },
			{
				accessor: 'avatar',
				Header: 'Uploaded By',
				Cell: ({ value, row }) => {
					const bgColor = [
						'primary',
						'secondary',
						'info',
						'success',
						'danger',
						'warning',
						'danger',
						'dark'
					];
					return value === null ? (
						<Avatar
							size="sm"
							type="initial"
							name={row.original.uploadedby}
							className={`rounded-circle bg-${bgColor[getRandomNo(0, 7)]}`}
						/>
					) : (
						<Image
							src={value}
							alt=""
							className="rounded-circle avatar avatar-sm"
						/>
					);
				}
			},

			{
				accessor: 'options',
				Header: 'Options',
				Cell: () => {
					return (
						<Fragment>
							<GKTippy content="Download">
								<Link to="#" className="me-3 text-muted">
									<i className="fe fe-download fs-5"></i>
								</Link>
							</GKTippy>
							<GKTippy content="Link">
								<Link to="#" className="me-3 text-muted">
									<i className="fe fe-link fs-5"></i>
								</Link>
							</GKTippy>
						</Fragment>
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

	const data = useMemo(() => filesdata, []);

	const {
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
			{/* search filename */}
			<Row>
				<Col xxl={2} lg={3} md={12} xs={12} className="mb-4">
					<GlobalFilter
						filter={globalFilter}
						setFilter={setGlobalFilter}
						placeholder="Search Filename"
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12} md={12} sm={12}>
					<Card>
						<Card.Header>
							<h4 className="mb-0">Files</h4>
						</Card.Header>
						<Card.Body className="p-0">
							<div className="table-responsive border-0 overflow-y-hidden">
								<Table hover className="text-nowrap mb-0 table-centered">
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

export default FilesTable;
