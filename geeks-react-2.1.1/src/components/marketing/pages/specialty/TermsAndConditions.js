// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

function TermsAndConditions() {
	return (
		<Fragment>
			<NavbarDefault login={true} />

			<main>
				{/* pageheader */}
				<section className="py-10 bg-white">
					<Container>
						<Row className="justify-content-center">
							<Col lg={8} md={12} sm={12}>
								{/* text center */}
								<div className="text-center">
									<h1 className="display-3 fw-bold">Terms & Conditions</h1>
									<p className="lead px-8">
										Read our terms below to learn more about your rights and
										responsibilities as a Product Name user.
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* content */}
				<section className="pb-10 bg-white">
					<Container>
						<Row className="justify-content-center">
							<Col lg={8} md={12} sm={12}>
								{/* date */}
								<div className="py-3 mb-5 border-bottom">
									<h3>
										Effective date:{' '}
										<span className="text-primary">23rd of March, 2021</span>
									</h3>
								</div>
								{/* heading */}
								<h1 className="fw-bold mb-3">
									This is a H1, Perfect's for titles.
								</h1>

								<p className="fs-4 mb-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Stress, for the United States element ante. Duis cursus, mi
									quis viverra ornare, eros pain, sometimes none at all, freedom
									of the living creature was as the profit and financial
									security. Jasmine neck adapter and just running it lorem
									makeup sad smile of the television set.
								</p>

								<p className="mb-1 fs-4">
									<span className="text-dark fw-semi-bold">Email: </span>
									hello@geeksui.com
								</p>

								<p className="mb-1 fs-4">
									<span className="text-dark fw-semi-bold">Address: </span>52,
									Komal Villas, Mansarovar Vadodara - 374321
								</p>

								<div className="d-flex mt-5">
									<div className="">
										<h3 className="fw-bold">A</h3>
									</div>
									<div className="ms-3">
										<h3 className="fw-bold">
											This is a H3's perfect for the titles.
										</h3>
										<p className="fs-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Stress, for the United States element ante. Duis cursus,
											mi quis viverra ornare, eros pain, none at all, freedom of
											the living creature was as the profit and financial
											security. Jasmine neck adapter and just running it lorem
											makeup hairstyle. Now sad smile of the television set.
										</p>
									</div>
								</div>
								{/* para */}
								<div className="d-flex mt-3">
									<div className="">
										<h3 className="fw-bold">B</h3>
									</div>
									<div className="ms-3">
										<h3 className="fw-bold">
											This is a H3's perfect for the titles.
										</h3>
										<p className="fs-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Stress, for the United States element ante. Duis cursus,
											mi quis viverra ornare, eros pain, none at all, freedom of
											the living creature was as the profit and financial
											security. Jasmine neck adapter and just running it lorem
											makeup hairstyle. Now sad smile of the television set.
										</p>
									</div>
								</div>
								{/* para */}
								<div className="mt-5">
									<h2 className="fw-bold">
										This is a H2's perfect for the titles.
									</h2>
									<p className="fs-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Stress, for the United States element ante. Duis cursus, mi
										quis viverra ornare, eros pain , sometimes none at all,
										freedom of the living creature was as the profit and
										financial security. Jasmine neck adapter and just running it
										lorem makeup hairstyle. Now sad smile of the television set.
									</p>
									{/* list */}
									<ul className="fs-4">
										<li>More than 60+ components</li>
										<li>Five ready tests</li>
										<li>Coming soon page</li>
										<li>Check list with left icon</li>
										<li>And much more ...</li>
									</ul>
								</div>
								{/* para */}
								<div className="mt-5">
									<h2 className="fw-bold">
										This is a H2's perfect for the titles.
									</h2>
									<p className="fs-4">
										Geeks ui takes the privacy of its users very seriously. For
										the current our Privacy Policy, please click{' '}
										<Link to="#">here</Link>.
									</p>
									<p className="mb-6 fs-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Duis cursus, mi quis viverra ornare, eros pain, sometimes
										none at all, freedom of the living creature was as the
										profit and financial security. Jasmine neck adapter and just
										running it lorem makeup hairstyle. Now sad smile of the
										television set.
									</p>
									<h2 className="fw-bold">Changes about terms</h2>
									<p className="fs-4">
										If we change our terms of use we will post those changes on
										this page. Registered users will be sent an email that
										outlines changes made to the terms of use.
									</p>
									<p className="fs-4">
										Questions? Please email us at{' '}
										<Link to="#">hello@example.com</Link>
									</p>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</main>

			<FooterWithLinks />
		</Fragment>
	);
}

export default TermsAndConditions;
