// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Card, Form, Button } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiCog } from '@mdi/js';

const SocialLogin = () => {
	const onChange = () => {
		console.log('onChange was called!');
	};

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 font-weight-bold">
								Social Login Settings{' '}
							</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Settings</Breadcrumb.Item>
								<Breadcrumb.Item active>Social Login Settings</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
				</Col>
			</Row>

			{/* facebook form */}
			<Row>
				<Col xl={6} lg={12} md={12}>
					<Card className="mb-4">
						<Card.Header className="d-flex align-items-center justify-content-between">
							<h4 className="mb-0">
								<Icon path={mdiFacebook} size={1} color="#754ffe" /> Facebook
								Login Settings
							</h4>
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
										{/* App id */}
										<Form.Label>
											App ID <span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="facebookAppid"
											placeholder="26346567894578985"
											required
										/>
										<small className="text-muted">
											If you are not sure what is your APP ID, Please head over
											to <span className="text-primary">Getting Started.</span>
										</small>
									</Col>

									<Col lg={12} md={12} className="mb-3">
										{/* App Secret */}
										<Form.Label>
											App Secret<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerKey1"
											placeholder="WJYSy0+wRF3fOYBJq+AdyNvfzk0AzHikc89OSTW"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* App Login Redirect URL */}
										<Form.Label>
											Login Redirect URL<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerSecret1"
											placeholder="https://codescandy/geeks/demo/public/auth/facebook/callback"
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

				{/* twitter form */}
				<Col xl={6} lg={12} md={12}>
					<Card className="mb-4">
						<Card.Header className="d-flex align-items-center justify-content-between">
							<h4 className="mb-0">
								<Icon path={mdiTwitter} size={1} color="#754ffe" /> Twitter
								Login Settings
							</h4>
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
										{/* key */}
										<Form.Label>
											Consumer Key (API Key){' '}
											<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="facebookAppid"
											placeholder="26346567894578985"
											required
										/>
										<small className="text-muted">
											If you are not sure what is your APP ID, Please head over
											to <span className="text-primary">Getting Started.</span>
										</small>
									</Col>

									<Col lg={12} md={12} className="mb-3">
										{/* Secret key */}
										<Form.Label>
											Consumer Secret (Secret Key)
											<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerKey1"
											placeholder="WJYSy0+wRF3fOYBJq+AdyNvfzk0AzHikc89OSTW"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* URL */}
										<Form.Label>
											Login Redirect URL<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerSecret1"
											placeholder="https://codescandy/geeks/demo/public/auth/facebook/callback"
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

				{/* google  form */}
				<Col xl={6} lg={12} md={12}>
					<Card className="mb-4">
						<Card.Header className="d-flex align-items-center justify-content-between">
							<h4 className="mb-0">
								<Icon path={mdiCog} size={1} color="#754ffe" /> Google Login
								Settings
							</h4>
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
										{/* Client ID */}
										<Form.Label>
											Client ID <span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="facebookAppid"
											placeholder="26346567894578985"
											required
										/>
										<small className="text-muted">
											If you are not sure what is your APP ID, Please head over
											to <span className="text-primary">Getting Started.</span>
										</small>
									</Col>

									<Col lg={12} md={12} className="mb-3">
										{/* Key */}
										<Form.Label>
											Client Secret Key <span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerKey1"
											placeholder="WJYSy0+wRF3fOYBJq+AdyNvfzk0AzHikc89OSTW"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* URL */}
										<Form.Label>
											Login Redirect URL<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerSecret1"
											placeholder="https://codescandy/geeks/demo/public/auth/facebook/callback"
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
				{/* end of google form */}

				{/* linkedIn  form */}
				<Col xl={6} lg={12} md={12}>
					<Card className="mb-4">
						<Card.Header className="d-flex align-items-center justify-content-between">
							<h4 className="mb-0">
								<Icon path={mdiLinkedin} size={1} color="#754ffe" /> LinkedIn
								Login API Settings
							</h4>
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
										{/* Client ID  */}
										<Form.Label>
											Client ID <span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="facebookAppid"
											placeholder="26346567894578985"
											required
										/>
										<small className="text-muted">
											If you are not sure what is your APP ID, Please head over
											to <span className="text-primary">Getting Started.</span>
										</small>
									</Col>

									<Col lg={12} md={12} className="mb-3">
										{/* Key */}
										<Form.Label>
											Client Secret Key <span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerKey1"
											placeholder="WJYSy0+wRF3fOYBJq+AdyNvfzk0AzHikc89OSTW"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* URL */}
										<Form.Label>
											Login Redirect URL<span className="text-danger">*</span>{' '}
										</Form.Label>
										<Form.Control
											type="text"
											id="consumerSecret1"
											placeholder="https://codescandy/geeks/demo/public/auth/facebook/callback"
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
				{/* end of linkedIn form */}
			</Row>
		</Fragment>
	);
};

export default SocialLogin;
