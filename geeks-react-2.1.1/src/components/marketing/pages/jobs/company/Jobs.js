// import node module libraries
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import sub components
import JobListingListviewCard from 'components/marketing/common/cards/JobListingListviewCard';
import CommonHeaderTabs from './CommonHeaderTabs';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const Jobs = () => {
	const data = ComapniesListData[0];
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
		<CommonHeaderTabs data={data}>
			<h2 className="mb-4">{data.jobPosting} jobs openings</h2>
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
		</CommonHeaderTabs>
	);
};

export default Jobs;
