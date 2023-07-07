// import node module libraries
import React, { Fragment, useMemo } from 'react';
import { useTable } from 'react-table';
import {
	Card,
	Row,
	Col,
	Dropdown,
	Image,
	Table,
	Breadcrumb
} from 'react-bootstrap';
import {
	Trash,
	MoreVertical,
	Edit,
	Move,
	Copy,
	ToggleLeft,
	ToggleRight,
	Video
} from 'react-feather';
import { Link } from 'react-router-dom';
import LinkIcon from 'react-feather/dist/icons/link';
import ImageIcon from 'react-feather/dist/icons/image';

// import custom components
import StatRightBGIcon from 'components/dashboard/common/stats/StatRightBGIcon';
import DotBadge from 'components/elements/bootstrap/DotBadge';

// import MDI icons
import {
	mdiTextBoxMultiple,
	mdiImageMultiple,
	mdiAccountMultiple,
	mdiMessageReplyText
} from '@mdi/js';

// import data files
import { recentposts } from 'data/courses/RecentPostsData';

const CMSDashboard = () => {
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
						<Move size="15px" className="dropdown-item-icon" /> Move
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						{' '}
						<Copy size="15px" className="dropdown-item-icon" /> Copy
					</Dropdown.Item>
					<Dropdown.Item eventKey="4">
						{' '}
						<ToggleLeft size="15px" className="dropdown-item-icon" /> Publish
					</Dropdown.Item>
					<Dropdown.Item eventKey="5">
						{' '}
						<ToggleRight size="15px" className="dropdown-item-icon" /> Unpublish
					</Dropdown.Item>
					<Dropdown.Item eventKey="6">
						{' '}
						<Trash size="15px" className="dropdown-item-icon" /> Delete
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
				Header: 'Post',
				Cell: ({ value }) => {
					return (
						<h5 className="mb-0">
							<Link to="#" className="text-inherit">
								{value}
							</Link>
						</h5>
					);
				}
			},
			{
				accessor: 'type',
				Header: 'Type',
				Cell: ({ value }) => {
					if (value === 'image') {
						return (
							<ImageIcon
								size="18px"
								className="dropdown-item-icon text-primary"
							/>
						);
					}
					if (value === 'video') {
						return (
							<Video size="18px" className="dropdown-item-icon text-primary" />
						);
					}
					if (value === 'link') {
						return (
							<LinkIcon
								size="18px"
								className="dropdown-item-icon text-primary"
							/>
						);
					}
				}
			},
			{
				accessor: 'category',
				Header: 'Category',
				Cell: ({ value }) => {
					return (
						<Link to="#" className="text-inherit">
							{value}
						</Link>
					);
				}
			},
			{ accessor: 'date', Header: 'Date' },
			{
				accessor: 'instructor_name',
				Header: 'Author',
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
				}
			},
			{
				accessor: 'status',
				Header: 'Status',
				Cell: ({ value }) => {
					value = value.toLowerCase();
					return (
						<Fragment>
							<DotBadge
								bg={
									value === 'draft'
										? 'warning'
										: value === 'published'
										? 'success'
										: value === 'scheduled'
										? 'info'
										: value === 'deleted'
										? 'danger'
										: ''
								}
							></DotBadge>
							{value.charAt(0).toUpperCase() + value.slice(1)}
						</Fragment>
					);
				}
			},
			{
				accessor: 'shortcutmenu',
				Header: '',
				Cell: () => {
					return <ActionMenu />;
				}
			}
		],
		[]
	);

	const data = useMemo(() => recentposts, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
			initialState: {
				hiddenColumns: columns.map((column) => {
					if (column.show === false) return column.accessor || column.id;
					else return false;
				})
			}
		});

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">CMS Dashboard</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">CMS</Breadcrumb.Item>
								<Breadcrumb.Item active>Overview</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Link to="/cms/add-new-post" className="btn btn-primary">
								New Post
							</Link>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightBGIcon
						title="TOTAL POSTS"
						value="2,000"
						summary="100 Last 30 Days"
						iconName={mdiTextBoxMultiple}
						iconColorVariant="primary"
						classValue="mb-4"
					/>
				</Col>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightBGIcon
						title="ASSETS"
						value="367"
						summary="300+ Media Object"
						iconName={mdiImageMultiple}
						iconColorVariant="warning"
						classValue="mb-4"
					/>
				</Col>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightBGIcon
						title="USERS"
						value="13,234"
						summary="1.5k in 30Days"
						iconName={mdiAccountMultiple}
						iconColorVariant="success"
						classValue="mb-4"
					/>
				</Col>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightBGIcon
						title="COMMENTS"
						value="120"
						summary="20+ Comments"
						iconName={mdiMessageReplyText}
						iconColorVariant="info"
						classValue="mb-4"
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12} md={12} sm={12}>
					<Card>
						<Card.Header className="d-flex justify-content-between align-items-center border-bottom-0 card-header-height">
							<h4 className="mb-0">Recent Posts</h4>
						</Card.Header>
						<Card.Body className="p-0">
							<Table
								hover
								responsive
								{...getTableProps()}
								className="text-nowrap table-centered"
							>
								<thead className="table-light">
									{
										// Loop over the header rows
										headerGroups.map((headerGroup) => (
											<tr {...headerGroup.getHeaderGroupProps()}>
												{headerGroup.headers.map((column) => (
													<th {...column.getHeaderProps()}>
														{column.render('Header')}
													</th>
												))}
											</tr>
										))
									}
								</thead>
								{/* Apply the table body props */}
								<tbody {...getTableBodyProps()}>
									{rows.map((row) => {
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
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default CMSDashboard;
