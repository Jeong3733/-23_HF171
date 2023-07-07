// import node module libraries
import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ComparePlanPricingCard = ({ content }) => {
	let plan = content;

	const PlanPricing = (price) => {
		if (price === 0) {
			return <h1 className="mb-3 fw-bold mt-5">It's Free</h1>;
		} else {
			return (
				<h1 className="mb-3 fw-bold mt-5">
					${price} <span className="fs-5 text-muted fw-normal">/Monthly</span>
				</h1>
			);
		}
	};
	return (
		<Card className="mb-3 border shadow-none border-top-0">
			<div
				className={`border-top border-6 rounded-3 border-dark-${plan.borderColor}`}
			>
				{/* Card body */}
				<div className="p-5">
					<div className="mb-5">
						<h3 className="fw-bold">{plan.plantitle}</h3>
						<p
							className="mb-0"
							dangerouslySetInnerHTML={{ __html: plan.description }}
						></p>
						{PlanPricing(plan.monthly)}
						<Link
							to="#"
							className={`btn btn-${
								plan.buttonClass ? plan.buttonClass : 'outline-primary'
							}`}
						>
							{plan.buttonText}
						</Link>
					</div>
					<hr className="m-0" />
					<div className="mt-5">
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
				</div>
			</div>
		</Card>
	);
};

export default ComparePlanPricingCard;
