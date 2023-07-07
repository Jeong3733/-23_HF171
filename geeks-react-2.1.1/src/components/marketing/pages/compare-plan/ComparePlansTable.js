// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

// import data files
import AdditionalFeaturesData from 'data/marketing/compare-plans/AdditionalFeaturesData';

const ComparePlansTable = () => {
	return (
		<section className="pb-14 pt-lg-8 bg-white">
			<Container>
				<Row>
					{/* heading */}
					<Col lg={6} xs={12}>
						<div className="mb-8">
							<h1 className="display-4 fw-bold mb-4 pe-8">
								Compare plan & <br />
								<span className="text-primary">additional features</span>
							</h1>
							{/* para */}
							<p className="lead">
								Lorem Ipsum, giving information on its origins, as well as a
								random Lipsum generator.
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						{/* table */}
						<div className="table-responsive">
							<table className="table text-nowrap">
								<tbody>
									<tr>
										<td className="border-top-0 ps-0" colSpan="5">
											<h1 className="fw-bold">Features</h1>
										</td>
										<td className="border-top-0 ps-0">
											<h3 className="mb-1 fw-bold"> Free</h3>
											<Link to="#">Try for free</Link>
										</td>
										<td className="border-top-0 ps-0">
											<h3 className="mb-1 fw-bold">Growth</h3>
											<Link to="#">Subscribe</Link>
										</td>
										<td className="border-top-0 ps-0">
											<h3 className="mb-1 fw-bold">Enterprise</h3>
											<Link to="#">Contact us</Link>
										</td>
									</tr>
									{AdditionalFeaturesData.map((item, index) => {
										return (
											<Fragment key={index}>
												<tr>
													<td className="pt-8 ps-0">
														<h3 className="mb-0">{item.title}</h3>
													</td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
													<td className="pt-8 ps-0"></td>
												</tr>
												{item.features.map((subitem, index) => {
													return (
														<tr key={index}>
															<td className="border-top-0 ps-0" colSpan="5">
																{subitem.title}
															</td>
															<td className="border-top-0 ps-0">
																<i
																	className={`fe fe-${
																		subitem.free
																			? 'check fs-3 text-success'
																			: 'x fs-3 text-muted'
																	}`}
																></i>
															</td>
															<td className="border-top-0 ps-0">
																<i
																	className={`fe fe-${
																		subitem.growth
																			? 'check fs-3 text-success'
																			: 'x fs-3 text-muted'
																	}`}
																></i>
															</td>
															<td className="border-top-0 ps-0">
																<i
																	className={`fe fe-${
																		subitem.enterprise
																			? 'check fs-3 text-success'
																			: 'x fs-3 text-muted'
																	}`}
																></i>
															</td>
														</tr>
													);
												})}
											</Fragment>
										);
									})}
								</tbody>
							</table>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ComparePlansTable;
