// import node module libraries
import { Fragment, useState } from 'react';
import { Card, Form, Button, Modal } from 'react-bootstrap';

// import custom components
import GKAccordionActions from 'components/marketing/common/accordions/GKAccordionActions';

// import data files
import NewCourseData from 'data/marketing/NewCourseData';

const AddLecture = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Button
				variant="outline-primary"
				className="btn btn-outline-primary btn-sm mt-3"
				onClick={handleShow}
			>
				Add Lecture +
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Lecture</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pb-0">
					<Form.Group className="mb-3" controlId="formaddnewlecture">
						<Form.Control type="text" placeholder="Add new lecture" />
					</Form.Group>
				</Modal.Body>
				<Modal.Footer className="pt-0 border-0 d-inline ">
					<Button variant="primary">Add New Lecture</Button>
					<Button variant="outline-secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

const AddSection = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Button
				variant="outline-primary"
				className="btn btn-outline-primary btn-sm mt-3"
				onClick={handleShow}
			>
				Add Section
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Section</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pb-0">
					<Form.Group className="mb-3" controlId="formaddnewsection">
						<Form.Control type="text" placeholder="Add new section" />
					</Form.Group>
				</Modal.Body>
				<Modal.Footer className="pt-0 border-0 d-inline ">
					<Button variant="primary">Add New Section</Button>
					<Button variant="outline-secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

const Curriculum = (props) => {
	const { next, previous } = props;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Curriculum</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					<div className="bg-light rounded p-2 mb-4">
						<h4>Introduction to JavaScript</h4>
						{/* Item list */}
						<GKAccordionActions accordionItems={NewCourseData} />
						<AddLecture />
					</div>
					<div className="bg-light rounded p-2 mb-4">
						<h4>JavaScript Beginnings</h4>
						{/* Item list */}
						<GKAccordionActions accordionItems={NewCourseData} />
						<AddLecture />
					</div>
					<AddSection />
				</Card.Body>
			</Card>
			{/* Button */}
			<div className="d-flex justify-content-between">
				<Button variant="secondary" onClick={previous}>
					Previous
				</Button>
				<Button variant="primary" onClick={next}>
					Next
				</Button>
			</div>
		</Form>
	);
};
export default Curriculum;
