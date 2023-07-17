// import node module libraries
import React from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

const Pagination = ({
	previousPage,
	pageCount,
	pageIndex,
	gotoPage,
	nextPage
}) => {
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<div className="pb-5">
					<nav>
						<ListGroup
							as="ul"
							bsPrefix="pagination"
							className="justify-content-center mb-0"
						>
							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									onClick={() => previousPage()}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-left"></i>
								</Button>
							</ListGroup.Item>
							{Array.from(Array(pageCount).keys()).map((page) => (
								<ListGroup.Item
									as="li"
									bsPrefix="page-item"
									key={page}
									className={`page-item ${pageIndex === page ? 'active' : ''}`}
								>
									<Button
										className="page-link mx-1 rounded"
										onClick={() => gotoPage(page)}
									>
										{page + 1}
									</Button>
								</ListGroup.Item>
							))}
							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									onClick={() => nextPage()}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-right"></i>
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</nav>
				</div>
			</Col>
		</Row>
	);
};

export default Pagination;
