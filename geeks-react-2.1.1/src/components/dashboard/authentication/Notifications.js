// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	ListGroup,
	OverlayTrigger,
	Tooltip,
	CloseButton,
	Image
} from 'react-bootstrap';
import { ThumbsUp, Award, MessageSquare } from 'react-feather';
import { Link } from 'react-router-dom';

// import custom components
import DotBadge from 'components/elements/bootstrap/DotBadge';

// import data files
import NotificationData from 'data/dashboard/NotificationData';

const Notifications = () => {
	function NotificationsIcon(icon, color) {
		if (icon === 'ThumbsUp') {
			return <ThumbsUp className={`text-${color} me-1`} size="12px" />;
		}
		if (icon === 'Award') {
			return <Award className={`text-${color} me-1`} size="12px" />;
		}
		if (icon === 'MessageSquare') {
			return <MessageSquare className={`text-${color} me-1`} size="12px" />;
		}
	}

	function MarkAsRead(removable) {
		if (removable) {
			return (
				<Fragment>
					<OverlayTrigger
						placement="top"
						overlay={<Tooltip id="tooltip-top">Mark as read</Tooltip>}
					>
						<Link to="#">
							<DotBadge bg="info"></DotBadge>
						</Link>
					</OverlayTrigger>

					<OverlayTrigger
						placement="top"
						overlay={<Tooltip id="tooltip-top">Remove</Tooltip>}
					>
						<CloseButton className="btn-close fs-6 d-block me-1" />
					</OverlayTrigger>
				</Fragment>
			);
		} else {
			return (
				<OverlayTrigger
					placement="top"
					overlay={<Tooltip id="tooltip-top">Mark as unread</Tooltip>}
				>
					<Link to="#">
						<DotBadge bg="secondary"></DotBadge>
					</Link>
				</OverlayTrigger>
			);
		}
	}

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 font-weight-bold">Notification History</h1>
							<p className="mb-0">Check your all notification and read it.</p>
						</div>
						<div>
							<Link to="#" className="btn btn-white">
								Mark all as read
							</Link>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<Card className="rounded-3">
						<Card.Body className="rounded-3 p-0">
							<ListGroup>
								{NotificationData.map((item, index) => {
									return (
										<ListGroup.Item className="py-4" key={index}>
											<Row className="align-items-center">
												<Col>
													<div className="d-flex align-items-center">
														<Link to="#">
															<Image
																src={item.image}
																alt=""
																className="avatar-lg rounded-circle"
															/>
														</Link>
														<div className="ms-3">
															<Link to="#">
																<p className="mb-0 text-body">
																	<span className="fw-bold mb-0 h5">
																		{item.name}:
																	</span>{' '}
																	{item.notification}
																</p>
															</Link>
															<span className="fs-6 text-muted">
																<span>
																	{NotificationsIcon(
																		item.icon,
																		item.colorClass
																	)}
																	{item.date},
																</span>
																<span className="ms-1">{item.time}</span>
															</span>
														</div>
													</div>
												</Col>
												<Col className="col-auto text-center p-2">
													{MarkAsRead(item.removable)}
												</Col>
											</Row>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Notifications;
