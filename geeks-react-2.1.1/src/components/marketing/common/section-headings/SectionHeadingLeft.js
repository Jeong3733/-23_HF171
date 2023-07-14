// Section : Header
// Style : H2 title, subtitle with description in left aligned

// import node module libraries
import { Col, Row } from 'react-bootstrap';

const SectionHeadingLeft = ({ title, subtitle, description }) => {
	return (
		<Row>
			<Col md={12}>
				{subtitle && (
					<span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-lg">
						{subtitle}
					</span>
				)}
				<h2 className="mb-1 display-4 fw-bold">{title}</h2>
				<p className="mb-8 lead">{description}</p>
			</Col>
		</Row>
	);
};

export default SectionHeadingLeft;
