// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import GKBreadcrumb from 'components/marketing/common/breadcrumb/GKBreadcrumb';

const HeaderBreadcrumb = ({ title, breadcrumb }) => {
	return (
		<Fragment>
			{/* page title  */}
			<section className="py-8 bg-light">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<h1 className="fw-bold mb-0 display-4">{title}</h1>
						</Col>
					</Row>
				</Container>
			</section>

			{/* breadcrumb  */}
			<section className="pt-3">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<GKBreadcrumb breadcrumb={breadcrumb} />
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};
export default HeaderBreadcrumb;
