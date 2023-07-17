// import node module libraries
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Dropdown, Nav, Tab, Image, Form } from 'react-bootstrap';

// import sub custom components
import RecentChatList from './RecentChatList';
import ContactList from './ContactList';
import NewChatModal from './NewChatModal';

// import hook file
import useChatOperations from 'hooks/useChatOperations';

// import context file
import { ChatContext } from 'context/Context';

const Sidebar = (props) => {
	const { hideChatBox, setHideChatBox } = props;
	const [modalShow, setModalShow] = React.useState(false);

	const {
		ChatState: { loggedInUserId }
	} = useContext(ChatContext);
	const { getUserDetailsById } = useChatOperations();

	let loggedInUserDetails = getUserDetailsById(loggedInUserId);

	const SettingsMenuToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=""
			ref={ref}
			className="btn btn-light btn-icon rounded-circle ms-1"
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	const SettingsMenu = () => {
		return (
			<Dropdown drop="down" as="div">
				<Dropdown.Toggle as={SettingsMenuToggle}>
					<i className="fe fe-settings"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Item eventKey="1" className="px-2">
						Setting
					</Dropdown.Item>
					<Dropdown.Item eventKey="2" className="px-2">
						Help and Feedback
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const UserSettingMenuToggle = React.forwardRef(
		({ children, onClick }, ref) => (
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
		)
	);

	const UserSettingMenu = () => {
		return (
			<Dropdown drop="start">
				<Dropdown.Toggle as={UserSettingMenuToggle}>
					<i className="fe fe-more-horizontal fs-3"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="start" as="ul">
					<Dropdown.Item eventKey="1" as="li" bsPrefix=" ">
						<Link to="#" className="dropdown-item">
							<i className="fe fe-circle dropdown-item-icon"></i>Status
						</Link>
					</Dropdown.Item>
					<Dropdown.Item eventKey="2" as="li" bsPrefix=" ">
						<Link to="#" className="dropdown-item">
							<i className="fe fe-settings dropdown-item-icon"></i>Setting
						</Link>
					</Dropdown.Item>
					<Dropdown.Item eventKey="3" as="li" bsPrefix=" ">
						<Link to="#" className="dropdown-item">
							<i className="fe fe-user dropdown-item-icon"></i>Profile
						</Link>
					</Dropdown.Item>
					<Dropdown.Item eventKey="4" as="li" bsPrefix=" ">
						<Link to="#" className="dropdown-item">
							<i className="fe fe-power dropdown-item-icon"></i>Sign Out
						</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<div className="bg-white border-end border-top vh-100">
			{/*  chat list */}
			<div className="chat-window">
				<div className="chat-sticky-header sticky-top bg-white">
					<div className="px-4 pt-3 pb-4">
						{/*  heading */}
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<h1 className="mb-0 fw-bold h2">Chat</h1>
							</div>
							{/*  new chat dropdown */}
							<div className="d-flex">
								<Link
									to="#"
									className="btn btn-primary rounded-circle btn-icon"
									onClick={() => setModalShow(true)}
								>
									<i className="fe fe-edit"></i>
									<div id="newchat" className="d-none">
										<span>New Chat</span>
									</div>
								</Link>
								<NewChatModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
								<SettingsMenu />
							</div>
						</div>
						{/*  search */}
						<div className="mt-4 mb-4">
							<Form.Control
								type="search"
								className="form-control form-control-sm"
								placeholder="Search people, group and messages"
							/>
						</div>
						{/*  User chat */}
						<div className="d-flex justify-content-between align-items-center">
							<Link to="#" className="text-link">
								<div className="d-flex">
									<div className="avatar avatar-md avatar-indicators avatar-online">
										<Image
											src={loggedInUserDetails.image}
											alt=""
											className="rounded-circle"
										/>
									</div>

									<div className=" ms-2">
										<h5 className="mb-0">{loggedInUserDetails.name}</h5>
										<p className="mb-0 text-muted">
											{loggedInUserDetails.status}
										</p>
									</div>
								</div>
							</Link>
							<UserSettingMenu />
						</div>
					</div>
					{/*  nav tabs*/}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<Tab.Container defaultActiveKey="recent">
								<Nav className="nav-line-bottom" as="ul">
									<Nav.Item as="li">
										<Nav.Link eventKey="recent" className="py-2" role="button">
											Recent
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link eventKey="contact" className="py-2" role="button">
											Contact
										</Nav.Link>
									</Nav.Item>
								</Nav>
								<Tab.Content className="h-100">
									<Tab.Pane eventKey="recent" className="pb-0">
										<RecentChatList
											hideChatBox={hideChatBox}
											setHideChatBox={setHideChatBox}
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="contact" className="pb-0">
										<ContactList />
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
