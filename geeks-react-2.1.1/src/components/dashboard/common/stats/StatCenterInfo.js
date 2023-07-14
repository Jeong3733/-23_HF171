// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';

const StatCenterInfo = (props) => {
	const { title, value, valueColorVariant, contentHTML } = props;

	// The forwardRef is important!!
	// Dropdown needs access to the DOM node in order to position the Menu
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			className="btn-icon btn btn-ghost btn-sm rounded-circle"
		>
			{children}
		</Link>
	));

	const ActionMenu = () => {
		return (
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>Settings</Dropdown.Header>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Card className="mb-4">
			<Card.Body>
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<h4 className="mb-0">{title}</h4>
					</div>
					<div>
						<ActionMenu />
					</div>
				</div>
				{/* text center  */}
				<div className="text-center my-4">
					<h1 className={`display-3 text-${valueColorVariant} mb-0 fw-bold`}>
						{value}
					</h1>
					<p
						className="mb-0"
						dangerouslySetInnerHTML={{ __html: contentHTML }}
					></p>
				</div>
			</Card.Body>
		</Card>
	);
};
export default StatCenterInfo;
