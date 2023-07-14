// import node module libraries
import React from 'react';
import { ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GKOdometer from 'components/elements/odometer/GKOdometer';

const PricingCard = ({ content, pricingMode }) => {
	let plan = content[0];

	return (
		<Card className="border-0 mb-3">
			<Card.Body className="p-0">
				<div className="p-5 text-center">
					<Image src={plan.image} alt="" className="mb-5" />
					<div className="mb-5">
						<h2 className="fw-bold">{plan.plantitle}</h2>
						<p
							className="mb-0"
							dangerouslySetInnerHTML={{ __html: plan.description }}
						></p>
					</div>
					<div className="d-flex justify-content-center mb-4">
						<span className="h3 mb-0 fw-bold">$</span>
						<GKOdometer value={pricingMode ? plan.yearly : plan.monthly} />
						<span className="align-self-end mb-1 ms-2 toggle-price-content">
							/{pricingMode ? 'Yearly' : 'Monthly'}
						</span>
					</div>
					<div className="d-grid">
						<Link
							to="#"
							className={`btn btn-${
								plan.buttonClass ? plan.buttonClass : 'outline-primary'
							}`}
						>
							{plan.buttonText}
						</Link>
					</div>
				</div>
				<hr className="m-0" />
				<div className="p-5">
					<h4 className="fw-bold mb-4">{plan.featureHeading}</h4>
					{/* List of features */}
					<ListGroup bsPrefix="list-unstyled ">
						{plan.features.map((item, index) => {
							return (
								<ListGroup.Item
									key={index}
									className="mb-1"
									bsPrefix="list-item"
								>
									<span className="text-success me-2">
										<i className="far fa-check-circle"></i>
									</span>
									<span
										dangerouslySetInnerHTML={{ __html: item.feature }}
									></span>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</div>
			</Card.Body>
		</Card>
	);
};

export default PricingCard;
