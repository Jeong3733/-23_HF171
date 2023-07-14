// Section : Hero
// Style : Call To Action

// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import media files
import BottomImage from 'assets/images/hero/hero-img.png';

const CTAButton = () => {
	return (
		<section className="bg-primary">
			<Container>
				<Row className="align-items-center g-0">
					<Col xl={6} lg={6} md={12} sm={12}>
						{/* Heading */}
						<div className="pt-6 pt-lg-0">
							<h1 className="text-white display-4 fw-bold pe-lg-8">
								Join the Geeks team & shape the future of design
							</h1>
							<p className="text-white-50 mb-4 lead">
								If you’re passionate and ready to dive in, we’d love to meet
								you. We’re committed to supporting our employee professional
								development and well-being.
							</p>
							{/*Button */}
							<Link to="#" className="btn btn-dark">
								View opportunities
							</Link>
						</div>
					</Col>
					{/* Image */}
					<Col
						xl={6}
						lg={6}
						md={12}
						sm={12}
						className="text-lg-end text-center pt-6"
					>
						<Image src={BottomImage} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CTAButton;
