// import node module libraries
import { Col, Row } from 'react-bootstrap';

const HeroContent = () => {
	return (
		<Row>
			<Col lg={{ span: 8, offset: 2 }} md={12} sm={12} className="mb-12">
				{/* caption */}
				<h1 className="display-2 fw-bold mb-3">
					Hi there, we’re <span className="text-primary">Geeks</span>
				</h1>
				{/* para  */}
				<p className="h2 mb-3 ">
					We’re building the best next-generation interactive bootstrap based UI
					Kit design tool for developers, engineers, Full-Stack developer, and
					digital agency.
				</p>
				<p className="mb-0 h4 text-body lh-lg">
					Geeks provide clean and consistent page designs to help you to create
					beautiful looking contents. Geek is feature-rich components and
					beautifully designed pages that help you create the best possible
					website and web application projects.
				</p>
			</Col>
		</Row>
	);
};
export default HeroContent;
