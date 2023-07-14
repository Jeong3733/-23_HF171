/**********************************
Component : Logo with Top Heading 2
***********************************

Availalble Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter

*/

// import node module libraries
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LogosTopHeading2 = ({ logos, title, limit }) => {
	const Heading = () => {
		if (title) {
			return (
				<Row>
					<Col md={12} sm={12}>
						<div className="mb-8 text-center">
							<h4>{title}</h4>
						</div>
					</Col>
				</Row>
			);
		} else {
			return '';
		}
	};

	const LogoImage = ({ logo }) => {
		return (
			<Col md={4} lg={2} sm={6} xs={6} className="mb-4 mb-lg-0">
				<Image src={logo} alt="" />
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
		<section className="py-lg-10 py-3">
			<Container>
				<Heading />
				<Row>
					<LogosList />
				</Row>
			</Container>
		</section>
	);
};

LogosTopHeading2.propTypes = {
	logos: PropTypes.array,
	title: PropTypes.string,
	limit: PropTypes.number
};

LogosTopHeading2.defaultProps = {
	limit: -1
};

export default LogosTopHeading2;
