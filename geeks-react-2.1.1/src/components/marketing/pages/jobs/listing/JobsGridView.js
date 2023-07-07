// import node module libraries
import ReactPaginate from 'react-paginate';
import { Fragment, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Col, Row } from 'react-bootstrap';

// import sub components
import JobListingGridviewCard from 'components/marketing/common/cards/JobListingGridviewCard';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

const JobsGridView = () => {
	const [Records] = useState(JobsListingData);
	// paging setup start
	const [pageNumber, setPageNumber] = useState(0);
	const RecordsPerPage = 6;
	const pagesVisited = pageNumber * RecordsPerPage;
	const pageCount = Math.ceil(Records.length / RecordsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayRecords = Records.slice(
		pagesVisited,
		pagesVisited + RecordsPerPage
	).map((record, index) => {
		return (
			<Col lg={6} xs={12} className="mb-4" key={index}>
				<JobListingGridviewCard item={record} />
			</Col>
		);
	});
	// end of paging setup

	return (
		<Fragment>
			<Row>
				{displayRecords.length > 0 ? (
					displayRecords
				) : (
					<Col>No matching records found.</Col>
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

export default JobsGridView;
