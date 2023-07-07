// import node module libraries
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import {
	Col,
	Row,
	Container,
	Card,
	Form,
	Button,
	ListGroup,
	Badge,
	OverlayTrigger,
	Tooltip
} from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import PageHeading from 'components/marketing/common/page-headings/PageHeading';

const CourseCheckout = () => {
	const [status, setStatus] = useState(1); // 0: no show, 1: show yes, 2: show no.

	const radioHandler = (status) => {
		setStatus(status);
	};

	const statelist = [
		{ value: '1', label: 'Gujarat' },
		{ value: '2', label: 'Rajasthan' },
		{ value: '3', label: 'Maharashtra' }
	];
	const countrylist = [
		{ value: '1', label: 'India' },
		{ value: '2', label: 'UK' },
		{ value: '3', label: 'USA' }
	];

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

	const CardNumberInput = (props) => (
		<InputMask
			mask="9999-9999-9999-9999"
			placeholder="xxxx-xxxx-xxxx-xxxx"
			value={props.value}
			onChange={props.onChange}
			className="form-control bg-white px-4 p-2"
		>
			{(inputProps) => <Form.Control {...inputProps} type="tel" />}
		</InputMask>
	);

	const onChange = () => {
		console.log('onChange was called!');
	};

	const CreditDebitCardMethod = () => {
		return (
			<Fragment>
				{/*  Form */}
				<Form className="row " id="cardpayment">
					{/*  Card number */}
					<Col md={12} sm={12} className="mb-3 mt-4">
						{/*  Card Number */}
						<Form.Group controlId="formCardNumber">
							<Form.Label className="d-flex justify-content-between align-items-center ">
								Card Number
								<span>
									<svg
										width="18"
										height="18"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="cc-amex"
										className="svg-inline--fa fa-cc-amex text-primary"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M325.1 167.8c0-16.4-14.1-18.4-27.4-18.4l-39.1-.3v69.3H275v-25.1h18c18.4 0 14.5 10.3 14.8 25.1h16.6v-13.5c0-9.2-1.5-15.1-11-18.4 7.4-3 11.8-10.7 11.7-18.7zm-29.4 11.3H275v-15.3h21c5.1 0 10.7 1 10.7 7.4 0 6.6-5.3 7.9-11 7.9zM279 268.6h-52.7l-21 22.8-20.5-22.8h-66.5l-.1 69.3h65.4l21.3-23 20.4 23h32.2l.1-23.3c18.9 0 49.3 4.6 49.3-23.3 0-17.3-12.3-22.7-27.9-22.7zm-103.8 54.7h-40.6v-13.8h36.3v-14.1h-36.3v-12.5h41.7l17.9 20.2zm65.8 8.2l-25.3-28.1L241 276zm37.8-31h-21.2v-17.6h21.5c5.6 0 10.2 2.3 10.2 8.4 0 6.4-4.6 9.2-10.5 9.2zm-31.6-136.7v-14.6h-55.5v69.3h55.5v-14.3h-38.9v-13.8h37.8v-14.1h-37.8v-12.5zM576 255.4h-.2zm-194.6 31.9c0-16.4-14.1-18.7-27.1-18.7h-39.4l-.1 69.3h16.6l.1-25.3h17.6c11 0 14.8 2 14.8 13.8l-.1 11.5h16.6l.1-13.8c0-8.9-1.8-15.1-11-18.4 7.7-3.1 11.8-10.8 11.9-18.4zm-29.2 11.2h-20.7v-15.6h21c5.1 0 10.7 1 10.7 7.4 0 6.9-5.4 8.2-11 8.2zm-172.8-80v-69.3h-27.6l-19.7 47-21.7-47H83.3v65.7l-28.1-65.7H30.7L1 218.5h17.9l6.4-15.3h34.5l6.4 15.3H100v-54.2l24 54.2h14.6l24-54.2v54.2zM31.2 188.8l11.2-27.6 11.5 27.6zm477.4 158.9v-4.5c-10.8 5.6-3.9 4.5-156.7 4.5 0-25.2.1-23.9 0-25.2-1.7-.1-3.2-.1-9.4-.1 0 17.9-.1 6.8-.1 25.3h-39.6c0-12.1.1-15.3.1-29.2-10 6-22.8 6.4-34.3 6.2 0 14.7-.1 8.3-.1 23h-48.9c-5.1-5.7-2.7-3.1-15.4-17.4-3.2 3.5-12.8 13.9-16.1 17.4h-82v-92.3h83.1c5 5.6 2.8 3.1 15.5 17.2 3.2-3.5 12.2-13.4 15.7-17.2h58c9.8 0 18 1.9 24.3 5.6v-5.6c54.3 0 64.3-1.4 75.7 5.1v-5.1h78.2v5.2c11.4-6.9 19.6-5.2 64.9-5.2v5c10.3-5.9 16.6-5.2 54.3-5V80c0-26.5-21.5-48-48-48h-480c-26.5 0-48 21.5-48 48v109.8c9.4-21.9 19.7-46 23.1-53.9h39.7c4.3 10.1 1.6 3.7 9 21.1v-21.1h46c2.9 6.2 11.1 24 13.9 30 5.8-13.6 10.1-23.9 12.6-30h103c0-.1 11.5 0 11.6 0 43.7.2 53.6-.8 64.4 5.3v-5.3H363v9.3c7.6-6.1 17.9-9.3 30.7-9.3h27.6c0 .5 1.9.3 2.3.3H456c4.2 9.8 2.6 6 8.8 20.6v-20.6h43.3c4.9 8-1-1.8 11.2 18.4v-18.4h39.9v92h-41.6c-5.4-9-1.4-2.2-13.2-21.9v21.9h-52.8c-6.4-14.8-.1-.3-6.6-15.3h-19c-4.2 10-2.2 5.2-6.4 15.3h-26.8c-12.3 0-22.3-3-29.7-8.9v8.9h-66.5c-.3-13.9-.1-24.8-.1-24.8-1.8-.3-3.4-.2-9.8-.2v25.1H151.2v-11.4c-2.5 5.6-2.7 5.9-5.1 11.4h-29.5c-4-8.9-2.9-6.4-5.1-11.4v11.4H58.6c-4.2-10.1-2.2-5.3-6.4-15.3H33c-4.2 10-2.2 5.2-6.4 15.3H0V432c0 26.5 21.5 48 48 48h480.1c26.5 0 48-21.5 48-48v-90.4c-12.7 8.3-32.7 6.1-67.5 6.1zm36.3-64.5H575v-14.6h-32.9c-12.8 0-23.8 6.6-23.8 20.7 0 33 42.7 12.8 42.7 27.4 0 5.1-4.3 6.4-8.4 6.4h-32l-.1 14.8h32c8.4 0 17.6-1.8 22.5-8.9v-25.8c-10.5-13.8-39.3-1.3-39.3-13.5 0-5.8 4.6-6.5 9.2-6.5zm-57 39.8h-32.2l-.1 14.8h32.2c14.8 0 26.2-5.6 26.2-22 0-33.2-42.9-11.2-42.9-26.3 0-5.6 4.9-6.4 9.2-6.4h30.4v-14.6h-33.2c-12.8 0-23.5 6.6-23.5 20.7 0 33 42.7 12.5 42.7 27.4-.1 5.4-4.7 6.4-8.8 6.4zm-42.2-40.1v-14.3h-55.2l-.1 69.3h55.2l.1-14.3-38.6-.3v-13.8H445v-14.1h-37.8v-12.5zm-56.3-108.1c-.3.2-1.4 2.2-1.4 7.6 0 6 .9 7.7 1.1 7.9.2.1 1.1.5 3.4.5l7.3-16.9c-1.1 0-2.1-.1-3.1-.1-5.6 0-7 .7-7.3 1zm20.4-10.5h-.1zm-16.2-15.2c-23.5 0-34 12-34 35.3 0 22.2 10.2 34 33 34h19.2l6.4-15.3h34.3l6.6 15.3h33.7v-51.9l31.2 51.9h23.6v-69h-16.9v48.1l-29.1-48.1h-25.3v65.4l-27.9-65.4h-24.8l-23.5 54.5h-7.4c-13.3 0-16.1-8.1-16.1-19.9 0-23.8 15.7-20 33.1-19.7v-15.2zm42.1 12.1l11.2 27.6h-22.8zm-101.1-12v69.3h16.9v-69.3z"
										></path>
									</svg>{' '}
									<svg
										width="18"
										height="18"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="cc-mastercard"
										className="svg-inline--fa fa-cc-mastercard text-primary"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z"
										></path>
									</svg>{' '}
									<svg
										width="18"
										height="18"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="cc-discover"
										className="svg-inline--fa fa-cc-discover text-primary"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M520.4 196.1c0-7.9-5.5-12.1-15.6-12.1h-4.9v24.9h4.7c10.3 0 15.8-4.4 15.8-12.8zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-44.1 138.9c22.6 0 52.9-4.1 52.9 24.4 0 12.6-6.6 20.7-18.7 23.2l25.8 34.4h-19.6l-22.2-32.8h-2.2v32.8h-16zm-55.9.1h45.3v14H444v18.2h28.3V217H444v22.2h29.3V253H428zm-68.7 0l21.9 55.2 22.2-55.2h17.5l-35.5 84.2h-8.6l-35-84.2zm-55.9-3c24.7 0 44.6 20 44.6 44.6 0 24.7-20 44.6-44.6 44.6-24.7 0-44.6-20-44.6-44.6 0-24.7 20-44.6 44.6-44.6zm-49.3 6.1v19c-20.1-20.1-46.8-4.7-46.8 19 0 25 27.5 38.5 46.8 19.2v19c-29.7 14.3-63.3-5.7-63.3-38.2 0-31.2 33.1-53 63.3-38zm-97.2 66.3c11.4 0 22.4-15.3-3.3-24.4-15-5.5-20.2-11.4-20.2-22.7 0-23.2 30.6-31.4 49.7-14.3l-8.4 10.8c-10.4-11.6-24.9-6.2-24.9 2.5 0 4.4 2.7 6.9 12.3 10.3 18.2 6.6 23.6 12.5 23.6 25.6 0 29.5-38.8 37.4-56.6 11.3l10.3-9.9c3.7 7.1 9.9 10.8 17.5 10.8zM55.4 253H32v-82h23.4c26.1 0 44.1 17 44.1 41.1 0 18.5-13.2 40.9-44.1 40.9zm67.5 0h-16v-82h16zM544 433c0 8.2-6.8 15-15 15H128c189.6-35.6 382.7-139.2 416-160zM74.1 191.6c-5.2-4.9-11.6-6.6-21.9-6.6H48v54.2h4.2c10.3 0 17-2 21.9-6.4 5.7-5.2 8.9-12.8 8.9-20.7s-3.2-15.5-8.9-20.5z"
										></path>
									</svg>{' '}
									<svg
										width="18"
										height="18"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="cc-visa"
										className="svg-inline--fa fa-cc-visa text-primary"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
										></path>
									</svg>
								</span>
							</Form.Label>
						</Form.Group>
						<CardNumberInput />

						<small className="text-muted">
							Full name as displayed on card.
						</small>
					</Col>
					{/*  Month */}
					<Col md={4} sm={12} className="mb-3">
						<Form.Group controlId="formMonth">
							<Form.Label>Month</Form.Label>
							<FormSelect options={months} required />
						</Form.Group>
					</Col>
					{/*  Year */}
					<Col md={4} sm={12} className="mb-3">
						<Form.Group controlId="formYear">
							<Form.Label>Year</Form.Label>
							<FormSelect options={year} required />
						</Form.Group>
					</Col>
					{/*  CVV Code */}
					<Col md={4} sm={12} className="mb-3">
						<Form.Group controlId="formCVVCode">
							<Form.Label>
								CVV Code
								<OverlayTrigger
									placement="top"
									overlay={
										<Tooltip id="tooltip-top">
											{' '}
											A 3 - digit number, typically printed on the back of a
											card.
										</Tooltip>
									}
								>
									<i className="fe fe-help-circle ms-1 fs-6"></i>
								</OverlayTrigger>
							</Form.Label>
						</Form.Group>
						<InputMask
							type="password"
							mask="999"
							maskChar={null}
							className="form-control"
							placeholder="xxx"
						/>
					</Col>
					{/*  Name on card */}
					<Col sm={12} md={12} className="mb-3">
						<Form.Group controlId="nameoncard">
							<Form.Label>Name on Card</Form.Label>
							<Form.Control type="text" placeholder="Name" required />
						</Form.Group>
					</Col>
					{/*  Country */}
					<Col md={6} sm={6} className="mb-3">
						<Form.Group controlId="formCountry">
							<Form.Label>Country</Form.Label>
							<FormSelect options={countrylist} />
						</Form.Group>
					</Col>
					{/*  Zip Code */}
					<Col md={6} sm={6} className="mb-3">
						<Form.Group controlId="postalcode">
							<Form.Label>Zip/Postal Code</Form.Label>
							<Form.Control type="text" placeholder="Zipcode" required />
						</Form.Group>
					</Col>
					{/*  CheckBox */}
					<Col md={12} sm={12} className="mb-5">
						{/*  Checkbox  */}
						<Form.Group controlId="customCheck1">
							<Form.Check type="checkbox" label="Remember this card" />
						</Form.Group>
					</Col>
					<Col md={4} sm={12}>
						{/*  Button */}
						<div>
							<Button variant="primary">Make a Payment</Button>
						</div>
					</Col>
					{/*  Text */}
					<Col
						md={8}
						sm={12}
						className="d-flex align-items-center justify-content-end"
					>
						<small className="mb-0">
							By click start learning, you agree to our{' '}
							<Link to="#">Terms of Service and Privacy Policy.</Link>
						</small>
					</Col>
				</Form>
			</Fragment>
		);
	};

	const PayPalMethod = () => {
		return (
			<Fragment>
				{/*  Paypal */}
				<Form id="internetpayment">
					<div className="mb-3 mt-4 ">
						<Form.Group controlId="paypalemail">
							<Form.Label>PayPal</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your PayPal email"
								required
							/>
						</Form.Group>
					</div>
					<Button variant="primary">PayPal Checkout</Button>
				</Form>
			</Fragment>
		);
	};
	return (
		<Fragment>
			{/* Page header */}
			<PageHeading pagetitle="Checkout Page" />

			{/*  Content */}
			<section className="py-6">
				<Container>
					<Row>
						<Col xl={8} lg={8} md={12} sm={12}>
							{/*  Card */}
							<Card className="mb-4">
								{/*  Card header */}
								<Card.Header>
									<h3 className="mb-0">Billing Address </h3>
								</Card.Header>
								{/*  Card body */}
								<Card.Body>
									{/*  Form */}
									<Form className="row">
										{/*  First name  */}
										<Col md={6} sm={12} className="mb-3">
											<Form.Group controlId="fname">
												<Form.Label>First Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="First Name"
													required
												/>
											</Form.Group>
										</Col>
										{/*  Last name  */}
										<Col md={6} sm={12} className="mb-3">
											<Form.Group controlId="lname">
												<Form.Label>Last Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="Last Name"
													required
												/>
											</Form.Group>
										</Col>
										{/*  Phone number  */}
										<Col md={12} sm={12} className="mb-3">
											<Form.Group controlId="phone">
												<Form.Label>
													Phone Number{' '}
													<span className="text-muted">(Optional)</span>
												</Form.Label>
												<Form.Control
													type="text"
													placeholder="Phone"
													required
												/>
											</Form.Group>
										</Col>
										{/*  Address  */}
										<Col md={12} sm={12} className="mb-3">
											<Form.Group controlId="address">
												<Form.Label>Address Line 1</Form.Label>
												<Form.Control
													type="text"
													placeholder="Address"
													required
												/>
											</Form.Group>
										</Col>
										{/*  Address  */}
										<Col md={12} sm={12} className="mb-3">
											<Form.Group controlId="address2">
												<Form.Label>
													Address Line 2{' '}
													<span className="text-muted">(Optional)</span>
												</Form.Label>
												<Form.Control
													type="text"
													placeholder="Address"
													required
												/>
											</Form.Group>
										</Col>
										{/*  State */}
										<Col md={4} sm={12} className="mb-3">
											<Form.Group className="mb-3" controlId="formState">
												<Form.Label>State</Form.Label>
												<FormSelect options={statelist} />
											</Form.Group>
										</Col>
										{/*  Country  */}
										<Col md={4} sm={12} className="mb-3">
											<Form.Group
												className="mb-3"
												controlId="formBillingCountry"
											>
												<Form.Label>Country</Form.Label>
												<FormSelect options={countrylist} />
											</Form.Group>
										</Col>
										{/*  Zip code  */}
										<Col md={4} sm={12} className="mb-3">
											<Form.Group controlId="zipCode">
												<Form.Label>Zip/Postal Code</Form.Label>
												<Form.Control type="text" placeholder="Zip" required />
											</Form.Group>
										</Col>
										<Col sm={12} md={12} lg={12}>
											{/*  Checkbox  */}
											<Form.Group controlId="shippingAddress">
												<Form.Check
													type="checkbox"
													label="Shipping address is the same as my billing address"
												/>
											</Form.Group>
											{/*  Checkbox  */}
											<Form.Group controlId="saveCard">
												<Form.Check
													type="checkbox"
													checked
													label="Save this information for next time"
													onChange={onChange}
												/>
											</Form.Group>
										</Col>
									</Form>
								</Card.Body>
							</Card>
							{/*  Card */}
							<Card className="mb-3 mb-lg-0">
								{/*  Card header */}
								<Card.Header>
									<h3 className="mb-0">Payment Method</h3>
								</Card.Header>
								{/*  Card body */}
								<Card.Body>
									<Form.Check
										inline
										label="Credit or Debit card"
										name="group1"
										type="radio"
										id="inline-radio-1"
										checked={status === 1}
										onChange={(e) => radioHandler(1)}
									/>
									<Form.Check
										inline
										label="PayPal"
										name="group1"
										type="radio"
										id="inline-radio-2"
										checked={status === 2}
										onChange={(e) => radioHandler(2)}
									/>
									{status === 1 ? CreditDebitCardMethod() : ''}
									{status === 2 ? PayPalMethod() : ''}
								</Card.Body>
							</Card>
						</Col>
						<Col lg={4} md={12} sm={12}>
							{/*  Card */}
							<Card className="border-0 mb-3">
								{/*  Card body */}
								<div className="p-5 text-center">
									<Badge bg="warning">Selected Plan</Badge>
									<div className="mb-5 mt-3">
										<h1 className="fw-bold">Individual</h1>
										<p className="mb-0 ">
											Access all{' '}
											<span className="text-dark fw-medium">
												premium courses, workshops, and mobile apps.
											</span>{' '}
											Renewed monthly.
										</p>
									</div>
									<div className="d-flex justify-content-center">
										<span className="h3 mb-0 fw-bold text-primary">$</span>
										<div className="display-4 fw-bold text-primary">39</div>
										<span className=" align-self-end mb-1">/Monthly</span>
									</div>
								</div>
								<hr className="m-0" />
								<div className="p-5">
									<h4 className="fw-bold mb-4">
										Everything in Starter, plus:{' '}
									</h4>
									{/*  List */}
									<ListGroup as="ul" className="mb-0" bsPrefix="list-unstyled">
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>Offline viewing </span>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>
												<span className="fw-bold text-dark">Offline </span>
												projects{' '}
											</span>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>
												<span className="fw-bold text-dark">Unlimited </span>
												storage
											</span>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>Custom domain support </span>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>Bulk editing </span>
										</ListGroup.Item>
										<ListGroup.Item as="li" className="mb-1" bsPrefix=" ">
											<span className="text-success me-1">
												<i className="far fa-check-circle"></i>
											</span>
											<span>12 / 5 support</span>
										</ListGroup.Item>
									</ListGroup>
								</div>
								<hr className="m-0" />
								<div className="p-4">
									<Link to="#" className="btn btn-outline-primary">
										Change the Plan
									</Link>
								</div>
							</Card>
							{/*  Card */}
							<Card className="border-0 mb-3 mb-lg-0">
								{/*  Card body */}
								<Card.Body>
									<h3 className="mb-2">Discount Codes</h3>
									<Form>
										<Form.Group
											className="input-group"
											controlId="discountcodes"
										>
											<Form.Control
												type="text"
												placeholder="Enter your code"
												required
											/>
											<Button variant="secondary" id="couponCode">
												Apply
											</Button>
										</Form.Group>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default CourseCheckout;
