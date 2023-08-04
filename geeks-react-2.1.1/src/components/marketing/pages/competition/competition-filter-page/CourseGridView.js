// import node module libraries
import { Fragment, useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';
import PropTypes from 'prop-types';

// import sub components
import CourseCard from 'components/marketing/pages/competition/CourseCard';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import data files
import { AllCoursesData } from 'data/slider/AllCoursesData';

const CourseGridView = (props) => {
  const { data, isLoggedIn } = props;

  const [Records] = useState(data.slice(0, 500));

  //------paging start----------
  const [pageNumber, setPageNumber] = useState(0);
  const RecordsPerPage = 12;
  const pagesVisited = pageNumber * RecordsPerPage;
  const pageCount = Math.ceil(Records.length / RecordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayRecords = Records.slice(
    pagesVisited,
    pagesVisited + RecordsPerPage,
  ).map((Records, index) => {
    return (
      <Col lg={4} md={6} sm={12} key={index}>
        <CourseCard item={Records} isLoggedIn={isLoggedIn} />
      </Col>
    );
  });
  //---end of paging start----------

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

// Specifies the default values for props
CourseGridView.defaultProps = {
  isLoggedIn: false,
};

// Typechecking With PropTypes
CourseGridView.propTypes = {
  // data: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
};
export default CourseGridView;
