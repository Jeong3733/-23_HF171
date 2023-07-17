// import node module libraries
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<div
			className={`d-flex justify-content-${
				currentPage > 1 ? 'between' : 'end'
			}`}
		>
			{currentPage > 1 && (
				<Button variant="secondary" onClick={prevPage}>
					<i className="fe fe-arrow-left"></i> Previous
				</Button>
			)}
			{currentPage === nPages ? (
				<Link className="btn btn-primary" to="/marketing/student/quiz/result/">
					Finish
				</Link>
			) : (
				<Button variant="primary" onClick={nextPage}>
					{' '}
					Next <i className="fe fe-arrow-right"></i>
				</Button>
			)}
		</div>
	);
};

export default Pagination;
