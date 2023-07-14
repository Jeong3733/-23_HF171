// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Container, Form, Table } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import data files
import PositionListData from 'data/marketing/career/PositionListData';

const CareerPositions = () => {
	const offices = [
		{ value: 'San Francisco', label: 'San Francisco' },
		{ value: 'United Kingdom', label: 'United Kingdom' },
		{ value: 'Canada', label: 'Canada' },
		{ value: 'Ireland', label: 'Ireland' }
	];

	const team = [
		{ value: 'Design', label: 'Design' },
		{ value: 'Engineering', label: 'Engineering' },
		{ value: 'General & Administrative', label: 'General & Administrative' }
	];

	return (
		<section className="pb-14 pt-8 pt-lg-0 bg-white " id="position">
			<Container>
				<Row>
					<Col xl={8} lg={10} md={12} xs={12}>
						{/* heading */}
						<h1 className="display-4  mt-2 mb-3 fw-bold">All open positions</h1>
						{/* para */}
						<p className="fs-3 pe-lg-14">
							We are looking for enthusiastic collaborators who are passionate
							about their craft to be a part of our journey building technology
							that is a force for positive change in the world.{' '}
						</p>
						{/* filter menu */}
						<Row className="mt-8">
							<div className="col-12">
								<h4>Filter by:</h4>
							</div>
							<Col lg={6} md={6} xs={12} className="mt-3 mt-lg-0">
								<Form.Group className="mb-3" controlId="formOffices">
									<Form.Control
										as={FormSelect}
										placeholder="Offices"
										options={offices}
									/>
								</Form.Group>
							</Col>
							<Col lg={6} md={6} xs={12} className="mt-3 mt-lg-0">
								<Form.Group className="mb-3" controlId="formTeam">
									<Form.Control
										as={FormSelect}
										placeholder="Team"
										options={team}
									/>
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>

				{PositionListData.map((item, index) => {
					return (
						<Row className="mt-16" key={index}>
							<Col xs={12}>
								<div className="mb-5">
									{/* heading */}
									<h2 className="fw-bold">{item.department}</h2>
									<p className="mb-0">{item.description}</p>
								</div>
								{/* table */}
								<div className="table-responsive">
									<Table className="table-hover table-lg fs-4">
										<tbody>
											{item.jobtitles.map((jobitem, index) => {
												return (
													<tr key={index}>
														<td>
															<Link
																to="/marketing/pages/career-single/"
																className="text-inherit"
															>
																{jobitem.designation}
															</Link>
														</td>
														<td>
															{jobitem.location}{' '}
															{jobitem.remote ? (
																<span className="text-muted"> (Remote)</span>
															) : (
																''
															)}
														</td>
														<td className="text-end">
															<Link
																to="/marketing/pages/career-single/"
																className="text-muted"
															>
																<i className="fe fe-chevron-right "></i>
															</Link>
														</td>
													</tr>
												);
											})}
										</tbody>
									</Table>
								</div>
							</Col>
						</Row>
					);
				})}

				{/* cta */}
				<Row className="mt-12">
					<div className="col-12 text-center">
						<p>
							Don't see the job you want? <Link to="#">Let us know</Link>
						</p>
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default CareerPositions;
