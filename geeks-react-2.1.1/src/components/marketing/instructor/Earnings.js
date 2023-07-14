// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Dropdown, Table, Image, Badge } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';
import StatTopIcon from 'components/marketing/common/stats/StatTopIcon';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// import data files
import BestSellingCoursesData from 'data/marketing/BestSellingCoursesData';
import {
	TotalEarningChartSeries,
	TotalEarningChartOptions,
	EarningsChartSeries,
	EarningsChartOptions
} from 'data/charts/ChartData';

const Earnings = () => {
	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			className="btn-icon btn btn-ghost btn-sm rounded-circle"
		>
			{children}
		</Link>
	));

	const ActionMenu = () => {
		return (
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>
						<i className="fe fe-more-vertical text-muted"></i>
					</Dropdown.Toggle>
					<Dropdown.Menu align={'end'}>
						<Dropdown.Header>SETTINGS</Dropdown.Header>
						<Dropdown.Item eventKey="1">
							<i className="fe fe-edit dropdown-item-icon"></i> Edit
						</Dropdown.Item>
						<Dropdown.Item eventKey="2">
							<i className="fe fe-trash dropdown-item-icon"></i> Remove
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	};

	const ChartActionMenu = () => {
		return (
			<div>
				<Dropdown>
					<Dropdown.Toggle as={CustomToggle}>
						<i className="fe fe-more-vertical text-muted"></i>
					</Dropdown.Toggle>
					<Dropdown.Menu align="end">
						<Dropdown.Header>SETTINGS</Dropdown.Header>
						<Dropdown.Item eventKey="1">30 Days</Dropdown.Item>
						<Dropdown.Item eventKey="2">2 Months</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	};

	return (
		<ProfileLayout>
			<Card className="mb-4 pb-1">
				<Card.Header className="border-0 ">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Earnings</h3>
						<p className="mb-0">
							You have full control to manage your own account setting.
						</p>
					</div>
				</Card.Header>
			</Card>
			<Row>
				<Col xl={12} lg={12} md={12} className="mb-4">
					<Card>
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0">Earnings</h4>
							</div>
							<div>
								<ChartActionMenu />
							</div>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={3} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
									<div>
										<StatTopIcon
											title="Your total earnings"
											value="$3,210"
											iconName="shopping-cart"
											colorVariant="success"
											progress={0}
											flat
										/>
										<Row>
											{/* <!-- Total earning chart --> */}
											<Col className="col ps-0">
												<ApexCharts
													options={TotalEarningChartOptions}
													series={TotalEarningChartSeries}
													width={130}
												/>
											</Col>
											<Col className="col-auto">
												<Badge bg="success">
													<i className="fe fe-trending-up fs-6 me-2"></i>32%
												</Badge>
											</Col>
										</Row>
										<p className="mb-0 lh-1.5">
											Update your payout method in settings.
										</p>
									</div>
								</Col>
								{/* Earning chart */}
								<Col xl={9} lg={8} md={12} sm={12}>
									<ApexCharts
										options={EarningsChartOptions}
										series={EarningsChartSeries}
										height={350}
										type="line"
									/>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
					<StatTopIcon
						title="Earning this month"
						value="$3,210"
						iconName="folder"
						colorVariant="primary"
						progress={65}
					/>
				</Col>
				<Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
					<StatTopIcon
						title="Account Balance"
						value="$3,800"
						iconName="shopping-bag"
						colorVariant="danger"
						progress={65}
					/>
				</Col>
				<Col lg={4} md={12} sm={12}>
					<StatTopIcon
						title="Life Time Sales"
						value="$10,800"
						iconName="send"
						colorVariant="warning"
						progress={65}
					/>
				</Col>
			</Row>

			<Card className="mt-4">
				<Card.Header>
					<h3 className="mb-0 h4">Best Selling Courses</h3>
				</Card.Header>
				<Card.Body className="p-0">
					<Table responsive hover className="mb-0 text-nowrap table-centered">
						<thead className="table-light">
							<tr>
								<th scope="col">Courses</th>
								<th scope="col">Sales</th>
								<th scope="col">Amount</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{BestSellingCoursesData.map((item, index) => {
								return (
									<tr key={item.id + index}>
										<td>
											<Link to="#">
												<div className="d-lg-flex align-items-center">
													<Image
														src={item.image}
														alt=""
														className="rounded img-4by3-lg"
													/>
													<h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
														{item.title}
													</h5>
												</div>
											</Link>
										</td>
										<td>{item.sales}</td>
										<td>${item.amount} </td>
										<td>
											<ActionMenu />
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Earnings;
