// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Card, Form, Button } from 'react-bootstrap';

const GoogleSetting = () => {
	const onChange = () => {
		console.log('onChange was called!');
	};

	return (
		<Fragment>
			<Row>
				<Col xl={{ offset: 3, span: 6 }} lg={{ offset: 2, span: 8 }} md={12}>
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 h2 font-weight-bold">Google Setting</h1>
									<Breadcrumb>
										<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
										<Breadcrumb.Item active>Google Setting</Breadcrumb.Item>
									</Breadcrumb>
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						{/* google settings */}
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">Google Settings</h4>
									<Form>
										<Form.Check
											type="checkbox"
											defaultChecked
											label=""
											className="form-switch"
											onChange={onChange}
										/>
									</Form>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												{/* Google Tracking ID */}
												<Form.Label>
													Google Analytics Tracking ID{' '}
													<small className="text-muted">
														(ex. UA-000000-2 )
													</small>
												</Form.Label>
												<Form.Control
													type="text"
													id="googleage"
													placeholder="UA-000000-2"
													required
												/>
											</Col>
										</Row>
										<Row>
											<Col lg={12} md={12}>
												<Button variant="primary" type="submit">
													Update Settings{' '}
												</Button>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						{/* end of google settings */}

						{/* twitter form */}
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">Google Map</h4>
									<Form>
										<Form.Check
											type="checkbox"
											label=""
											className=" form-switch"
											onChange={onChange}
										/>
									</Form>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												{/* Google Map API key */}
												<Form.Label>
													Goole Map API Key{' '}
													<span className="text-danger">*</span>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="trackingPage"
													placeholder="6LeJd8IUAAAAAFOR_aW-SO8wMASDSDFRuYT-zQDLnHC"
													required
												/>
											</Col>

											<Col lg={12} md={12} className="mb-3">
												{/* Map Latitude */}
												<Form.Label>
													Map Latitude:<span className="text-danger">*</span>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="latitudePage1"
													placeholder="e.g. 25.3500"
													required
												/>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Map Longitude */}
												<Form.Label>
													Map Longitude:<span className="text-danger">*</span>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="latitudePage2"
													placeholder="e.g. 74.6333"
													required
												/>
											</Col>
										</Row>
										<Row>
											<Col lg={12} md={12}>
												<Button variant="primary" type="submit">
													Update Settings{' '}
												</Button>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						{/* end of twitter form */}
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
};

export default GoogleSetting;
