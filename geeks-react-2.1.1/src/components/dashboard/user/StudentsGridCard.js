// import node module libraries
import React, { Fragment, useState } from 'react';
import { Col, Card, Image, Row, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { MapPin } from 'react-feather';
import ReactPaginate from 'react-paginate';

// import utility file
import { numberWithCommas } from 'helper/utils';

// import data files
import { StudentsList } from 'data/users/StudentsData';

const StudentsGridCard = () => {
	const [students, setStudentsList] = useState(StudentsList.slice(0, 500));

	// paging start
	const [pageNumber, setPageNumber] = useState(0);
	const studentsPerPage = 8;
	const pagesVisited = pageNumber * studentsPerPage;
	const pageCount = Math.ceil(students.length / studentsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayStudents = students
		.slice(pagesVisited, pagesVisited + studentsPerPage)
		.map((students) => {
			return (
				<Col xl={3} lg={6} md={6} sm={12} key={students.id}>
					<Card className="mb-5">
						<Card.Body>
							<div className="text-center">
								<div className="position-relative">
									<Image
										src={students.image}
										className="rounded-circle avatar-xl mb-3"
										alt=""
									/>
								</div>
								<h4 className="mb-0">{students.name}</h4>
								<p className="mb-0">
									<MapPin size="12" className="me-1 fs-6" />
									{students.locations}
								</p>
							</div>
							<div className="d-flex justify-content-between border-bottom py-2 mt-6">
								<span>Payments</span>
								<span className="text-dark">
									${numberWithCommas(students.payment)}
								</span>
							</div>
							<div className="d-flex justify-content-between border-bottom py-2">
								<span>Joined at</span>
								<span>{students.joined}</span>
							</div>
							<div className="d-flex justify-content-between pt-2">
								<span>Courses</span>
								<span className="text-dark"> {students.enrolled} </span>
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

	// end of searching code

	return (
		<Fragment>
			<div className="mb-4">
				<Form.Control
					type="search"
					placeholder="Search Students"
					value={searchTerm}
					onChange={getSearchTerm}
				/>
			</div>
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
