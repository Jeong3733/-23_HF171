// import node module libraries
import { Card, Form, Button } from 'react-bootstrap';

// import custom components
import { FormSelect } from 'components/elements/form-select/FormSelect';
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';

const BasicInformation = (props) => {
	const { next } = props;

	const categoryOptions = [
		{ value: 'React', label: 'React' },
		{ value: 'Javascript', label: 'Javascript' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'Vuejs', label: 'Vue js' },
		{ value: 'Gulpjs', label: 'Gulp js' }
	];

	const CoursesLevel = [
		{ value: 'Intermediate', label: 'Intermediate' },
		{ value: 'Beignners', label: 'Beignners' },
		{ value: 'Advance', label: 'Advance' }
	];

	const initialValue = `<p>Insert course description</p>
                      <p><br /></p>        
                      <p>Some initial <strong>bold</strong> text</p>
                      <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3 ">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Basic Information</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					{/* Title  */}
					<Form.Group className="mb-3">
						<Form.Label htmlFor="courseTitle">Course Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Course Title"
							id="course_title"
							name="course_title"
						/>
						<Form.Text className="text-muted">
							Write a 60 character course title.
						</Form.Text>
					</Form.Group>

					{/* Category */}
					<Form.Group className="mb-3">
						<Form.Label>Category category</Form.Label>
						<FormSelect
							options={categoryOptions}
							id="category_category"
							name="category_category"
							placeholder="Select Category"
						/>
						<Form.Text className="text-muted">
							Help people find your courses by choosing categories that
							represent your course.
						</Form.Text>
					</Form.Group>

					{/* Courses level */}
					<Form.Group className="mb-3">
						<Form.Label>Courses level</Form.Label>
						<FormSelect
							options={CoursesLevel}
							id="courses_level"
							name="courses_level"
							placeholder="Select level"
						/>
					</Form.Group>

					{/* Course Description*/}
					<Form.Group className="mb-3">
						<Form.Label>Course Description</Form.Label>
						<ReactQuillEditor
							initialValue={initialValue}
							id="course_description"
							name="course_description"
						/>
						<Form.Text className="text-muted">
							A brief summary of your courses.
						</Form.Text>
					</Form.Group>
				</Card.Body>
			</Card>
			{/* Button */}
			<Button variant="primary" onClick={next}>
				Next
			</Button>
		</Form>
	);
};
export default BasicInformation;
