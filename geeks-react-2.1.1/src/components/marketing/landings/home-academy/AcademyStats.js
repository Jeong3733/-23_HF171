// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import StatTopBigIcon from 'components/marketing/common/stats/StatTopBigIcon';

const AcademyStats = () => {
	return (
		<section className="pb-14 bg-white">
			<Container>
				<Row>
					<Col
						lg={3}
						md={6}
						className="border-top-md border-bottom border-end-md "
					>
						<StatTopBigIcon
							title="Qualified Instructor"
							value="316,000+"
							iconName="award"
							colorVariant="info"
						/>
					</Col>
					<Col
						lg={3}
						md={6}
						className="border-top-md border-bottom border-end-lg "
					>
						<StatTopBigIcon
							title="Course enrolments"
							value="1.8 Billion+"
							iconName="users"
							colorVariant="warning"
						/>
					</Col>
					<Col
						lg={3}
						md={6}
						className="border-top-lg border-bottom border-end-md "
					>
						<StatTopBigIcon
							title="Courses in 42 languages"
							value="41,000+"
							iconName="tv"
							colorVariant="primary"
						/>
					</Col>
					<Col lg={3} md={6} className="border-top-lg border-bottom ">
						<StatTopBigIcon
							title="Online Videos"
							value="179,000+"
							iconName="film"
							colorVariant="success"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AcademyStats;
