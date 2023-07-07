// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_05_00 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.5.0</code> - Aug 18, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<ul>
										<li>Updated bootstrap package from 5.1.3 to 5.2.0</li>
										<li>Updated react-bootstrap package from 2.3.0 to 2.5.0</li>
										<li>
											Updated react-quill package from 1.3.5 to 2.0.0-beta.4
										</li>
										<li>
											Updated eslint (devDependencies) package from 7.32.0 to
											8.22.0
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

export default Version_01_05_00;
