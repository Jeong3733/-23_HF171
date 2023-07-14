// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

const Collage = () => {
	return (
		<section className="pt-5 bg-white">
			<Container fluid className="px-md-5">
				<Row>
					<Col lg={6} xs={12} className="d-none d-lg-block ">
						<Row>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-20rem"
									style={{ backgroundImage: `url(${Avatar1})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Avatar3})` }}
								></div>
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-16rem"
									style={{ backgroundImage: `url(${Avatar2})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-17rem"
									style={{ backgroundImage: `url(${Avatar4})` }}
								></div>
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-20rem"
									style={{ backgroundImage: `url(${Avatar5})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-19rem"
									style={{ backgroundImage: `url(${Avatar7})` }}
								></div>
							</Col>
						</Row>
					</Col>
					<Col lg={6} xs={12}>
						<Row>
							<Col lg={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-14rem"
									style={{ backgroundImage: `url(${Avatar6})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-22rem"
									style={{ backgroundImage: `url(${Avatar8})` }}
								></div>
							</Col>
							<Col lg={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2  h-22rem"
									style={{ backgroundImage: `url(${Avatar10})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2  h-24rem"
									style={{ backgroundImage: `url(${Avatar11})` }}
								></div>
							</Col>
							<Col lg={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2  h-14rem"
									style={{ backgroundImage: `url(${Avatar12})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2  h-16rem"
									style={{ backgroundImage: `url(${Avatar13})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2  h-20rem"
									style={{ backgroundImage: `url(${Avatar14})` }}
								></div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Collage;
