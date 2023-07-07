// import node module libraries
import React, { useState } from 'react';
import {
	Card,
	ListGroup,
	Badge,
	Image,
	Dropdown,
	Modal,
	Button,
	Form,
	Row,
	Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Trash, MoreVertical, Edit, CreditCard } from 'react-feather';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import media files
import VisaCard from 'assets/images/creditcard/visa.svg';
import Mastercard from 'assets/images/creditcard/mastercard.svg';
import Discover from 'assets/images/creditcard/discover.svg';
import AmericanExpress from 'assets/images/creditcard/americanexpress.svg';
import PaypalExpress from 'assets/images/creditcard/paypal.svg';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/student/ProfileLayout';

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
		className="btn-icon btn btn-ghost btn-sm rounded-circle"
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
				<Dropdown.Header>SETTINGS</Dropdown.Header>
				<Dropdown.Item eventKey="1">
					{' '}
					<Edit size="15px" className="dropdown-item-icon" /> Edit
				</Dropdown.Item>
				<Dropdown.Item eventKey="2">
					{' '}
					<Trash size="15px" className="dropdown-item-icon" /> Delete
				</Dropdown.Item>
				<Dropdown.Item eventKey="3">
					{' '}
					<CreditCard size="15px" className="dropdown-item-icon" /> Make it
					Primary
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

const CardNumberInput = (props) => (
	<InputMask
		mask="9999-9999-9999-9999"
		placeholder="xxxx-xxxx-xxxx-xxxx"
		value={props.value}
		onChange={props.onChange}
		className="form-control bg-white px-4 py-2.1"
	>
		{(inputProps) => <input {...inputProps} type="tel" disableUnderline />}
	</InputMask>
);

const Payment = () => {
	// Month select control values
	const months = [
		{ value: 'Jan', label: 'Jan' },
		{ value: 'Feb', label: 'Feb' },
		{ value: 'Mar', label: 'Mar' },
		{ value: 'Apr', label: 'Apr' },
		{ value: 'May', label: 'May' },
		{ value: 'Jun', label: 'Jun' },
		{ value: 'Jul', label: 'Jul' },
		{ value: 'Aug', label: 'Aug' },
		{ value: 'Sep', label: 'Sep' },
		{ value: 'Oct', label: 'Oct' },
		{ value: 'Nov', label: 'Nov' },
		{ value: 'Dec', label: 'Dec' }
	];

	// Year select control values
	const year = [
		{ value: '2021', label: '2021' },
		{ value: '2022', label: '2022' },
		{ value: '2023', label: '2023' },
		{ value: '2024', label: '2024' }
	];

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<ProfileLayout>
			<Card className="border-0 mb-4">
				<Card.Header className="d-lg-flex justify-content-between align-items-center">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Current Plan</h3>
						<span>Below your current active plan information.</span>
					</div>
					<div>
						<Link to="#" className="btn btn-outline-primary btn-sm">
							Switch to Annual Billing
						</Link>
					</div>
				</Card.Header>
				<Card.Body>
					<h2 className="fw-bold mb-0">$39/Monthly</h2>
					<p className="mb-0">
						Your next monthly charge of{' '}
						<span className="text-success">$39</span> will be applied to your
						primary payment method on{' '}
						<span className="text-success">July 20, 2020.</span>
					</p>
				</Card.Body>
			</Card>

			<Card className="border-0">
				<Card.Header>
					<h3 className="mb-0">Payment Methods</h3>
					<span>Primary payment method is used by default</span>
				</Card.Header>
				<Card.Body>
					{/* List group */}

					<ListGroup variant="flush">
						<ListGroup.Item className="px-0 pb-3 pt-0">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<Image src={VisaCard} alt="" className="me-3" />
									<div>
										<h5 className="mb-0">Visa ending in 1234</h5>
										<p className="mb-0 fs-6">Expires in 10/2021</p>
									</div>
								</div>
								<div className="d-flex">
									<span>
										<Badge bg="success" className="me-4">
											Primary
										</Badge>
									</span>
									<ActionMenu />
								</div>
							</div>
						</ListGroup.Item>
						<ListGroup.Item className="px-0 py-3">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<Image src={Mastercard} alt="" className="me-3" />
									<div>
										<h5 className="mb-0">Mastercard ending in 1234</h5>
										<p className="mb-0 fs-6">Expires in 03/2022</p>
									</div>
								</div>
								<div className="d-flex">
									<ActionMenu />
								</div>
							</div>
						</ListGroup.Item>
						<ListGroup.Item className="px-0 py-3">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<Image src={Discover} alt="" className="me-3" />
									<div>
										<h5 className="mb-0">Discover ending in 1234</h5>
										<p className="mb-0 fs-6">Expires in 07/2021</p>
									</div>
								</div>
								<div className="d-flex">
									<ActionMenu />
								</div>
							</div>
						</ListGroup.Item>
						<ListGroup.Item className="px-0 py-3">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<Image src={AmericanExpress} alt="" className="me-3" />
									<div>
										<h5 className="mb-0">American Express ending in 1234</h5>
										<p className="mb-0 fs-6">Expires in 12/2021</p>
									</div>
								</div>
								<div className="d-flex">
									<ActionMenu />
								</div>
							</div>
						</ListGroup.Item>

						<ListGroup.Item className="px-0 py-3 border-bottom">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<Image src={PaypalExpress} alt="" className="me-3" />
									<div>
										<h5 className="mb-0">Paypal Express ending in 1234</h5>
										<p className="mb-0 fs-6">Expires in 10/2021</p>
									</div>
								</div>
								<div className="d-flex">
									<ActionMenu />
								</div>
							</div>
						</ListGroup.Item>
					</ListGroup>

					{/* Add new payment method */}
					<Button variant="primary" onClick={handleShow} className="mt-3">
						Add Payment Method
					</Button>

					<Modal show={show} onHide={handleClose} size="lg">
						<Modal.Header closeButton>
							<Modal.Title>Add New Payment Method</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form className="mb-4">
								<Row>
									<Col md={12} sm={12} className="mb-3">
										<h5 className="mb-3">Credit / Debit card</h5>
										{/* Radio button */}
										<div className="d-inline-flex">
											<Form.Check type="radio" id="inline-radio-1">
												<Form.Check.Input
													type="radio"
													name="paymentRadioOne"
													defaultChecked
												/>
												<Form.Check.Label>
													<Image
														src={AmericanExpress}
														alt=""
														className="me-3"
													/>
												</Form.Check.Label>
											</Form.Check>

											<Form.Check type="radio" id="inline-radio-2">
												<Form.Check.Input type="radio" name="paymentRadioOne" />
												<Form.Check.Label>
													<Image src={Mastercard} alt="" className="me-3" />
												</Form.Check.Label>
											</Form.Check>

											<Form.Check type="radio" id="inline-radio-3">
												<Form.Check.Input type="radio" name="paymentRadioOne" />
												<Form.Check.Label>
													<Image src={VisaCard} alt="" className="me-3" />
												</Form.Check.Label>
											</Form.Check>
										</div>
									</Col>
									{/* Name on card */}
									<Col md={4} sm={12} className="mb-3">
										<Form.Group controlId="formNameOnCard">
											<Form.Label>Name on card</Form.Label>
											<Form.Control type="text" placeholder="Name" required />
										</Form.Group>
									</Col>
									{/* Month */}
									<Col md={4} sm={12} className="mb-3">
										<Form.Group controlId="formMonth">
											<Form.Label>Month</Form.Label>
											<FormSelect options={months} required />
										</Form.Group>
									</Col>
									{/* Year */}
									<Col md={4} sm={12} className="mb-3">
										<Form.Group controlId="formYear">
											<Form.Label>Year</Form.Label>
											<FormSelect options={year} required />
										</Form.Group>
									</Col>
									{/* Card number */}
									<Col md={8} sm={12} className="mb-3">
										<Form.Group controlId="formCardNumber">
											<Form.Label>Card Number</Form.Label>
										</Form.Group>
										<CardNumberInput />
									</Col>
									{/* CVV */}
									<Col md={4} sm={12} className="mb-3">
										<div className="mb-3">
											<Form.Group controlId="formCVVCode">
												<Form.Label>
													CVV Code{' '}
													<i
														className="fas fa-question-circle ms-1"
														data-bs-toggle="tooltip"
														data-placement="top"
														title=""
														data-original-title="A 3 - digit number, typically printed on the back of a card."
													></i>{' '}
												</Form.Label>
											</Form.Group>
											<InputMask
												type="password"
												mask="999"
												maskChar={null}
												className="form-control"
												placeholder="xxx"
											/>
										</div>
									</Col>
									{/* Button */}
									<Col md={6} sm={12}>
										<Button variant="primary" type="submit">
											Add New Card
										</Button>{' '}
										<Button
											variant="outline-primary"
											type="button"
											onClick={handleClose}
										>
											Close
										</Button>
									</Col>
								</Row>
							</Form>
							<span>
								<strong>Note:</strong> that you can later remove your card at
								the account setting page.
							</span>
						</Modal.Body>
					</Modal>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Payment;
