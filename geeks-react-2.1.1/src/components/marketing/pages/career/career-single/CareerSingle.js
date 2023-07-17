// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import sub components
import ApplyForm from './ApplyForm';

const CareerSingle = () => {
	return (
		<section className="pt-14 bg-white">
			<Container>
				<Row>
					<Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} xs={12}>
						<div className="mb-5">
							{/* heading */}
							<div className="text-center mb-6">
								<h1 className="display-3 mb-4 fw-bold">
									Software Engineer Ruby on Rails
								</h1>
								Canada <span className="text-muted">(Remote)</span>
							</div>
							<p>
								We are looking for a Ruby on Rails developer responsible for
								managing the interchange of data between the server and the
								users.
							</p>
							<p>
								Your primary focus will be development of all server-side logic,
								definition and maintenance of the central database, and ensuring
								high performance and responsiveness to requests from the
								front-end.
							</p>
							<p>
								You will also be responsible for integrating the front-end
								elements built by your co-workers into the application.
								Therefore, a basic understanding of front-end technologies is
								necessary as well.
							</p>

							{/* heading */}
							<div className="mt-8">
								<h2>Responsibilities</h2>

								<div className="mt-4">
									{/* list */}
									<ul className="list-unstyled">
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary mt-1"></i>
											Design, build, and maintain efficient, reusable, and
											reliable Ruby code
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>{' '}
											Identify bottlenecks and bugs, and devise solutions to
											these problems
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary mt-1"></i>{' '}
											Integration of user-facing elements developed by front-end
											developers with server side logic
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>{' '}
											Help maintain code quality, organization and
											automatization
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
											Experience with Ruby on Rails, along with other common
											libraries such as RSpec and Resque
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
											Basic understanding of front-end technologies, such as
											JavaScript, HTML5, and CSS3
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
											Ability to integrate multiple data sources and databases
											into one system
										</li>
									</ul>
								</div>
							</div>

							<div className="mt-8">
								{/* heading */}
								<h2>What We Offer</h2>

								<div className="mt-4">
									{/* list */}
									<ul className="list-unstyled">
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary mt-1"></i>
											Competitive salary
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>
											Benefits (vary by location)
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary mt-1"></i>{' '}
											A highly skilled and dedicated team that is fun to work
											with
										</li>
										<li className="d-flex mb-4 ">
											<i className="fe fe-check-circle me-2 text-primary  mt-1"></i>{' '}
											Remote work – We are a diverse and distributed team that
											uses Slack, Zoom, Notion and other tools to stay connected
										</li>
									</ul>
								</div>
							</div>

							<div className="mt-8">
								{/* heading */}
								<h2>Our Values</h2>
								<div className="mt-4 ">
									{/* para */}
									<p className="mb-4">
										<span className="text-dark fw-bold">
											Work in the open:{' '}
										</span>
										Operate with high integrity and choose what's right over
										what's easy. Be transparent as a company and with each
										other.
									</p>
									<p className="mb-4">
										<span className="text-dark fw-bold">
											People are People:{' '}
										</span>
										Treat yourself, colleagues, and customers with dignity,
										empathy, and respect. Start from a presumption of positive
										intent.
									</p>
									<p className="mb-4">
										<span className="text-dark fw-bold">
											Win and grow together:
										</span>{' '}
										Strive to be the best, individually, and as a team. Support
										and encourage each other. Seek opportunities for growth
									</p>
									<p>
										We are hiring in the United States, Canada, Ireland, and the
										United Kingdom, and are interested in every qualified
										candidate who is eligible to work in these regions without
										employment visa sponsorship.
									</p>
									<p>
										Please refer to the position specific location requirements
										listed under the location section of the job description.
									</p>
								</div>
							</div>

							{/* form to apply for this job */}
							<ApplyForm />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CareerSingle;
