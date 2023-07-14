import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const GKStepper = (props) => {
	const { currentStep, steps } = props;
	return (
		<Fragment>
			{/* Page Content */}
			<div
				className="bs-stepper-header bg-transparent d-flex justify-content-between px-0"
				role="tablist"
			>
				{steps.map((step) => {
					return (
						<Fragment key={step.id}>
							<div
								className={`step ${step.id === currentStep ? 'active' : ''}`}
							>
								<Button bsPrefix="step-trigger d-block bg-transparent border-0">
									<span
										className={`stepper-circle bs-stepper-circle d-block ${
											steps.length === step.id ? '' : 'step-line'
										} `}
									>
										{step.id}
									</span>
									<span className="stepper-label">{step.title}</span>
								</Button>
							</div>
						</Fragment>
					);
				})}
			</div>

			{/* Showing content for active step */}
			<div className="stepper-content mt-5 ">
				{steps[currentStep - 1].content}
			</div>
		</Fragment>
	);
};

export default GKStepper;
