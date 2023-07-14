// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import sub components
import ComparePlanPricingCard from './ComparePlanPricingCard';

// import data files
import ComparePlansData from 'data/marketing/compare-plans/ComparePlansData';

const PricingPlans = () => {
	return (
		<section className="py-14 bg-white">
			<Container>
				<Row>
					<Col lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }} xs={12}>
						{/* heading */}
						<div className=" text-center mb-8">
							<h1 className="display-3 mb-3 fw-bold">
								A plan for every projects
							</h1>
							<p className="lead px-md-14">
								Lorem Ipsum, giving information on its origins, as well as a
								random lipsum generator.
							</p>
						</div>
					</Col>
					{ComparePlansData.map((item, index) => {
						return (
							<Col lg={4} md={12} xs={12} key={index}>
								<ComparePlanPricingCard content={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};
export default PricingPlans;
