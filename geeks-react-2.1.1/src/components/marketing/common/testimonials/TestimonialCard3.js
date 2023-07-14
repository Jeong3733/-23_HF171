// TestimonialCard3 ( added with v2.0.0 )

// import node module libraries
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

// import sub components
import Ratings from '../ratings/Ratings';

const TestimonialCard3 = ({ item }) => {
	return (
		<Card>
			<Card.Body className="text-center p-6">
				{/*  img */}
				<Image
					src={item.image}
					alt=""
					className="avatar avatar-lg rounded-circle d-inline"
				/>
				<p className="mb-0 mt-3">“{item.content}”</p>
				{/*  rating */}
				<div className="lh-1 mb-3 mt-4">
					<span className="text-warning">
						{' '}
						<Ratings rating={item.rating} size="0.975rem" />
					</span>{' '}
					<span className="text-warning">{item.rating}</span>
					{/*  text */}
				</div>
				<h3 className="mb-0 h4">{item.name}</h3>
				<span>{item.designation}</span>
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
TestimonialCard3.propTypes = {
	item: PropTypes.object.isRequired
};

export default TestimonialCard3;
