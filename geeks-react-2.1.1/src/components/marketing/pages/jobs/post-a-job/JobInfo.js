// import node module libraries
import { useState } from 'react';
import { ButtonGroup, ToggleButton, Col, Row, Form } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

const JobInfo = () => {
	const [department, setDepartment] = useState('');
	const [radioValue, setRadioValue] = useState('0');
	const departments = [
		{ value: 'Web Designer', label: 'Web Designer' },
		{ value: 'Front End Developer', label: 'Front End Developer' },
		{ value: 'Software Engineer', label: 'Software Engineer' }
	];
	const radios = [
		{ name: 'Full Time', value: '1' },
		{ name: 'Part Time', value: '2' },
		{ name: 'Freelance', value: '3' },
		{ name: 'Contract', value: '4' }
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
							className="bi bi-info-circle text-primary"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0
                8 0a8 8 0 0 0 0 16z"
							/>
							<path
								d="m8.93
                  6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738
                  3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252
                  1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275
                  0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0
                  1 1 0 0 1 2 0z"
							/>
						</svg>
					</div>
					{/* heading */}
					<h3>2. Job information</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adillicitudin iaculis nunc
						et convallis.
					</p>
				</div>
			</Col>
			<Col lg={{ span: 7, offset: 1 }} md={8} xs={12}>
				<div>
					<Row>
						<Col xs={12} className="mb-3">
							{/* Job title */}
							<Form.Label htmlFor="job-title">
								Job title<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="job-title"
								placeholder="Write the Job Title"
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Select Department */}
							<Form.Label htmlFor="department">
								Select Department<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								as={FormSelect}
								options={departments}
								placeholder="Select Department"
								defaultselected=""
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Job location */}
							<Form.Label className="d-block">Job location</Form.Label>
							<Form.Check type="radio" name="job-location" label="Onsite" />
							<Form.Check type="radio" name="job-location" label="Remote" />
							<Form.Check
								type="radio"
								name="job-location"
								label="Onsite or Remote"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Job type */}
							<Form.Label className="d-block">
								Job type <span className="text-danger">*</span>
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
							{/* Job salary */}
							<Form.Label htmlFor="job-salary">Job salary</Form.Label>
							<Form.Control
								type="text"
								id="job-salary"
								placeholder="Enter salary"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Job description */}
							<Form.Label htmlFor="job-description">Job description</Form.Label>
							<Form.Control
								type="text"
								as="textarea"
								rows={3}
								id="job-description"
								placeholder="Write about job"
							/>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default JobInfo;
