// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Card, Form, Button } from 'react-bootstrap';

const SocialSetting = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={{ offset: 3, span: 6 }} lg={{ offset: 2, span: 8 }} md={12}>
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 h2 font-weight-bold">Social Network</h1>
									<Breadcrumb>
										<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
										<Breadcrumb.Item active>Social Setting</Breadcrumb.Item>
									</Breadcrumb>
								</div>
							</div>
						</Col>
					</Row>

					{/* facebook form */}
					<Row>
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">Social Network</h4>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												{/* Facebook */}
												<Form.Label>
													Facebook Page ID{' '}
													<small className="text-muted">
														(ex. https://www.facebook.com/geeksuidesign)
													</small>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="facebookPage"
													placeholder="geeksuidesign"
													required
												/>
											</Col>

											<Col lg={12} md={12} className="mb-3">
												{/* Twitter */}
												<Form.Label>
													Twitter Username{' '}
													<small className="text-muted">
														(Enter your website description below){' '}
													</small>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="twitterPage"
													placeholder="geeksuidesign"
													required
												/>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Youtube */}
												<Form.Label>
													YouTube Channel Name{' '}
													<small className="text-muted">
														(ex. https://www.youtube.com/geeksuidesign)
													</small>
												</Form.Label>
												<Form.Control
													type="text"
													id="youtubePage"
													placeholder="geeksuidesign"
													required
												/>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Instagram */}
												<Form.Label>
													Instagram Username{' '}
													<small className="text-muted">
														(ex.https://www.instagram.com/geeksuidesign)
													</small>{' '}
												</Form.Label>
												<Form.Control
													type="text"
													id="instaPage"
													placeholder="geeksuidesign"
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
						{/* end of facebook form */}
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
};

export default SocialSetting;
