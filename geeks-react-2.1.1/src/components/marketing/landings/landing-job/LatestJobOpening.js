// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import custom components
import JobListingListviewCard from 'components/marketing/common/cards/JobListingListviewCard';

// import required data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

const LatestJobOpening = () => {
	return (
		<section className="py-lg-12 pb-8 bg-white">
			<Container>
				<Row className="row">
					<Col xl={{ span: 8, offset: 2 }} md={12} xs={12}>
						<div className="text-center mb-8">
							<span className="text-uppercase text-primary fw-semi-bold ls-md">
								Latest Job Opening
							</span>
							<h2 className="h1 fw-bold mt-3">
								Explore remote friendly, flexible job opportunities.
							</h2>
						</div>
						{JobsListingData.map((item, index) => {
							return <JobListingListviewCard item={item} key={index} />;
						})}
						{/* button */}
						<div className="mt-6 text-center">
							<Button as="a" variant="outline-primary" href="#">
								Browse All Jobs Postings
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default LatestJobOpening;
