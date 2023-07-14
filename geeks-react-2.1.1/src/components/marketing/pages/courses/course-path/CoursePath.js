// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import PageHeadingBriefinfo from 'components/marketing/common/page-headings/PageHeadingBriefinfo';

// import custom sub components
import CoursePathCard from './CoursePathCard';

// import data files
import { CoursePathData } from 'data/marketing/CoursePathData';

const CoursePath = () => {
	const categoryOptions = [
		{ value: 'design', label: 'Design' },
		{ value: 'development', label: 'Development' },
		{ value: 'program', label: 'Program' }
	];

	const sortbyOptions = [
		{ value: 'newest', label: 'Newest' },
		{ value: 'popularity', label: 'Popularity' },
		{ value: 'rated', label: 'Rated' }
	];

	return (
		<Fragment>
			{/* Page header */}
			<PageHeadingBriefinfo
				pagetitle="Browse Paths"
				briefinfo="Get started by learning from a path below"
			/>

			{/* Content */}
			<section className="py-6">
				<Container>
					<Row>
						<Col lg={12} md={12} sm={12}>
							<Row className="justify-content-between align-items-center">
								<Col xl={8} md={6} sm={12}>
									<h4 className="mb-3 mb-md-0">
										Total {CoursePathData.length} Paths
									</h4>
								</Col>
								<Col xl={2} md={3} sm={6} className="pe-md-0">
									{/* Category select */}
									<Form.Group className="mb-3">
										<FormSelect
											options={categoryOptions}
											placeholder="Category"
										/>
									</Form.Group>
								</Col>
								{/* Sort by select */}
								<Col xl={2} md={3} sm={6}>
									<Form.Group className="mb-3">
										<FormSelect options={sortbyOptions} placeholder="Sort by" />
									</Form.Group>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Content */}
			<section className="container">
				<Row>
					{CoursePathData.map((item, index) => (
						<Col xl={4} lg={6} md={6} sm={12} key={index}>
							<CoursePathCard item={item} />
						</Col>
					))}
				</Row>
			</section>
		</Fragment>
	);
};

export default CoursePath;
