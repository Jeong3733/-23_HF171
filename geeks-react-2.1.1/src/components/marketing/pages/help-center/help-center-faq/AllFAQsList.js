// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import GKAccordionBox from 'components/marketing/common/accordions/GKAccordionBox';

// import data files
import {
	MostAskedFAQs,
	GeneralInquiriesFAQs,
	SupportFAQs
} from 'data/marketing/help-center/HelpCenterFAQsData';

const AllFAQsList = () => {
	return (
		<section className="py-10">
			<Container>
				{/* most asked faqs accordion  */}
				<Row>
					<Col md={{ offset: 2, span: 8 }} xs={12}>
						<div className="mb-4">
							<h2 className="mb-0 fw-semi-bold">Most asked</h2>
						</div>
						<GKAccordionBox accordionItems={MostAskedFAQs} itemClass="px-0" />
					</Col>
				</Row>

				{/* general inquiries faqs accordion  */}
				<Row>
					<Col md={{ offset: 2, span: 8 }} xs={12}>
						<div className="mb-4 mt-6">
							<h2 className="mb-0 fw-semi-bold">General inquiries</h2>
						</div>
						<GKAccordionBox
							accordionItems={GeneralInquiriesFAQs}
							itemClass="px-0"
						/>
					</Col>
				</Row>

				{/* support faqs accordion  */}
				<Row>
					<Col md={{ offset: 2, span: 8 }} xs={12}>
						<div className="mb-4 mt-6">
							<h2 className="mb-0 fw-semi-bold">Support</h2>
						</div>
						<GKAccordionBox accordionItems={SupportFAQs} itemClass="px-0" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AllFAQsList;
