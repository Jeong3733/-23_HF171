/************************************************************************
Component : Logo with Top Heading + Offset settings ( added with v2.0.0 )
*************************************************************************

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
			<Col>
				<div className="mb-3 mt-3">
					<Image src={logo} alt="" />
				</div>
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
		<Container>
			<Row>
				<Col xl={{ span: 10, offset: offset }} sm={12}>
					<Heading />
					<Row className="text-center">
						<LogosList />
					</Row>
				</Col>
			</Row>
		</Container>
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
