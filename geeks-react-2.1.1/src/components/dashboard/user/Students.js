// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Tab, Breadcrumb } from 'react-bootstrap';

// import custom components
import GridListViewButton from 'components/elements/miscellaneous/GridListViewButton';

// import sub components
import StudentsGridCard from './StudentsGridCard';
import StudentsListItems from './StudentsListItems';

const Students = () => {
	return (
		<Fragment>
			<Tab.Container defaultActiveKey="grid">
				<Row>
					<Col lg={12} md={12} sm={12}>
						<div className="border-bottom pb-4 mb-4 d-flex align-items-center justify-content-between">
							<div className="mb-3 mb-md-0">
								<h1 className="mb-1 h2 fw-bold">
									Students <span className="fs-5 text-muted">(1,22,105 )</span>
								</h1>
								<Breadcrumb>
									<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
									<Breadcrumb.Item href="#">User</Breadcrumb.Item>
									<Breadcrumb.Item active>Students</Breadcrumb.Item>
								</Breadcrumb>
							</div>
							<div>
								<GridListViewButton keyGrid="grid" keyList="list" />
							</div>
						</div>
					</Col>
				</Row>

				<Tab.Content>
					<Tab.Pane eventKey="grid" className="pb-4">
						{/* students in list view */}
						<StudentsGridCard />
						{/* end of students in list view */}
					</Tab.Pane>
					<Tab.Pane eventKey="list" className="pb-4">
						<Card className="mb-5 ">
							<Card.Body className="p-0">
								{/* students in list view */}
								<StudentsListItems />
								{/* end of students in list view */}
							</Card.Body>
						</Card>
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</Fragment>
	);
};
export default Students;
