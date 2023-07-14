// import node module libraries
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

// import custom components
import Ratings from 'components/marketing/common/ratings/Ratings';

const TestimonialCard = ({ item }) => {
	return (
		<Card className="border shadow-none">
			<Card.Body className="p-5">
				<div className="mb-2">
					<span className="fs-4 text-warning">
						<Ratings rating={item.rating} />
					</span>
				</div>
				<p className="lead text-dark font-italic fw-medium mb-0">
					"{item.content}"
				</p>
			</Card.Body>
			<Card.Footer className="px-5 py-4">
				<div className="d-flex align-items-center">
					<Image
						src={item.image}
						alt=""
						className="avatar avatar-md rounded-circle"
					/>
					<div className="ms-3">
						<h4 className="mb-0">{item.name}</h4>
						<p className="mb-0 small">{item.designation}</p>
					</div>
				</div>
			</Card.Footer>
		</Card>
	);
};

// Typechecking With PropTypes
TestimonialCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default TestimonialCard;
