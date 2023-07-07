// import node module libraries
import { Link } from 'react-router-dom';
import { Col, Row, Card, Image, ProgressBar } from 'react-bootstrap';

// import bootstrap icons
import { StarFill } from 'react-bootstrap-icons';

// import media files
import JobGraphics from 'assets/images/job/job-graphics.svg';
import CommonHeaderTabs from './CommonHeaderTabs';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';
import CompanyReviewsData from 'data/marketing/jobs/CompanyReviewsData';
import Ratings from 'components/marketing/common/ratings/Ratings';

const Reviews = () => {
	const data = ComapniesListData[0];
	const categorizedRating = [
		{ rating: 4.1, category: 'Job Security' },
		{ rating: 3.8, category: 'Skill Development' },
		{ rating: 3.8, category: 'Company Culture' },
		{ rating: 3.7, category: 'Work-Life Balance' },
		{ rating: 3.5, category: 'Career Growth' }
	];

	const ratingProgressBar = [
		{ rating: 5, totalReviews: '6.6k', progressBarValue: 60 },
		{ rating: 4, totalReviews: '2.9k', progressBarValue: 50 },
		{ rating: 3, totalReviews: '3k', progressBarValue: 35 },
		{ rating: 2, totalReviews: '479', progressBarValue: 22 },
		{ rating: 1, totalReviews: '865', progressBarValue: 14 }
	];

	return (
		<CommonHeaderTabs data={data}>
			<Row>
				<Col md={12} className="mb-8">
					<div className="d-md-flex justify-content-between align-items-center">
						<div>
							<h2 className="mb-0">
								Company Reviews{' '}
								<span className="text-muted ms-2 fs-5 fw-normal">
									based on {data.totalReviews} Reviews
								</span>
							</h2>
						</div>
						<div className="mt-3">
							<Link to="#" className="btn btn-outline-primary">
								Write a Review
							</Link>
						</div>
					</div>
				</Col>
				<Col lg={8} md={8} xs={12}>
					<div className="mb-4 mb-lg-0">
						<h2 className="h3 mb-6">Overall Rating</h2>
						<Row className="align-items-center">
							<Col md={4} className="text-md-center mb-4 mb-md-0">
								{/* rating */}
								<h3 className="display-2 fw-bold">{data.rating}</h3>
								<Ratings rating={4.5} className="text-warning" />
								<p className="mb-0">{data.totalReviews} Reviews</p>
							</Col>
							<Col lg={{ span: 7, offset: 1 }} md={8}>
								{/* progress */}
								{ratingProgressBar.map((item, index) => {
									return (
										<div className="d-flex align-items-center mb-2" key={index}>
											<div className="text-nowrap me-3 text-muted">
												<span className="d-inline-block align-middle text-muted">
													{item.rating}
												</span>{' '}
												<StarFill size={13} className={`text-muted`} />
											</div>
											<div className="w-100">
												<ProgressBar
													variant="warning"
													now={item.progressBarValue}
													style={{ height: '6px' }}
												/>
											</div>
											<span className="text-muted ms-3">
												{item.totalReviews}
											</span>
										</div>
									);
								})}
							</Col>
						</Row>
					</div>
				</Col>
				<Col lg={{ span: 3, offset: 1 }} md={4} xs={4}>
					<div>
						{/* heading */}
						<h2 className="h3 mb-6">Category Ratings</h2>
						{categorizedRating.map((item, index) => {
							return (
								<div className="mb-2" key={index}>
									<span className="fw-semi-bold text-dark">
										<StarFill size={13} className="text-warning me-1" />
										{item.rating}
									</span>
									<span className="ms-3">{item.category}</span>
								</div>
							);
						})}
					</div>
				</Col>
			</Row>
			<Row className="mt-8">
				<Col lg={9} md={8} xs={12}>
					{CompanyReviewsData.map((item, index) => {
						return (
							<div className="d-flex mb-4" key={index}>
								<Image
									src={item.avatar}
									alt=""
									className="rounded-circle avatar-lg"
								/>
								<div className=" ms-3">
									<div className="fs-6 mb-3 mt-1">
										<h4 className="mb-1">{item.name}</h4>
										<span className="text-dark fw-semi-bold">
											{item.rating}
										</span>
										<StarFill size={11} className="text-warning ms-1 mb-1" />
										<span className="ms-2 text-muted">
											posted on {item.postedOn}
										</span>
									</div>
									<div>
										<h5>{item.title}</h5>
										<p>{item.review}</p>
									</div>
								</div>
							</div>
						);
					})}
					<div className="mt-8">
						<Link to="#" className="btn btn-outline-primary">
							View All Reviews
						</Link>
					</div>
				</Col>
				<Col lg={3} md={4} xs={12}>
					<Card className="bg-light shadow-none mt-4 mt-md-0">
						<Card.Body>
							<div className="mb-3">
								<Image src={JobGraphics} alt="" />
							</div>
							<h3>HelpScout is HIRING</h3>
							<p>
								We know a thing or two about what a best place to work should
								be. Come join us
							</p>
							<Link to="#" className="btn btn-primary">
								View all openings
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</CommonHeaderTabs>
	);
};

export default Reviews;
