// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import {
	Col,
	Row,
	Container,
	Image,
	Form,
	Button,
	ListGroup
} from 'react-bootstrap';

// import media files
import ComingSoonImage from 'assets/images/background/comingsoon.svg';

const ComingSoon = () => {
	const calculateTimeLeft = () => {
		let launchdate = '2023-12-12';
		const difference = +new Date(launchdate) - +new Date();
		let timeLeft = {};
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				minutes: Math.floor((difference / 1000 / 60) % 60).toLocaleString(
					'en-US',
					{ minimumIntegerDigits: 2, useGrouping: false }
				),
				seconds: Math.floor((difference / 1000) % 60).toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false
				})
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const timerComponents = [];

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	Object.keys(timeLeft).forEach((interval, index) => {
		if (!timeLeft[interval]) {
			return;
		}
		timerComponents.push(
			<ListGroup.Item
				as="li"
				bsPrefix="list-inline-item"
				key={index}
				className="me-md-5"
			>
				<span className="days display-4 fw-bold  text-primary">
					{timeLeft[interval]}
				</span>
				<p className="fs-4 mb-0">{interval}</p>
			</ListGroup.Item>
		);
	});

	return (
		<Fragment>
			{/* Page Content */}
			<section className="bg-white">
				<Container className="d-flex flex-column">
					<Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
						{/* Docs */}
						<Col
							xl={{ span: 5, offset: 1 }}
							lg={6}
							md={12}
							sm={12}
							className="text-center text-lg-start"
						>
							<h1 className="display-3 mb-2 fw-bold">We're coming soon.</h1>
							<p className="mb-4 fs-4">
								Our website is under construction. We'll be here soon with our
								new awesome site, subscribe to be notified.
							</p>
							<div className="countdown">
								<ListGroup as="ul" bsPrefix="list-inline">
									{timerComponents.length ? (
										timerComponents
									) : (
										<ListGroup.Item as="li" bsPrefix="list-inline-item">
											<h1 className="text-danger">Time's up!</h1>{' '}
										</ListGroup.Item>
									)}
								</ListGroup>
							</div>
							<hr className="my-4" />
							<div>
								<h3 className="mb-3">Notify me when its’s ready.</h3>
								{/* Form */}
								<Form className="d-inline-flex justify-content-center justify-content-lg-start">
									<Form.Group
										className="mb-3 col ps-0 ms-2 ms-md-0 me-2"
										controlId="formBasicEmail"
									>
										<Form.Control
											type="email"
											placeholder="Your e-mail..."
											required
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-auto ps-0"
										controlId="formSubmitButton"
									>
										<Button variant="primary" type="submit">
											{' '}
											Subscribe
										</Button>
									</Form.Group>
								</Form>
							</div>
						</Col>
						{/* img */}
						<Col
							xl={{ span: 5, offset: 1 }}
							lg={6}
							md={12}
							sm={12}
							className="mt-8 mt-lg-0"
						>
							<Image src={ComingSoonImage} alt="" className="w-100" />
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default ComingSoon;
