// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

// import data files
import RecentActivityData from 'data/dashboard/projects/RecentActivityData';

const RecentActivity = () => {
	return (
		<Card>
			{/* Card header */}
			<Card.Header className="card-header-height d-flex justify-content-between align-items-center">
				<div>
					{' '}
					<h4 className="mb-0">Recent Activity</h4>
				</div>
				<div>
					<Link to="#" className="">
						View All
					</Link>
				</div>
			</Card.Header>

			{/* Card body */}
			<Card.Body>
				{/* List group */}
				<ListGroup variant="flush" className="list-timeline-activity">
					{RecentActivityData.map((item, index) => {
						return (
							<ListGroup.Item className="px-0 pt-0 border-0 pb-6" key={index}>
								<Row className="position-relative">
									<Col xs="auto">
										<div className="icon-shape icon-md bg-light-primary text-primary rounded-circle">
											<i className={`fe fe-${item.icon}`}></i>
										</div>
									</Col>
									<Col className="ms-n3">
										<h4 className="mb-0 h5">{item.activity}</h4>
										<p
											className="mb-0 text-body"
											dangerouslySetInnerHTML={{ __html: item.activitybrief }}
										></p>
									</Col>
									<Col xs="auto">
										<span className="text-muted fs-6">{item.time}</span>
									</Col>
								</Row>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
export default RecentActivity;
