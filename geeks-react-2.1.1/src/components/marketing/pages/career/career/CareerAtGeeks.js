// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import custom components
import SectionHeadingLeft3 from 'components/marketing/common/section-headings/SectionHeadingLeft3';
import StatTopLine from 'components/marketing/common/stats/StatTopLine';

const CareerAtGeeks = () => {
	const title = 'Do your best work and thrive at Geeks';
	const subtitle = 'Career at geeks';
	const description = `We’re building a better way to work, fueled by transparency, trust, and technology that is a force for positive change in the world.`;
	const btntext = 'See all open positions';
	const btnlink = '/marketing/pages/career-list/';

	return (
		<section className="pb-14 pt-8 pt-lg-0 bg-white">
			<Container>
				<Row>
					<Col xl={{ span: 10, offset: 1 }} sm={12}>
						{/* section heading */}

						<SectionHeadingLeft3
							title={title}
							description={description}
							subtitle={subtitle}
							btntext={btntext}
							btnlink={btnlink}
						/>

						{/* stat counters */}

						<Row>
							<Col lg={4} md={4} xs={12}>
								<StatTopLine title="Team members" value="100+" />
							</Col>
							<Col lg={4} md={4} xs={12}>
								<StatTopLine title="in VC funding" value="$47M" />
							</Col>
							<Col lg={4} md={4} xs={12}>
								<StatTopLine title="Customers" value="18K" />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default CareerAtGeeks;
