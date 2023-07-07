// import node module libraries
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub components
import CommonHeaderTabs from '../CommonHeaderTabs';
import BudgetCard from './BudgetCard';
import ExpensesChartCard from './ExpensesChartCard';
import BudgetCategoryCard from './BudgetCategoryCard';
import BudgetDetailsCard from './BudgetDetailsCard';

const ProjectBudget = () => {
	return (
		<Fragment>
			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* total budget, spend and remaining  */}
			<BudgetCard />

			{/* expenses chart and budget categories table cards */}
			<Row>
				<Col lg={6} className="mb-4">
					<ExpensesChartCard />
				</Col>
				<Col lg={6} className="mb-4">
					<BudgetCategoryCard />
				</Col>
			</Row>

			{/* budget details table card */}
			<BudgetDetailsCard />
		</Fragment>
	);
};

export default ProjectBudget;
