// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Dropdown } from 'react-bootstrap';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

const TeamGridCard = ({ item }) => {
	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			className="text-muted text-decoration-none"
			to=""
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
			<Dropdown as="span">
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-horizontal fs-4"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="start">
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<i className="fe fe-trash-2 dropdown-item-icon"></i>Remove
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<i className="fe fe-edit dropdown-item-icon"></i>Edit
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Card className="mb-4">
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="avatar avatar-lg">
						<Image src={item.image} className="rounded-circle" alt="" />
					</div>
					<div className="ms-3">
						<h4 className="mb-0">
							<Link to="#" className="text-inherit">
								{item.name}
							</Link>
						</h4>
						<p className="mb-0 text-muted">{item.topic}</p>
					</div>
				</div>

				<div className="mt-4 lh-1">
					<GKTippy content={<span className="mb-0">Voice Call</span>}>
						<Link to="#" className="me-3 text-muted" data-template="phone">
							<i className="fe fe-phone-call fs-4"></i>
						</Link>
					</GKTippy>

					<GKTippy content={<span className="mb-0">Video Call</span>}>
						<Link to="#" className="me-3 text-muted" data-template="video">
							<i className="fe fe-video fs-4"></i>
						</Link>
					</GKTippy>

					<ActionMenu />
				</div>
			</Card.Body>
		</Card>
	);
};

export default TeamGridCard;
