// import node module libraries
import React from 'react';
import { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import CourseSlider from 'components/marketing/pages/courses/CourseSlider';

// import sub components
import FeaturesList from 'components/marketing/pages/courses/course-index/FeaturesList';
import HeroHeader from 'components/marketing/pages/courses/course-index/HeroHeader';

const IndexPage = () => {
	return (
		<Fragment>
			{/*  Page Content  */}
			<HeroHeader />

			<section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">내 공모전</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider recommended={true} />
					</div>
				</Container>
			</section>
		</Fragment>
	);
};

export default IndexPage;
