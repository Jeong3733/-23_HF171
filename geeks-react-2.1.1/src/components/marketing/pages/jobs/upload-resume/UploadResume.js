// import node module libraries
import { useState, useEffect } from 'react';
import { Image, Col, Row, Container, Card, ListGroup } from 'react-bootstrap';

// import custom components
import GKStepper from 'components/elements/stepper/GKStepper2';

// import sub components ( Steps )
import BasicDetails from './steps/BasicDetails';
import Employment from './steps/Employment';
import Education from './steps/Education';
import Job from './steps/Job';

// import MDI icons
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

// import media files
import JobGraphics from 'assets/images/job/job-graphics.svg';

const UploadResume = () => {
	useEffect(() => {
		document.body.classList.add('bg-white');
	});
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState();
	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
		console.log(formData);
	};
	const next = () => {
		setCurrentStep(currentStep === 4 ? 1 : currentStep + 1);
	};
	const previous = () => {
		setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
	};

	const steps = [
		{
			id: 1,
			title: 'Basic Details',
			content: (
				<BasicDetails data={formData} handleChange={handleChange} next={next} />
			)
		},
		{
			id: 2,
			title: 'Employment',
			content: (
				<Employment
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		},
		{
			id: 3,
			title: 'Education',
			content: (
				<Education
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		},
		{
			id: 4,
			title: 'Job',
			content: (
				<Job
					data={formData}
					handleChange={handleChange}
					next={next}
					previous={previous}
				/>
			)
		}
	];

	return (
		<section className="py-6 py-lg-12 ">
			<Container>
				<Row>
					<Col lg={{ span: 7, offset: 1 }} xs={12}>
						{/* Content */}
						<div className="mb-10">
							<h1 className="mb-3 display-4 fw-bold">
								Find a Job & grow your career
							</h1>
							<p className="mb-0 lead pe-lg-10 ">
								Build your profile and let recruiters find you. Get job postings
								delivered right to your email.
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={{ span: 10, offset: 1 }} xs={12}>
						<Row>
							<Col md={8} xs={12}>
								<div id="stepperForm" className="bs-stepper">
									<Row>
										<div>
											{/* Stepper Button and content */}
											<GKStepper currentStep={currentStep} steps={steps} />
										</div>
									</Row>
								</div>
							</Col>
							<Col md={4} xs={12}>
								{/* card */}
								<Card className="bg-light shadow-none">
									{/* card  body */}
									<Card.Body className="p-5">
										<div className="mb-4">
											<Image src={JobGraphics} alt="" />
										</div>
										<h3 className="mb-3">On registering you can</h3>
										<ListGroup
											bsPrefix="list-unstyled"
											as="ul"
											className="text-dark mb-0"
										>
											<ListGroup.Item
												as="li"
												bsPrefix=" "
												className="d-flex align-items-start mb-3"
											>
												<Icon
													path={mdiCheckCircle}
													className="text-success me-2"
													size={0.7}
												/>{' '}
												Build your profile and let recruiters find you.
											</ListGroup.Item>
											<ListGroup.Item
												as="li"
												bsPrefix=" "
												className="d-flex align-items-start mb-3"
											>
												<Icon
													path={mdiCheckCircle}
													className="text-success me-2"
													size={0.7}
												/>{' '}
												Build your profile and let recruiters find you.
											</ListGroup.Item>
											<ListGroup.Item
												as="li"
												bsPrefix=" "
												className="d-flex align-items-start mb-3"
											>
												<Icon
													path={mdiCheckCircle}
													className="text-success me-2"
													size={0.7}
												/>{' '}
												Find a Job & grow your career
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default UploadResume;
