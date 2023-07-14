// import node module libraries
import React from 'react';
import { Card, ListGroup, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import dashboard layout
import ProfileLayout from 'components/marketing/student/ProfileLayout';

const BillingInfo = () => {
	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Billing Address</h3>
						<p className="mb-0">
							Changes to your billing infomration will take effect starting with
							scheduled payment and will be refelected on your next invoice.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					{/* List group */}
					<ListGroup variant="flush" className="mb-4">
						<ListGroup.Item className="px-0 pt-0 pb-4">
							<Row>
								<Col>
									<Form.Check name="group1" type="radio" id="inline-radio-1">
										<Form.Check.Input
											type="radio"
											name="address"
											defaultChecked
											className="me-1"
										/>
										<Form.Check.Label>
											<span className="h4">Billing Address #1</span>
											<span className="d-block">
												1901 Thornridge Cir. Shiloh, Hawaii 81063
											</span>
										</Form.Check.Label>
									</Form.Check>
								</Col>
								<Col className="col-auto">
									<Link to="#" className="btn btn-outline-secondary btn-sm">
										Edit Address
									</Link>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item className="px-0 py-4 border-bottom">
							<Row>
								<Col>
									<Form.Check name="group1" type="radio" id="inline-radio-2">
										<Form.Check.Input
											type="radio"
											name="address"
											className="me-1"
										/>
										<Form.Check.Label>
											<span className="h4">Billing Address #2</span>
											<span className="d-block">
												1901 Thornridge Cir. Shiloh, Hawaii 81063
											</span>
										</Form.Check.Label>
									</Form.Check>
								</Col>
								<Col className="col-auto">
									<Link to="#" className="btn btn-outline-secondary btn-sm">
										Edit Address
									</Link>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>

					{/* Add new address */}
					<Link to="#" className="btn btn-primary mb-5">
						{' '}
						Add New Address{' '}
					</Link>

					<p className="mb-0">
						Your text location determines the taxes that are applied to yout
						bill.
					</p>
					<Link to="#">How do I correct my tax location?</Link>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default BillingInfo;
