// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

// import media files
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar13 from 'assets/images/avatar/avatar-13.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

const HeroCollage = () => {
	return (
		<section className="py-md-14 py-8 bg-white">
			<Container>
				<Row className="align-items-center">
					<Col xl={6} lg={6} xs={12}>
						<div className="mb-5  ">
							<h1 className="display-3 mb-4 fw-bold ">
								Join the team, we’re growing fast!
							</h1>
							<p className="lead mb-4 pe-xl-12 ">
								We’re looking for incredible people to build on our strong
								momentum. Help us power the brands you know and love.
							</p>
							<Link to="#position" className="btn btn-primary ">
								See All Open Positions
							</Link>
							<p className=" mt-4 mb-0">
								69 open positions across and <Link to="#">all offices</Link> and{' '}
								<Link to="#">all teams</Link>.
							</p>
						</div>
					</Col>
					<Col lg={6} xs={12}>
						<Row>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-12rem"
									style={{ backgroundImage: `url(${Avatar6})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Avatar8})` }}
								></div>
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Avatar10})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Avatar11})` }}
								></div>
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-13rem"
									style={{ backgroundImage: `url(${Avatar12})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-13rem"
									style={{ backgroundImage: `url(${Avatar13})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-13rem"
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

export default HeroCollage;
