// import node module libraries
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const StatRightBadge = (props) => {
	const { title, subtitle, value, badgeValue, colorVariant, classValue } =
		props;

	return (
		<Card border="light" className={`${classValue}`}>
			<Card.Body className="p-0">
				<div className="p-4">
					<span className="fs-6 text-uppercase fw-semi-bold">{title}</span>
					<h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
						{value}
					</h2>
					<span className="d-flex justify-content-between align-items-center">
						<span>{subtitle}</span>
						<Badge bg={colorVariant} className="ms-2">
							{badgeValue}
						</Badge>
					</span>
				</div>
			</Card.Body>
		</Card>
	);
};

// Specifies the default values for props
StatRightBadge.defaultProps = {
	classValue: ''
};

// Typechecking With PropTypes
StatRightBadge.propTypes = {
	classValue: PropTypes.string
};

export default StatRightBadge;
