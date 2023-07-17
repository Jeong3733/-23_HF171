// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_02_00 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.2.0</code> - Mar 8, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<ul>
										<li>Updated react-bootstrap package from 2.1.2 to 2.2.0</li>
										<li>
											Added required data files for new react pages listed
											below.
										</li>
									</ul>

									<div className="mb-3">
										<h4>New React Dashboard Projects Pages:</h4>
										<ul>
											<li>
												Added - grid ( Projects &#8594; Grid )
												<br />
												<code>src/components/dashboard/projects/grid/*.*</code>
											</li>
											<li>
												Added - list ( Projects &#8594; List )
												<br />
												<code>src/components/dashboard/projects/list/*.*</code>
											</li>
											<li>
												Added - overview ( Projects &#8594; Single &#8594;
												Overview )
												<br />
												<code>
													src/components/dashboard/projects/single/overview/*.*
												</code>
											</li>
											<li>
												Added - task ( Projects &#8594; Single &#8594; Task )
												<br />
												<code>
													src/components/dashboard/projects/single/task/*.*
												</code>
											</li>
											<li>
												Added - budget ( Projects &#8594; Single &#8594; Budget
												)
												<br />
												<code>
													src/components/dashboard/projects/single/budget/*.*
												</code>
											</li>
											<li>
												Added - files ( Projects &#8594; Single &#8594; Files )
												<br />
												<code>
													src/components/dashboard/projects/single/files/*.*
												</code>
											</li>
											<li>
												Added - team ( Projects &#8594; Single &#8594; Team )
												<br />
												<code>
													src/components/dashboard/projects/single/team/*.*
												</code>
											</li>
											<li>
												Added - summary ( Projects &#8594; Single &#8594;
												Summary )
												<br />
												<code>
													src/components/dashboard/projects/single/summary/*.*
												</code>
											</li>
											<li>
												Added - create-project ( Projects &#8594; Create Project
												)
												<br />
												<code>
													src/components/dashboard/projects/create-project/*.*
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
															src/components/dashboard/common/stats/StatRightCenterIcon.js
														</code>
													</li>
													<li>
														<code>
															src/components/dashboard/common/stats/StatCenterInfo.js
														</code>
													</li>
												</ul>
											</li>
											<li>
												Added below components under elements folder.
												<ul>
													<li>
														<code>
															src/components/elements/charts/ProgressChart.js
														</code>
													</li>
												</ul>
											</li>
											<li>
												Added project card component with 3 variations with
												icon, without icon and with cover image.
												<ul>
													<li>
														<code>
															src/components/dashboard/projects/grid/ProjectCard.js
														</code>
													</li>
												</ul>
											</li>
											<li>
												Added project team card component.
												<ul>
													<li>
														<code>
															src/components/dashboard/projects/single/team/TeamGridCard.js
														</code>
													</li>
												</ul>
											</li>
											<li>
												Added new Avatar variation in exisiting avatar component
												with image tooltip option.
												<ul>
													<li>
														<code>
															src/components/elements/bootstrap/Avatar.js
														</code>
													</li>
													<li>
														<code>
															src/components/elements/bootstrap/AvatarStyles.js
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
													src/assets/scss/theme/components/_progress.scss
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
												<code>src/routes/dashboard/DashboardRoutes.js</code>
											</li>
											<li>
												Updated Avatar.js
												<br />
												<span className="text-muted">
													( Added facility to show avatar name as avatar tooltip
													(it's an optional parameter) on avatar hover , also
													modified documentation in js file )
												</span>{' '}
												<br />
												<code>src/components/elements/bootstrap/Avatar.js</code>
											</li>
											<li>
												Updated utils.js{' '}
												<span className="text-muted">
													( Added new utility functions )
												</span>{' '}
												<br />
												<code>src/helper/utils.js</code>
											</li>
											<li>
												Updated FormSelect.js{' '}
												<span className="text-muted">
													( Fixed event issue, by adding event handling )
												</span>{' '}
												<br />
												<code>
													src/components/elements/form-select/FormSelect.js
												</code>
											</li>
											<li>
												Updated ChartData.js{' '}
												<span className="text-muted">
													( Updated this file for newly added charts of new
													pages )
												</span>{' '}
												<br />
												<code>src/data/charts/ChartData.js</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated SCSS Files:</h4>
										<ul>
											<li>
												<code>
													src/assets/scss/theme/components/_button.scss
												</code>
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

export default Version_01_02_00;
