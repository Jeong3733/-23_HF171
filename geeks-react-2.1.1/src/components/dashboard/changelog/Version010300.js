// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_03_00 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.3.0</code> - Apr 26, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<ul>
										<li>Updated react-bootstrap package from 2.2.0 to 2.3.0</li>
										<li>Updated react-paginate package from 7.1.3 to 7.1.5</li>
										<li>Added react-toastify package</li>
										<li>
											Added required data and media files for new react pages
											listed below.
										</li>
										<li>
											Fixed bug of 404 auto redirection to page not found (
											AllRoutes.js ){' '}
										</li>
									</ul>
									<div className="mb-3">
										<h4>New React Marketing Help Center Pages:</h4>
										<ul>
											<li>
												Added - help-center ( Pages &#8594; Help Center &#8594;
												Help Center )
												<br />
												<code>
													src/components/marketing/pages/help-center/help-center/*.*
												</code>
											</li>
											<li>
												Added - faq ( Pages &#8594; Help Center &#8594; FAQ's )
												<br />
												<code>
													src/components/marketing/pages/help-center/help-center-faq/*.*
												</code>
											</li>
											<li>
												Added - guide ( Pages &#8594; Help Center &#8594; Guide
												)
												<br />
												<code>
													src/components/marketing/pages/help-center/help-center-guide/*.*
												</code>
											</li>
											<li>
												Added - guide-single ( Pages &#8594; Help Center &#8594;
												Guide Single )
												<br />
												<code>
													src/components/marketing/pages/help-center/help-center-guide-single/*.*
												</code>
											</li>
											<li>
												Added - support ( Pages &#8594; Help Center &#8594;
												Support )
												<br />
												<code>
													src/components/marketing/pages/help-center/help-center-support/*.*
												</code>
											</li>
											<li>
												Added below layouts files for help center pages.
												<ul>
													<li>
														<code>
															src/layouts/marketing/navbars/NavbarHelpCenter.js
														</code>
													</li>
													<li>
														<code>
															src/layouts/marketing/HelpCenterLayout.js
														</code>
													</li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>New React Dashboard Pages / Functionalities:</h4>
										<ul>
											<li>
												Added - layout-horizontal ( Layouts &#8594; Top )
												<br />
												<code>src/layouts/dashboard/DashboardIndexTop.js</code>
											</li>
											<li>
												Added - layout-compact ( Layouts &#8594; Compact )
												<br />
												<code>
													src/layouts/dashboard/DashboardIndexCompact.js
												</code>
											</li>
											<li>
												Added - layout-vertical ( Layouts &#8594; Vertical )
												<br />
												<code>src/layouts/dashboard/DashboardIndex.js</code>
											</li>
											<li>
												Added - Mail Application ( APPS &#8594; Mail )
												<br />
												<code>src/components/dashboard/mail-app/*.*</code>
											</li>
											<li>
												Added - Three Level Menu ( Menu Level )
												<br />
												<code>src/layouts/dashboard/NavbarVertical.js</code>
												<br />
												<code>src/layouts/dashboard/navbars/*.*</code>
											</li>
											<li>
												Added new routes file for layout horizontal/top
												<br />
												<code>src/routes/dashboard/NavbarTopRoutes.js</code>
											</li>
											<li>
												Added new context to pass data through the mail
												component tree.
												<br />
												<code>src/context/Context.js</code>
												<br />
												<code>src/context/providers/MailProvider.js</code>
											</li>
											<li>
												Added new hook to manage mail operations.
												<br />
												<code>src/hooks/useMultipleSelection.js</code>
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
															src/components/marketing/common/features/FeatureTopIconWithLink.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/accordions/GKAccordionBox.js
														</code>
													</li>
													<li>
														<code>
															src/components/marketing/common/breadcrumb/GKBreadcrumb.js
														</code>
													</li>
												</ul>
											</li>
											<li>
												Added below components under elements folder
												<ul>
													<li>
														<code>
															src/components/elements/tags/GKTagsEmailInput.js
														</code>
													</li>
													<li>
														<code>
															src/components/elements/tooltips/GKTooltip.js
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
												<code>src/assets/scss/theme/components/_mail.scss</code>
											</li>
											<li>
												<code>
													src/assets/scss/theme/vendor/react-toastify/*.*
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
												<code>src/routes/dashboard/DashboardRoutes.js</code>
											</li>
											<li>
												Updated below files to fix background color issue.
												<br />
												<code>src/routes/dashboard/DashboardIndex.js</code>{' '}
												<br />
												<code>src/layouts/marketing/DefaultLayout.js</code>
												<br />
												<code>
													src/components/marketing/student/ProfileLayout.js
												</code>
												<br />
												<code>
													src/components/marketing/instructor/ProfileLayout.js
												</code>
											</li>
											<li>
												Rename below file from NavbarTop.js to HeaderDefault.js
												and updated the DashboardIndex.js
												<br />
												<code>src/routes/dashboard/HeaderDefault.js</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated SCSS Files:</h4>
										<ul>
											<li>
												<code>
													/src/assets/scss/theme/utilities/_background.scss
												</code>
											</li>
											<li>
												<code>
													/src/assets/scss/theme/utilities/_collapse.scss
												</code>
											</li>
											<li>
												<code>
													/src/assets/scss/theme/components/_admin-sidenav.scss
												</code>
											</li>
											<li>
												<code>
													/src/assets/scss/theme/components/_admin-structure.scss
												</code>
											</li>
											<li>
												<code>/src/assets/scss/theme/_variables.scss</code>
											</li>
											<li>
												<code>/src/assets/scss/theme/_theme.scss</code>
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

export default Version_01_03_00;
