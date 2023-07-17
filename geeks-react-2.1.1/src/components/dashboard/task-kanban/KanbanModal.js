// import node module libraries
import React, { useContext, useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

// import custom components
import { FlatPickr } from 'components/elements/flat-pickr/FlatPickr';
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import context file
import { TaskKanbanContext } from 'context/Context';

const KanbanModal = (props) => {
	const { columnno, onHide } = props;

	const [title, setTitle] = useState('');
	const [priority, setPriority] = useState('');
	const [description, setDescription] = useState('');
	const [assignTo, setAssignTo] = useState('');
	const [dueDate, setDueDate] = useState('');

	const {
		TaskKanbanState: { teamMembers },
		TaskKanbanDispatch
	} = useContext(TaskKanbanContext);

	const newTask = {
		columnno: columnno,
		taskIds: {
			id: uuid(),
			title: title,
			priority: priority,
			dueDate: dueDate,
			description: description,
			assignTo: assignTo,
			attachments: 0,
			comments: 0
		}
	};

	const priorityOptions = [
		{ value: 'Low', label: 'Low' },
		{ value: 'Medium', label: 'Medium' },
		{ value: 'High', label: 'High' }
	];

	const assignToOptions = [];
	teamMembers.map((item) => {
		return assignToOptions.push({ value: item.id, label: item.name });
	});

	const handleOnShow = () => {
		setTitle('');
		setPriority('');
		setDueDate('');
		setDescription('');
		setAssignTo('');
	};
	const handleTaskSubmit = (e) => {
		e.preventDefault();
		TaskKanbanDispatch({
			type: 'ADD_NEW_TASK',
			payload: newTask
		});
		onHide();
	};

	return (
		<Modal
			{...props}
			onShow={handleOnShow}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create New Task
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleTaskSubmit}>
					<Row>
						<Col xs={12} className="mb-2">
							<Form.Group controlId="taskTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control
									type="text"
									placeholder="Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									autoFocus
									required
								/>
							</Form.Group>
						</Col>
						<Col xs={6}>
							<Form.Group controlId="priority">
								<Form.Label>Priority</Form.Label>
								<Form.Control
									as={FormSelect}
									options={priorityOptions}
									placeholder="Priority"
									defaultselected=""
									value={priority}
									onChange={(e) => setPriority(e.target.value)}
									required
								/>
							</Form.Group>
						</Col>
						<Col xs={6} className="mb-2">
							<Form.Group controlId="dueDate">
								<Form.Label>Due Date</Form.Label>
								<FlatPickr
									value={dueDate}
									options={{
										dateFormat: 'd M y'
									}}
									onChange={(date, dateStr) => {
										setDueDate(dateStr);
									}}
									placeholder="Select Due Date"
									required
								/>
							</Form.Group>
						</Col>
						<Col xs={12} className="mb-2">
							<Form.Group className="mb-3" controlId="descriptions">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Form.Group>
						</Col>
						<Col xs={12} className="mb-3">
							<Form.Group controlId="assignTo">
								<Form.Label>Assign To</Form.Label>
								<Form.Control
									as={FormSelect}
									options={assignToOptions}
									value={assignTo}
									onChange={(e) => setAssignTo(e.target.value)}
									placeholder="Assign To"
									required
								/>
							</Form.Group>
						</Col>
						{/* Buttons */}
						<Col xs={12} className="d-flex justify-content-end">
							<Button
								variant="outline-secondary"
								className="me-2"
								onClick={onHide}
							>
								Cancel
							</Button>
							<Button variant="primary" type="submit">
								Create Task
							</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default KanbanModal;
