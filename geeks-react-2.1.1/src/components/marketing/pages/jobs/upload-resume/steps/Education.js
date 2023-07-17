// import node module libraries
import { useState } from 'react';
import {
	Row,
	Col,
	Card,
	Form,
	Button,
	ButtonGroup,
	ToggleButton
} from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

const Education = (props) => {
	const { next, previous } = props;
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [radioValue, setRadioValue] = useState('0');
	const radios = [
		{ name: 'Full Time', value: '1' },
		{ name: 'Part Time', value: '2' }
	];

	const months = [
		{ value: 'January', label: 'January' },
		{ value: 'February', label: 'February' },
		{ value: 'March', label: 'March' },
		{ value: 'April', label: 'April' },
		{ value: 'May', label: 'May' },
		{ value: 'June', label: 'June' },
		{ value: 'July', label: 'July' },
		{ value: 'August', label: 'August' },
		{ value: 'September', label: 'September' },
		{ value: 'October', label: 'October' },
		{ value: 'November', label: 'November' },
		{ value: 'December', label: 'December' }
	];

	const years = [
		{ value: '2015', label: '2015' },
		{ value: '2016', label: '2016' },
		{ value: '2017', label: '2017' },
		{ value: '2018', label: '2018' },
		{ value: '2019', label: '2019' },
		{ value: '2020', label: '2020' },
		{ value: '2021', label: '2021' },
		{ value: '2022', label: '2022' }
	];

	return (
		<Form>
			{/* Card */}
			<Card className="card-bordered shadow-none mb-3">
				<Card.Body className="p-6">
					<div className="mb-4">
						<h2 className="mb-0">Education</h2>
						<span>
							Add your education detail like school, degree and graduate.
						</span>
					</div>
					<Row>
						<Col xs={12} className="mb-3">
							{/* School / University */}
							<Form.Label htmlFor="school-university">
								School / University<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="school-university"
								placeholder="Degree"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Degree */}
							<Form.Label htmlFor="degree">
								Degree<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="text" id="degree" placeholder="Degree" />
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Fiels of study */}
							<Form.Label htmlFor="field-of-study">
								Fiels of study<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="field-of-study"
								placeholder="Ex. Business"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Course type */}
							<Form.Label className="d-block">Course Type</Form.Label>
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
						<Col className="col-12">
							{/* From label */}
							<Form.Label>From</Form.Label>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Select month */}
							<Form.Control
								as={FormSelect}
								options={months}
								placeholder="Month"
								defaultselected=""
								value={month}
								onChange={(e) => setMonth(e.target.value)}
								required
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Select year */}
							<Form.Control
								as={FormSelect}
								options={years}
								placeholder="Year"
								defaultselected=""
								value={year}
								onChange={(e) => setYear(e.target.value)}
								required
							/>
						</Col>
						<Col className="col-12">
							{/* To label */}
							<Form.Label>To</Form.Label>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Select month */}
							<Form.Control
								as={FormSelect}
								options={months}
								placeholder="Month"
								defaultselected=""
								value={month}
								onChange={(e) => setMonth(e.target.value)}
								required
							/>
						</Col>
						<Col md={6} xs={12} className="mb-3">
							{/* Select year */}
							<Form.Control
								as={FormSelect}
								options={years}
								placeholder="Year"
								defaultselected=""
								value={year}
								onChange={(e) => setYear(e.target.value)}
								required
							/>
						</Col>
						<Col
							md={12}
							xs={12}
							className="d-md-flex justify-content-between mb-3"
						>
							<Button variant="outline-secondary" onClick={previous}>
								Previous
							</Button>
							<Button variant="primary" onClick={next}>
								Next
							</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Form>
	);
};
export default Education;
