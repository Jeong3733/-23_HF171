// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import media files
import CTAInstructor from 'assets/images/png/cta-instructor-1.png';
import Dollor from 'assets/images/svg/dollor.svg';
import Graph from 'assets/images/svg/graph.svg';

const BecomeAnInstructor = () => {
	return (
		<section className="py-lg-14 pb-8 bg-white">
			<Container className="bg-primary rounded-3">
				<Row className="align-items-center">
					<Col lg={6} xs={12} className="d-none d-lg-block">
						<div className="d-flex justify-content-center ">
							<div className="position-relative">
								<img src={CTAInstructor} alt="" className="img-fluid mt-n13" />
								<div className="ms-n12 position-absolute bottom-0 start-0 mb-6">
									<img src={Dollor} alt="" />
								</div>
								<div className="me-n4 position-absolute top-0 end-0">
									<img src={Graph} alt="" />
								</div>
							</div>
						</div>
					</Col>
					<Col lg={5} xs={12}>
						<div className="text-white p-5 p-lg-0">
							<h2 className="h1 text-white">Become an instructor today</h2>
							<p className="mb-0">
								Instructors from around the world teach millions of students on
								Geeks. We provide the tools and skills to teach what you love.
							</p>
							<Link to="#" className="btn btn-white mt-4">
								Start Teaching Today
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default BecomeAnInstructor;
