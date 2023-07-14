// import node module libraries
import { Card, Row, Col } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import {
	UserChartSeries,
	UserChartOptions,
	VisitorChartSeries,
	VisitorChartOptions,
	BounceChartSeries,
	BounceChartOptions,
	AverageVisitTimeChartSeries,
	AverageVisitTimeChartOptions
} from 'data/charts/ChartData';

function ShowChart(chartName) {
	switch (chartName) {
		case 'UserChart':
			return (
				<ApexCharts
					options={UserChartOptions}
					series={UserChartSeries}
					height={60}
					type="area"
				/>
			);
		case 'VisitorChart':
			return (
				<ApexCharts
					options={VisitorChartOptions}
					series={VisitorChartSeries}
					height={60}
					type="area"
				/>
			);
		case 'BounceChart':
			return (
				<ApexCharts
					options={BounceChartOptions}
					series={BounceChartSeries}
					height={60}
					type="line"
				/>
			);
		case 'AverageVisitTimeChart':
			return (
				<ApexCharts
					options={AverageVisitTimeChartOptions}
					series={AverageVisitTimeChartSeries}
					height={60}
					type="area"
				/>
			);
		default:
			return chartName + ' chart is undefiend';
	}
}

const StatRightChart = (props) => {
	const {
		title,
		value,
		summaryValue,
		summaryIcon,
		showSummaryIcon,
		classValue,
		chartName
	} = props;

	return (
		<Card border="light" className={`${classValue}`}>
			<Card.Body>
				<Row>
					<Col md={12} lg={12} xl={12} sm={12}>
						<span className="fw-semi-bold text-uppercase fs-6">{title}</span>
					</Col>
					<Col md={6} lg={6} xl={6} sm={6}>
						<h1 className="fw-bold mt-2 mb-0 h2">{value}</h1>
						<p
							className={`text-${
								summaryIcon === 'up' ? 'success' : 'danger'
							} fw-semi-bold mb-0`}
						>
							{showSummaryIcon ? (
								<i className={`fe fe-trending-${summaryIcon} me-1`}></i>
							) : (
								''
							)}{' '}
							{summaryValue}
						</p>
					</Col>
					<Col
						md={6}
						lg={6}
						xl={6}
						sm={6}
						className="d-flex align-items-center"
					>
						{ShowChart(chartName)}
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default StatRightChart;
