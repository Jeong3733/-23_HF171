// import node module libraries
import React, { useState } from 'react';
import { Card, Badge, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/student/ProfileLayout';

const Subscriptions = () => {
	const [AutoRenewalState, setAutoRenewalState] = useState(true);

	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header className="d-lg-flex justify-content-between align-items-center">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">My Subscriptions</h3>
						<p className="mb-0">
							Here is list of package/product that you have subscribed.
						</p>
					</div>
					<div>
						<Link
							to="/marketing/pages/pricing/"
							className="btn btn-success btn-sm"
						>
							Upgrade Now — Go Pro $39.00
						</Link>
					</div>
				</Card.Header>
				<Card.Body>
					<div className="border-bottom pt-0 pb-5">
						<Row className="mb-4">
							<Col lg={6} md={8} sm={7} className="mb-2 mb-lg-0">
								<span className="d-block">
									<span className="h4">Monthly</span>{' '}
									<Badge bg="success" className="ms-2">
										Active
									</Badge>
								</span>
								<p className="mb-0 fs-6">Subscription ID: #100010002</p>
							</Col>
							<Col lg={3} md={4} sm={5} className="mb-2 mb-lg-0">
								{/* Custom Switch */}
								<span>Auto Renewal</span>
								<Form>
									<Form.Check
										name="radios"
										type="checkbox"
										className=" form-switch"
										checked={AutoRenewalState}
										onChange={() =>
											setAutoRenewalState(
												(AutoRenewalState) => !AutoRenewalState
											)
										}
									/>
								</Form>
							</Col>
							<Col
								lg={3}
								md={12}
								sm={12}
								className="d-lg-flex align-items-start justify-content-end"
							>
								<Link to="#" className="btn btn-outline-primary btn-sm">
									Change Plan
								</Link>
							</Col>
						</Row>
						{/* Pricing data */}
						<Row>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Started On</span>
								<h6 className="mb-0">Oct 1, 2020</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Price</span>
								<h6 className="mb-0">Monthly</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Access</span>
								<h6 className="mb-0">Access All Courses</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Billing Date</span>
								<h6 className="mb-0">Next Billing on Nov 1, 2020</h6>
							</Col>
						</Row>
					</div>
					<div className="pt-5">
						<Row className="mb-4">
							<Col className="mb-2 mb-lg-0">
								<span className="d-block">
									<span className="h4">Free Plan</span>{' '}
									<Badge bg="danger" className="ms-2">
										Expired
									</Badge>
								</span>
								<p className="mb-0 fs-6">Subscription ID: #100010001</p>
							</Col>
							<Col className="col-auto">
								<Link to="#" className="btn btn-light btn-sm disabled">
									Disabled
								</Link>
							</Col>
						</Row>
						<Row>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Started On</span>
								<h6 className="mb-0">Sept 1, 2020</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Price</span>
								<h6 className="mb-0">Free - Trial a Month</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Access</span>
								<h6 className="mb-0">Access All Courses</h6>
							</Col>
							<Col lg={3} md={3} sm={6} className="mb-2 mb-lg-0">
								<span className="fs-6">Billing Date</span>
								<h6 className="mb-0">Next Billing on Oct 1, 2020</h6>
							</Col>
						</Row>
					</div>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Subscriptions;
