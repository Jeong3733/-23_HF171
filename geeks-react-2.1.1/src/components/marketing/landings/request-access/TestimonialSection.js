// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import custom components
import SectionHeadingLeft2 from 'components/marketing/common/section-headings/SectionHeadingLeft2';
import TestimonialsSlider2 from 'components/marketing/common/testimonials/TestimonialsSlider2';

const TestimonialSection = () => {
	return (
		<section className="pb-16 bg-white">
			<Container>
				<Row>
					<Col xl={{ offset: 2, span: 8 }} sm={12}>
						<Row className="mb-8">
							<Col lg={9} md={12} sm={12} className="mb-8">
								<SectionHeadingLeft2
									title="The developers loves. Says"
									description="Optimized for a great developer experience."
								/>
							</Col>
							<Col md={12} sm={12}>
								<TestimonialsSlider2 />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default TestimonialSection;
