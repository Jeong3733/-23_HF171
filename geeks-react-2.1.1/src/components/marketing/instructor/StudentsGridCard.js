// import node module libraries
import React, { useState, Fragment } from 'react';
import { Col, Card, Image, Row, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

// import data files
import { StudentsList } from 'data/users/StudentsData';

const StudentsGridCard = () => {
	const [students, setStudentsList] = useState(StudentsList.slice(0, 500));

	// paging start
	const [pageNumber, setPageNumber] = useState(0);
	const studentsPerPage = 9;
	const pagesVisited = pageNumber * studentsPerPage;
	const pageCount = Math.ceil(students.length / studentsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayStudents = students
		.slice(pagesVisited, pagesVisited + studentsPerPage)
		.map((students) => {
			return (
				<Col xl={4} lg={4} md={6} sm={12} key={students.id}>
					<Card className="mb-4">
						<Card.Body>
							<div className="text-center">
								<Image
									src={students.image}
									className="rounded-circle avatar-xl mb-3"
									alt=""
								/>
								<h4 className="mb-1">{students.name}</h4>
								<p className="mb-0 fs-6">
									<i className="fe fe-map-pin me-1"></i>
									{students.locations}
								</p>
								<Link to="#" className="btn btn-sm btn-outline-secondary mt-3">
									Message
								</Link>
							</div>
							<div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
								<span>Enrolled</span>
								<span className="text-dark">{students.joined}</span>
							</div>
							<div className="d-flex justify-content-between pt-2 fs-6">
								<span>Progress</span>
								<span className="text-success">{students.progress}%</span>
							</div>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	// end of paging

	// searching code started

	const [searchTerm, setSearchTerm] = useState('');

	const getSearchTerm = (event) => {
		let searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const newStudentsList = StudentsList.filter((student) => {
				return Object.values(student)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setStudentsList(newStudentsList.slice(0, 500));
			setPageNumber(0);
		} else {
			setStudentsList(StudentsList.slice(0, 500));
		}
	};

	// end of searching

	return (
		<Fragment>
			<Row>
				<Col xl={12} lg={12} sm={12} className="mb-3">
					<Row>
						<Col className="pe-0">
							<Form.Group className="mb-3" controlId="formSearchbyName">
								<Form.Control
									placeholder="Search by Name"
									type="search"
									value={searchTerm}
									onChange={getSearchTerm}
								/>
							</Form.Group>
						</Col>
						<Col className="col-auto">
							<Link to="#" className="btn btn-secondary">
								Export CSV
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row>
				{displayStudents.length > 0 ? (
					displayStudents
				) : (
					<Col>No matching students found.</Col>
				)}
			</Row>

			<ReactPaginate
				previousLabel={<ChevronLeft size="14px" />}
				nextLabel={<ChevronRight size="14px" />}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'justify-content-center mb-0 pagination'}
				previousLinkClassName={'page-link mx-1 rounded'}
				nextLinkClassName={'page-link mx-1 rounded'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link mx-1 rounded'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'active'}
			/>
		</Fragment>
	);
};

export default StudentsGridCard;
