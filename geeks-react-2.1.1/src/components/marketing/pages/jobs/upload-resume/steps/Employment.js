// import node module libraries
import { useState } from 'react';
import {
	Card,
	Row,
	Col,
	Form,
	Button,
	ButtonGroup,
	ToggleButton
} from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import { FlatPickr } from 'components/elements/flat-pickr/FlatPickr';

const Employment = (props) => {
	const { next, previous } = props;
	const [state, setState] = useState('');
	const [radioValue, setRadioValue] = useState('0');

	const states = [
		{ value: 'Gujarat', label: 'Gujarat' },
		{ value: 'Maharashtra', label: 'Maharashtra' },
		{ value: 'MP', label: 'MP' },
		{ value: 'UP', label: 'UP' }
	];
	const radios = [
		{ name: 'Full Time', value: '1' },
		{ name: 'Freelance', value: '2' },
		{ name: 'Contract', value: '3' }
	];
	return (
		<Form>
			{/* Card */}
			<Card className="card-bordered shadow-none mb-3  ">
				<Card.Body className="p-6">
					<div className="mb-4">
						<h2 className="mb-0">Employment</h2>
						<span>
							Add your Employment details like company, job title and salary.
						</span>
					</div>
					{/* row */}
					<Row>
						{/* col */}
						<Col xs={12} className="mb-3">
							{/* Job title */}
							<Form.Label htmlFor="job-title">
								Job title<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="job-title"
								placeholder="Write the Job Title"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Job type */}
							<Form.Label className="d-block">
								Job type<span className="text-danger">*</span>
							</Form.Label>
							<ButtonGroup>
								{radios.map((radio, idx) => (
									<ToggleButton
										key={idx}
										id={`radio-${idx}`}
										type="radio"
										variant="outline-primary"
										name="radio"
										value={radio.value}
										checked={radioValue === radio.value}
										onChange={(e) => setRadioValue(e.currentTarget.value)}
									>
										{radio.name}
									</ToggleButton>
								))}
							</ButtonGroup>
						</Col>

						<Col md={12} xs={12} className="mb-3">
							{/* Company Name */}
							<Form.Label htmlFor="companyname">Company Name</Form.Label>
							<Form.Control
								type="text"
								id="companyname"
								placeholder="Company Name"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Company Address */}
							<Form.Label htmlFor="company-address">Company Address</Form.Label>
							<Form.Control
								type="text"
								id="company-address"
								placeholder="Company Address"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Company City */}
							<Form.Label htmlFor="company-city">Company City</Form.Label>
							<Form.Control
								type="text"
								id="company-city"
								placeholder="Company City"
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Company State */}
							<Form.Label>Company State</Form.Label>
							<Form.Control
								as={FormSelect}
								options={states}
								placeholder="States"
								defaultselected=""
								value={state}
								onChange={(e) => setState(e.target.value)}
								required
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Company City */}
							<Form.Label htmlFor="company-city">Company City</Form.Label>
							<Form.Control
								type="text"
								id="company-city"
								placeholder="Company City"
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Date of Joining */}
							<Form.Label htmlFor="date-of-joining">Date of Joining</Form.Label>
							<FlatPickr value={''} placeholder="Date of Joining" />
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Date of relieving */}
							<Form.Label htmlFor="date-of-relieving">
								Date of relieving
							</Form.Label>
							<FlatPickr value={''} placeholder="Date of relieving" />
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Annual Salary */}
							<Form.Label htmlFor="annual-salary">Annual Salary</Form.Label>
							<Form.Control
								type="text"
								id="annual-salary"
								placeholder="Eg. 5,64,000"
							/>
						</Col>
						<Col
							md={12}
							xs={12}
							className="d-md-flex justify-content-between mb-3"
						>
							{/* Go to Back button */}
							<Button variant="outline-secondary" onClick={previous}>
								Go to Back
							</Button>
							<div className="mt-2 mt-md-0">
								{/* Skip button */}
								<Button
									variant="outline-secondary"
									className="me-2"
									onClick={next}
								>
									Skip
								</Button>
								{/* Save and Continue button */}
								<Button variant="primary" onClick={next}>
									Save and Continue
								</Button>
							</div>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Form>
	);
};
export default Employment;
