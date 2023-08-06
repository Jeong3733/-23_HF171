// import node module libraries
import ReactPaginate from 'react-paginate';
import { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import sub components
import JobListingListviewCard from 'components/marketing/common/cards/JobListingListviewCard';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

// import utility file
import { isNotEmptyObj } from 'helper/utils';

const JobsListView = ({ boardType }) => {
  const { competition_id } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // postList
    const data4 = {
      competitionId: competition_id,
      boardType: boardType,
    };
    apiUtils
      .GetPostInfoByBoardType(data4)
      .then((response) => {
        const getPostList = response.data;
        setPostList(getPostList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getPostList = [
          {
            post_info_id: '1',
            title: '제출 1',
            user_info_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
          {
            post_info_id: '2',
            title: '제출 2',
            user_info_id: '1',
            created_date: '0000-00-00',
            contents: '',
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setPostList(getPostList);
        handleLogError(error);
      });
  }, [competition_id, boardType]);

  // paging setup start
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 5;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(postList.length / RecordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayRecords = postList
    .slice(pagesVisited, pagesVisited + RecordsPerPage)
    .map((record, index) => {
      return <JobListingListviewCard item={record} key={index} />;
    });
  // end of paging setup
  if (postList.length != 0) {
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
  }
};

export default JobsListView;
