// import node module libraries
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Image,
	Card,
	Row,
	Col,
	ProgressBar,
	ListGroup,
	Badge
} from 'react-bootstrap';

// import custom components
import Ratings from 'components/marketing/common/ratings/Ratings';
import LevelIcon from 'components/marketing/common/miscellaneous/LevelIcon';
import GKTippy from 'components/elements/tooltips/GKTippy';

// import utility file
import { numberWithCommas } from 'helper/utils';

const CourseCard = ({
	item,
	free,
	viewby,
	showprogressbar,
	extraclass,
	link
}) => {
	/** Used in Course Index, Course Category, Course Filter Page, Student Dashboard etc...  */
	const GridView = () => {
		return (
			<Card className={`mb-4 card-hover ${extraclass}`}>
				<Link to={link}>
					<Image
						src={item.image}
						alt=""
						className="card-img-top rounded-top-md"
					/>
				</Link>
				{/* Card body  */}
				<Card.Body>
					<h3 className="h4 mb-2 text-truncate-line-2 ">
						<Link to={link} className="text-inherit">
							{item.title}
						</Link>
					</h3>
					<ListGroup as="ul" bsPrefix="list-inline" className="mb-3">
						<ListGroup.Item as="li" bsPrefix="list-inline-item">
							<i className="far fa-clock me-1"></i>
							{item.duration}
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix="list-inline-item">
							<LevelIcon level={item.level} />
							{item.level}
						</ListGroup.Item>
					</ListGroup>
					<div
						className={`lh-1 d-flex align-items-center ${
							free ||
							item.price === undefined ||
							item.price <= 0 ||
							item.discount === undefined
								? 'mb-5'
								: ''
						}`}
					>
						<span className="text-warning me-1 mb-1">
							<Ratings rating={item.rating} size="0.92rem" />
						</span>
						<span className="text-warning me-1"> {item.rating.toFixed(1)}</span>
						<span className="fs-6 text-muted">
							{' '}
							({numberWithCommas(item.ratingby)})
						</span>
					</div>
					<div
						className={`lh-1 mt-3 ${
							free ||
							item.price === undefined ||
							item.price <= 0 ||
							item.discount === undefined
								? 'd-none'
								: ''
						}`}
					>
						<span className="text-dark fw-bold">
							${item.price - item.discount}
						</span>{' '}
						<del className="fs-6 text-muted">${item.price}</del>
					</div>
				</Card.Body>
				{/* Card Footer */}
				<Card.Footer>
					<Row className="align-items-center g-0">
						<Col className="col-auto">
							<Image
								src={item.instructor_image}
								className="rounded-circle avatar-xs"
								alt=""
							/>
						</Col>
						<Col className="col ms-2">
							<span>{item.instructor_name}</span>
						</Col>
						<Col className="col-auto">
							<GKTippy content="Add to Bookmarks">
								<Link to="#">
									<i className="fe fe-bookmark"></i>
								</Link>
							</GKTippy>
						</Col>
					</Row>
					<span className={`${showprogressbar ? '' : 'd-none'}`}>
						{' '}
						<ProgressBar
							variant="success"
							now={item.progress}
							className="mt-3"
							style={{ height: '5px' }}
						/>
					</span>
				</Card.Footer>
			</Card>
		);
	};

	/** Used in Course Filter Page  */
	const ListView = () => {
		return (
			<Card className="mb-4 card-hover">
				<Row className="g-0">
					<Link
						to={link}
						className="bg-cover img-left-rounded col-12 col-md-12 col-xl-3 col-lg-3 "
						style={{
							background: `url(${item.image})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'top center'
						}}
					>
						<Image
							src={item.image}
							alt="..."
							className="img-fluid d-lg-none invisible"
						/>
					</Link>
					<Col lg={9} md={12} sm={12}>
						{/* <!-- Card body --> */}
						<Card.Body>
							<h3 className="mb-2 text-truncate-line-2 ">
								<Link to={link} className="text-inherit">
									{item.title}
								</Link>
							</h3>
							{/* <!-- List inline --> */}
							<ListGroup as="ul" bsPrefix="list-inline" className="mb-5">
								<ListGroup.Item as="li" bsPrefix="list-inline-item">
									<i className="far fa-clock me-1"></i>
									{item.duration}
								</ListGroup.Item>
								<ListGroup.Item as="li" bsPrefix="list-inline-item">
									<LevelIcon level={item.level} />
									{item.level}
								</ListGroup.Item>
								<ListGroup.Item as="li" bsPrefix="list-inline-item">
									<span className="text-warning">
										{' '}
										<Ratings rating={item.rating} /> {item.rating.toFixed(1)}
									</span>
									<span className="fs-6 text-muted">
										{' '}
										({numberWithCommas(item.ratingby)})
									</span>
								</ListGroup.Item>
							</ListGroup>
							{/* <!-- Row --> */}
							<Row className="align-items-center g-0">
								<Col className="col-auto">
									<Image
										src={item.instructor_image}
										className="rounded-circle avatar-xs"
										alt=""
									/>
								</Col>
								<Col className="col ms-2">
									<span>{item.instructor_name}</span>
								</Col>
								<Col className="col-auto">
									<GKTippy content="Add to Bookmarks">
										<Link to="#">
											<i className="fe fe-bookmark"></i>
										</Link>
									</GKTippy>
								</Col>
							</Row>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		);
	};

	/** Used in Instructor Profile Page  */
	const ListGroupView = () => {
		return (
			<div className="d-lg-flex align-items-center">
				<div>
					<Image src={item.image} alt="" className="rounded img-4by3-lg" />
				</div>
				<div className="ms-lg-3 mt-2 mt-lg-0">
					<h4 className="text-primary-hover">
						{item.title}{' '}
						<Badge bg="light-success" className="text-success">
							New
						</Badge>
					</h4>
					<ListGroup
						as="ul"
						bsPrefix="list-inline"
						className="fs-6 mb-0 text-inherit"
					>
						<ListGroup.Item as="li" bsPrefix="list-inline-item">
							<i className="far fa-clock me-1"></i>
							{item.duration}
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix="list-inline-item">
							<LevelIcon level={item.level} />
							{item.level}
						</ListGroup.Item>
						<ListGroup.Item as="li" bsPrefix="list-inline-item">
							<span className="text-warning">
								{' '}
								<Ratings rating={item.rating} /> {item.rating.toFixed(1)}
							</span>
							<span className="fs-6 text-muted">
								{' '}
								({numberWithCommas(item.ratingby)})
							</span>
						</ListGroup.Item>
					</ListGroup>
				</div>
			</div>
		);
	};
	return (
		<Fragment>
			{viewby === 'grid' ? (
				<GridView />
			) : viewby === 'list' ? (
				<ListView />
			) : (
				<ListGroupView />
			)}
		</Fragment>
	);
};

// Specifies the default values for props
CourseCard.defaultProps = {
	free: false,
	viewby: 'grid',
	showprogressbar: false,
	extraclass: '',
	link: '#'
};

// Typechecking With PropTypes
CourseCard.propTypes = {
	item: PropTypes.object.isRequired,
	free: PropTypes.bool,
	viewby: PropTypes.string,
	showprogressbar: PropTypes.bool,
	extraclass: PropTypes.string,
	link: PropTypes.string
};

export default CourseCard;
