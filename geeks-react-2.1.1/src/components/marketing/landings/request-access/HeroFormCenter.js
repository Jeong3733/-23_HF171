// import node module libraries
import {
	Row,
	Col,
	Image,
	Form,
	Button,
	Card,
	Badge,
	Container
} from 'react-bootstrap';

// import media files
import Analytics from 'assets/images/background/analytics.jpg';

const HeroFormCenter = () => {
	return (
		<section className="pt-md-14 pt-12 pb-14 bg-white">
			<Container>
				<Row>
					<Col xl={{ span: 8, offset: 2 }} lg={12} md={12}>
						<div className="mb-4 mb-xl-0 text-center">
							<Badge bg="success-soft" pill className="fs-5">
								<span className="fw-bold">Beta-v2.0.0 </span>- Just shipped
								version
							</Badge>
							{/* <!-- Caption --> */}
							<h1 className="display-2 ls-sm mt-2 fw-bold">
								Request Access for Product{' '}
							</h1>
							<p className="mb-6 h2 text-muted px-md-8">
								Geeks is a customizable, Bootstrap based UI Kits and Templates
								for Developers.
							</p>
							{/* <!-- Form --> */}
							<Form className="px-lg-16 px-md-14">
								<Row>
									<Col md={8} sm={12} className="mb-3 ps-md-0">
										<Form.Control
											type="email"
											placeholder="Work Email"
											required=""
										/>
									</Col>
									{/* <!-- button --> */}
									<Col md={4} sm={12} className="d-grid mb-3 ps-md-0">
										<Button variant="dark" type="submit">
											Request Access
										</Button>
									</Col>
									<Col className="text-start col-12 fw-medium ps-lg-0">
										Rated 5 Stars <span className="text-muted">by over</span>{' '}
										<span className="text-primary"> 100+ Users</span>
									</Col>
								</Row>
							</Form>
						</div>
					</Col>
					<Col xl={{ span: 10, offset: 1 }} sm={12} className="mt-12">
						<Card className="bg-gradient-mix-shade px-md-5 pt-md-5 px-4 pt-4 rounded-3">
							<Image
								src={Analytics}
								alt=""
								className="rounded-3 mb-n5 img-fluid smooth-shadow-md"
							/>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HeroFormCenter;
