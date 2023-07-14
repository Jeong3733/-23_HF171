// import node module libraries
import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// import sub components
import HeaderBreadcrumb from '../HeaderBreadcrumb';
import ArticlesCategoryCard from './ArticlesCategoryCard';

// import data files
import GuidesResourcesData from 'data/marketing/help-center/GuidesResourcesData';

const HelpCenterGuide = () => {
	const breadcrumb = [
		{
			page: 'Help Center',
			link: '/marketing/help-center/'
		},
		{
			page: 'Guides & Resources',
			link: '#'
		}
	];

	return (
		<Fragment>
			{/* header and breadcrumb */}
			<HeaderBreadcrumb title="Guides & Resources" breadcrumb={breadcrumb} />

			{/* articles category listing cards */}
			<section className="py-10">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<Row>
								{GuidesResourcesData.map((item, index) => {
									return (
										<Col lg={6} xs={12} key={index}>
											<ArticlesCategoryCard item={item} />
										</Col>
									);
								})}
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};
export default HelpCenterGuide;
