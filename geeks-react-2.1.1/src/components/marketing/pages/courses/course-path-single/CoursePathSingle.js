// import node module libraries
import React, { Fragment } from 'react';
import {
	Col,
	Row,
	Tab,
	Container,
	Nav,
	Image,
	Dropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiContentCopy } from '@mdi/js';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

// import custom sub components
import CoursesTab from './CoursesTab';
import AboutTab from './AboutTab';
import AuthorTab from './AuthorTab';

// import media files
import PathBootstrap from 'assets/images/path/path-bootstrap.svg';

const CoursePathSingle = () => {
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
			<Dropdown className="ms-2">
				<Dropdown.Toggle as={CustomToggle}>
					<span className="text-decoration-none btn-icon btn-light rounded-circle text-muted">
						<i className="fe fe-share-2 fs-4 "></i>
					</span>
				</Dropdown.Toggle>
				<Dropdown.Menu align="left" className="mt-2">
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<Icon
							path={mdiFacebook}
							size={0.65}
							className="text-secondary me-1"
						/>
						Facebook
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<Icon
							path={mdiTwitter}
							size={0.65}
							className="text-secondary me-1"
						/>
						Twitter
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<Icon
							path={mdiLinkedin}
							size={0.65}
							className="text-secondary me-1"
						/>
						Linked In
					</Dropdown.Item>
					<Dropdown.Item eventKey="4">
						<Icon
							path={mdiContentCopy}
							size={0.65}
							className="text-secondary me-1"
						/>
						Copy Link
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Fragment>
			{/* Bg cover */}
			<section
				className="py-6"
				style={{
					background: `linear-gradient(270deg, #9D4EFF 0%, #782AF4 100%)`
				}}
			></section>
			{/* Page header */}
			<Tab.Container defaultActiveKey="courses">
				<section className="bg-white shadow-sm">
					<Container>
						<Row className="align-items-center">
							<Col xl={12} lg={12} md={12} sm={12}>
								<div className="d-md-flex align-items-center justify-content-between bg-white  pt-3 pb-3 pb-lg-5">
									<div className="d-md-flex align-items-center text-lg-start text-center ">
										<div className="me-3  mt-n8">
											<Image
												src={PathBootstrap}
												className="avatar-xxl rounded border p-4 bg-white "
												alt=""
											/>
										</div>
										<div className="mt-3 mt-md-0">
											<h1 className="mb-0 fw-bold me-3  ">Bootstrap</h1>
										</div>
										<div>
											<span className="ms-2 fs-6">
												<span className="text-dark fw-medium">21.9K</span>{' '}
												students
											</span>
											<span className="ms-2 fs-6">
												<span className="text-dark fw-medium">12</span> Courses
											</span>
											<span className="ms-2 fs-6">
												<span className="text-dark fw-medium">11</span> Hours
											</span>
										</div>
									</div>
									{/* Dropdown */}
									<div className="mt-3 mt-lg-0 text-lg-start text-center d-flex">
										<GKTippy content="Add to Bookmarks">
											<Link
												to="#"
												className="text-muted btn-icon btn-light rounded-circle fe fe-bookmark fs-4"
											></Link>
										</GKTippy>
										<ActionMenu />
									</div>
								</div>
								{/* Nav tab */}

								{/*  Nav tabs  */}
								<Nav className="nav-lt-tab ms-0">
									{['Courses', 'About', 'Author'].map((item, index) => (
										<Nav.Item
											key={index}
											className={`${index === 0 ? 'ms-0 ' : ''}`}
										>
											<Nav.Link
												eventKey={item.toLowerCase()}
												className="mb-sm-3 mb-md-0"
											>
												{item}
											</Nav.Link>
										</Nav.Item>
									))}
								</Nav>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Content  */}
				<section className="py-6">
					<Container>
						<Row>
							<Col md={12}>
								<Tab.Content>
									<Tab.Pane eventKey="courses" className="pb-4 px-0">
										{/* Beginner Courses */}
										<CoursesTab />

										{/* End of Courses */}
									</Tab.Pane>
									<Tab.Pane eventKey="about" className="pb-4 px-0">
										{/* About */}
										<AboutTab />

										{/* End of About */}
									</Tab.Pane>
									<Tab.Pane eventKey="author" className="pb-4 px-0">
										{/* Author */}
										<AuthorTab />

										{/* End of Author */}
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Container>
				</section>
			</Tab.Container>
		</Fragment>
	);
};

export default CoursePathSingle;
