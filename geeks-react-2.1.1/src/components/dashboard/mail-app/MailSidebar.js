// import node module libraries
import React, { useState, Fragment, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Modal, Form, Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

// import context file
import { MailContext } from 'context/Context';

// import custom components
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';
import GKTagsEmailInput from 'components/elements/tags/GKTagsEmailInput';
import GKTippy from 'components/elements/tooltips/GKTippy';

// import data files
import MailSidebarData from 'data/dashboard/mail/MailSidebarData';

const MailSidebar = () => {
	const {
		mailContextValue: { mails }
	} = useContext(MailContext);

	const [modalShow, setModalShow] = useState(false);
	const location = useLocation();
	const initialValue = `<p> Type something here</p><br />`;
	const handleSubmit = (event) => {
		event.preventDefault();
		toast.success('Email sent successfully.', {
			onClose: () => setModalShow(false)
		});
	};

	const GetCounterValue = (label, counter) => {
		switch (label) {
			case 'Inbox':
				const inboxUnread = mails.filter((mail) => !mail.read);
				return inboxUnread.length;
			case 'Starred':
				return mails.filter((mail) => mail.star).length;
			default:
				return counter;
		}
	};

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
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
			<Dropdown drop="up">
				<Dropdown.Toggle as={CustomToggle}>
					<GKTippy content="More Actions">
						<i className="fe fe-more-vertical text-muted"></i>
					</GKTippy>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Item eventKey="1">Default to full screen</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="2">Plain text mode</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="3">Print</Dropdown.Item>
					<Dropdown.Item eventKey="4">Check spelling</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const ComposeMailModal = (props) => {
		return (
			<Fragment>
				<Modal
					{...props}
					size="xl"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					className="compose-mail"
				>
					<Modal.Header closeButton className="bg-gray-100">
						<Modal.Title id="contained-modal-title-vcenter" as="h5">
							New message
						</Modal.Title>
					</Modal.Header>
					{/* compose form */}
					<Form onSubmit={handleSubmit}>
						<Modal.Body className="p-0">
							<div className="border-bottom ">
								<Form.Control
									type="email"
									as={GKTagsEmailInput}
									placeholder="To"
									className="border-0 shadow-none"
									name="recipients"
								/>
							</div>
							<div className="border-bottom ">
								<Form.Control
									type="text"
									placeholder="Subject"
									className="border-0 shadow-none"
									name="subject"
									required
								/>
							</div>
							<div>
								<ReactQuillEditor
									initialValue={initialValue}
									name="body"
									tags
								/>
							</div>
						</Modal.Body>
						<Modal.Footer className="justify-content-between">
							<div className="">
								<Form.Control
									type="submit"
									variant="primary"
									bsPrefix=" "
									className="btn btn-primary"
									value="Send"
								/>
								<Form.Group
									as="span"
									className="ms-4 compose-img-upload cursor-pointer"
									controlId="file-input"
								>
									<Form.Label>
										<i className="fe fe-paperclip text-muted "></i>
									</Form.Label>
									<Form.Control type="file" />
								</Form.Group>
								<Form.Group
									as="span"
									className="ms-4 compose-img-upload cursor-pointer"
									controlId="file-input-second"
								>
									<Form.Label>
										<i className="fe fe-image text-muted "></i>
									</Form.Label>
									<Form.Control type="file" />
								</Form.Group>
								<Link to="#" className="ms-3 text-muted">
									<i className="fe fe-link"></i>
								</Link>
							</div>
							<div className="d-flex">
								<ActionMenu />
								<Link to="#" className="text-muted ms-2">
									<i
										className="fe fe-trash-2"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="Delete"
									></i>
								</Link>
							</div>
						</Modal.Footer>
					</Form>
					{/* end of compose form */}
				</Modal>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<Navbar className="p-4 navbar-mail">
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav as="ul" className="flex-column w-100">
						<Nav.Item as="li" bsPrefix="d-grid" className="mb-4">
							<Link
								to="#home"
								className="btn btn-primary"
								onClick={() => setModalShow(true)}
							>
								Compose New Email
							</Link>
						</Nav.Item>
						{MailSidebarData.map((item, index) => {
							return (
								<Nav.Item as="li" key={index}>
									<Nav.Link
										as={Link}
										to={item.link}
										className={location.pathname === item.link ? 'active' : ''}
									>
										<span className="d-flex align-items-center justify-content-between">
											<span className="d-flex align-items-center">
												{item.icon}
												{item.label}
											</span>
											{item.counter && (
												<span>{GetCounterValue(item.label, item.counter)}</span>
											)}
										</span>
									</Nav.Link>
								</Nav.Item>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<ComposeMailModal show={modalShow} onHide={() => setModalShow(false)} />
		</Fragment>
	);
};

export default MailSidebar;
