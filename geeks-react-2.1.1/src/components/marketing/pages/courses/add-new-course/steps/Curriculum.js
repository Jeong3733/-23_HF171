// import node module libraries
import { Card, Form, Button, Modal } from 'react-bootstrap';

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
					<h1>저런!</h1>
					<p>게으른 개발자가 이 부분을 아직 구현하지 않았네요. 🤔 하지만 form이 잘 작성되었는지는 확인할 수 있답니다.</p>
					<p>{JSON.stringify(data)}</p>
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
