// import node module libraries
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

// import custom components
import StatRightCenterIcon from 'components/dashboard/common/stats/StatRightCenterIcon';

const BudgetCard = () => {
	return (
		<Row>
			<Col md={12} className="mb-4">
				<Card>
					<Row>
						<Col md={12}>
							<div className="border-bottom p-4">
								<h3 className="mb-4 card-title">Budget </h3>
								<div className="d-flex justify-content-between mb-3">
									<div>
										<span>
											<span className="text-dark fw-bold">$52,000 </span>(Total){' '}
										</span>
									</div>
									<div>
										<span>
											<span className="text-dark fw-bold">$8,770 </span>
											Remaining{' '}
										</span>
									</div>
								</div>
								<ProgressBar style={{ height: '8px' }}>
									<ProgressBar now={50} style={{ width: '15%' }} />
									<ProgressBar
										variant="success"
										now={50}
										style={{ width: '18%' }}
									/>
									<ProgressBar
										variant="danger"
										now={50}
										style={{ width: '10%' }}
									/>
									<ProgressBar
										variant="warning"
										now={50}
										style={{ width: '16%' }}
									/>
									<ProgressBar
										variant="info"
										now={50}
										style={{ width: '22%' }}
									/>
								</ProgressBar>
							</div>
						</Col>
						<Col lg={4} md={12} xs={12}>
							<StatRightCenterIcon
								title="Total Budget"
								value="$52,000"
								iconName="dollar-sign"
								iconColorVariant="primary"
							/>
						</Col>
						<Col lg={4} md={12} xs={12} className="border-start">
							<StatRightCenterIcon
								title="Total Spent"
								value="$43,230"
								iconName="shopping-cart"
								iconColorVariant="danger"
							/>
						</Col>
						<Col lg={4} md={12} xs={12} className="border-start">
							<StatRightCenterIcon
								title="Remaining"
								value="$8,770"
								iconName="pie-chart"
								iconColorVariant="success"
							/>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};
export default BudgetCard;
