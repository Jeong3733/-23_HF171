// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

// import sub components
import Version010000 from './Version010000';
import Version010100 from './Version010100';
import Version010200 from './Version010200';
import Version010300 from './Version010300';
import Version010400 from './Version010400';
import Version010500 from './Version010500';
import Version010501 from './Version010501';
import Version020000 from './Version020000';
import Version020001 from './Version020001';
import Version020100 from './Version020100';
import Version020101 from './Version020101';

const ChangeLog = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Changelog</h1>
							<p className="mb-0">
								We’re constantly improving & updating Geeks. See the latest
								features and improvements.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col lg={7} md={12} sm={12}>
					<Alert variant="warning" className="justify-content-between d-flex">
						<div>
							<ExclamationTriangleFill size={20} className="me-1" />
						</div>
						<div className="ms-3">
							<Alert.Heading as="h4">
								Make a backup before updating.
							</Alert.Heading>
							Before updating, read the changelog carefully and please backup
							your project and customizations, because having a backup will keep
							you safe from losing anything.
						</div>
					</Alert>
				</Col>
			</Row>
			
			<Version020101 />
			<hr className="my-5" />

			<Version020100 />
			<hr className="my-5" />

			<Version020001 />
			<hr className="my-5" />

			<Version020000 />
			<hr className="my-5" />

			<Version010501 />
			<hr className="my-5" />

			<Version010500 />
			<hr className="my-5" />

			<Version010400 />
			<hr className="my-5" />

			<Version010300 />
			<hr className="my-5" />

			<Version010200 />
			<hr className="my-5" />

			<Version010100 />
			<hr className="my-5" />

			<Version010000 />
		</Fragment>
	);
};

export default ChangeLog;
