/******************************************************
Component : Logo with Top Heading and Inverse Dark Logo
*******************************************************

Availalble Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter
inverse		 : Optional, default true i.e. show all logos in inverse format, set false if you don't want logos in inverse format.
*/

// import node module libraries
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const LogosTopHeadingInverseDark = ({ logos, title, limit, inverse }) => {
	const LogoImage = ({ logo }) => {
		return (
			<Col>
				<div className="mb-4 mb-lg-0">
					<Image
						src={logo}
						alt=""
						className={inverse ? 'text-inverse-dark' : ''}
					/>
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
		<Row className="mt-10">
			<Col xl={{ offset: 1, span: 10 }} md={12} xs={12}>
				<div className="text-center mb-6 px-md-8">
					<span className="ls-md">{title}</span>
				</div>
				<Row className="text-center">
					<LogosList />
				</Row>
			</Col>
		</Row>
	);
};

LogosTopHeadingInverseDark.propTypes = {
	logos: PropTypes.array,
	title: PropTypes.string,
	limit: PropTypes.number,
	inverse: PropTypes.bool
};

LogosTopHeadingInverseDark.defaultProps = {
	limit: -1,
	inverse: true
};

export default LogosTopHeadingInverseDark;
