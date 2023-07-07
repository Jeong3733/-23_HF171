// import node module libraries
import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';
import {
	Col,
	Row,
	Card,
	Breadcrumb,
	ListGroup,
	Form,
	Dropdown,
	Button
} from 'react-bootstrap';

// import sub custom components
import MailSidebar from '../MailSidebar';
import MailRow from './MailRow';

// import context file
import { MailContext } from 'context/Context';

// import hook file
import useMultipleSelection from 'hooks/useMultipleSelection';

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

const Mail = () => {
	const {
		mailContextValue: { mails, filters, activeFilter }
	} = useContext(MailContext);
	const {
		selectedMails,
		selectAllMails,
		indeterminateState,
		handleToggleSelection,
		handleToggleSelectAll,
		handleFilteredSelectAll,
		handleFilteredUnselectAll
	} = useMultipleSelection(mails.map((mails) => mails.id));

	// required stats initialization
	const [MailsList, setMailsList] = useState(mails);
	const [filteredMailsList, setFilteredMailsList] = useState(mails);
	const [currentFilter, setCurrentFilter] = useState(activeFilter);

	// pagination
	const [pageNumber, setPageNumber] = useState(0);
	const itemPerPage = 13;
	const pagesVisited = pageNumber * itemPerPage;
	const pageCount = Math.ceil(filteredMailsList.length / itemPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayMails = MailsList.slice(
		pagesVisited,
		pagesVisited + itemPerPage
	).map((mail, index) => {
		return (
			<ListGroup.Item
				className={`list-group-item-action px-4 list-mail ${
					mail.read ? 'bg-light' : ''
				}`}
				key={index}
			>
				<MailRow
					mail={mail}
					isSelectedMail={selectedMails.find((item) => item === mail.id)}
					handleToggleSelection={handleToggleSelection}
				/>
			</ListGroup.Item>
		);
	});
	const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
	const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
		return recordsOnCurrentPage < recordsPerPage
			? recordsPerPage * (pageNo + 1) - (recordsPerPage - recordsOnCurrentPage)
			: recordsPerPage * (pageNo + 1);
	};
	// end of pagination

	// searching code
	const [searchTerm, setSearchTerm] = useState('');
	const getSearchTerm = (event) => {
		let searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const searchResultList = filteredMailsList.filter((mailitem) => {
				return Object.values(mailitem)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setMailsList(searchResultList);
			setPageNumber(0);
		} else {
			setMailsList(filteredMailsList);
		}
	};
	// end of searching code

	// record reset and filtering
	const updateMailsList = (newMailsList) => {
		setMailsList(newMailsList);
		setFilteredMailsList(newMailsList);
		handleFilteredSelectAll(newMailsList.map((email) => email.id));
	};

	const handleFilter = (selected = 'None') => {
		setCurrentFilter(selected);
		switch (selected) {
			case 'Unread':
				updateMailsList(mails.filter((email) => !email.read));
				break;
			case 'Read':
				updateMailsList(mails.filter((email) => email.read));
				break;
			case 'Starred':
				updateMailsList(mails.filter((email) => email.star));
				break;
			case 'Unstarred':
				updateMailsList(mails.filter((email) => !email.star));
				break;
			case 'All':
				updateMailsList(mails);
				break;
			default:
				setMailsList(mails);
				setFilteredMailsList(mails);
				handleFilteredUnselectAll();
		}
	};
	// end of record reset and filtering

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4">
						<div className="mb-3 mb-lg-0">
							<h1 className="mb-0 h2 fw-bold">Mail</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
								<Breadcrumb.Item active>Mail</Breadcrumb.Item>
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
												<Form.Check
													type="checkbox"
													id="checkAllMails"
													value={selectAllMails}
													checked={selectAllMails}
													onChange={() => handleToggleSelectAll()}
													ref={(input) => {
														if (input) {
															input.indeterminate = indeterminateState;
														}
													}}
												/>
												<Dropdown>
													<Dropdown.Toggle
														as={ToggleFilter}
														id="dropdown-custom-components"
													>
														<div className="dropdown-toggle text-inherit ms-2">
															{currentFilter === 'None' ? '' : currentFilter}
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
																	onClick={() => handleFilter(item)}
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
												variant="outline-secondary btn-icon"
												onClick={() => handleFilter()}
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
												placeholder="Search Email"
												value={searchTerm}
												onChange={getSearchTerm}
											/>
										</div>
									</div>
								</Card.Header>
								<div className="">
									<ListGroup
										variant="flush"
										className="list-group list-group-mail"
									>
										{displayMails.length > 0 ? (
											displayMails
										) : (
											<ListGroup.Item className="list-group-item-action px-4 list-mail bg-light">
												No matching mails found.
											</ListGroup.Item>
										)}
									</ListGroup>
								</div>

								{MailsList.length > 0 ? (
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<p className="mb-0">
												Showing {setFromPage(itemPerPage, pageNumber)} -
												{setToPage(
													itemPerPage,
													pageNumber,
													displayMails.length
												)}{' '}
												of {filteredMailsList.length}{' '}
											</p>
											<div>
												<ReactPaginate
													previousLabel={<ChevronLeft size="14px" />}
													nextLabel={<ChevronRight size="14px" />}
													pageRangeDisplayed={0}
													pageCount={pageCount}
													onPageChange={changePage}
													containerClassName={
														'justify-content-center mb-0 pagination'
													}
													previousLinkClassName={'page-link mx-1 rounded'}
													nextLinkClassName={'page-link mx-1 rounded'}
													pageClassName={'page-item'}
													pageLinkClassName={'page-link mx-1 rounded'}
													disabledClassName={'paginationDisabled'}
													activeClassName={'active'}
												/>
											</div>
										</div>
									</Card.Footer>
								) : (
									''
								)}
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Mail;
