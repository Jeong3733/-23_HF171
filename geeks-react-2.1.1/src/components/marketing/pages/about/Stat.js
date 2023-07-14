// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import sub components
import SectionHeading from './SectionHeading';

const Stat = () => {
	const title = 'Our core values';
	const description = `Geeks is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.`;

	const counters = [
		{
			id: 1,
			title: 'Learners',
			value: '20M'
		},
		{
			id: 2,
			title: 'Instructors',
			value: '57K'
		},
		{
			id: 3,
			title: 'Courses',
			value: '21K'
		},
		{
			id: 4,
			title: 'Course enrollments',
			value: '380M'
		}
	];
	return (
		<Fragment>
			<SectionHeading title={title} description={description} />
			<Row>
				{counters.map((item, index) => {
					return (
						<Col lg={3} md={6} sm={6} xs={6} key={index}>
							{/* Counter */}
							<div className="border-top pt-4 mt-6 mb-5">
								<h1 className="display-3 fw-bold mb-0">{item.value}</h1>
								<p className="text-uppercase text-muted">{item.title}</p>
							</div>
						</Col>
					);
				})}
			</Row>
		</Fragment>
	);
};

export default Stat;
