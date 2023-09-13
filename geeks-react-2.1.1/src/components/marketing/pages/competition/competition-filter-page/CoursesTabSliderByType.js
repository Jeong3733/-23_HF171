// import node module libraries
import { Row, Col, Nav, Tab, Card } from 'react-bootstrap';

// import custom components
import CourseSlider from 'components/marketing/pages/competition/CourseSlider';

import { competitionCategories } from 'components/marketing/pages/competition/competition-filter-page/competitionCategories';

const CoursesTabSliderByType = (props) => {
  const { data, isLoggedIn } = props;
  // console.log(data, isLoggedIn);

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
                {competitionCategories.map((item) => (
                  <Nav.Item key={item.label}>
                    <Nav.Link eventKey={item.label} className="mb-sm-3 mb-md-0">
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="all" className="pb-4 p-4 ps-0 pe-0">
                  <CourseSlider data={data} isLoggedIn={isLoggedIn} />
                </Tab.Pane>
                {competitionCategories.map((item) => (
                  <Tab.Pane
                    key={item.label}
                    eventKey={item.label}
                    className="pb-4 p-4 ps-0 pe-0"
                  >
                    <CourseSlider
                      data={data}
                      category={item.label}
                      isLoggedIn={isLoggedIn}
                    />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Col>
    </Row>
  );
};
export default CoursesTabSliderByType;
