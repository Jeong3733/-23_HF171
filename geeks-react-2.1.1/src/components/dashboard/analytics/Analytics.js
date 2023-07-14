// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Table, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import { FlatPickr } from 'components/elements/flat-pickr/FlatPickr';
import StatRightChart from 'components/dashboard/common/stats/StatRightChart';
import ApexCharts from 'components/elements/charts/ApexCharts';
import UsersbyCountry from 'components/dashboard/maps/UsersbyCountry';

// import sub components
import MostViewPages from './MostViewPages';
import Browsers from './Browsers';
import SocialMediaTraffic from './SocialMediaTraffic';

// import MDI icons
import Icon from '@mdi/react';
import { mdiSquareRounded } from '@mdi/js';

// Import required data files
import {
	SessionChartSeries,
	SessionChartOptions,
	ActiveUserChartSeries,
	ActiveUserChartOptions,
	TrafficChannelChartSeries,
	TrafficChannelChartOptions,
	OperatingSystemChartSeries,
	OperatingSystemChartOptions
} from 'data/charts/ChartData';

const Analytics = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Analytics</h1>
						</div>
						<div className="d-flex">
							<div className="input-group me-3  ">
								<FlatPickr value={''} />
								<span className="input-group-text text-muted" id="basic-addon2">
									<i className="fe fe-calendar"></i>
								</span>
							</div>
							<Link to="#" className="btn btn-primary">
								Setting
							</Link>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightChart
						title="USER"
						value="30.6k"
						summary="Number of sales"
						summaryValue="+20.9$"
						summaryIcon="up"
						showSummaryIcon
						classValue="mb-4"
						chartName="UserChart"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightChart
						title="UNIQUE VISITORS"
						value="256k"
						summary="Number of pending"
						summaryValue="5%"
						summaryIcon="down"
						showSummaryIcon
						classValue="mb-4"
						chartName="VisitorChart"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightChart
						title="BOUNCE RATE"
						value="51.46%"
						summary="Students"
						summaryValue="+1200"
						summaryIcon="up"
						showSummaryIcon
						classValue="mb-4"
						chartName="BounceChart"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightChart
						title="AVERAGE VISIT TIME"
						value="1m:17s"
						summary="Instructor"
						summaryValue="12%"
						summaryIcon="up"
						showSummaryIcon
						classValue="mb-4"
						chartName="AverageVisitTimeChart"
					/>
				</Col>
			</Row>

			{/* Sessions + Active User Row */}
			<Row>
				<Col xl={8} lg={12} md={12} className="mb-4">
					<Card className="h-100">
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<h4 className="mb-0">Sessions</h4>
						</Card.Header>
						<Card.Body>
							<ApexCharts
								options={SessionChartOptions}
								series={SessionChartSeries}
								type="line"
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card className="h-100">
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<h4 className="mb-0">Active User</h4>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col>
									<span className="fw-semi-bold">30 days</span>
									<h1 className="fw-bold mt-2 mb-0 h2">12,698</h1>
									<p className="text-success fw-semi-bold mb-0">
										<i className="fe fe-trending-up me-1"></i>4.6%
									</p>
								</Col>
								<Col>
									<span className="fw-semi-bold">7 days</span>
									<h1 className="fw-bold mt-2 mb-0 h2">2.65K</h1>
									<p className="text-danger fw-semi-bold mb-0">
										<i className="fe fe-trending-down me-1"></i>4.6%
									</p>
								</Col>
								<Col>
									<span className="fw-semi-bold">1 days</span>
									<h1 className="fw-bold mt-2 mb-0 h2">1.34K</h1>
									<p className="text-success fw-semi-bold mb-0">
										<i className="fe fe-trending-up me-1"></i>4.6%
									</p>
								</Col>
							</Row>
							<ApexCharts
								options={ActiveUserChartOptions}
								series={ActiveUserChartSeries}
								type="bar"
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* end of Sessions + Active User Row */}

			{/* Users by Country + Traffic Channel + Operating System  */}
			<Row>
				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card className="h-100">
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<h4 className="mb-0">Users by Country</h4>
						</Card.Header>
						<Card.Body className="py-0">
							<UsersbyCountry />
							<Table borderless size="sm">
								<tbody>
									<tr>
										<td>United States</td>
										<td>22,120</td>
										<td>34.54%</td>
									</tr>
									<tr>
										<td>India</td>
										<td>12,756</td>
										<td>22.43%</td>
									</tr>
									<tr>
										<td>United Kingdom</td>
										<td>8,864</td>
										<td>34.54%</td>
									</tr>
									<tr>
										<td>Sweden</td>
										<td>6,749</td>
										<td>5.29%</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card className="h-100">
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<h4 className="mb-0">Traffic Channel</h4>
						</Card.Header>
						<Card.Body className="p-1">
							<ApexCharts
								options={TrafficChannelChartOptions}
								series={TrafficChannelChartSeries}
								type="donut"
								height={260}
							/>
							<Table size="sm" className="mt-5 mb-0 ms-2" borderless>
								<tbody>
									<tr>
										<td>
											<Icon
												path={mdiSquareRounded}
												className="text-primary fs-5 me-2"
												size={0.6}
											/>
											Organic Search
										</td>
										<td>2,120</td>
										<td>4.54%</td>
									</tr>
									<tr>
										<td>
											<Icon
												path={mdiSquareRounded}
												className="text-success fs-5 me-2"
												size={0.6}
											/>
											Direct
										</td>
										<td>639</td>
										<td>4.37%</td>
									</tr>
									<tr>
										<td>
											<Icon
												path={mdiSquareRounded}
												className="text-danger fs-5 me-2"
												size={0.6}
											/>
											Refferrals
										</td>
										<td>520</td>
										<td>45.14%</td>
									</tr>
									<tr>
										<td>
											<Icon
												path={mdiSquareRounded}
												className="text-info fs-5 me-2"
												size={0.6}
											/>
											Social Media
										</td>
										<td>116</td>
										<td>12.24%</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card className="h-100">
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<h4 className="mb-0">Operating System</h4>
						</Card.Header>
						<Card.Body>
							<ApexCharts
								options={OperatingSystemChartOptions}
								series={OperatingSystemChartSeries}
								type="polarArea"
								height={350}
							/>
							<div className="mt-4 d-flex justify-content-center">
								<ListGroup as="ul" bsPrefix="list-inline" className="mb-0">
									<ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
										<h5 className="mb-0 d-flex align-items-center fs-5 lh-1">
											<Icon
												path={mdiSquareRounded}
												className="text-danger fs-5 me-2"
												size={0.6}
											/>
											Window
										</h5>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
										<h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
											<Icon
												path={mdiSquareRounded}
												className="text-success fs-5 me-2"
												size={0.6}
											/>
											macOS
										</h5>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
										<h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
											<Icon
												path={mdiSquareRounded}
												className="text-primary fs-5 me-2"
												size={0.6}
											/>
											Linux
										</h5>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item mx-3">
										<h5 className="mb-0 d-flex align-items-center  fs-5 lh-1">
											<Icon
												path={mdiSquareRounded}
												className="text-info fs-5 me-2"
												size={0.6}
											/>
											Android
										</h5>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* end of Users by Country + Traffic Channel + Operating System  */}

			{/* Browsers + Social Media Traffic + Most View Pages  */}
			<Row>
				<Col xl={4} lg={12} md={12} className="mb-4">
					<Browsers title="Browsers" />
				</Col>

				<Col xl={4} lg={12} md={12} className="mb-4">
					<SocialMediaTraffic title="Social Media Traffic" />
				</Col>

				<Col xl={4} lg={12} md={12} className="mb-4">
					<MostViewPages title="Most View Pages" />
				</Col>
			</Row>
			{/* end of Users by Country + Traffic Channel + Operating System  */}
		</Fragment>
	);
};

export default Analytics;
