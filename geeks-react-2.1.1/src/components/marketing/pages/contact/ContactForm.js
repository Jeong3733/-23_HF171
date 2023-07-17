// import node module libraries
import { Col, Row, Form, Button } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

const ContactForm = () => {
	const contactReason = [
		{ value: 'Design', label: 'Design' },
		{ value: 'Development', label: 'Development' },
		{ value: 'Other', label: 'Other' }
	];

	return (
		<div className="px-4 px-xl-20 py-8 py-lg-0">
			{/* form section */}
			<div id="form">
				<Form>
					<Row>
						{/* First Name */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formFirstName">
								<Form.Label>
									First Name:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="text" placeholder="First Name" required />
							</Form.Group>
						</Col>

						{/* Last Name */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formLastName">
								<Form.Label>
									Last Name:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="text" placeholder="Last Name" required />
							</Form.Group>
						</Col>

						{/* Email */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Label>
									Email:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="email" placeholder="Email" required />
							</Form.Group>
						</Col>

						{/* Phone Number */}
						<Col md={6} sm={12}>
							<Form.Group className="mb-3" controlId="formFirstName">
								<Form.Label>
									Phone Number:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control type="number" placeholder="Phone" required />
							</Form.Group>
						</Col>

						{/* Contact Reason */}
						<Col md={12} sm={12}>
							<Form.Group className="mb-3" controlId="formContactReason">
								<Form.Label>
									Contact Reason:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									as={FormSelect}
									placeholder="Select"
									options={contactReason}
									required
								/>
							</Form.Group>
						</Col>

						{/* Messages */}
						<Col md={12} sm={12}>
							<Form.Group className="mb-3" controlId="formMessages">
								<Form.Label>Message:</Form.Label>
								<Form.Control as="textarea" placeholder="Messages" rows={3} />
							</Form.Group>
						</Col>

						{/* button */}
						<Col md={12} sm={12}>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	);
};
export default ContactForm;
