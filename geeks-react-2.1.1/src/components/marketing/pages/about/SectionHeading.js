// Section : Header
// Style : H2 title with description

// import node module libraries
import { Col, Row } from 'react-bootstrap';

const SectionHeading = ({ title, description }) => {
	return (
		<Row>
			<Col md={6} sm={12} className="offset-right-md-6 mb-6">
				<h2 className="display-4 mb-3 fw-bold">{title}</h2>
				<p className="lead">{description}</p>
			</Col>
		</Row>
	);
};

export default SectionHeading;
