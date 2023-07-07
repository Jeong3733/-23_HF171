// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Nav, Tab, Container } from 'react-bootstrap';

// import custom components
import PageHeadingBriefinfo from 'components/marketing/common/page-headings/PageHeadingBriefinfo';

// import sub components
import PopularInstructorCard from './PopularInstructorCard';
import CourseCard from '../CourseCard';

// import data files
import { AllCoursesData } from 'data/slider/AllCoursesData';
import { InstructorData } from 'data/users/InstructorData';

const CourseCategory = () => {
	return (
		<Fragment>
			{/* Page header */}
			<PageHeadingBriefinfo
				pagetitle="JavaScript Courses"
				briefinfo="6,979,934 students are learning JavaScript."
			/>

			<section className="py-6">
				<Container>
					<Row className="mb-6">
						<Col md={12}>
							<Tab.Container defaultActiveKey="mostpopular">
								<Nav className="nav-lb-tab">
									<Nav.Item className="ms-0">
										<Nav.Link
											eventKey="mostpopular"
											className="mb-sm-3 mb-md-0"
										>
											Most Popular
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="trending" className="mb-sm-3 mb-md-0">
											Trending
										</Nav.Link>
									</Nav.Item>
								</Nav>

								<Tab.Content>
									<Tab.Pane
										eventKey="mostpopular"
										className="pb-4 p-4 ps-0 pe-0"
									>
										{/* most popular started */}
										<Row>
											{AllCoursesData.filter(function (datasource) {
												return datasource.category === 'javascript';
											})
												.slice(0, 4)
												.map((item, index) => (
													<Col lg={3} md={6} sm={12} key={index}>
														<CourseCard item={item} />
													</Col>
												))}
										</Row>
										{/* end of most popular */}
									</Tab.Pane>
									<Tab.Pane eventKey="trending" className="pb-4 p-4 ps-0 pe-0">
										{/* trending courses started */}
										<Row>
											{AllCoursesData.filter(function (datasource) {
												return (
													datasource.id === 1 ||
													datasource.id === 2 ||
													datasource.id === 3 ||
													datasource.id === 4
												);
											}).map((item, index) => (
												<Col lg={3} md={6} sm={12} key={index}>
													<CourseCard item={item} />
												</Col>
											))}
										</Row>
										{/* end of trending courses */}
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</Col>
					</Row>

					{/* Popular Instructors start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">Popular Instructors</h2>
								<p className="mb-0">
									Popular instructor in JavaScript Courses.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{InstructorData.filter(function (datasource) {
							return datasource.students > 26000;
						}).map((item, index) => (
							<Col lg={3} md={6} sm={12} key={index}>
								<PopularInstructorCard item={item} />
							</Col>
						))}
					</Row>
					{/* end of Popular Instructors */}

					{/* Free JavaScript lessons start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">Free JavaScript lessons</h2>
								<p className="mb-0">Bite-sized learning in minutes</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{AllCoursesData.filter(function (datasource) {
							return datasource.category === 'javascript';
						})
							.slice(0, 4)
							.map((item, index) => (
								<Col lg={3} md={6} sm={12} key={index}>
									<CourseCard item={item} free />
								</Col>
							))}
					</Row>
					{/* end of Free JavaScript lessons */}

					{/* all javaScript courses start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">All JavaScript courses</h2>
								<p className="mb-0">
									Geeks instructors specialize in teaching the whole scope of
									JavaScript—beginner to advanced. Whether you’re interested in
									back-end development, or app and website building, Udemy has a
									JavaScript course for you.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{AllCoursesData.filter(function (datasource) {
							return datasource.id <= 8;
						}).map((item, index) => (
							<Col lg={3} md={6} sm={12} key={index}>
								<CourseCard item={item} free />
							</Col>
						))}
					</Row>
					{/* end of all javaScript courses */}
				</Container>
			</section>
		</Fragment>
	);
};

export default CourseCategory;
