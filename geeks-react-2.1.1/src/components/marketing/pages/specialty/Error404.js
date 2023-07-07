// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image } from 'react-bootstrap';

// import media files
import ErrorImage from 'assets/images/error/404-error-img.svg';

const Error404 = () => {
	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
				<Col
					xl={{ offset: 1, span: 4 }}
					lg={6}
					md={12}
					className="text-center text-lg-start"
				>
					<h1 className="display-1 mb-3">404</h1>
					<p className="mb-5 lead">
						Oops! Sorry, we couldn’t find the page you were looking for. If you
						think this is a problem with us, please{' '}
						<Link to="#" className="btn-link">
							<u>Contact us</u>
						</Link>
					</p>
					<Link to="/" className="btn btn-primary me-2">
						Back to Safety
					</Link>
				</Col>
				<Col
					xl={{ offset: 1, span: 6 }}
					lg={6}
					md={12}
					className="mt-8 mt-lg-0"
				>
					<Image src={ErrorImage} alt="" className="w-100" />
				</Col>
			</Row>
		</Fragment>
	);
};

export default Error404;
