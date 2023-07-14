// import node module libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Card } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import media files
import CheckedMark from 'assets/images/svg/checked-mark.svg';

// import utility file
import { numberWithCommas } from 'helper/utils';

const ProfileCard = ({ item }) => {
	return (
		<Card className="mb-4">
			<Card.Body>
				<div className="d-lg-flex">
					<div className="position-relative">
						<Image
							src={item.author_image}
							alt=""
							className="rounded-circle avatar-xl mb-3 mb-lg-0 "
						/>
						<Link
							to="#"
							className="position-absolute mt-2 ms-n3"
							data-bs-toggle="tooltip"
							data-placement="top"
							title=""
							data-original-title="Verifed"
						>
							<Image src={CheckedMark} alt="" height="30" width="30" />
						</Link>
					</div>
					<div className="ms-lg-4">
						<h4 className="mb-0">{item.author_name}</h4>
						<p className="mb-0 fs-6">{item.designation}</p>
						<p className="fs-6 mb-1 text-warning">
							{item.rating} <Icon path={mdiStar} size={0.6} /> Instructor Rating
						</p>
						<p className="fs-6 text-muted">
							<span className="me-2">
								<span className="text-dark fw-medium">{item.courses}</span>{' '}
								Courses
							</span>
							<span className="ms-2">
								<span className="text-dark fw-medium">
									{numberWithCommas(item.students)}
								</span>{' '}
								Students
							</span>
						</p>
						<p>{item.about_author}</p>
						<Link to="#" className="btn btn-outline-secondary btn-sm">
							View Details
						</Link>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
ProfileCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default ProfileCard;
