// import node module libraries
import { useState } from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

const JobPosterInfo = () => {
	const [phoneOption, setPhoneOption] = useState('');
	const phoneOptions = [
		{ value: 'Home', label: 'Home' },
		{ value: 'Work', label: 'Work' },
		{ value: 'Mobile', label: 'Mobile' }
	];
	return (
		<Row>
			<Col lg={4} md={4} xs={12}>
				<div className="mb-4">
					<div className="mb-4">
						{/* icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							fill="currentColor"
							className="bi bi-person text-primary"
							viewBox="0
                      0 16 16"
						>
							{' '}
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0
                        6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4
                        8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6
                        4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516
                        10.68 10.289 10 8 10c-2.29
                        0-3.516.68-4.168 1.332-.678.678-.83
                        1.418-.832 1.664h10z"
							/>
						</svg>
					</div>
					{/* heading */}
					<h3>1. Job poster information</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet
						ac.
					</p>
				</div>
			</Col>
			<Col lg={{ span: 7, offset: 1 }} md={8} xs={12}>
				<div>
					<Row>
						<Col md={6} xs={12} className="mb-3">
							{/* First Name */}
							<Form.Label htmlFor="first-name">
								First Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="first-name"
								placeholder="First Name"
								required
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="last-name">
								Last Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="last-name"
								placeholder="Last Name"
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">
								Email<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="email"
								id="email"
								placeholder="Write you Email id"
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Phone Number */}
							<Form.Label htmlFor="phone">
								Phone Number<span className="text-danger">*</span>
							</Form.Label>
							<InputGroup className="mb-2">
								<Form.Control
									type="text"
									id="phone"
									placeholder="Phone"
									required
								/>
								<Form.Control
									as={FormSelect}
									options={phoneOptions}
									placeholder="States"
									defaultselected=""
									value={phoneOption}
									onChange={(e) => setPhoneOption(e.target.value)}
									required
									style={{ maxWidth: '8rem' }}
								/>
							</InputGroup>
							{/* confirmation chechbox */}
							<Form.Check
								type="checkbox"
								id="confirm"
								label="Send me important updates in this number."
								className="fs-6"
								value=""
							/>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default JobPosterInfo;
