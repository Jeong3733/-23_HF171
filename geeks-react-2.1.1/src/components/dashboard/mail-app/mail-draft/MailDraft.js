// import node module libraries
import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Col,
	Row,
	Dropdown,
	Card,
	Form,
	Breadcrumb,
	Button,
	Image
} from 'react-bootstrap';

// import context file
import { MailContext } from 'context/Context';

// import sub custom components
import MailSidebar from '../MailSidebar';

// import media files
import DraftImage from 'assets/images/svg/draft.svg';

const MailDraft = () => {
	const {
		mailContextValue: { filters, activeFilter }
	} = useContext(MailContext);
	const [currentFilter, setCurrentFilter] = useState(activeFilter);

	const handleReset = () => {
		setCurrentFilter('All');
	};

	const ToggleActions = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to="#"
			ref={ref}
			className="btn btn-outline-secondary btn-icon"
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	const ToggleFilter = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to="#"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4">
						<div className="mb-3 mb-lg-0">
							<h1 className="mb-0 h2 fw-bold">Mail</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Mail</Breadcrumb.Item>
								<Breadcrumb.Item active>Draft</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xl={12} lg={12} md={12} xs={12}>
					<Card>
						<Row className="g-0">
							<Col xxl={2} xl={3} className="border-end">
								<MailSidebar />
							</Col>
							<Col xxl={10} xl={9} xs={12}>
								<Card.Header className="p-4">
									<div className=" d-md-flex justify-content-between align-items-center">
										<div className="d-flex flex-wrap gap-2 mb-2 mb-md-0">
											<div className="d-flex align-items-center border px-3 py-2 rounded-2">
												<Form.Check type="checkbox" id="checkAll" />
												<Dropdown>
													<Dropdown.Toggle
														as={ToggleFilter}
														id="dropdown-custom-components"
													>
														<div className="dropdown-toggle text-inherit ms-2">
															{currentFilter}
														</div>
													</Dropdown.Toggle>
													<Dropdown.Menu as="ul">
														{filters.map((item, index) => {
															return (
																<Dropdown.Item
																	eventKey={index}
																	as="li"
																	bsPrefix=" "
																	key={index}
																	onClick={() => setCurrentFilter(item)}
																>
																	<Link
																		to="#"
																		className={`dropdown-item ${
																			currentFilter === item ? 'active' : ' '
																		}`}
																	>
																		{item}
																	</Link>
																</Dropdown.Item>
															);
														})}
													</Dropdown.Menu>
												</Dropdown>
											</div>
											<Button
												variant="outline-secondary"
												size="sm"
												onClick={() => handleReset()}
											>
												<i className="fe fe-rotate-cw align-middle "></i>
											</Button>
											<Dropdown>
												<Dropdown.Toggle
													as={ToggleActions}
													id="dropdown-custom-components"
												>
													<i className="fe fe-more-vertical align-middle"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													{[
														'Action',
														'Another action',
														'Something else here'
													].map((item, index) => {
														return (
															<Dropdown.Item
																eventKey="1"
																as="li"
																bsPrefix=" "
																key={index}
															>
																<Link to="#" className="dropdown-item">
																	{item}
																</Link>
															</Dropdown.Item>
														);
													})}
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="">
											<Form.Control
												type="search"
												size="sm"
												placeholder="Search Email"
											/>
										</div>
									</div>
								</Card.Header>
								<Card.Body>
									<div className="text-center py-16">
										<Image src={DraftImage} alt="" className="img-fluid mb-3" />
										<p className="text-dark fs-3 fw-semi-bold">
											There is no conversation
										</p>
									</div>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default MailDraft;
