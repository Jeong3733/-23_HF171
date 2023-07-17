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

const Job = (props) => {
	const { previous } = props;
	const [radioValue, setRadioValue] = useState('0');
	const [jobType, setJobType] = useState('');
	const [location, setLocation] = useState('');
	const [availabilityToJoin, setAvailabilityToJoin] = useState('');

	const radios = [
		{ name: 'Full Time', value: '1' },
		{ name: 'Freelance', value: '2' },
		{ name: 'Contract', value: '3' }
	];

	const jobTypes = [
		{ value: 'Permanent', label: 'Permanent' },
		{ value: 'Contract', label: 'Contract' }
	];

	const locations = [
		{ value: 'Ahmedabad', label: 'Ahmedabad' },
		{ value: 'Bombay', label: 'Bombay' },
		{ value: 'Pune', label: 'Pune' },
		{ value: 'Kerala', label: 'Kerala' }
	];

	const availabilitiesToJoin = [
		{ value: '15 Days to less', label: '15 Days to less' },
		{ value: 'One Month', label: 'One Month' },
		{ value: 'Within 15 days', label: 'Within 15 days' }
	];

	return (
		<Form>
			{/* Card */}
			<Card className="card-bordered shadow-none mb-3">
				{/* Card body */}
				<Card.Body className="p-6">
					<div className="mb-4">
						{/* heading */}
						<h2 className="mb-0">What kind of job are you looking for?</h2>
						{/* text */}
						<span>
							Add the details for are you looking for future opportunity.
						</span>
					</div>
					<Row className="row">
						<Col xs={12} className="mb-3">
							{/* Resume Headline */}
							<Form.Label htmlFor="resume-headline">Resume Headline</Form.Label>
							<Form.Control
								type="text"
								id="resume-headline"
								placeholder="Ex:Figma Designe"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Job Type */}
							<Form.Label>Job Type</Form.Label>
							<Form.Control
								as={FormSelect}
								options={jobTypes}
								placeholder="Select"
								defaultselected=""
								value={jobType}
								onChange={(e) => setJobType(e.target.value)}
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Employment Type */}
							<Form.Label className="d-block">Employment Type</Form.Label>
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
							{/* Location */}
							<Form.Label>Location</Form.Label>
							<Form.Control
								as={FormSelect}
								options={locations}
								placeholder="Select"
								defaultselected=""
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Availability to Join */}
							<Form.Label>Availability to Join</Form.Label>
							<Form.Control
								as={FormSelect}
								options={availabilitiesToJoin}
								placeholder="Select"
								defaultselected=""
								value={availabilityToJoin}
								onChange={(e) => setAvailabilityToJoin(e.target.value)}
								required
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
							{/* Submit Application button */}
							<Button variant="primary">Submit Application</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Form>
	);
};
export default Job;
