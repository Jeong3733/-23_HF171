// import node module libraries
import React, { Fragment, useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { Dropdown, Card, Badge, Form } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import sub custom components
import KanbanModal from './KanbanModal';

// import context file
import { TaskKanbanContext } from 'context/Context';

const KanbanTask = (props) => {
	const { task, index } = props;

	const {
		TaskKanbanState: { teamMembers },
		TaskKanbanDispatch
	} = useContext(TaskKanbanContext);

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
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-horizontal fs-4"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align={'end'}>
					<Dropdown.Item eventKey="1" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-edit-2"></i> Edit this task
					</Dropdown.Item>
					<Dropdown.Item eventKey="2" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-check-square"></i>Mark
					</Dropdown.Item>
					<Dropdown.Item eventKey="3" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-eye"></i>View Details
					</Dropdown.Item>
					<Dropdown.Item eventKey="4" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-maximize-2"></i>Open in New
						Tab
					</Dropdown.Item>
					<Dropdown.Item eventKey="5" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-copy"></i>Duplicate task
					</Dropdown.Item>
					<Dropdown.Item eventKey="6" className="d-flex align-items-center">
						<i className="dropdown-item-icon fe fe-link"></i>Copy task link
					</Dropdown.Item>
					<Dropdown.Item
						eventKey="7"
						className="d-flex align-items-center"
						onClick={() => handleDeleteTask(task.id)}
					>
						<i className="dropdown-item-icon fe fe-trash-2"></i>Delete task
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const handleDeleteTask = (taskId) => {
		TaskKanbanDispatch({
			type: 'DELETE_TASK',
			payload: taskId
		});
	};

	return (
		<Fragment>
			{/* task kanban */}
			<div className="task-kanban">
				<div id="do">
					<Draggable draggableId={`${task.id}`} index={index}>
						{(provided) => (
							<div
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								ref={provided.innerRef}
							>
								<Card>
									<Card.Body className="p-3">
										<div className="d-flex justify-content-between">
											<div>
												{/* checkbox */}
												<Form>
													<Form.Check
														type="checkbox"
														id={`checkbox-${task.id}`}
													>
														<Form.Check.Label>
															<span className="h5">{task.title}</span>
															<br />
															<Badge
																bg={
																	task.priority === 'High'
																		? 'danger'
																		: task.priority === 'Medium'
																		? 'warning'
																		: 'info'
																}
																className="me-1"
															>
																{task.priority}
															</Badge>
														</Form.Check.Label>
														<Form.Check.Input type="checkbox" />
													</Form.Check>
												</Form>
											</div>
											<div>
												{/* action dropdown */}
												<ActionMenu />
												<KanbanModal
													show={showModal}
													columnno={-1}
													taskId={task.id}
													onHide={() => setShowModal(false)}
												/>
											</div>
										</div>

										{/* task description */}
										<div
											className="mt-3 ps-4"
											dangerouslySetInnerHTML={{ __html: task.description }}
										></div>

										<div className="d-flex justify-content-between align-items-center ps-4 mt-6">
											{/* assign to - avatar and name and due date */}
											<div className="d-flex align-items-center">
												{teamMembers
													.filter(
														(dataSource) =>
															dataSource.id === parseInt(task.assignTo)
													)
													.map((item, index) => {
														return (
															<Avatar
																key={index}
																size="xs"
																src={item.image}
																type="image"
																className="rounded-circle"
																name={item.name}
																imgtooltip
															/>
														);
													})}
												<div className="ms-2">
													<span className="fs-6">
														<i className="fe fe-clock text-muted me-1"></i>
														{task.dueDate}
													</span>
												</div>
											</div>

											{/* attachments and comments count */}
											<div>
												<span className="me-2 align-middle">
													<i className="fe fe-paperclip fs-6 text-muted"></i>{' '}
													<span className="fw-semi-bold fs-6">
														{task.attachments}
													</span>
												</span>
												<span className="align-middle">
													<i className="fe fe-message-square fs-6 text-muted"></i>{' '}
													<span className="fw-semi-bold fs-6">
														{task.comments}
													</span>
												</span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</div>
						)}
					</Draggable>
				</div>
			</div>
		</Fragment>
	);
};

export default KanbanTask;
