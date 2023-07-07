// import node module libraries
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// Import required utility file
import { numberWithCommas } from 'helper/utils';

const GKInstructorCard = ({ item }) => {
	return (
		<Card className="mb-4 card-hover">
			{/* img */}
			<Card.Img
				variant="top"
				src={item.image}
				className="rounded-top-md img-fluid"
			/>
			{/* card body */}
			<Card.Body>
				<h3 className="mb-0 fw-semi-bold">
					{' '}
					<Link to={item.link} className="text-inherit">
						{item.name}
					</Link>
				</h3>
				<p className="mb-3">{item.designation}</p>
				<div className="lh-1  d-flex justify-content-between">
					<div>
						<span className="fs-6 text-warning">
							<Icon path={mdiStar} size={0.5} /> <span>{item.rating}</span>
						</span>
					</div>
					<div>
						<span className="fs-6 text-muted">
							<span className="text-dark">
								{numberWithCommas(item.students)}
							</span>{' '}
							Students
						</span>
					</div>
					<div>
						<span className="fs-6 text-muted">
							<span className="text-dark">{item.courses}</span> Course
						</span>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
GKInstructorCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default GKInstructorCard;
