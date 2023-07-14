// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form } from 'react-bootstrap';

// import hooks
import useToggle from 'hooks/useToggle';

// import sub components
import SimplePricingCard from './SimplePricingCard';

// import data files
import { free, pro } from 'data/marketing/landing-sass/SimplePricingPlansData';

const SimplePricingPlans = () => {
	const [Pricing, togglePricing] = useToggle(true);

	return (
		<Fragment>
			<Row>
				<Col
					xl={{ offset: 2, span: 8 }}
					lg={{ offset: 1, span: 10 }}
					md={12}
					xs={12}
				>
					{/* pricing */}
					<div className="mb-8 text-center">
						<h2 className="display-4 mb-3 fw-bold">
							Simple plans for everyone
						</h2>
						<p className="lead mb-4">
							Everything you need to design like a professional. Boost you and
							your team s creativity and supercharge your productivity with
							Geeks UI Pro.
						</p>
						{/* Switch Toggle */}
						<div
							id="pricing-switch-second"
							className="d-flex justify-content-center align-items-center"
						>
							<span className="fs-4 fw-semi-bold me-2">Pay Monthly</span>
							<Form>
								<Form.Check
									name="radios"
									type="checkbox"
									className="form-switch form-switch-price"
									id="pricingSwitch"
									checked={Pricing}
									onChange={togglePricing}
								/>
							</Form>
							<span className="fs-4 fw-semi-bold ms-2"> Pay Yearly</span>
						</div>
					</div>
					<Row>
						<Col lg={6} md={6} xs={12}>
							<SimplePricingCard content={free} pricingMode={Pricing} />
						</Col>
						<Col lg={6} md={6} xs={12}>
							<SimplePricingCard content={pro} pricingMode={Pricing} />
						</Col>
					</Row>
				</Col>
			</Row>

			{/* small cta  */}
			<Row className="text-center mt-8">
				<Col lg={{ offset: 3, span: 6 }} md={12} xs={12}>
					<h2>Need a custom plan for your company?</h2>
					<p className="fs-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
						scelerisque morbi lobortis{' '}
						<Link to="/" target="_blank">
							contact us
						</Link>
						.
					</p>
				</Col>
			</Row>
		</Fragment>
	);
};

export default SimplePricingPlans;
