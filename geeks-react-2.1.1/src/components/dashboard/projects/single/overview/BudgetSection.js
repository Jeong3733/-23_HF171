// import node module libraries
import { Row, Col, Card } from 'react-bootstrap';

// import custom components
import StatRightCenterIcon from 'components/dashboard/common/stats/StatRightCenterIcon';

const BudgetSection = () => {
	return (
		<Card>
			<Card.Header className="card-header">
				<h4 className="mb-0">Budget </h4>
			</Card.Header>
			<Row>
				<Col lg={4} md={12} xs={12}>
					<StatRightCenterIcon
						title="Total Budget"
						value="$52,000"
						iconName="dollar-sign"
						iconColorVariant="primary"
					/>
				</Col>
				<Col lg={4} md={12} xs={12} className="border-start-md">
					<StatRightCenterIcon
						title="Total Spent"
						value="$43,230"
						iconName="shopping-cart"
						iconColorVariant="danger"
					/>
				</Col>
				<Col lg={4} md={12} xs={12} className="border-start-md">
					<StatRightCenterIcon
						title="Remaining"
						value="$8,770"
						iconName="pie-chart"
						iconColorVariant="success"
					/>
				</Col>
			</Row>
		</Card>
	);
};
export default BudgetSection;
