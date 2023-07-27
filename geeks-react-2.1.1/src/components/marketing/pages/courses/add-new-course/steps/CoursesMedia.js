// import node module libraries
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

import ReactQuillEditor from "components/elements/editor/ReactQuillEditor";

const CoursesMedia = (props) => {
	const { next, data, handleChange, previous } = props;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">공모전 소개글</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>

					{/* 공모전 소개글*/}
					<Form.Group className="mb-3">
						<Form.Label>소개글 내용</Form.Label>
						<ReactQuillEditor
							initialValue={data.competition_readme}
							id="competition_readme"
							name="competition_readme"
							value={data.competition_readme}
							handleChange={handleChange}
						/>
						{/* <Form.Text className="text-muted">
							A brief summary of your courses.
						</Form.Text> */}
					</Form.Group>

					{/* File upload */}
					<Form.Label>첨부파일</Form.Label>
					<Form.Group className="mb-3 input-group">
						<InputGroup>
							<Form.Control
								id="competition_docs"
								name="competition_docs"
								type="file"
								className="form-control"
								value={data.competition_docs}
								onChange={handleChange}
							/>
						</InputGroup>
						<Form.Text className="text-muted">
							공모전 소개글에 첨부할 파일을 선택하세요. (권장사항: )
						</Form.Text>
					</Form.Group>
				</Card.Body>
			</Card>

			{/* Button */}
			<div className="d-flex justify-content-between">
				<Button variant="secondary" onClick={previous}>
					이전
				</Button>
				<Button variant="primary" onClick={next}>
					다음
				</Button>
			</div>
		</Form>
	);
};
export default CoursesMedia;
