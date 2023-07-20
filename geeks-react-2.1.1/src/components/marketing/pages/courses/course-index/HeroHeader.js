// Section : Hero Header
// Style : Welcome Text on left and image on right

// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import media files
import HeroImage from 'assets/images/hero/hero-img.png';

const HeroHeader = () => {
	return (
		<section className="bg-primary">
			<Container>
				{/*  Hero Section  */}
				<Row className="align-items-center g-0">
					<Col xl={5} lg={6} md={12}>
						<div className="py-5 py-lg-0">
							<h1 className="text-white display-4 fw-bold">
								Welcome to TaekGwan Company
							</h1>
							<p className="text-white-50 mb-4 lead">
								Hand-picked Instructor and expertly crafted courses, designed
								for the modern students and entrepreneur.
							</p>
							<Link
								to="/explore"
								className="btn btn-dark"
							>
								공모전 둘러보기
							</Link>{' '}
							<Link to="/authentication/sign-in/" className="btn btn-white">
								무슨 버튼일까요? 🧐
							</Link>
						</div>
					</Col>
					<Col xl={7} lg={6} md={12} className="text-lg-end text-center">
						<Image src={HeroImage} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HeroHeader;
