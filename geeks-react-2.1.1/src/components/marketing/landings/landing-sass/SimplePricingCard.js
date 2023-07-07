// import node module libraries
import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GKOdometer from 'components/elements/odometer/GKOdometer';

const SimplePricingCard = ({ content, pricingMode }) => {
	let plan = content[0];

	const handlerPricingMode = () => {
		if (pricingMode) {
			return plan.yearly > 0 ? (
				<span className="align-self-end mb-1 ms-2 toggle-price-content-second">
					/y
				</span>
			) : (
				''
			);
		} else {
			return plan.monthly > 0 ? (
				<span className="align-self-end mb-1 ms-2 toggle-price-content-second">
					/mo
				</span>
			) : (
				''
			);
		}
	};

	return (
		<Card className="shadow-none border mb-3">
			{/* Card body */}
			<div className="p-5">
				<div className="mb-5">
					<h4 className="fw-bold text-uppercase ls-md mb-4">
						{plan.plantitle}
					</h4>
					<div className="d-flex mb-4">
						<span className="h3 mb-0 fw-bold">$</span>
						<GKOdometer value={pricingMode ? plan.yearly : plan.monthly} />
						{handlerPricingMode()}
					</div>
				</div>
				{/* button  */}
				<Link
					to="#"
					className={`btn btn-block btn-${
						plan.buttonClass ? plan.buttonClass : 'outline-primary'
					}`}
				>
					{plan.buttonText}
				</Link>
				<div className="px-2 mt-6">
					{/* List of features */}
					<ListGroup bsPrefix="list-unstyled ">
						{plan.features.map((item, index) => {
							return (
								<ListGroup.Item
									key={index}
									className="mb-1"
									bsPrefix="list-item mb-3 d-flex align-items-center"
								>
									<i
										className={`fe fe-${
											item.active ? 'check text-success' : 'x'
										} me-2`}
									></i>
									<span
										dangerouslySetInnerHTML={{ __html: item.feature }}
									></span>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</div>
			</div>
		</Card>
	);
};

export default SimplePricingCard;
