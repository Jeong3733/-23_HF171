// import node module libraries
import { Row, Col, Card, Table } from 'react-bootstrap';

// import utility file
import { numberWithCommas, getCategoryColor } from 'helper/utils';

// import bootstrap icons
import { SquareFill, ArrowDown, ArrowUp } from 'react-bootstrap-icons';

// Import required data files
import BudgetDetailsData from 'data/dashboard/projects/BudgetDetailsData';

const BudgetDetailsCard = () => {
	return (
		<Row>
			<Col xs={12}>
				<Card>
					<Card.Header>
						<h4 className="mb-0">Budget Details</h4>
					</Card.Header>
					{/* table */}
					<Table hover responsive className="text-nowrap mb-0 table-centered">
						<thead className="table-light">
							<tr>
								<th>Type</th>
								<th>Total Budget</th>
								<th>Expenses (USD)</th>
								<th>Expenses(%)</th>
								<th>Remaining(USD)</th>
							</tr>
						</thead>
						<tbody>
							{BudgetDetailsData.map((item, index) => {
								return (
									<tr key={index}>
										<td>
											<SquareFill
												size={8}
												className={`me-2 text-${getCategoryColor(
													item.category
												)}`}
											/>
											{item.category}
										</td>
										<td>${numberWithCommas(item.total)}</td>
										<td>${numberWithCommas(item.expensesUSD)}</td>
										<td>
											{item.expensesPercent}%{' '}
											{item.updown === 'up' ? (
												<ArrowUp size={15} className="text-danger" />
											) : (
												<ArrowDown size={15} className="text-success" />
											)}
										</td>
										<td>${numberWithCommas(item.total - item.expensesUSD)}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</Card>
			</Col>
		</Row>
	);
};
export default BudgetDetailsCard;
