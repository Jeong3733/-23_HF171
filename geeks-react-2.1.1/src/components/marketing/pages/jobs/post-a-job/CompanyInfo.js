// import node module libraries
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Col, Row, Form, Button, InputGroup } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';

const CompanyInfo = () => {
	const [industry, setIndustry] = useState('');
	const industries = [
		{ value: 'Web Designer', label: 'Web Designer' },
		{ value: 'Front End Developer', label: 'Front End Developer' },
		{ value: 'Software Engineer', label: 'Software Engineer' }
	];
	const initialValue = `<p>Insert company description</p>
                        <p><br /></p>        
                        <p>Some initial <strong>bold</strong> text</p>
                        <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

	return (
		<Row>
			<Col lg={4} md={4} xs={12}>
				<div className="mb-4">
					<div className="mb-4">
						{/* icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							fill="currentColor"
							className="bi bi-building
                            text-primary"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M14.763.075A.5.5 0 0 1 15
                              .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0
                              1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0
                              1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0
                              1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1
                              10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1
                              .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
							/>
							<path
								d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2
                                2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2
                                0h1v1h-1V9zm-2 2h1v1H8v-1zm2
                                0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8
                                7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8
                                5h1v1H8V5zm2 0h1v1h-1V5zm2
                                0h1v1h-1V5zm0-2h1v1h-1V3z"
							/>
						</svg>
					</div>
					{/* heading */}
					<h3>3. Company information</h3>
					{/* text */}
					<p>
						Morbi nec augue tincidun olestie diam at pulvinar mcongue fermentum.
					</p>
				</div>
			</Col>
			<Col lg={{ span: 7, offset: 1 }} md={8} xs={12}>
				<div>
					<Row>
						<Col xs={12} className="mb-3">
							{/* Company name */}
							<Form.Label htmlFor="company-name">
								Company name<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="company-name"
								placeholder="Company name"
								required
							/>
						</Col>
						<Col xs={12} className="mb-3">
							{/* Company website */}
							<Form.Label htmlFor="company-website">
								Company website<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								type="text"
								id="company-website"
								placeholder="Company website"
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Company industry */}
							<Form.Label htmlFor="department">
								Company industry<span className="text-danger">*</span>
							</Form.Label>
							<Form.Control
								as={FormSelect}
								options={industries}
								placeholder="Select industry"
								defaultselected=""
								value={industry}
								onChange={(e) => setIndustry(e.target.value)}
								required
							/>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Company Logo */}
							<Form.Label>Company Logo</Form.Label>
							<InputGroup className="mb-2">
								<Form.Control id="company-logo" type="file" />
								<Form.Label
									htmlFor="company-logo"
									className="input-group-text mb-0"
								>
									Upload
								</Form.Label>
							</InputGroup>
							<Form.Text className="fs-6">
								Company logo should be a PNG or JPG file of 500 x 500 pixels
							</Form.Text>
						</Col>
						<Col md={12} xs={12} className="mb-3">
							{/* Company description */}
							<Form.Label>Company description</Form.Label>
							<ReactQuillEditor
								initialValue={initialValue}
								id="company-description"
								name="company-description"
							/>
						</Col>
						<Col md={12} xs={12} className="mb-5">
							{/* confirmation chechbox */}
							<Form.Check type="checkbox" id="tnd-accept">
								<Form.Check.Input type="checkbox" />
								<Form.Check.Label>
									I accept the{' '}
									<Link to="/marketing/specialty/terms-and-conditions/">
										terms and conditions
									</Link>{' '}
									for the upload a job listing at company.
								</Form.Check.Label>
							</Form.Check>
						</Col>
						<Col md={12} xs={12}>
							<Button variant="primary">Submit for Approval</Button>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default CompanyInfo;
