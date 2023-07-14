// import node module libraries
import { Row, Col, Nav, Tab, Card } from 'react-bootstrap';

// import custom components
import CourseSlider from 'components/marketing/pages/courses/CourseSlider';

const CoursesTabSlider = () => {
	return (
		<Row>
			<Col md={12}>
				<Tab.Container defaultActiveKey="all">
					<Card className="bg-transparent shadow-none ">
						<Card.Header className="border-0 p-0 bg-transparent">
							<Nav className="nav-lb-tab">
								<Nav.Item className="ms-0">
									<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
										{' '}
										All Categories
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
										Design
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="javascript" className="mb-sm-3 mb-md-0">
										Javascript
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										eventKey="webdevelopment"
										className="mb-sm-3 mb-md-0"
									>
										Web Development
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Card.Header>
						<Card.Body className="p-0">
							<Tab.Content>
								<Tab.Pane eventKey="all" className="pb-4 p-4 ps-0 pe-0">
									<CourseSlider />
								</Tab.Pane>
								<Tab.Pane eventKey="design" className="pb-4 p-4 ps-0 pe-0">
									<CourseSlider />
								</Tab.Pane>
								<Tab.Pane eventKey="javascript" className="pb-4 p-4 ps-0 pe-0">
									<CourseSlider category="javascript" />
								</Tab.Pane>
								<Tab.Pane
									eventKey="webdevelopment"
									className="pb-4 p-4 ps-0 pe-0"
								>
									<CourseSlider />
								</Tab.Pane>
							</Tab.Content>
						</Card.Body>
					</Card>
				</Tab.Container>
			</Col>
		</Row>
	);
};
export default CoursesTabSlider;
