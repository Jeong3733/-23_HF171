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
import { getUserInfoList, loadPostList } from 'components/utils/LoadData';

const JobsListView = ({ boardType }) => {
  const { competition_id } = useParams();
  const [postList, setPostList] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    // postList
    loadPostList(competition_id, boardType).then((getData) => {
      setPostList(getData);

      getUserInfoList([
        ...new Set(getData.map((item) => item.user_info_id)),
      ]).then((getData) => {
        setUserInfoList(getData);
      });
    });
  }, [competition_id, boardType]);

  const getUserName = (user_id) => {
    if (userInfoList.length === 0) {
      return 'X';
    } else {
      const foundUser = userInfoList.find((user) => user.user_id === user_id);
      if (foundUser) {
        return foundUser.user_name;
      }
      return 'X';
    }
  };

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
      return (
        <JobListingListviewCard
          item={record}
          key={index}
          user_name={getUserName(record.user_info_id)}
        />
      );
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
