// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

const Process = () => {
	return (
		<section className="py-lg-14 pt-8 py-10 bg-white">
			{/* container */}
			<Container>
				<Row>
					<Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
						<Row className="text-center">
							{/* col */}
							<Col md={12} className="px-lg-10 mb-8 mt-6">
								<span className="text-uppercase text-primary fw-semi-bold ls-md">
									Process
								</span>
								{/* heading */}
								<h2 className="h1 fw-bold mt-3">How It Works</h2>
							</Col>
						</Row>
						<Row className="gy-6">
							{/* col */}
							<Col md={4} sm={12}>
								<div className=" text-center">
									{/* icon */}
									<div className="icon-shape icon-lg border border-primary border-2 fs-3 rounded-circle mb-4 process-line text-primary smooth-shadow-md">
										{' '}
										1
									</div>
									{/* heading */}
									<h3>Click on 'Post a job' </h3>
									{/* text */}
									<p className="mb-0 px-4">
										Fill in the details of the job be sure to include your
										location restrictions if you have em!
									</p>
								</div>
							</Col>
							{/* col */}
							<Col md={4} sm={12}>
								<div className=" text-center">
									{/* icon */}
									<div className="icon-shape icon-lg border border-primary border-2 fs-3 rounded-circle mb-4 process-line text-primary smooth-shadow-md">
										2
									</div>
									{/* heading */}
									<h3>Select an upgrade if required </h3>
									{/* text */}
									<p className="mb-0 px-2">
										The base price for a job listing on Geeks is $29 per month.
										Choose one of our optional upgrades to gain more visibility
										to your listing.
									</p>
								</div>
							</Col>
							{/* col */}
							<Col md={4} sm={12}>
								<div className=" text-center">
									{/* icon */}
									<div className="icon-shape icon-lg border border-primary border-2 fs-3 rounded-circle mb-4 text-primary smooth-shadow-md">
										3
									</div>
									{/* heading */}
									<h3>Purchase the listing </h3>
									{/* text */}
									<p className="mb-0 px-3">
										Preview your listing and once you are ready to post it you
										can add your billing information.
									</p>
								</div>
							</Col>
							{/* button */}
							<Col sm={12} className="mt-8 text-center">
								<Button as="a" href="#">
									Apply Now
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Process;
