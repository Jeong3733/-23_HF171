// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Form, Button, Card } from 'react-bootstrap';

const SMTPServer = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 font-weight-bold">SMTP Server Setting</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
								<Breadcrumb.Item active>SMTP Server Setting</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
				</Col>
			</Row>

			<Card>
				<Card.Header>
					<h4 className="mb-0">SMTP Server Setting</h4>
				</Card.Header>
				<Card.Body>
					<Form>
						<Row>
							<Col lg={6} md={12} className="mb-3">
								{/* Name */}
								<Form.Label>Sendere’s Name </Form.Label>
								<Form.Control
									type="text"
									id="senderName"
									placeholder="Geeks"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Address */}
								<Form.Label>
									Mail Address <span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="address"
									placeholder="Address here"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Mail driver */}
								<Form.Label>
									Mail Driver (SMTP, Mail)<span className="text-danger">*</span>{' '}
								</Form.Label>
								<Form.Control
									type="text"
									id="mailDriver"
									placeholder="e.g.smtp,gmail.com"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Username */}
								<Form.Label>
									Mail Username<span className="text-danger">*</span>{' '}
									(info@geeksuidesign.com)
								</Form.Label>
								<Form.Control
									type="text"
									id="userName"
									placeholder="e.g.smtp,gmail.com"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Host */}
								<Form.Label>
									Mail Host<span className="text-danger">*</span>{' '}
								</Form.Label>
								<Form.Control
									type="text"
									id="mailHost"
									placeholder="smtp,gmail.io"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Password */}
								<Form.Label>
									Mail Password<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="passwird"
									id="mailPassword"
									placeholder="*****************"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Port Number */}
								<Form.Label>
									Mail Port Number<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									type="text"
									id="mailPort"
									placeholder="e.g. 465, 587"
									required
								/>
							</Col>
							<Col lg={6} md={12} className="mb-3">
								{/* Encryption */}
								<Form.Label>Mail Encryption (TLS / SSL)</Form.Label>
								<Form.Control
									type="passwird"
									id="mailEncryption"
									placeholder="tls"
									required
								/>
							</Col>
						</Row>
						<Row>
							<Col lg={6} md={12}>
								<Button variant="primary" type="submit">
									Submit{' '}
								</Button>{' '}
								<Button variant="outline-secondary" type="submit">
									Cancel{' '}
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default SMTPServer;
