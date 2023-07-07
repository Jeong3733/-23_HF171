// import node module libraries
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Modal, Button, Form } from 'react-bootstrap';

// import custom components
import Question from 'components/marketing/common/quiz/Question';
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import data files
import { QuizData } from 'data/marketing/quiz/QuizData';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/instructor/ProfileLayout';

// import courses images
import ReactCourse from 'assets/images/course/course-react.jpg';

const QuizSingle = () => {
	const [modalShow, setModalShow] = useState(false);

	const AddNewCourse = (props) => {
		const questionTypeOptions = [
			{ value: 'Newest', label: 'Newest' },
			{ value: 'High Rated', label: 'High Rated' },
			{ value: 'Law Rated', label: 'Law Rated' },
			{ value: 'High Earned', label: 'High Earned' }
		];

		return (
			<Modal
				{...props}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton className="border-0 pb-0">
					<Modal.Title>Add Quiz Question</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Form>
							<div className="mb-5">
								<h4 className="mb-3">General</h4>
								{/* Write your question */}
								<Form.Group className="mb-3">
									<Form.Label htmlFor="quiz-title">
										Write your question
									</Form.Label>
									<Form.Control
										placeholder="Quiz title"
										id="quiz-title"
										options={questionTypeOptions}
									/>
								</Form.Group>

								{/* Question Type */}
								<Form.Group className="mb-3">
									<Form.Label htmlFor="question-type">Question Type</Form.Label>
									<Form.Control
										as={FormSelect}
										placeholder="Select Question Type"
										id="question-type"
										options={questionTypeOptions}
									/>
								</Form.Group>
							</div>
							<div className="">
								<h4 className="mb-3">Answer</h4>
								{/* Enter possible answers */}
								{[1, 2, 3, 4].map((item, index) => {
									return (
										<Form.Group className="mb-2" key={index}>
											<Form.Label
												className="mb-2 d-flex justify-content-between align-items-center fw-normal"
												htmlFor={`input-choice-${item}`}
											>
												<div>
													<h5 className="mb-0 fw-normal">Choice {item}</h5>
												</div>
												<div className="">
													<div className="d-flex align-items-center lh-1">
														<span>Correct answer</span>
														<Form.Check
															type="switch"
															id={`custom-switch-${item}`}
															className="ms-2"
														/>
													</div>
												</div>
											</Form.Label>
											<Form.Control
												type="text"
												id={`input-choice-${item}`}
												placeholder="Write the answer"
											/>
										</Form.Group>
									);
								})}
								<div className="mb-4">
									{/* Point to the answer */}
									<Form.Group className="mb-3">
										<Form.Label htmlFor="point-to-the-answer">
											Point for this answer
										</Form.Label>
										<Form.Control
											as="textarea"
											placeholder="Give point to the answer"
											id="point-to-the-answer"
											rows={3}
										/>
									</Form.Group>
								</div>
							</div>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer className="border-0 pt-0">
					<Button variant="secondary" onClick={props.onHide}>
						Close
					</Button>
					<Button variant="primary" onClick={props.onHide}>
						Add Quiz
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};
	return (
		<ProfileLayout>
			<Card className="mb-4">
				<Card.Body>
					<div className="d-lg-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<Link to="#">
								<img src={ReactCourse} alt="" className="rounded img-4by3-lg" />
							</Link>
							<div className="ms-3">
								<h3 className="mb-2">
									<Link to="#" className="text-inherit">
										React Basic Quiz{' '}
									</Link>
								</h3>
								<div>
									<span>
										<span className="me-2 align-middle">
											<i className="fe fe-list"></i>
										</span>
										20 Questions
									</span>
									<span className="ms-2">
										<span className="me-2 align-middle">
											<i className="fe fe-clock"></i>
										</span>
										18 Minutes
									</span>
									<span className="ms-2">
										<span className="me-2 align-middle">
											<i className="fe fe-file-text"></i>
										</span>
										Result
									</span>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block">
							<Button variant="primary" onClick={() => setModalShow(true)}>
								Add new Questions
							</Button>
							<AddNewCourse
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
						</div>
					</div>
				</Card.Body>
			</Card>
			{QuizData.map((item, index) => {
				return (
					<Card className="mb-4" key={index}>
						<Card.Body>
							<Question item={item} />
							<div className="mt-3">
								<Link to="#" className="btn btn-outline-secondary">
									Edit
								</Link>
								<Link to="#" className="btn btn-outline-danger ms-2">
									Delete
								</Link>
							</div>
						</Card.Body>
					</Card>
				);
			})}
		</ProfileLayout>
	);
};

export default QuizSingle;
