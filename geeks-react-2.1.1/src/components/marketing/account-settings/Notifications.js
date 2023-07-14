// import node module libraries
import React, { useState } from 'react';
import { Card, ListGroup, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// import profile layout wrapper
import ProfileLayoutWrap from './ProfileLayoutWrap';

const Notifications = () => {
	const location = useLocation();

	// State hook initialization for global or group alerts
	const [NotificationState, setNotificationState] = useState(false);

	// State hook initialization for security alerts
	const [UnusualActivityState, setUnusualActivityState] = useState(true);
	const [NewBrowser4SignInState, setNewBrowser4SignInState] = useState(true);

	// State hook initialization for news alerts
	const [LatestNewsState, setLatestNewsState] = useState(false);
	const [NewFeaturesState, setNewFeaturesState] = useState(true);
	const [AccountTipsState, setAccountTipsState] = useState(true);

	// State hook initialization for courses alerts
	const [AnnouncementsState, setAnnouncementsState] = useState(false);
	const [DiscussionsState, setDiscussionsState] = useState(true);
	const [RecommendationsState, setRecommendationsState] = useState(true);
	const [FeaturedContentState, setFeaturedContentState] = useState(false);
	const [ProductUpdatesState, setProductUpdatesState] = useState(true);
	const [UpcomingEventsState, setUpcomingEventsState] = useState(true);

	const onGlobalChange = () => {
		setNotificationState((NotificationState) => !NotificationState);

		// Global set for security alerts
		setUnusualActivityState(!NotificationState);
		setNewBrowser4SignInState(!NotificationState);

		// Global state for news alerts
		setLatestNewsState(!NotificationState);
		setNewFeaturesState(!NotificationState);
		setAccountTipsState(!NotificationState);

		// Global state for courses alerts
		setAnnouncementsState(!NotificationState);
		setDiscussionsState(!NotificationState);
		setRecommendationsState(!NotificationState);
		setFeaturedContentState(!NotificationState);
		setProductUpdatesState(!NotificationState);
		setUpcomingEventsState(!NotificationState);
	};
	return (
		<ProfileLayoutWrap pathpara={location.pathname}>
			<Card className="border-0">
				<Card.Header className="d-flex justify-content-between align-items-center">
					<div>
						{/* Notification */}
						<h3 className="mb-0">Notifications</h3>
						<p className="mb-0">
							You will get only notification what have enabled.
						</p>
					</div>
					<div>
						<Form>
							<Form.Check
								type="checkbox"
								className=" form-switch"
								onChange={onGlobalChange}
							/>
						</Form>
					</div>
				</Card.Header>
				<Card.Body>
					<div className="mb-5">
						<h4 className="mb-0">Security Alerts</h4>
						<p> You will get only those email notification what you want. </p>
						<ListGroup variant="flush">
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Email me whenever encounter unusual activity</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											className=" form-switch"
											checked={UnusualActivityState}
											onChange={() =>
												setUnusualActivityState(
													(UnusualActivityState) => !UnusualActivityState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Email me if new browser is used to sign in</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={NewBrowser4SignInState}
											onChange={() =>
												setNewBrowser4SignInState(
													(NewBrowser4SignInState) => !NewBrowser4SignInState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
						</ListGroup>
					</div>
					<div className="mb-5">
						<h4 className="mb-0">News</h4>
						<p> You will get only those email notification what you want.</p>
						<ListGroup variant="flush">
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Notify me by email about sales and latest news</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											className=" form-switch"
											checked={LatestNewsState}
											onChange={() =>
												setLatestNewsState(
													(LatestNewsState) => !LatestNewsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Email me about new features and updates</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={NewFeaturesState}
											onChange={() =>
												setNewFeaturesState(
													(NewFeaturesState) => !NewFeaturesState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Email me about tips on using account</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={AccountTipsState}
											onChange={() =>
												setAccountTipsState(
													(AccountTipsState) => !AccountTipsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
						</ListGroup>
					</div>
					<div>
						{/* <!-- Content --> */}
						<h4 className="mb-0">Courses</h4>
						<p> You will get only those email notification what you want.</p>
						<ListGroup variant="flush">
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Updates from Classes You're Taking</h5>
									<span className="text-body">
										Announcements, events, and tips and tricks.
									</span>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											className=" form-switch"
											checked={AnnouncementsState}
											onChange={() =>
												setAnnouncementsState(
													(AnnouncementsState) => !AnnouncementsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Updates from Teacher Discussions</h5>
									<span className="text-body">
										Public Discussions outside of a class that teachers share to
										all of their followers.
									</span>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={DiscussionsState}
											onChange={() =>
												setDiscussionsState(
													(DiscussionsState) => !DiscussionsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Personalized Class Recommendations</h5>
									<span className="text-body">
										Weekly recommendations tailored to your interests.
									</span>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={RecommendationsState}
											onChange={() =>
												setRecommendationsState(
													(RecommendationsState) => !RecommendationsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Featured content</h5>
									<p className="mb-0 text-body">
										Tips on Courses and dashboard usage, workshop, books,
										tutorials and many insightful articles.
									</p>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={FeaturedContentState}
											onChange={() =>
												setFeaturedContentState(
													(FeaturedContentState) => !FeaturedContentState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Product updates</h5>
									<p className="mb-0 text-body">
										We'll send you a newsletter announcing essential product
										updates in CoursesUI.
									</p>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={ProductUpdatesState}
											onChange={() =>
												setProductUpdatesState(
													(ProductUpdatesState) => !ProductUpdatesState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>
									<h5 className="mb-0">Events and offers</h5>
									<p className="mb-0 text-body">
										Announcing promos and upcoming events,such as Ask Me
										Anything sessions and webinars.
									</p>
								</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={UpcomingEventsState}
											onChange={() =>
												setUpcomingEventsState(
													(UpcomingEventsState) => !UpcomingEventsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
						</ListGroup>

						{/*  Short note and Unsubscribe option  */}
						<Link to="#" className="text-danger mb-2 d-block">
							<u>Unsubscribe from all of the above</u>
						</Link>
						<p className="mb-0 ">
							Please note: you'll still receive important administrative
							emails,such as password resets.
						</p>
					</div>
				</Card.Body>
			</Card>
		</ProfileLayoutWrap>
	);
};

export default Notifications;
