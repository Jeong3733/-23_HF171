// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Breadcrumb, Card, Form, Button } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

const GeneralSetting = () => {
	const currencies = [
		{ label: 'Select', value: '' },
		{ label: '₹ Indian', value: 'INR' },
		{ label: '$ USD', value: 'USD' },
		{ label: '€ Euro', value: 'Euro' },
		{ label: '£ British Pound', value: 'GBP' }
	];

	const languages = [
		{ label: 'Select', value: '' },
		{ label: 'English', value: 'English' },
		{ label: 'German', value: 'German' },
		{ label: 'Spanish', value: 'Spanish' },
		{ label: 'Hindi', value: 'Hindi' }
	];

	function onChangeInput(value) {
		console.log(value);
	}

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
						{/* general  settings */}
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">General Settings</h4>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												{/* Site Name */}
												<Form.Label>
													Site Name{' '}
													<small className="text-muted">
														(Enter your website name below)
													</small>
												</Form.Label>
												<Form.Control
													type="text"
													id="siteName"
													placeholder="Your Site"
													required
												/>
												<small>
													The site title might be the name of your company or
													organization, or a brief description of the
													organization, or a combination of the two.
												</small>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Site Description */}
												<Form.Label>
													Site Description{' '}
													<small className="text-muted">
														(Enter your website description below)
													</small>
												</Form.Label>
												<Form.Control
													as="textarea"
													rows={3}
													id="siteDescription"
													placeholder="Site Description"
												/>
												<small>
													The site title might be the name of your company or
													organization, or a brief description of the
													organization, or a combination of the two.
												</small>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Logo */}
												<Form.Label>Logo</Form.Label>
												<Form.Group className="mb-1 input-group">
													<Form.Control
														id="inputLogo"
														type="file"
														className="form-control"
													/>
													<Form.Label
														htmlFor="inputLogo"
														className="input-group-text mb-0"
													>
														Upload
													</Form.Label>
												</Form.Group>
												<small className="text-muted">
													(Upload your website logo - 120 x 40 )
												</small>
											</Col>
											<Col lg={12} md={12} className="mb-3">
												{/* Favicon */}
												<Form.Label>
													Favicon{' '}
													<small className="text-muted">
														(Upload your website favicon - Standard for most
														desktop browsers. 32×32)
													</small>
												</Form.Label>
												<Form.Group className="mb-1 input-group">
													<Form.Control
														id="inputfavicon"
														type="file"
														className="form-control"
													/>
													<Form.Label
														htmlFor="inputfavicon"
														className="input-group-text mb-0"
													>
														Upload
													</Form.Label>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Col lg={12} md={12}>
												{/* Button */}
												<Button variant="primary" type="submit">
													Update Settings{' '}
												</Button>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						{/* end of general settings */}

						{/* currency settings form */}
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">Currency Settings</h4>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												<FormSelect
													isMulti={false}
													onChange={onChangeInput}
													options={currencies}
												/>
											</Col>
										</Row>
										<Row>
											<Col lg={12} md={12}>
												{/* Button */}
												<Button variant="primary" type="submit">
													Update Settings{' '}
												</Button>
											</Col>
										</Row>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						{/* end of currency settings form form */}

						{/* language settings form */}
						<Col xl={12} lg={12} md={12}>
							<Card className="mb-4">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h4 className="mb-0">Language Settings</h4>
								</Card.Header>
								<Card.Body>
									<Form>
										<Row>
											<Col lg={12} md={12} className="mb-3">
												<FormSelect
													isMulti={false}
													onChange={onChangeInput}
													options={languages}
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
						{/* end of language settings form form */}
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
};

export default GeneralSetting;
