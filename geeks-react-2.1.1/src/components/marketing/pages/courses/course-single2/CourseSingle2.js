// import node module libraries
import React, { Fragment, useEffect } from 'react';
import { Col, Row, Container, Card, Image, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import MDI icons
import Icon from '@mdi/react';
import { mdiAccountMultipleOutline } from '@mdi/js';

// import custom components
import GKYouTube from 'components/marketing/common/video/GKYouTube';
import Ratings from 'components/marketing/common/ratings/Ratings';
import GKAccordionProgress from 'components/marketing/common/accordions/GKAccordionProgress';
import LevelIcon from 'components/marketing/common/miscellaneous/LevelIcon';
import GKTippy from 'components/elements/tooltips/GKTippy';

// import sub components tabs
import ReviewsTab from 'components/marketing/pages/courses/course-single/ReviewsTab';
import DescriptionTab from 'components/marketing/pages/courses/course-single/DescriptionTab';
import TranscriptTab from 'components/marketing/pages/courses/course-single/TranscriptTab';
import FAQTab from 'components/marketing/pages/courses/course-single/FAQTab';

// import data files
import { CourseIndex } from 'data/marketing/CourseIndexData';

// import media files.
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

const CourseSingle2 = () => {
	useEffect(() => {
		document.body.className = 'bg-light';
	});
	return (
		<Fragment>
			<section className="py-lg-5 py-5">
				<Container>
					{/*  Video section  */}
					<Row>
						<Col lg={12} md={12} sm={12} className="mb-5">
							<div
								className="rounded-3 position-relative w-100 d-block overflow-hidden p-0"
								style={{ height: '600px' }}
							>
								<GKYouTube videoId="PkZNo7MFNFg" />
							</div>
						</Col>
					</Row>
					{/*  Content  */}
					<Row>
						<Col xl={8} lg={12} md={12} sm={12} className="mb-4 mb-xl-0">
							{/*  Card  */}
							<Tab.Container defaultActiveKey="description">
								<Card className="mb-5">
									{/*  Card body  */}
									<Card.Body>
										<div className="d-flex justify-content-between align-items-center">
											<h1 className="fw-semi-bold mb-2">
												Getting Started with JavaScript
											</h1>
											<GKTippy content="Add to Bookmarks">
												<Link to="#">
													<i className="fe fe-bookmark fs-3 text-inherit"></i>
												</Link>
											</GKTippy>
										</div>
										<div className="d-flex mb-5">
											<span>
												<span className="text-warning">
													<Ratings rating={4.5} />
												</span>
												<span className="fw-medium">(140)</span>
											</span>

											<span className="ms-4 d-none d-md-block">
												<LevelIcon level="Intermediate" />
												<span>Intermediate</span>
											</span>
											<span className="ms-4 d-none d-md-block">
												<Icon path={mdiAccountMultipleOutline} size={0.7} />{' '}
												<span>Enrolled</span>
											</span>
										</div>
										<div className="d-flex justify-content-between">
											<div className="d-flex align-items-center">
												<Image
													src={Avatar1}
													className="rounded-circle avatar-md"
													alt=""
												/>
												<div className="ms-2 lh-1">
													<h4 className="mb-1">Kathryn Jones</h4>
													<p className="fs-6 mb-0">@kathrynjones</p>
												</div>
											</div>
											<div>
												<Link
													to="#"
													className="btn btn-outline-secondary btn-sm"
												>
													Follow
												</Link>
											</div>
										</div>
									</Card.Body>
									{/*  Nav tabs  */}
									<Nav className="nav-lt-tab">
										{['Description', 'Reviews', 'Transcript', 'FAQ'].map(
											(item, index) => (
												<Nav.Item key={index}>
													<Nav.Link
														href={`#${item.toLowerCase()}`}
														eventKey={item.toLowerCase()}
														className="mb-sm-3 mb-md-0"
													>
														{item}
													</Nav.Link>
												</Nav.Item>
											)
										)}
									</Nav>
								</Card>
								{/*  Card  */}
								<Card className="rounded-3">
									{/*  Card body  */}
									<Card.Body className="p-0">
										<Tab.Content>
											<Tab.Pane eventKey="description" className="pb-4 p-4">
												{/* Description Tab */}
												<DescriptionTab />
											</Tab.Pane>
											<Tab.Pane eventKey="reviews" className="pb-4 p-4">
												{/* Reviews Tab */}
												<ReviewsTab />
											</Tab.Pane>
											<Tab.Pane eventKey="transcript" className="pb-4 p-4">
												{/* Transcript Tab */}
												<TranscriptTab />
											</Tab.Pane>
											<Tab.Pane eventKey="faq" className="pb-4 p-4">
												{/* FAQ Tab */}
												<FAQTab />
											</Tab.Pane>
										</Tab.Content>
									</Card.Body>
								</Card>
							</Tab.Container>
						</Col>
						<Col xl={4} lg={12} md={12} sm={12}>
							<Card>
								<GKAccordionProgress accordionItems={CourseIndex} />
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default CourseSingle2;
