// import node module libraries
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import context file
import { ChatContext } from 'context/Context';

// import hook file
import useChatOperations from 'hooks/useChatOperations';

const Message = (props) => {
	const { chatScript } = props;
	const {
		ChatState: { loggedInUserId }
	} = useContext(ChatContext);
	const { getUserDetailsById } = useChatOperations();

	let user = getUserDetailsById(chatScript.userId);

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			ref={ref}
			className="text-link"
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	const ActionMenu = ({ position }) => {
		return (
			<Dropdown drop={position}>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-vertical"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="start">
					<Dropdown.Item eventKey="1" className="px-3">
						<i className="fe fe-copy dropdown-item-icon"></i> Copy
					</Dropdown.Item>
					{position === 'start' ? (
						<Dropdown.Item eventKey="2" className="px-3">
							<i className="fe fe-edit dropdown-item-icon"></i> Edit
						</Dropdown.Item>
					) : null}
					<Dropdown.Item eventKey="3" className="px-3">
						<i className="fe fe-corner-up-right dropdown-item-icon"></i> Reply
					</Dropdown.Item>
					<Dropdown.Item eventKey="4" className="px-3">
						<i className="fe fe-corner-up-left dropdown-item-icon"></i> Forward
					</Dropdown.Item>
					<Dropdown.Item eventKey="5" className="px-3">
						<i className="fe fe-star dropdown-item-icon"></i> Favourite
					</Dropdown.Item>
					<Dropdown.Item eventKey="6" className="px-3">
						<i className="fe fe-trash dropdown-item-icon"></i> Delete
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Fragment>
			{chatScript.userId === loggedInUserId ? (
				<div className="d-flex justify-content-end mb-4">
					<div className="d-flex mw-lg-40">
						<div className=" me-3 text-end">
							<small>
								{' '}
								{chatScript.date} {chatScript.time}{' '}
							</small>
							<div className="d-flex justify-content-end">
								<div className="me-2 mt-2">
									<ActionMenu position="start" />
								</div>
								<div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
									<div className="card-body text-start p-3">
										<p
											className="mb-0"
											dangerouslySetInnerHTML={{
												__html: chatScript.message
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						<Avatar
							size="md"
							className="rounded-circle chat-avatar-md"
							type={user.image ? 'image' : 'initial'}
							src={user.image}
							alt={user.name}
							name={user.name}
						/>
					</div>
				</div>
			) : (
				<div className="d-flex w-lg-40 mb-4">
					<Avatar
						size="md"
						className="rounded-circle chat-avatar-md"
						type={user.image ? 'image' : 'initial'}
						src={user.image}
						alt={user.name}
						name={user.name}
					/>
					<div className=" ms-3">
						<small>
							{user.name}, {chatScript.date} {chatScript.time}{' '}
						</small>
						<div className="d-flex">
							<div className="card mt-2 rounded-top-md-left-0">
								<div className="card-body p-3">
									<p
										className="mb-0 text-dark"
										dangerouslySetInnerHTML={{
											__html: chatScript.message
										}}
									/>
								</div>
							</div>
							<div className="ms-2 mt-2">
								<ActionMenu position="end" />
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};
export default Message;
