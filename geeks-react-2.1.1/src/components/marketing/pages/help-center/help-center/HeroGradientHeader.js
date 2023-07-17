// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Image, Form, Card } from 'react-bootstrap';

// import custom components
import FeatureTopIconWithLink from 'components/marketing/common/features/FeatureTopIconWithLink';

// import media files
import ThreeDGirlSeeting from 'assets/images/svg/3d-girl-seeting.svg';

// import data files
import HelpCenterFeaturesData from 'data/marketing/help-center/HelpCenterFeaturesData';

const HeroGradientHeader = () => {
	return (
		<Fragment>
			<section className="py-lg-15 py-10 bg-light">
				<Container>
					<Row className="align-items-center justify-content-center">
						<Col md={6} xs={12}>
							<h1 className="fw-bold mb-1 display-3">How can we help you?</h1>
							<p className="mb-5 text-dark ">
								Have questions? Search through our Help Center
							</p>
							<div className="pe-md-6">
								<Form className="d-flex align-items-center">
									<span className="position-absolute ps-3">
										<i className="fe fe-search text-muted"></i>
									</span>
									<Form.Control
										type="search"
										placeholder="Enter a question, topic or keyword"
										className="ps-6 border-0 py-3 smooth-shadow-md"
									/>
								</Form>
							</div>
							<span className=" mt-2 d-block">
								... or choose a category to quickly find the help you need
							</span>
						</Col>
						<Col md={6} xs={12}>
							<div className="d-flex align-items-center justify-content-end">
								<Image
									src={ThreeDGirlSeeting}
									alt=""
									className="text-center img-fluid"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="mt-n8">
				<Container>
					<Card className="rounded-3 shadow-sm">
						<Row>
							{HelpCenterFeaturesData.map((item, index) => {
								return (
									<Col
										md={4}
										xs={12}
										className={index === 0 ? '' : 'border-start-md'}
										key={index}
									>
										<FeatureTopIconWithLink
											item={item}
											className={
												HelpCenterFeaturesData.length - 1 === index
													? ''
													: 'border-bottom'
											}
										/>
									</Col>
								);
							})}
						</Row>
					</Card>
				</Container>
			</section>
		</Fragment>
	);
};
export default HeroGradientHeader;
