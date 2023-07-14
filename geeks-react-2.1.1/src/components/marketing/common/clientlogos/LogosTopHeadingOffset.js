/**************************************************
Component : Logo with Top Heading + Offset settings
***************************************************

Availalble Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter
offset       : Optional, if you specify offset content will be displayed after N offset column(s) within the given column span

*/

// import node module libraries
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LogosTopHeadingOffset = ({ logos, title, limit, offset }) => {
	const Heading = () => {
		if (title) {
			return (
				<Row className="mb-6 justify-content-center">
					<Col lg={8} md={12} sm={12} className="text-center">
						<span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">
							{title}
						</span>
					</Col>
				</Row>
			);
		} else {
			return '';
		}
	};

	const LogoImage = ({ logo }) => {
		return (
			<Col
				lg={3}
				md={3}
				sm={6}
				xs={6}
				className="text-center mb-4 mb-xl-0 d-flex align-items-center justify-content-center"
			>
				<Image src={logo} alt="" className="mb-4" />
			</Col>
		);
	};
	const LogosList = () => {
		if (limit > 0) {
			return logos
				.slice(0, limit)
				.map((logo, index) => <LogoImage key={index} logo={logo.logoimage} />);
		} else {
			return logos.map((logo, index) => (
				<LogoImage key={index} logo={logo.logoimage} />
			));
		}
	};
	return (
		<section className="pb-8 pb-lg-14 bg-white">
			<Container>
				<Row>
					<Col xl={{ span: 8, offset: offset }} sm={12}>
						<Heading />
						<Row className="mt-8">
							<LogosList />
						</Row>
						<hr className="mt-10" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

LogosTopHeadingOffset.propTypes = {
	title: PropTypes.string,
	limit: PropTypes.number,
	offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])
};

LogosTopHeadingOffset.defaultProps = {
	limit: -1,
	offset: 0
};

export default LogosTopHeadingOffset;
