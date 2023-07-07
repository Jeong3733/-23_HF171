// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import custom components
import CourseCard from '../CourseCard';

// import data files
import { BootstrapCoursesData } from 'data/courses/BootstrapCoursesData';

const CoursesTab = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12}>
					<div className="mb-5">
						<h2 className="mb-1">Beginner</h2>
						<p>
							Learn Bootstrap tutorial for beginners with there easy components
							and utility.
						</p>
					</div>
				</Col>
			</Row>
			<Row>
				{BootstrapCoursesData.filter(function (datasource) {
					return datasource.level === 'Beginner';
				}).map((item, index) => (
					<Col lg={3} md={6} sm={12} key={index}>
						<CourseCard item={item} />
					</Col>
				))}
			</Row>
			<hr className="my-5" />
			{/* Intermediate Courses */}
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-5">
						<h2 className="mb-1">Intermediate</h2>
						<p>Learn Bootstrap tutorial for Intermediat with node modules.</p>
					</div>
				</Col>
			</Row>
			<Row>
				{BootstrapCoursesData.filter(function (datasource) {
					return datasource.level === 'Intermediate';
				}).map((item, index) => (
					<Col lg={3} md={6} sm={12} key={index}>
						<CourseCard item={item} />
					</Col>
				))}
			</Row>
			{/* Advance Courses */}
			<hr className="my-5" />
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-5">
						<h2 className="mb-1">Advance</h2>
						<p>
							Learn Bootstrap tutorial for Advance with node modules and any
							CMS.
						</p>
					</div>
				</Col>
			</Row>
			<Row>
				{BootstrapCoursesData.filter(function (datasource) {
					return datasource.level === 'Advance';
				}).map((item, index) => (
					<Col lg={3} md={6} sm={12} key={index}>
						<CourseCard item={item} />
					</Col>
				))}
			</Row>
		</Fragment>
	);
};
export default CoursesTab;
