// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_05_01 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.5.1</code> - Dec 06, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<span className="text-muted">
										Do update each package considering the below new updated
										version i.e. <br />{' '}
										<code>npm install package_name@version</code>{' '}
									</span>
									<ul>
										<li>Updated react package from 17.0.2 to 18.2.0</li>
										<li>Updated react-dom package from 17.0.2 to 18.2.0 </li>
										<li>Updated bootstrap package from 5.2.0 to 5.2.3</li>
										<li>Updated react-bootstrap package from 2.5.0 to 2.6.0</li>
										<li>
											Updated react-beautiful-dnd package from 13.1.0 to 13.1.1
										</li>
										<li>
											Updated @testing-library/jest-dom package from 5.13.0 to
											5.16.5
										</li>
										<li>
											Updated @testing-library/react package from 11.2.7 to
											13.4.0
										</li>
										<li>
											Updated @testing-library/user-event package from 12.8.3 to
											14.4.3
										</li>
										<li>Updated web-vitals package from 1.1.2 to 3.1.0</li>
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated React Files:</h4>
									<ul>
										<li>
											Updated index file consideirng the{' '}
											<a
												href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html"
												target="_blank"
												rel="noreferrer"
											>
												react 18 upgrade guide
											</a>
											.
											<br />
											<code>/src/index.js</code>
										</li>

										<li>
											Updated below files to fix issue to open horizontal menu
											on hover for front and dashboard
											<br />
											<code>
												/src/components/marketing/navbars/NavDropdownMain.js
											</code>
											<br />
											<code>
												/src/components/marketing/navbars/NavbarDefault.js
											</code>
											<br />
											<code>
												/src/components/dashboard/navbars/NavDropdownMain.js
											</code>
											<br />
											<code>
												/src/components/dashboard/DashboardIndexTop.js
											</code>
										</li>

										<li>
											Updated missing links
											<br />
											<code>/src/routes/dashboard/NavbarTopRoutes.js</code>
										</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Components / React Files:</h4>
									<ul>
										<li>
											Created saparate component for document (…) front and
											dashboard horizontal menu
											<br />
											<code>
												/src/components/marketing/navbars/DocumentMenu.js
											</code>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_01_05_01;
