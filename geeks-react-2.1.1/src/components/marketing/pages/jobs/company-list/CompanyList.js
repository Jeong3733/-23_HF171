// import node module libraries
import { Fragment, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Col, Row, Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

// import custom components
import JobSearchBox from 'components/marketing/common/jobs/JobSearchBox';
import CompanyListingCard from 'components/marketing/common/cards/CompanyListingCard';

// import sub components
import CompanyFilters from './CompanyFilters';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const CompanyList = () => {
	const [Records] = useState(ComapniesListData);
	// paging setup start
	const [pageNumber, setPageNumber] = useState(0);
	const RecordsPerPage = 4;
	const pagesVisited = pageNumber * RecordsPerPage;
	const pageCount = Math.ceil(Records.length / RecordsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayRecords = Records.slice(
		pagesVisited,
		pagesVisited + RecordsPerPage
	).map((record, index) => {
		return <CompanyListingCard item={record} key={index} />;
	});
	// end of paging setup

	return (
		<Fragment>
			<section className="py-8 bg-light">
				<Container>
					<Row>
						<Col lg={8} md={10} xs={12}>
							<div>
								<div className="mb-4">
									{' '}
									<h1 className=" fw-bold mb-1">
										Discover Best Places to Work!
									</h1>
									<p>Company reviews. Salaries. Interviews. Jobs.</p>
								</div>
								<JobSearchBox />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="py-8 bg-white">
				<Container>
					<Row>
						<Col md={8}>
							<div className="mb-4">
								<h2>List of companies in India</h2>
							</div>
							{displayRecords.length > 0
								? displayRecords
								: 'No matching records found.'}
							{/* pagination */}
							<ReactPaginate
								previousLabel={<ChevronLeft size="14px" />}
								nextLabel={<ChevronRight size="14px" />}
								pageCount={pageCount}
								onPageChange={changePage}
								containerClassName={'mb-0 pagination'}
								previousLinkClassName={'page-link mx-1 rounded'}
								nextLinkClassName={'page-link mx-1 rounded'}
								pageClassName={'page-item'}
								pageLinkClassName={'page-link mx-1 rounded'}
								disabledClassName={'paginationDisabled'}
								activeClassName={'active'}
							/>
						</Col>
						<Col md={4} className="mt-4 mt-md-0">
							<CompanyFilters />
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default CompanyList;
