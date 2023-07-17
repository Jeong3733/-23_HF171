// Section : Team Section
// Style : Grid with round images

// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

// import data files
import OurTeamData from 'data/marketing/AboutusOurTeamData';

const TeamGridRoundImages = () => {
	return (
		<section className="py-lg-16 py-10 bg-white">
			<Container>
				<Row>
					<Col md={6} sm={12} className="offset-right-md-6 mb-10">
						{/* <!-- heading --> */}
						<h2 className="display-4 mb-3 fw-bold">Our Team</h2>
						{/* <!-- lead --> */}
						<p className="lead mb-5">
							Want to work with some of the best global talent and build a tool
							used by all the companies you know and love? Join the Geeks team
							and help shape the future of design.
						</p>
						{/* <!-- btn --> */}
						<Link to="#" className="btn btn-primary">
							Openings
						</Link>
					</Col>
				</Row>
				<Row>
					{OurTeamData.map((item, index) => (
						<Col md={2} sm={3} key={index} className="col-3">
							<div className="p-xl-5 p-lg-3 mb-3 mb-lg-0">
								<GKTippy
									content={
										<span>
											<span className="fs-4">{item.name} </span>
											<br />
											<span className="fs-4 fw-light">{item.designation} </span>
										</span>
									}
								>
									<Image
										src={item.image}
										alt=""
										className="imgtooltip img-fluid rounded-circle"
									/>
								</GKTippy>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default TeamGridRoundImages;
