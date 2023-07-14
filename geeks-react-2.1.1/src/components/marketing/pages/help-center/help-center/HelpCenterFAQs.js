// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import GKAccordionBox from 'components/marketing/common/accordions/GKAccordionBox';

// import data files
import { MostAskedFAQs } from 'data/marketing/help-center/HelpCenterFAQsData';

const HelpCenterFAQs = () => {
	return (
		<section className="py-lg-16 py-10">
			<Container>
				<Row>
					<Col lg={{ offset: 2, span: 6 }} xs={12}>
						<div className="mb-8 pe-lg-14">
							<h2 className="pe-lg-12 mb-4 h1 fw-semi-bold">
								Most frequently asked questions
							</h2>
							<p className="lead">
								Here are the most frequently asked questions you may check
								before getting started
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={{ offset: 2, span: 8 }} xs={12}>
						<GKAccordionBox accordionItems={MostAskedFAQs} itemClass="px-0" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HelpCenterFAQs;
