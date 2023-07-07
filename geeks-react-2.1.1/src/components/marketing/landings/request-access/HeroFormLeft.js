// import node module libraries
import { Row, Col, Image, Form, Button, Container } from 'react-bootstrap';

// import media files
import Analytics from 'assets/images/background/analytics.jpg';

const HeroFormLeft = () => {
	return (
		<section className="pb-8 bg-white">
			<Container>
				<Row>
					<Col xl={{ offset: 1, span: 10 }} sm={12}>
						<Row className="px-3 pt-3 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border smooth-shadow-sm">
							<Col lg={6} className="p-4 p-md-6 pt-lg-0">
								<h1 className="display-4 fw-bold lh-1 mb-3">
									Get early access
								</h1>
								<p className="lead mb-5">
									Geeks is currently invite only. Sign up to the waitlist to be
									the first to try out Geeks and stay in the loop.
								</p>
								<Form>
									<Row>
										<Col md={7} sm={12} className="mb-3">
											<Form.Control
												type="email"
												className="form-control"
												placeholder="Work Email"
												required=""
											/>
										</Col>
										<Col md={5} sm={12} className="d-grid mb-3 ps-md-0">
											<Button variant="primary" type="submit">
												Request Access
											</Button>
										</Col>
									</Row>
								</Form>
							</Col>
							<Col
								lg={{ offset: 1, span: 5 }}
								className="p-0 overflow-hidden rounded-end-md shadow-lg"
							>
								<Image
									className="rounded-top-md card-img-size-600"
									src={Analytics}
									alt=""
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HeroFormLeft;
