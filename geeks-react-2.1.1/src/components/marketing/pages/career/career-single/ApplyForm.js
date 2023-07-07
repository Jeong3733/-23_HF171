// import node module libraries
import { Card, Form, Button } from 'react-bootstrap';

const ApplyForm = () => {
	return (
		<div className="mt-8 mb-12">
			<Card className="bg-light shadow-none">
				<Card.Body className="p-md-8">
					<h3 className="mb-4">Apply for this Job </h3>

					{/* form to apply for the job */}
					<Form>
						<Form.Group className="mb-3" controlId="formFirstName">
							<Form.Label>
								First Name <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="text" placeholder="First Name" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formLastName">
							<Form.Label>
								Last Name <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="text" placeholder="Last Name" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>
								Email <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="email"
								placeholder="hello@example.com"
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formPhone">
							<Form.Label>
								Phone <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="number" placeholder="+91" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formResumeCV">
							<Form.Label>
								Resume/CV <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="file" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formCoverLetter">
							<Form.Label>
								Cover letter <span className="text-danger">*</span>
							</Form.Label>
							<Form.Control type="file" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formCoverLetter">
							<Form.Label>Why is Geeks important to you?</Form.Label>
							<Form.Control as="textarea" placeholder="type here..." rows="4" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ApplyForm;
