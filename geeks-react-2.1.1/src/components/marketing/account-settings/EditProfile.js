// import node module libraries
import { useLocation } from 'react-router-dom';
import { Card, Form, Row, Col, Button, Image } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import { FlatPickr } from 'components/elements/flat-pickr/FlatPickr';

// import media files
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/student/ProfileLayout';

const EditProfile = () => {
	const pathInfo = useLocation();
	const account = pathInfo.pathname.substring(21, 11);
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
	return (
		<ProfileLayout>
			{account === 'instructor'}
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Profile Details</h3>
						<p className="mb-0">
							You have full control to manage your own account setting.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<div className="d-lg-flex align-items-center justify-content-between">
						<div className="d-flex align-items-center mb-4 mb-lg-0">
							<Image
								src={Avatar3}
								id="img-uploaded"
								className="avatar-xl rounded-circle"
								alt=""
							/>
							<div className="ms-3">
								<h4 className="mb-0">Your avatar</h4>
								<p className="mb-0">
									PNG or JPG no bigger than 800px wide and tall.
								</p>
							</div>
						</div>
						<div>
							<Button variant="outline-secondary" size="sm">
								Update
							</Button>{' '}
							<Button variant="outline-danger" size="sm">
								Delete
							</Button>
						</div>
					</div>
					<hr className="my-5" />
					<div>
						<h4 className="mb-0">Personal Details</h4>
						<p className="mb-4">Edit your personal information and address.</p>
						{/* Form */}
						<Form>
							<Row>
								{/* First name */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formFirstName">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="First Name"
											required
										/>
									</Form.Group>
								</Col>

								{/* Last name */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formLastName">
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Last Name"
											required
										/>
									</Form.Group>
								</Col>

								{/* Phone */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formPhone">
										<Form.Label>Phone</Form.Label>
										<Form.Control type="text" placeholder="Phone" required />
									</Form.Group>
								</Col>

								{/* Birthday */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formBirthday">
										<Form.Label>Birthday</Form.Label>
										<Form.Control
											as={FlatPickr}
											value={''}
											placeholder="Date of Birth"
											required
										/>
									</Form.Group>
								</Col>

								{/* Address Line 1 */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formBirthday">
										<Form.Label>Address Line 1</Form.Label>
										<Form.Control
											type="text"
											placeholder="Address Line 1"
											required
										/>
									</Form.Group>
								</Col>

								{/* Address Line 2 */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formBirthday">
										<Form.Label>Address Line 2</Form.Label>
										<Form.Control
											type="text"
											placeholder="Address Line 2"
											required
										/>
									</Form.Group>
								</Col>

								{/* State */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formState">
										<Form.Label>State</Form.Label>
										<FormSelect options={statelist} />
									</Form.Group>
								</Col>

								{/* Country */}
								<Col md={6} sm={12} className="mb-3">
									<Form.Group className="mb-3" controlId="formState">
										<Form.Label>Country</Form.Label>
										<FormSelect options={countrylist} />
									</Form.Group>
								</Col>

								{/* Button */}
								<Col sm={12} md={12}>
									<Button variant="primary" type="submit">
										Update Profile
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default EditProfile;
