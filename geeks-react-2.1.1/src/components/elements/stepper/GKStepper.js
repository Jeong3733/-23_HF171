// import node module libraries
import { Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GKStepper = (props) => {
	const { currentStep, steps } = props;

	return (
		<section className="pb-12">
			<Container>
				<div className="stepper">
					<Row>
						<Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
							<div className="stepper">
								{/* Generating header for stepper */}
								<div className="stepper-header shadow-sm">
									{steps.map((step, index) => {
										return (
											<Fragment key={step.id}>
												<div
													className={`step ${
														step.id === currentStep ? 'active' : ''
													}`}
												>
													<Button bsPrefix="step-trigger">
														<span className="stepper-circle">{step.id}</span>
														<span className="stepper-label">{step.title}</span>
													</Button>
												</div>
												{steps.length > step.id ? (
													<div className="stepper-line"></div>
												) : (
													''
												)}
											</Fragment>
										);
									})}
								</div>

								{/* Showing content for active step */}

								<div className="stepper-content mt-5 ">
									<div className="stepper-pane fade active">
										{steps[currentStep - 1].content}
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default GKStepper;
