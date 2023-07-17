// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

const PageHeading = ({ pagetitle }) => {
	return (
		<section className="bg-primary py-4 py-lg-6">
			<Container>
				<Row className="align-items-center">
					<Col xl={12} lg={12} md={12} sm={12}>
						<div>
							<h1 className="mb-0 text-white display-4">{pagetitle}</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default PageHeading;
