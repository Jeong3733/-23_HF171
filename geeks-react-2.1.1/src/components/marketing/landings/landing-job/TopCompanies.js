// import node module libraries
import { Col, Row, Container, Button } from 'react-bootstrap';

// import sub components
import FeaturedCompaniesCard from 'components/marketing/common/cards/FeaturedCompaniesCard';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const TopCompanies = () => {
	return (
		<section className="py-lg-14 bg-light pt-8 pb-10">
			<Container>
				<Row>
					<Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
						<Row className="text-center">
							<Col md={12} className="px-lg-10 mb-8 mt-6">
								<span className="text-uppercase text-primary fw-semi-bold ls-md">
									Top Companies Hiring
								</span>
								<h2 className="h1 fw-bold mt-3 mb-2">
									Featured companies actively hiring
								</h2>
								<p className="fs-4 mb-0">
									Nam velit neque eleifend at gravida iaculis cursus at orci.{' '}
								</p>
							</Col>
						</Row>
						<Row className="gy-4">
							{ComapniesListData.filter(function (dataSource) {
								return dataSource.featured === true;
							}).map((item, index) => {
								return (
									<Col lg={3} md={6} xs={12} key={index}>
										<FeaturedCompaniesCard item={item} />
									</Col>
								);
							})}
							<Col xs={12} className="mt-8 text-center">
								<Button as="a" variant="outline-primary" href="#">
									View All Companies
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default TopCompanies;
