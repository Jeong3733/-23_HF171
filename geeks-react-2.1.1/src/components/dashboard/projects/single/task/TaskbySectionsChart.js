// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';

// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

// import data files
import {
	TaskSectionChartSeries,
	TaskSectionChartOptions
} from 'data/charts/ChartData';

const TaskbySectionsChart = () => {
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
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>Settings</Dropdown.Header>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Card className="h-100">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div>
						<h4 className="mb-0">Task by Sections</h4>
					</div>
					<div>
						{/* dropdown  */}
						<ActionMenu />
					</div>
				</div>
				{/* chart  */}
				<ApexCharts
					options={TaskSectionChartOptions}
					series={TaskSectionChartSeries}
					type="radialBar"
					height={400}
				/>
			</Card.Body>
		</Card>
	);
};
export default TaskbySectionsChart;
