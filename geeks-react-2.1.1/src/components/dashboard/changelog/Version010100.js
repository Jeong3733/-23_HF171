// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_01_00 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.1.0</code> - Feb 15, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<ul>
										<li>Updated react-bootstrap package from 2.1.0 to 2.1.2</li>
										<li>
											Added required data files for new react pages listed
											below.
										</li>
										<li>Added new media files in assets/images.</li>
									</ul>

									<div className="mb-3">
										<h4>New React Marketing Pages:</h4>
										<ul>
											<li>
												Added - landing-sass ( Landings &#8594; Scss )
												<br />
												<code>
													src/components/marketing/landings/landing-sass/*.*
												</code>
											</li>
											<li>
												Added - career ( Pages &#8594; Career &#8594; Overview )
												<br />
												<code>
													src/components/marketing/pages/career/career/*.*
												</code>
											</li>
											<li>
												Added - career-list ( Pages &#8594; Career &#8594;
												Listing )
												<br />
												<code>
													src/components/marketing/pages/career/career-list/*.*
												</code>
											</li>
											<li>
												Added - career-single ( Pages &#8594; Career &#8594;
												Opening )
												<br />
												<code>
													src/components/marketing/pages/career/career-single/*.*
												</code>
											</li>
											<li>
												Added - compare-plan ( Pages &#8594; Compare Plan )
												<br />
												<code>
													src/components/marketing/pages/compare-plan/*.*
												</code>
											</li>
											<li>
												Added - contact ( Pages &#8594; Contact )
												<br />
												<code>
													src/components/marketing/pages/contact/Contact.js
												</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>New Components:</h4>
										<ul>
											<li>
												Added below components under common folder
												<ul>
													<li>
														<code>
															src/components/marketing/common/call-to-action/CTAButton.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/clientlogos/LogosTopHeadingInverseDark.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/section-headings/SectionHeadingDarkCenter.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/section-headings/SectionHeadingLeft3.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/section-headings/SectionHeadingLeftBold.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/stats/StatTopLine.js
														</code>
													</li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>New SCSS Files:</h4>
										<ul>
											<li>
												<code>
													src/assets/scss/theme/utilities/_sizing.scss
												</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated React Files:</h4>
										<ul>
											<li>
												Updated routes files for newly added pages
												<br />
												<code>src/layouts/AllRoutes.js</code>
												<br />
												<code>src/routes/marketing/NavbarDefault.js</code>
											</li>
											<li>
												Updated NavbarLanding.js{' '}
												<span className="text-muted">
													( added an optional parameter )
												</span>{' '}
												<br />
												<code>
													src/layouts/marketing/navbars/NavbarLanding.js
												</code>
											</li>
											<li>
												Updated pricing page{' '}
												<span className="text-muted">
													( modified path of GKOdometer )
												</span>{' '}
												<br />
												<code>
													src/components/marketing/pages/pricing/PricingCard.js
												</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Moved React Files/Component:</h4>
										<ul>
											<li>
												Moved GKOdometer.js from <br />
												<code>
													src/components/marketing/pages/pricing/
												</code>{' '}
												folder to <br />
												<code>
													src/components/elements/odometer/GKOdometer.js
												</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated SCSS Files:</h4>
										<ul>
											<li>
												<code>src/assets/scss/theme/components/_card.scss</code>
											</li>
											<li>
												<code>src/assets/scss/theme/utilities/_text.scss</code>{' '}
											</li>
											<li>
												<code>src/assets/scss/theme/_theme.scss</code>
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_01_01_00;
