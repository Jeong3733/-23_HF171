// import node module libraries
import { Card, Form, Button } from 'react-bootstrap';

const CoursesMedia = (props) => {
	const { next, previous } = props;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Courses Media</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					{/* Course cover image */}
					<Form.Label>Course cover image</Form.Label>
					<Form.Group className="mb-1 input-group">
						<Form.Control
							id="inputfavicon"
							type="file"
							className="form-control"
						/>
						<Form.Label
							htmlFor="inputfavicon"
							className="input-group-text mb-0"
						>
							Upload
						</Form.Label>
						<Form.Text className="text-muted">
							Upload your course image here. It must meet our course image
							quality standards to be accepted. Important guidelines: 750x440
							pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
						</Form.Text>
					</Form.Group>
					{/* Video URL  */}
					<Form.Group className="mb-3 mt-3">
						<Form.Control type="text" placeholder="Video URL" id="VideoURL" />
						<Form.Text className="text-muted">
							Enter a valid video URL. Students who watch a well-made promo
							video are 5X more likely to enroll in your course.
						</Form.Text>
					</Form.Group>
				</Card.Body>
			</Card>

			{/* Button */}
			<div className="d-flex justify-content-between">
				<Button variant="secondary" onClick={previous}>
					Previous
				</Button>
				<Button variant="primary" onClick={next}>
					Next
				</Button>
			</div>
		</Form>
	);
};
export default CoursesMedia;
