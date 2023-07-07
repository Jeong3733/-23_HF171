// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, ListGroup, Dropdown, Image } from 'react-bootstrap';

// import utility file
import { numberWithCommas } from 'helper/utils';

// import data files
import InstructorData from 'data/users/InstructorData';

const PopularInstructor = ({ title }) => {
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
						<Dropdown.Header>SETTINGS</Dropdown.Header>
						<Dropdown.Item eventKey="1">
							<i className="fe fe-edit dropdown-item-icon"></i> Edit
						</Dropdown.Item>
						<Dropdown.Item eventKey="2">
							<i className="fe fe-trash dropdown-item-icon"></i> Remove
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	};

	return (
		<Card className="h-100">
			<Card.Header className="d-flex align-items-center justify-content-between card-header-height">
				<h4 className="mb-0">{title}</h4>
				<Link to="#" className="btn btn-outline-secondary btn-sm">
					View all
				</Link>
			</Card.Header>
			<Card.Body>
				<ListGroup variant="flush">
					{InstructorData.slice(0, 5).map((item, index) => (
						<ListGroup.Item
							className={`px-0 ${index === 0 ? 'pt-0' : ''}`}
							key={index}
						>
							<Row>
								<Col className="col-auto">
									<div
										className={`avatar avatar-md avatar-indicators avatar-${item.status}`}
									>
										<Image
											alt="avatar"
											src={item.image}
											className="rounded-circle"
										/>
									</div>
								</Col>
								<Col className="ms-n3">
									<h4 className="mb-0 h5">{item.name}</h4>
									<span className="me-2 fs-6">
										<span className="text-dark  me-1 fw-semi-bold">
											{item.courses}
										</span>
										Courses
									</span>
									<span className="me-2 fs-6">
										<span className="text-dark  me-1 fw-semi-bold">
											{numberWithCommas(item.students)}
										</span>
										Students
									</span>
									<span className="fs-6">
										{' '}
										<span className="text-dark  me-1 fw-semi-bold">
											{numberWithCommas(item.reviews)}
										</span>{' '}
										Reviews
									</span>
								</Col>
								<Col className="col-auto">
									<ActionMenu />
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
export default PopularInstructor;
