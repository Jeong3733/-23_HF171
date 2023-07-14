// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import media files.
import MaintenanceModeSVG from 'assets/images/background/maintenance-mode.svg';

const MaintenanceMode = () => {
	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
				<Col
					xl={{ span: 5, offset: 1 }}
					lg={6}
					md={12}
					sm={12}
					className="text-center text-lg-start"
				>
					<h1 className="display-3 mb-2 fw-bold">
						Fixing a few things behind the scenes.
					</h1>
					<p className="mb-5 fs-4">
						We apologize for the inconvenience, but are performing some
						maintenance. You can still contact us at{' '}
						<Link to="#">admin@company.com</Link>. We’ll be back up soon
					</p>
					<hr className="my-5" />
					<div>
						{/*  notify form */}
						<h3 className="mb-3">Notify me when it’s ready.</h3>
						<Form>
							<Form.Group
								className="d-inline-flex justify-content-center justify-content-lg-start"
								controlId="formBasicEmail"
							>
								<Form.Control
									type="email"
									className="form-control mb-2 me-2"
									placeholder="Your e-mail..."
									required
								/>
								<Button type="submit" className="btn btn-primary mb-2">
									Subscribe
								</Button>
							</Form.Group>
						</Form>
					</div>
				</Col>
				{/*  image */}
				<Col
					xl={{ span: 5, offset: 1 }}
					lg={6}
					md={12}
					sm={12}
					className="mt-8 mt-lg-0"
				>
					<Image src={MaintenanceModeSVG} alt="" className="w-100" />
				</Col>
			</Row>
		</Fragment>
	);
};

export default MaintenanceMode;
