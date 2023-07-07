// import node module libraries
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';

const BasicDetails = (props) => {
	const { next } = props;

	return (
		<Form>
			<Card className="card-bordered shadow-none mb-3 ">
				<Card.Body className="p-6">
					<div className="mb-4">
						<h2 className="mb-0">Basic Information</h2>
						<span>Add your personal details in the form.</span>
					</div>
					<Row className="row">
						<Col md={6} xs={12} className="mb-4">
							{/* First Name */}
							<Form.Label htmlFor="firstname">
								First Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="firstname"
								placeholder="First Name"
							/>
						</Col>
						<Col md={6} xs={12} className="mb-4">
							{/* Last Name */}
							<Form.Label htmlFor="lastname">
								Last Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="lastname"
								placeholder="First Name"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-4">
							{/* Email */}
							<Form.Label htmlFor="email">
								Last Name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="email"
								id="email"
								placeholder="Tell us your Email ID"
								aria-describedby="emailHelpBlock"
							/>
							<Form.Text id="emailHelpBlock" className="fs-6" muted>
								We'll send you relevant jobs in your mail
							</Form.Text>
						</Col>
						<Col md={12} xs={12} className="mb-4">
							{/* Phone */}
							<Form.Label htmlFor="phone">
								Phone Name<span className="text-danger">*</span>
							</Form.Label>
							<InputGroup className="mb-1">
								<InputGroup.Text id="phone">+91</InputGroup.Text>
								<Form.Control
									placeholder="Mobile Number"
									aria-label="Mobile Number"
									aria-describedby="phoneHelpBlock"
								/>
							</InputGroup>
							<Form.Text id="phoneHelpBlock" className="fs-6" muted>
								Recruiters will call you on this number
							</Form.Text>
						</Col>
						<Col md={12} xs={12} className="mb-4">
							{/* Gender */}
							<Form.Label className="d-block">Gender</Form.Label>
							<Form.Check
								type="radio"
								id="male"
								label="Male"
								className="form-check-inline"
							/>
							<Form.Check
								type="radio"
								id="female"
								label="Female"
								className="form-check-inline"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-4">
							{/* Resume */}
							<Form.Label>Resume</Form.Label>
							<Form.Group className="mb-1 input-group">
								<Form.Control id="resume" type="file" />
								<Form.Label htmlFor="resume" className="input-group-text mb-0">
									Upload
								</Form.Label>
								<Form.Text className="fs-6">
									DOC, DOCx, PDF, RTF | Max: 2 MB. Recruiters give first
									preference to candidates who have a resume
								</Form.Text>
							</Form.Group>
						</Col>
						<Col md={12} xs={12} className="mb-4">
							{/* confirmation chechbox */}
							<Form.Check
								type="checkbox"
								id="confirm"
								label="Send me important updates on email id."
								className="fs-6"
								value=""
							/>
						</Col>
						<Col xs={12}>
							{/* Button */}
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
export default BasicDetails;
