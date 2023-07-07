// import node module libraries
import React, { Fragment } from 'react';
import { MoreVertical } from 'react-feather';
import { Link } from 'react-router-dom';
import {
	Card,
	ListGroup,
	Row,
	Col,
	Container,
	Dropdown
} from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiContentCopy } from '@mdi/js';

// import custom components
import CourseCard from 'components/marketing/pages/courses/CourseCard';

// import profile layout wrapper
import ProfileCoverFull from 'components/marketing/common/headers/ProfileCoverFull';

// Import required data
import { AllCoursesData } from 'data/slider/AllCoursesData';
import { InstructorData } from 'data/users/InstructorData';

const ViewProfile = () => {
	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to="#"
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
					<MoreVertical size="15px" className="text-secondary" />
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>SHARE</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<Icon path={mdiFacebook} size={0.8} className="text-secondary" />{' '}
						Facebook
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<Icon path={mdiTwitter} size={0.8} className="text-secondary" />{' '}
						Twitter
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<Icon path={mdiLinkedin} size={0.8} className="text-secondary" />{' '}
						Linked In
					</Dropdown.Item>
					<Dropdown.Item eventKey="4">
						<Icon path={mdiContentCopy} size={0.8} className="text-secondary" />
						Copy Link
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const InstructorID = 0;

	const dashboardData = {
		avatar: InstructorData[InstructorID].image,
		name: InstructorData[InstructorID].name,
		skills: InstructorData[InstructorID].topic,
		verified: true,
		badge: 'Instructor',
		youtube: '#',
		link: '#',
		instagram: '#',
		facebook: '#',
		twitter: '#'
	};

	return (
		<Fragment>
			{/* Full width header */}
			<ProfileCoverFull dashboardData={dashboardData} />

			{/* Content */}
			<section className="py-5 py-md-5">
				<Container>
					<Row>
						<Col lg={3} md={4} sm={12}>
							{/* Card */}
							<Card className="border-0 mb-4">
								{/* Card body */}
								<Card.Body>
									<h4>About me</h4>
									<p>{InstructorData[InstructorID].about}</p>
									<Link to="#" className="btn-link">
										{' '}
										Read more
									</Link>
								</Card.Body>
							</Card>
							{/* Card */}
							<Card className="border-0 mb-4 mb-lg-0">
								{/* Card body */}
								<Card.Body>
									<div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
										<div>
											<h4 className="mb-0 fw-bold">
												{InstructorData[InstructorID].courses}
											</h4>
											<p className="fs-6 mb-0">Courses</p>
										</div>
										<div>
											<span>
												<i className="fe fe-file-text fs-3"></i>
											</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
										<div>
											<h4 className="mb-0 fw-bold">
												{InstructorData[InstructorID].students}
											</h4>
											<p className="fs-6 mb-0">Total Students</p>
										</div>
										<div>
											<span>
												<i className="fe fe-users fs-3"></i>
											</span>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<h4 className="mb-0 fw-bold">
												{InstructorData[InstructorID].reviews}
											</h4>
											<p className="fs-6 mb-0">Reviews</p>
										</div>
										<div>
											<span>
												<i className="fe fe-star fs-3"></i>
											</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={9} md={8} sm={12}>
							{/* Card */}
							<Card className="border-0">
								{/* Card header */}
								<Card.Header>
									<h4 className="mb-0">
										My Courses{' '}
										<span className="text-muted fs-6">
											(
											{
												AllCoursesData.filter(function (datasource) {
													return (
														datasource.instructor_name ===
														InstructorData[InstructorID].name
													);
												}).length
											}
											)
										</span>
									</h4>
								</Card.Header>
								{/* Card body */}
								<Card.Body>
									{/* List group */}
									<ListGroup variant="flush">
										{AllCoursesData.filter(function (datasource) {
											return (
												datasource.instructor_name ===
												InstructorData[InstructorID].name
											);
										}).map((item, index) => (
											<ListGroup.Item key={index} className="px-0">
												<div className="d-flex align-items-center justify-content-between">
													<Link to="#">
														<CourseCard item={item} viewby="listgroup" />
													</Link>
													<div>
														<ActionMenu />
													</div>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default ViewProfile;
