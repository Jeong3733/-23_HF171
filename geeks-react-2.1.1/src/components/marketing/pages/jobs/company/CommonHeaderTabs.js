// import node module libraries
import { Link, useLocation } from 'react-router-dom';
import { Col, Row, Container, Image, ListGroup } from 'react-bootstrap';
import { Fragment } from 'react';

// import media files
import CompanyBG from 'assets/images/background/company-bg.jpg';

const CommonHeaderTabs = (props) => {
	const location = useLocation();
	const tabItems = [
		{ title: 'About Us', link: '/marketing/jobs/company/about/' },
		{
			title: 'Review (' + props.data.totalReviews + ')',
			link: '/marketing/jobs/company/reviews/'
		},
		{
			title: 'Jobs (' + props.data.jobPosting + ')',
			link: '/marketing/jobs/company/jobs/'
		},
		{ title: 'Benefits', link: '/marketing/jobs/company/benifits/' },
		{ title: 'Photos', link: '/marketing/jobs/company/photos/' }
	];
	return (
		<Fragment>
			<section
				className="py-20 bg-white"
				style={{
					backgroundImage: `url(${CompanyBG})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover'
				}}
			></section>
			<section className="bg-white">
				<Container>
					<Row className="align-items-center">
						<Col xs={12}>
							<div className="d-md-flex align-items-center">
								<div className="position-relative mt-n5">
									<Image
										src={props.data.logo}
										alt=""
										className=" rounded-3 border"
										width={120}
									/>
								</div>
								<div className="w-100 ms-md-4 mt-4">
									<div className="d-flex justify-content-between">
										<div>
											{/* heading */}
											<h1 className="mb-0 ">{props.data.company} </h1>
											<div>
												{/* reviews */}
												<span className="text-dark fw-medium">
													{props.data.rating}{' '}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="10"
														height="10"
														fill="currentColor"
														className="bi bi-star-fill text-warning align-baseline"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
													</svg>
												</span>{' '}
												<span className="ms-0">
													({props.data.totalReviews} Reviews)
												</span>
											</div>
										</div>
										<div>
											{/* button */}
											<Link to="#" className="btn btn-outline-primary">
												Follow
											</Link>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="py-6 bg-white">
				<Container>
					<Row>
						<Col md={12}>
							{/* nav */}
							<div>
								<ListGroup as="ul" bsPrefix="nav nav-line-bottom">
									{tabItems.map((item, index) => {
										return (
											<ListGroup.Item key={index} as="li" bsPrefix="nav-item">
												<Link
													to={item.link}
													className={`nav-link ${
														location.pathname === item.link ? 'active' : ''
													}`}
												>
													{item.title}
												</Link>
											</ListGroup.Item>
										);
									})}
								</ListGroup>
							</div>
						</Col>
					</Row>
					<Row className="mt-6">
						<Col xs={12}>{props.children}</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default CommonHeaderTabs;
