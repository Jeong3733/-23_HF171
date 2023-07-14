// import node module libraries
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

// import data files
import FAQsData from 'data/marketing/compare-plans/FAQsData';

const FAQs = () => {
	return (
		<section className="pb-14 pt-lg-8 bg-white">
			<Container>
				<Row>
					<Col xl={6} lg={10} xs={12}>
						<div className="mb-8 pe-8">
							{/* heading */}
							<h1 className="display-4 fw-bold mb-4">
								Frequently asked questions,
								<span className="text-primary"> answered.</span>
							</h1>
							{/* para */}
							<p className="fs-4">
								More questions? Visit the <Link to="#">Help Center.</Link>
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					{/* FAQs  */}
					{FAQsData.map((item, index) => {
						return (
							<Col md={6} xs={12} key={index}>
								<div className="mb-6 pe-lg-8">
									<h3 className="mb-2">{item.question}</h3>
									<p className="fs-4">{item.answer}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default FAQs;
