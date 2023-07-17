// import node module libraries
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Image, Modal, Button, ListGroup, Badge } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiPlay } from '@mdi/js';

// Import required data
import { CourseIndex } from 'data/marketing/CourseIndexData';

const CourseDescriptionCard = ({ item }) => {
	const [modalShow, setModalShow] = useState(false);

	const ChapterDetails = (props) => {
		const { item } = props;
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<div className="d-md-flex my-2">
							<div className="mb-3 mb-md-0">
								<Image
									src={item.icon}
									alt=""
									className=" bg-primary icon-shape icon-xxl rounded-circle"
								/>
							</div>
							{/*  Content  */}
							<div className="ms-md-4">
								<h2 className="fw-bold mb-1">
									{item.title}
									<Badge bg="warning" className="ms-2">
										{item.badge}
									</Badge>
								</h2>
								<p className="text-uppercase fs-6 fw-semi-bold mb-0">
									<span className="text-dark">Courses - {item.id}</span>{' '}
									<span className="ms-3">{item.lessons} Lessons</span>{' '}
									<span className="ms-3">{item.duration}</span>
								</p>
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h3>In this course you’ll learn:</h3>
					<p className="font-size-md">{item.shortdescription}</p>
					{CourseIndex.filter(function (datasource) {
						return datasource.id === item.coursechapterid;
					}).map((item, index) => {
						return (
							<ListGroup className="pb-3" key={index} variant="flush">
								{item.topics.map((subitem, subindex) => (
									<ListGroup.Item
										key={subindex}
										disabled={subitem.locked}
										className="px-0"
									>
										<Link
											to="#!"
											className="d-flex justify-content-between align-items-center text-inherit text-decoration-none"
										>
											<div className="text-truncate ">
												<span
													className={`icon-shape bg-light text-${
														subitem.locked ? 'muted' : 'primary'
													} icon-sm rounded-circle me-2`}
												>
													{subitem.locked ? (
														<i className="fe fe-lock fs-4"></i>
													) : (
														<Icon path={mdiPlay} size={0.8} />
													)}{' '}
												</span>
												<span className="fs-5">{subitem.topic}</span>
											</div>
											<div className="text-truncate">
												<span>{subitem.duratoin}</span>
											</div>
										</Link>
									</ListGroup.Item>
								))}
							</ListGroup>
						);
					})}
				</Modal.Body>
			</Modal>
		);
	};

	return (
		<Card className="mb-4">
			{/*  Card body  */}
			<Card.Body className="p-6">
				<div className="d-md-flex mb-4">
					<div className="mb-3 mb-md-0">
						<Image
							src={item.icon}
							alt=""
							className=" bg-primary icon-shape icon-xxl rounded-circle"
						/>
					</div>
					{/*  Content  */}
					<div className="ms-md-4">
						<h2 className="fw-bold mb-1">
							{item.title}
							<Badge bg="warning" className="ms-2">
								{item.badge}
							</Badge>
						</h2>
						<p className="text-uppercase fs-6 fw-semi-bold mb-0">
							<span className="text-dark">Courses - {item.id}</span>{' '}
							<span className="ms-3">{item.lessons} Lessons</span>{' '}
							<span className="ms-3">{item.duration}</span>
						</p>
					</div>
				</div>
				<p className="mb-4 fs-4">{item.shortdescription}</p>
				<Button
					variant="primary"
					href="#"
					bsPrefix="btn-link"
					onClick={() => setModalShow(true)}
				>
					<u>View Chapter Details +</u>
				</Button>

				<ChapterDetails
					show={modalShow}
					onHide={() => setModalShow(false)}
					item={item}
				/>
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
CourseDescriptionCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default CourseDescriptionCard;
