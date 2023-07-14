// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import FeatureTopIconWithLink from 'components/marketing/common/features/FeatureTopIconWithLink';

// import data files
import HelpCenterContactData from 'data/marketing/help-center/HelpCenterContactData';

const ContactSupportSection = () => {
	return (
		<section className="pb-lg-16 pb-10">
			<Container>
				<Row>
					<Col lg={{ offset: 2, span: 4 }} xs={12}>
						<div className="mb-8">
							<h2 className="mb-0 h1 fw-semi-bold">
								Can't find what you're looking for?
							</h2>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={{ offset: 2, span: 8 }} xs={12}>
						<Row>
							{HelpCenterContactData.map((item, index) => {
								return (
									<Col md={6} xs={12} key={index}>
										<FeatureTopIconWithLink
											item={item}
											isCard
											isButton
											buttonVariant={
												index === 0 ? 'primary' : 'outline-secondary'
											}
										/>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default ContactSupportSection;
