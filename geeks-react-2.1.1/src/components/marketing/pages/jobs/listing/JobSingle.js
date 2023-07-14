// import node module libraries
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// import sub components
import JobListingListviewCard from 'components/marketing/common/cards/JobListingListviewCard';
import GKTippy from 'components/elements/tooltips/GKTippy';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

const JobSingle = () => {
	const slugInfo = useParams();
	const slug = slugInfo.slug;
	const job = JobsListingData.find((job) => job.slug === slug);
	const similarJobs = JobsListingData.filter((job) => job.slug !== slug).slice(
		0,
		4
	);
	return (
		<section className="py-14 bg-white">
			<Container>
				<Row>
					<Col xl={{ span: 8, offset: 2 }} md={12}>
						<div className="d-xl-flex ">
							<div className="mb-3 mb-md-0">
								<Image
									src={job.logo}
									alt=""
									className="icon-shape border rounded-circle"
								/>
							</div>
							{/* text */}
							<div className="ms-xl-3  w-100 mt-3 mt-xl-0">
								<div className="d-flex justify-content-between mb-5">
									<div>
										<h1 className="mb-1 h2 ">{job.position}</h1>
										<div>
											<span>at {job.company} </span>
											{/* star */}
											<span className="text-dark ms-2 fw-medium">
												{job.rating}{' '}
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
											</span>
											<span className="ms-0">({job.totalReviews} Reviews)</span>
										</div>
									</div>
									<div>
										{/* bookmark */}
										<GKTippy content="Add to Bookmarks">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-bookmark text-muted bookmark"
												viewBox="0 0 16 16"
											>
												<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
											</svg>
										</GKTippy>
									</div>
								</div>
								<div>
									{/* year */}
									<div className="d-md-flex justify-content-between ">
										<div className="mb-2 mb-md-0">
											<span className="me-2">
												{' '}
												<i className="fe fe-briefcase text-muted"></i>
												<span className="ms-1 ">{job.experience}</span>
											</span>
											{/* text */}
											<span className="me-2">
												<i className="fe fe-dollar-sign text-muted"></i>
												<span className="ms-1 ">{job.salary}</span>
											</span>
											{/* location */}
											<span className="me-2">
												<i className="fe fe-map-pin text-muted"></i>
												<span className="ms-1 ">{job.location}</span>
											</span>
										</div>
										<div>
											{/* time */}
											<i className="fe fe-clock text-muted"></i>{' '}
											<span>{job.postedOn}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr className="my-4" />
						<div>
							<p>
								<span>
									Job Applicants:{' '}
									<span className="text-dark">{job.jobApplicants}</span>
								</span>
							</p>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: job.jobDetails
							}}
						/>
						{/* button */}
						<div className="mt-5 d-grid">
							<Button as="a" variant="primary" href="#">
								Apply for this Job
							</Button>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xl={{ span: 8, offset: 2 }} md={12}>
						<div className="mt-12">
							<h2 className="mb-4">Similar Jobs</h2>
							{similarJobs.map((job, index) => {
								return <JobListingListviewCard item={job} key={index} />;
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default JobSingle;
