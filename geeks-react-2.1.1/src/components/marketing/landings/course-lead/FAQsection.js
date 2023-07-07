// import node module libraries
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import custom components
import GKAccordionPlus from 'components/marketing/common/accordions/GKAccordionPlus';
import SectionHeadingCenter from 'components/marketing/common/section-headings/SectionHeadingCenter';

// import data files
import { FAQList } from 'data/marketing/LeadCourseData';

const FAQsection = () => {
	const title = 'Frequently Asked Questions.';
	const subtitle = 'Need to Know';
	const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.`;

	return (
		<section className="py-8 py-lg-18 bg-white">
			<Container>
				<SectionHeadingCenter
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<Row className="justify-content-center">
					<Col lg={6} md={8} sm={12}>
						<GKAccordionPlus accordionItems={FAQList} itemClass="px-0" />
					</Col>
				</Row>
				<div className="mt-10 text-center">
					<Link to="#" className="btn btn-outline-primary">
						More questions? Visit the Learner Help Center.
					</Link>
				</div>
			</Container>
		</section>
	);
};
export default FAQsection;
