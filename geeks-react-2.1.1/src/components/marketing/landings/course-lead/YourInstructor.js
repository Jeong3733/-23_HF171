// import node module libraries
import { Container, Image, Row, Col } from 'react-bootstrap';

// import media files
import InstructorImage from 'assets/images/instructor/instructor-img.png';

const YourInstructor = () => {
	return (
		<section className="py-8 py-lg-18 bg-white">
			<Container>
				<Row className="mb-6 align-items-center justify-content-center">
					<Col md={10}>
						<Row className="align-items-center ">
							<Col
								xl={6}
								md={12}
								sm={12}
								lg={7}
								className="text-center text-lg-start order-1 "
							>
								{/*  caption  */}
								<span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
									YOUR INSTRUCTOR
								</span>
								<h2 className="mb-2 display-4 fw-bold mb-3">
									Hi, I’m <span className="text-primary">James Davies</span>,
									<br />I will be taking you through lessons.
								</h2>
								<p className="fs-3 pe-6">
									Create beautiful website with this Geeks UI template. Get
									started building a site today.
								</p>
								<hr className="my-5" />
								{/*  Counter  */}
								<Row>
									<Col className="col-sm mb-3 mb-lg-0">
										<h2 className="h1 fw-bold mb-0 ls-xs">45</h2>
										<p className="mb-0">Lessons</p>
									</Col>
									<Col lg={5} className="col-sm mb-3 mb-lg-0">
										<h2 className="h1 fw-bold mb-0 ls-xs">10,500+</h2>
										<p className="mb-0">Students</p>
									</Col>
									<Col className="col-sm mb-3 mb-lg-0">
										<h2 className="h1 fw-bold mb-0 ls-xs">12+</h2>
										<p className="mb-0">Learning Hours</p>
									</Col>
								</Row>
							</Col>
							{/*  Img  */}
							<Col
								xl={{ span: 5, offset: 1 }}
								md={12}
								sm={12}
								lg={{ span: 5, order: 2 }}
								className="mb-6 mb-lg-0 text-center "
							>
								<Image src={InstructorImage} alt="" className="img-fluid" />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default YourInstructor;
