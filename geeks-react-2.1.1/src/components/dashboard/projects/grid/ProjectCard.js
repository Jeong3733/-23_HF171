// import node module libraries
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, ProgressBar, Dropdown } from 'react-bootstrap';

// import custom components
import { AvatarGroup, Avatar } from 'components/elements/bootstrap/Avatar';

// import utility file
import { numberWithCommas, getStatusColor } from 'helper/utils';

// import data files
import ProjectTeamMembersData from 'data/dashboard/projects/ProjectTeamMembersData';

const ProjectCard = ({ item }) => {
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

	const CardHeading = (item) => {
		if (item.icon != null) {
			return (
				<div className="d-flex align-items-center">
					<div className="icon-shape icon-lg rounded-3 border p-4">
						<i className={`fe fe-${item.icon} fs-3 text-muted`}></i>
					</div>
					<div className="ms-3">
						<h4 className="mb-0">
							<Link to="#" className="text-inherit">
								{item.title}
							</Link>
						</h4>
						<span className="text-muted fs-6">{item.category}</span>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h4 className="mb-0">
						<Link to="#" className="text-inherit">
							{item.title}
						</Link>
					</h4>
					<span className="text-muted fs-6">{item.category}</span>
				</div>
			);
		}
	};

	return (
		<Card className="h-100">
			{item.coverimage != null ? (
				<Fragment>
					<Card.Img
						variant="top"
						src={item.coverimage}
						className="img-fluid rounded-top"
					/>
					<div className="d-flex position-absolute end-0 pe-3 pt-3">
						<ActionMenu />
					</div>
				</Fragment>
			) : (
				''
			)}
			<Card.Body>
				{/* heading*/}
				{item.coverimage == null ? (
					<div className="d-flex align-items-center justify-content-between">
						{CardHeading(item)}
						<div className="d-flex align-items-center">
							<ActionMenu />
						</div>
					</div>
				) : (
					CardHeading(item)
				)}

				<div className="mt-3 mb-4">
					<p className="mb-0">{item.projectbrief}</p>
				</div>
				{/* progress */}
				<div className="d-flex justify-content-between align-items-center mb-5">
					<div className="d-flex align-items-center">
						{/* avatar group */}
						<AvatarGroup>
							{ProjectTeamMembersData.filter(function (dataSource) {
								return (
									dataSource.id === item.team[0] ||
									dataSource.id === item.team[1] ||
									dataSource.id === item.team[2]
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
								name={item.team.length - 3 + '+'}
								variant="light"
								className="rounded-circle text-dark"
								showExact
							/>
						</AvatarGroup>
					</div>
					{/* text */}
					<div>
						<span
							className={`badge bg-light-${getStatusColor(
								item.status
							)} text-dark-${getStatusColor(item.status)}`}
						>
							{item.status}
						</span>
					</div>
				</div>
				<div>
					{/* progress bar */}
					<ProgressBar className="progress-tooltip" style={{ height: '6px' }}>
						<ProgressBar
							now={item.progress}
							style={{ width: item.progress + '%' }}
							variant={getStatusColor(item.status)}
						/>
						<div className="progress-bar">
							<span>{item.progress}%</span>
						</div>
					</ProgressBar>
				</div>
			</Card.Body>

			{/* card footer */}
			<Card.Footer className="p-0">
				<div className="d-flex justify-content-between ">
					<div className="w-50 py-3 px-4 ">
						<h6 className="mb-0 text-muted">Due Date:</h6>
						<p className="text-dark fs-6 fw-semi-bold mb-0">{item.duedate}</p>
					</div>
					<div className="border-start w-50 py-3 px-4">
						<h6 className="mb-0 text-muted">Budget:</h6>
						<p className="text-dark fs-6 fw-semi-bold mb-0">
							${numberWithCommas(item.budget)}
						</p>
					</div>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
