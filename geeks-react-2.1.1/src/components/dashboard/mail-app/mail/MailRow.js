// import node module libraries
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Form, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';

// import bootstrap icons
import { Star, StarFill } from 'react-bootstrap-icons';

const MailRow = ({ mail, isSelectedMail, handleToggleSelection = [] }) => {
	const { id, user, title, time, badge, star, read } = mail;
	const [starred, setStarred] = useState(star);

	const handleMailActionClick = (action) => {
		switch (action) {
			case 'archived':
				toast.success('Email archived successfully.');
				break;
			case 'deleted':
				toast.success('Email deleted successfully.');
				break;
			case 'read':
				toast.success('Email has been marked as read successfully.');
				break;
			case 'hidden':
				toast.success('Email is set to be hidden successfully.');
				break;
			default:
				break;
		}
	};

	const ActionButton = ({ tooltip, icon, handleClick }) => (
		<OverlayTrigger overlay={<Tooltip>{tooltip}</Tooltip>}>
			<Link to="#">
				<span
					className={`fe fe-${icon}`}
					onClick={handleClick}
					title="Archive"
				></span>
			</Link>
		</OverlayTrigger>
	);

	return (
		<Fragment>
			<div className="d-flex align-items-center">
				{/* checkbbox */}
				<div className="me-2">
					<Form.Check
						type="checkbox"
						id="checkAll"
						value={id}
						checked={isSelectedMail}
						onChange={() => handleToggleSelection(id)}
					/>
				</div>

				{/* rating */}
				<div className="me-4">
					<Link to="#">
						{star ? (
							<StarFill
								size={15}
								onClick={() => setStarred(!starred)}
								className={`text-warning`}
							/>
						) : (
							<Star
								size={15}
								onClick={() => setStarred(!starred)}
								className={`text-muted`}
							/>
						)}
					</Link>
				</div>

				<div className="d-flex align-items-center">
					{/* title */}
					<div className="list-title">
						<Link
							className={!read ? 'fw-semi-bold text-dark' : ''}
							to="/dashboard/mail-details"
						>
							{user}
						</Link>
					</div>
					{/* text */}
					<div className="me-6 w-xxl-50 w-lg-20 w-md-10 w-5">
						<Link to="/dashboard/mail-details">
							<p
								className={`mb-0 list-text ${
									!read ? 'fw-semi-bold text-dark' : ''
								}`}
							>
								{title}
							</p>
						</Link>
					</div>
					{/* badge */}
					{badge && (
						<Badge
							bg={`${
								badge === 'Important'
									? 'danger'
									: badge === 'Social'
									? 'success'
									: badge === 'Promotions'
									? 'warning'
									: 'primary'
							} `}
							className="list-badge d-none d-lg-block"
						>
							{badge}
						</Badge>
					)}

					{/* time */}
					<div className="list-time">
						<p className="mb-0">{time}</p>
					</div>
				</div>
			</div>

			{/* mail action */}
			<div className="actions-mail">
				<ActionButton
					tooltip="Archive"
					icon="archive"
					handleClick={() => handleMailActionClick('archived')}
				/>
				<ActionButton
					tooltip="Delete"
					icon="trash-2"
					handleClick={() => handleMailActionClick('deleted')}
				/>
				<ActionButton
					tooltip="Read"
					icon="mail"
					handleClick={() => handleMailActionClick('read')}
				/>
				<ActionButton
					tooltip="Hidden Email"
					icon="eye-off"
					handleClick={() => handleMailActionClick('hidden')}
				/>
				<ToastContainer />
			</div>
		</Fragment>
	);
};

export default MailRow;
