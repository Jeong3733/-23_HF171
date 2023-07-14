// import node module libraries
import { Card, Table } from 'react-bootstrap';

// import utility file
import { numberWithCommas, getCategoryColor } from 'helper/utils';

// import bootstrap icons
import { SquareFill } from 'react-bootstrap-icons';

// Import required data files
import BudgetCategoryData from 'data/dashboard/projects/BudgetCategoryData';

const BudgetCategoryCard = () => {
	return (
		<Card className="h-100">
			<Card.Header>
				<h4 className="mb-0">Budget Category</h4>
			</Card.Header>

			{/* table */}
			<Table hover responsive className="text-nowrap mb-0 table-centered">
				<thead className="table-light">
					<tr>
						<th>Category</th>
						<th>Total</th>
						<th>Percentage</th>
					</tr>
				</thead>
				<tbody>
					{BudgetCategoryData.map((item, index) => {
						return (
							<tr key={index}>
								<td>
									<SquareFill
										size={8}
										className={`me-2 text-${getCategoryColor(item.category)}`}
									/>
									{item.category}
								</td>
								<td>${numberWithCommas(item.total, 2)}</td>
								<td>{item.percentage}%</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Card>
	);
};
export default BudgetCategoryCard;
