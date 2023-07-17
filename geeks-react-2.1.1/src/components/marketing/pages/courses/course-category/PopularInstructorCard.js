// import node module libraries
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import utility file
import { numberWithCommas } from 'helper/utils';

const PopularInstructorCard = ({ item }) => {
	return (
		<Fragment>
			<Card className="mb-4 ">
				<Card.Body>
					<div className="text-center">
						<Image
							src={item.image}
							className="rounded-circle avatar-xl mb-3"
							alt=""
						/>
						<h4 className="mb-0">{item.name}</h4>
						<p className="mb-0 fs-6 text-muted">{item.topic}</p>
					</div>
					<div className="d-flex justify-content-between border-bottom py-2 mt-4">
						<span>Students</span>
						<span className="text-dark">{numberWithCommas(item.students)}</span>
					</div>
					<div className="d-flex justify-content-between border-bottom py-2">
						<span>Instructor Rating</span>
						<span className="text-warning">
							{item.rating} <Icon path={mdiStar} size={0.6} />
						</span>
					</div>
					<div className="d-flex justify-content-between pt-2">
						<span>Courses</span>
						<span className="text-dark">{item.courses} </span>
					</div>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

// Typechecking With PropTypes
PopularInstructorCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default PopularInstructorCard;
