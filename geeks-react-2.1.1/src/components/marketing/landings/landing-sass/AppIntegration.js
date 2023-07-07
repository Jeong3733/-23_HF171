// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container, Image, Card } from 'react-bootstrap';

// import custom components
import SectionHeadingDarkCenter from 'components/marketing/common/section-headings/SectionHeadingDarkCenter';

// import data files
import AppIntegrationData from 'data/marketing/landing-sass/AppIntegrationData';

const AppIntegration = () => {
	const title = 'Integrate with the Apps';
	const subtitle = 'App Integration Sections';
	const description = `Build on your workflow with apps that integrate with Geeks UI.`;

	return (
		<section className="py-lg-14 py-8 bg-gray-200">
			<Container>
				<Row className="justify-content-center">
					<Col lg={6} md={12} xs={12}>
						<SectionHeadingDarkCenter
							title={title}
							description={description}
							subtitle={subtitle}
							dark={false}
						/>
					</Col>
				</Row>
				<Row>
					{AppIntegrationData.map((item, index) => {
						return (
							<Col xl={2} md={4} xs={6} className="mb-3 mb-xl-0" key={index}>
								<Card className="h-100">
									<Card.Body>
										<Image src={item.applogo} alt="" className="icon-lg mb-3" />
										<h3>{item.appname}</h3>
										<p className="mb-0">{item.content}</p>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
				<Row>
					{/* button  */}
					<Col xs={12} className="text-center mt-8">
						<Link to="#" className="btn btn-primary">
							View All Apps
						</Link>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default AppIntegration;
