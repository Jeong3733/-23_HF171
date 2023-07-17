// import node module libraries
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub components
import CommonHeaderTabs from '../CommonHeaderTabs';
import TaskStats from './TaskStats';
import TaskSummaryChart from './TaskSummaryChart';
import TaskCompletionStatusChart from './TaskCompletionStatusChart';
import TaskbySectionsChart from './TaskbySectionsChart';
import UpcomingTaskList from './UpcomingTaskList';

const ProjectTask = () => {
	return (
		<Fragment>
			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* various stats of task */}
			<TaskStats />

			<Row>
				<Col xl={8} md={12} xs={12} className="mb-4">
					{/* task summary chart  */}
					<TaskSummaryChart />
				</Col>
				<Col xl={4} md={12} xs={12} className="mb-4">
					{/* task completion status chart  */}
					<TaskCompletionStatusChart />
				</Col>
			</Row>
			<Row>
				<Col xl={4} xs={12} className="mb-4 mb-xl-0">
					{/* task by sections chart  */}
					<TaskbySectionsChart />
				</Col>
				<Col xl={8} xs={12} className="mb-4 mb-xl-0">
					{/* upcoming task list by assignee  */}
					<UpcomingTaskList />
				</Col>
			</Row>
		</Fragment>
	);
};

export default ProjectTask;
