// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

const CTADarkBG = ({ title, subtitle, description, btntext, btnlink }) => {
	return (
		<section className="py-14 bg-dark">
			<Container>
				<Row>
					<Col
						lg={{ span: 8, offset: 2 }}
						md={12}
						xs={12}
						className="text-center"
					>
						<span className="fs-4 text-warning ls-md text-uppercase fw-semi-bold">
							{subtitle}
						</span>
						{/* heading  */}
						<h2 className="display-3 mt-4 mb-3 text-white fw-bold">{title}</h2>
						{/* para  */}
						<p className="lead text-white-50 px-lg- 8 mb-6">{description}.</p>
						<Link to={btnlink} className="btn btn-primary">
							{btntext}
						</Link>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default CTADarkBG;
