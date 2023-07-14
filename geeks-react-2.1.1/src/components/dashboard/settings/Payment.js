// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Breadcrumb,
	Card,
	Form,
	Button,
	Image
} from 'react-bootstrap';

// import media files
import Paypal from 'assets/images/brand/paypal.svg';
import Stripe from 'assets/images/brand/stripe.svg';

const PaymentSetting = () => {
	const onChange = () => {
		console.log('onChange was called!');
	};

	return (
		<Fragment>
			<Row>
				<Col xl={{ offset: 3, span: 6 }} lg={{ offset: 2, span: 8 }} md={12}>
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 h2 font-weight-bold">Payment Setting</h1>
									<Breadcrumb>
										<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
										<Breadcrumb.Item active>Payment Setting</Breadcrumb.Item>
									</Breadcrumb>
								</div>
							</div>
						</Col>
					</Row>

					{/* paypal form */}

					<Card className="mb-4">
						<Card.Header className=" d-flex align-items-center justify-content-between">
							<h4 className="mb-0">Paypal</h4>
							<Form>
								<Form.Check
									type="checkbox"
									defaultChecked
									label=""
									className=" form-switch"
									onChange={onChange}
								/>
							</Form>
						</Card.Header>
						<Card.Body>
							<Image src={Paypal} alt="" className="mb-2" />
							<p className="mb-4">
								Enter your PayPal email address below to accept payments from
								students.
							</p>
							<Form>
								<Row>
									<Col lg={6} md={12} className="mb-3">
										{/* Name */}
										<Form.Label>Paypal Email Address </Form.Label>
										<Form.Control
											type="text"
											id="paypalEmail"
											placeholder="your@example.com"
											required
										/>
									</Col>
								</Row>
								<Row>
									<Col lg={6} md={12}>
										<Button variant="primary" type="submit">
											Save{' '}
										</Button>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>

					{/* end of paypal form */}

					{/* Stripe form */}

					<Card className="mb-4">
						<Card.Header className=" d-flex align-items-center justify-content-between">
							<h4 className="mb-0">Stripe</h4>
							<Form>
								<Form.Check
									type="checkbox"
									label=""
									className=" form-switch"
									onChange={onChange}
								/>
							</Form>
						</Card.Header>
						<Card.Body>
							<Image src={Stripe} alt="" className="mb-2" />
							<p className="mb-4">
								Connect your Geeks to your stripe account for faster payouts.
							</p>
							<Form>
								<Row>
									<Col lg={6} md={12} className="mb-3">
										{/* Name */}
										<Form.Label>Stripe Email Address </Form.Label>
										<Form.Control
											type="text"
											id="stripeEmail"
											placeholder="your@example.com"
											required
										/>
									</Col>
								</Row>
								<Row>
									<Col lg={6} md={12}>
										<Button variant="primary" type="submit">
											Save{' '}
										</Button>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>

					{/* end of Stripe form */}
				</Col>
			</Row>
		</Fragment>
	);
};

export default PaymentSetting;
