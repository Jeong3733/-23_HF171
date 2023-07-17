// import node module libraries
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import custom components
import { AvatarGroup, Avatar } from 'components/elements/bootstrap/Avatar';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';

const BecomeInstructor = () => {
	return (
		<Container>
			<Row className="mb-4 justify-content-center">
				<Col lg={11} md={12}>
					<Row className="align-items-center">
						<Col md={12} sm={12} className="mb-4">
							<AvatarGroup className="me-5">
								<Avatar
									size="lg"
									src={Avatar1}
									type="image"
									className="rounded-circle"
								/>
								<Avatar
									size="lg"
									src={Avatar2}
									type="image"
									className="rounded-circle"
								/>
								<Avatar
									size="lg"
									src={Avatar3}
									type="image"
									className="rounded-circle"
								/>
								<Avatar
									size="lg"
									src={Avatar4}
									type="image"
									className="rounded-circle"
								/>
								<Avatar
									size="lg"
									type="initial"
									name="1M+"
									variant="danger"
									className="rounded-circle fs-5 fw-bold"
									showExact
								/>
							</AvatarGroup>
						</Col>
						{/* heading */}
						<Col lg={4} md={5} sm={12} className="mb-6">
							<h1 className="display-3 fw-bold">Become an Instructor</h1>
						</Col>
						<Col lg={{ span: 6, offset: 1 }} md={7} sm={12} className="mb-6">
							{/* para */}
							<p className="lead">
								Top instructors from around the world teach millions of students
								on Geeks. We provide the tools and skills to teach what you love
							</p>
						</Col>
					</Row>
					{/* row */}
					<Row>
						<Col lg={4} md={4} sm={12} className="mb-3">
							{/* text */}
							<h3 className="fw-semi-bold mb-2">Earn money</h3>
							<p className="fs-4">
								Earn money every time a student purchases your course. Get paid
								monthly through <span className="text-dark">Paypal </span>or{' '}
								<span className="text-dark">Payoneer</span>.
							</p>
						</Col>
						<Col lg={4} md={4} sm={12} className="mb-3">
							{/* text */}
							<h3 className="fw-semi-bold mb-2">Inspire students</h3>
							<p className="fs-4">
								Help people learn new skills, advance their careers, and explore
								their hobbies by sharing your knowledge.
							</p>
						</Col>
						<Col lg={4} md={4} sm={12} className="mb-3">
							{/* text */}
							<h3 className="fw-semi-bold mb-2">Join our community</h3>
							<p className="fs-4">
								Take advantage of our active community of instructors to help
								you through your course creation process.
							</p>
						</Col>
						{/* btn */}
						<Col md={12} className="mt-3">
							<Link to="#" className="btn btn-primary">
								{' '}
								Start Teaching Today
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default BecomeInstructor;
