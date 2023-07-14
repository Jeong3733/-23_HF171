// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Container, Tab, Nav } from 'react-bootstrap';

// import sub components
import GetEnrolledCourseCard from 'components/marketing/common/cards/GetEnrolledCourseCard';

// import data files
import { AllCoursesData } from 'data/slider/AllCoursesData';

const MostPopularCourses = () => {
	const tabs = ['Development', 'Design', 'Marketing', 'Business', 'Health'];
	let min,
		max = 0;
	return (
		<Fragment>
			<section className="pb-lg-14 pb-8 bg-white">
				<Container>
					<Row>
						<Col xs={12}>
							<div className="mb-6">
								<h2 className="mb-1 h1">Most Popular Courses</h2>
								<p>
									These are the most popular courses among Geeks Courses
									learners worldwide in year 2022
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Tab.Container defaultActiveKey="Development">
								<Nav className="nav-lb-tab  mb-6 bg-gray-200 px-5 rounded-3 ">
									{tabs.map((tab, index) => {
										return (
											<Nav.Item
												key={index}
												className={index === 0 ? 'ms-0' : ''}
											>
												<Nav.Link eventKey={tab} className="mb-sm-3 mb-md-0">
													{tab}
												</Nav.Link>
											</Nav.Item>
										);
									})}
								</Nav>
								<Tab.Content>
									{tabs.map((tab, index) => {
										min = Math.floor(Math.random() * 16);
										max = min + 8;
										return (
											<Tab.Pane
												eventKey={tab}
												className="pb-4 p-4 ps-0 pe-0"
												key={index}
											>
												<Row>
													{AllCoursesData.slice(min, max).map((item, index) => (
														<Col lg={3} md={6} sm={12} key={index}>
															{' '}
															<GetEnrolledCourseCard item={item} />
														</Col>
													))}
												</Row>
											</Tab.Pane>
										);
									})}
								</Tab.Content>
							</Tab.Container>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default MostPopularCourses;
