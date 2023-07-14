// import node module libraries
import React from 'react';
import { Col, Row, Card, ListGroup, Image } from 'react-bootstrap';

// import data files
import ActivityData from 'data/users/ActivityData';

const Activity = ({ title }) => {
	return (
		<Card className="h-100">
			<Card.Header className="d-flex align-items-center justify-content-between card-header-height">
				<h4 className="mb-0">{title}</h4>
			</Card.Header>
			<Card.Body>
				<ListGroup className="list-timeline-activity">
					{ActivityData.slice(0, 5).map((item, index) => (
						<ListGroup.Item className="px-0 pt-0 border-0 mb-2" key={index}>
							<Row>
								<Col className="col-auto">
									<div
										className={`avatar avatar-md avatar-indicators avatar-${item.status}`}
									>
										<Image
											alt="avatar"
											src={item.image}
											className="rounded-circle"
										/>
									</div>
								</Col>
								<Col className="ms-n2">
									<h4 className="mb-0 h5">{item.name}</h4>
									<p className="mb-1">{item.topic}</p>
									<span className="fs-6">{item.postedon}</span>
								</Col>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
export default Activity;
