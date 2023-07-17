// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Dropdown } from 'react-bootstrap';

// import bootstrap icons
import { Calendar4, Clock, CurrencyDollar } from 'react-bootstrap-icons';

const ProjectSummary = () => {
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
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>
						<i className="fe fe-more-vertical text-muted"></i>
					</Dropdown.Toggle>
					<Dropdown.Menu align="end">
						<Dropdown.Header>Settings</Dropdown.Header>
						<Dropdown.Item eventKey="1">Action</Dropdown.Item>
						<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
						<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	};

	return (
		<Card>
			<Card.Header className="card-header">
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<h4 className="mb-0">Project Summary</h4>
					</div>
					<div>
						<ActionMenu />
					</div>
				</div>
			</Card.Header>
			<Card.Body>
				<p>
					Give a high-level overview of the product / project you re working on,
					its goals, etc..Elaborate on the target audience of your
					project/product, link out to additional resources. Vivamus pretium
					laoreet massa eu euismod. Nunc accumsan id odio sed luctus.
					Suspendisse a lacus sed ex consequat interdum quis non eros. Lorem
					ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore nam
					fuga sapiente vel iste animiicta ab at placeat sint.{' '}
				</p>
				<ListGroup variant="flush">
					<ListGroup.Item className="px-0">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<Calendar4 size={16} className="text-primary" />
								<div className="ms-2">
									<h5 className="mb-0 text-body">Start Date</h5>
								</div>
							</div>
							<div>
								<p className="text-dark mb-0 fw-semi-bold">01 Jan, 2021</p>
							</div>
						</div>
					</ListGroup.Item>
					<ListGroup.Item className="px-0">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<Calendar4 size={16} className="text-primary" />
								<div className="ms-2">
									<h5 className="mb-0 text-body">End Date</h5>
								</div>
							</div>
							<div>
								<p className="text-dark mb-0 fw-semi-bold">30 Dec, 2021</p>
							</div>
						</div>
					</ListGroup.Item>
					<ListGroup.Item className="px-0">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<Clock size={16} className="text-primary" />
								<div className="ms-2">
									<h5 className="mb-0 text-body">Estimate Time</h5>
								</div>
							</div>
							<div>
								<p className="text-dark mb-0 fw-semi-bold">30 Days</p>
							</div>
						</div>
					</ListGroup.Item>
					<ListGroup.Item className="px-0">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<CurrencyDollar size={16} className="text-primary" />
								<div className="ms-2">
									<h5 className="mb-0 text-body">Cost</h5>
								</div>
							</div>
							<div>
								<p className="text-dark mb-0 fw-semi-bold">$18,000</p>
							</div>
						</div>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
};

export default ProjectSummary;
