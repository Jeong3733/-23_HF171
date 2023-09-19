// import node module libraries
import {
  Card,
  Form,
  Button,
  Modal,
  Col,
  Container,
  Row,
} from 'react-bootstrap';

const Curriculum = (props) => {
  const { submit, previous, data } = props;
  return (
    <Form>
      {/* Card */}
      <Card className="mb-3  border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">미리보기</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          <Container className="mb-6">
            <Row>
              {/* About the company text */}
              <Col
                style={{ maxWidth: '100%', overflow: 'hidden' }}
                dangerouslySetInnerHTML={{
                  __html: data.competitionReadme,
                }}
              />
            </Row>
          </Container>
        </Card.Body>
      </Card>
      {/* Button */}
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={previous}>
          이전
        </Button>
        <Button variant="primary" onClick={submit}>
          등록완료
        </Button>
      </div>
    </Form>
  );
};
export default Curriculum;
