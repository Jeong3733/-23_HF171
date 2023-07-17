// import node module libraries
import ReactPaginate from 'react-paginate';
import { Fragment, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import sub components
import JobListingListviewCard from 'components/marketing/common/cards/JobListingListviewCard';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

const JobsListView = () => {
	const [Records] = useState(JobsListingData);
	// paging setup start
	const [pageNumber, setPageNumber] = useState(0);
	const RecordsPerPage = 5;
	const pagesVisited = pageNumber * RecordsPerPage;
	const pageCount = Math.ceil(Records.length / RecordsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayRecords = Records.slice(
		pagesVisited,
		pagesVisited + RecordsPerPage
	).map((record, index) => {
		return <JobListingListviewCard item={record} key={index} />;
	});
	// end of paging setup

	return (
		<Fragment>
			{displayRecords.length > 0 ? (
				displayRecords
			) : (
				<div>No matching records found.</div>
			)}
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

export default JobsListView;
