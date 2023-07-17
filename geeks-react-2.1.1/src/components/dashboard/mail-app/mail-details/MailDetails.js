// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Breadcrumb } from 'react-bootstrap';

// import sub custom components
import MailSidebar from '../MailSidebar';
import MailDetailsHeader from './MailDetailsHeader';
import MailDetailsBody from './MailDetailsBody';
import MailDetailsFooter from './MailDetailsFooter';

const MailDetails = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-0 mb-4">
						<div className="mb-0 mb-lg-0">
							<h1 className="mb-0 h2 fw-bold">Mail</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Mail</Breadcrumb.Item>
								<Breadcrumb.Item active>Draft</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xl={12} lg={12} md={12} xs={12}>
					<Card>
						<Row className="g-0">
							<Col xxl={2} xl={3} className="border-end">
								{/* mail sidebar */}
								<MailSidebar />
							</Col>

							<Col xxl={10} xl={9} xs={12}>
								{/* mail detail header */}
								<Card.Header>
									<MailDetailsHeader />
								</Card.Header>

								{/* mail detail body */}
								<Card.Body>
									<MailDetailsBody />
								</Card.Body>

								{/* mail detail footer */}
								<Card.Footer className="py-4 bg-white">
									<MailDetailsFooter />
								</Card.Footer>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};
export default MailDetails;
