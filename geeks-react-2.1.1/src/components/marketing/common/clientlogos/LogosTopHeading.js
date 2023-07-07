/********************************
Component : Logo with Top Heading
*********************************

Availalble Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter

*/

// import node module libraries
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LogosTopHeading = ({ logos, title, limit }) => {
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
			<Col lg={2} md={4} sm={6} xs={6}>
				<div className="mb-4 text-center align-middle">
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
		<section className="bg-white py-lg-16 py-8">
			<Container>
				<Heading />
				<Row>
					<LogosList />
				</Row>
			</Container>
		</section>
	);
};

LogosTopHeading.propTypes = {
	title: PropTypes.string,
	limit: PropTypes.number
};

LogosTopHeading.defaultProps = {
	limit: -1
};

export default LogosTopHeading;
