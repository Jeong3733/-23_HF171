// import node module libraries
import React, { useState } from 'react';
import { Card, Row, Col, Form, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import profile layout wrapper
import ProfileLayoutWrap from './ProfileLayoutWrap';

const ProfilePrivacy = () => {
	const location = useLocation();

	// Privacy levels select control values
	const privacylevels = [
		{ value: 'public', label: 'Public' },
		{ value: 'private', label: 'Private' }
	];

	// State hook initialization for courses alerts
	const [ShowProfileState, setShowProfileState] = useState(true);
	const [ShowCoursesState, setShowCoursesState] = useState(false);
	const [ProfilePublicState, setProfilePublicState] = useState(true);
	const [CurrentlyLearningState, setCurrentlyLearningState] = useState(true);
	const [CompletedCoursesState, setCompletedCoursesState] = useState(true);
	const [YourInterestsState, setYourInterestsState] = useState(true);

	return (
		<ProfileLayoutWrap pathpara={location.pathname}>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Profile Privacy Settings</h3>
						<p className="mb-0">
							Making your profile public allow other users to see what you have
							been learning on Geeks.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<Row className="d-lg-flex justify-content-between">
						<Col lg={9} md={7} sm={12} className="mb-3 mb-lg-0">
							<h4 className="mb-0">Privacy levels</h4>
							<p className="mb-0">Show your profile public and private.</p>
						</Col>
						<Col lg={3} md={5} sm={12}>
							<FormSelect options={privacylevels} />
						</Col>
					</Row>
					<hr className="my-5" />
					<div>
						<h4 className="mb-0">Profile settings</h4>
						<p className="mb-5">
							These controls give you the ability to customize what areas of
							your profile others are able to see.
						</p>
						{/* <!-- List group --> */}
						<ListGroup variant="flush">
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Show your profile on search engines</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											className=" form-switch"
											checked={ShowProfileState}
											onChange={() =>
												setShowProfileState(
													(ShowProfileState) => !ShowProfileState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Show courses you're taking on your profile page</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={ShowCoursesState}
											onChange={() =>
												setShowCoursesState(
													(ShowCoursesState) => !ShowCoursesState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Show your profile on public</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={ProfilePublicState}
											onChange={() =>
												setProfilePublicState(
													(ProfilePublicState) => !ProfilePublicState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Currently learning</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={CurrentlyLearningState}
											onChange={() =>
												setCurrentlyLearningState(
													(CurrentlyLearningState) => !CurrentlyLearningState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Completed courses</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={CompletedCoursesState}
											onChange={() =>
												setCompletedCoursesState(
													(CompletedCoursesState) => !CompletedCoursesState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="d-flex align-items-center justify-content-between px-0 py-2">
								<div>Your Interests</div>
								<div>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											label=""
											className=" form-switch"
											checked={YourInterestsState}
											onChange={() =>
												setYourInterestsState(
													(YourInterestsState) => !YourInterestsState
												)
											}
										/>
									</Form>
								</div>
							</ListGroup.Item>
						</ListGroup>
					</div>
				</Card.Body>
			</Card>
		</ProfileLayoutWrap>
	);
};

export default ProfilePrivacy;
