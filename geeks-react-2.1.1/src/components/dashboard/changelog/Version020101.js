// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_02_01_01 = () => {
	const UpdatedSass = [
		'/src/assets/scss/theme/_utilities.scss'
	];	
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v2.1.1</code> - June 12, 2023
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update </h4>
									<ul>
										<li>Required packages are Updated</li>										
										<li>Fixed Bootstrap 5.3.0 with _variable.dark scss issue</li>
									</ul>
								</div>	

								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										{UpdatedSass.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
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

export default Version_02_01_01;
