// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';

// import custom components
import SectionHeadingLeft3 from 'components/marketing/common/section-headings/SectionHeadingLeft3';

// import media files
import EmployeePicture from 'assets/images/career/employee-pic.jpg';

const TeamMemberAtGeeks = () => {
	const title = 'Our employees are our most valuable assets';
	const subtitle = 'A team member at Geeks';
	const description = `Employees are the most valuable assets an organization has. It s their abilities, knowledge, and experience that can't be replaced.`;

	return (
		<section className="pt-lg-14 pb-lg-18 pb-8 bg-white">
			<Container>
				<Row>
					<Col xl={{ offset: 1, span: 10 }} xs={12}>
						<SectionHeadingLeft3
							title={title}
							description={description}
							subtitle={subtitle}
							className="display-4"
						/>

						<div className="mt-8">
							<Row className="align-items-center">
								<Col lg={6} md={12} sm={12}>
									<div>
										<p className="h2 fw-normal mb-6 lh-lg">
											"Working for Geeks UI has been nothing short of an
											incredible experience. I am continuously motivated to
											bring my best self to work with Geek’s core values as
											inspiration - what a special place to grow and thrive!"
										</p>
										<h3 className="mb-1">Tiffany Moore</h3>
										<p className="mb-0">Software Engineer</p>
									</div>
								</Col>
								<Col lg={{ offset: 1, span: 5 }} md={12} sm={12}>
									<div className="mt-6 mt-lg-0">
										<Image
											src={EmployeePicture}
											alt=""
											className="img-fluid w-100 rounded-3"
										/>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default TeamMemberAtGeeks;
