// import node module libraries
import React, { Fragment, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { Dropdown, Card, Button } from 'react-bootstrap';

// import sub custom components
import KanbanModal from './KanbanModal';
import KanbanTask from './KanbanTask';

const KanbanColumn = (props) => {
	const { columnData } = props;
	const [showModal, setShowModal] = useState(false);

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			className="btn-icon btn btn-ghost btn-sm rounded-circle"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	const ActionMenu = () => {
		return (
			<Dropdown drop="start">
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-horizontal fs-4"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="start">
					<Dropdown.Item eventKey="1" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-users"></i> Edit Column
					</Dropdown.Item>
					<Dropdown.Item eventKey="2" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-user-x"></i> Manage
					</Dropdown.Item>
					<Dropdown.Item eventKey="3" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-clipboard"></i> Copy Column
						link
					</Dropdown.Item>
					<Dropdown.Item eventKey="4" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-edit"></i> Archive All Cards
					</Dropdown.Item>
					<Dropdown.Item eventKey="5" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-trash-2"></i> Delete column
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Fragment>
			<Card className="card bg-gray-200 shadow-none rounded-3 d-inline-block me-4 align-top mb-4 task-card">
				<Card.Body className="card-body p-3">
					{/* task list */}
					<div className="task-list">
						{/* content */}
						<div className="d-flex justify-content-between align-items-center mb-3">
							<div>
								{/* column heading */}
								<h4 className="mb-0">{columnData.title}</h4>
							</div>
							<div className="d-flex align-items-center">
								{/* dropdown */}
								<ActionMenu />
							</div>
						</div>

						{/* task list */}
						<div className="task-kanban">
							<Droppable droppableId={`${columnData.id - 1}`}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										className="tasks-container"
										{...provided.droppableProps}
									>
										{columnData.taskIds.map((task, index) => {
											return (
												<KanbanTask
													key={task.id}
													// id={task.id}
													task={task}
													index={index}
												/>
											);
										})}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>

						<div className="mt-3">
							{/* button */}
							<div className="d-grid">
								<div className="d-grid">
									<Button
										type="button"
										variant="outline-secondary"
										size="sm"
										onClick={() => setShowModal(true)}
									>
										<i className="fe fe-plus-circle me-1"></i>Add Task
									</Button>
									<KanbanModal
										show={showModal}
										columnno={columnData.id}
										onHide={() => setShowModal(false)}
									/>
								</div>
							</div>
						</div>
					</div>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default KanbanColumn;
