// import node module libraries
import { Fragment } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

// import custom components
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';
import { FormSelect } from 'components/elements/form-select/FormSelect';

const AddNewCategoryPopup = () => {
	const parentOptions = [
		{ value: '', label: 'Select' },
		{ value: 'ocean', label: 'Course' },
		{ value: 'blue', label: 'Tutorial' },
		{ value: 'purple', label: 'Workshop' },
		{ value: 'red', label: 'Company' }
	];

	const initialValue = `<h4>One Ring to Rule Them All</h4>
	<br />
	<p>
	Three Rings for the
	<p>
	One Ring to
	<b>rule</b> them all, <br />
	One Ring to find them, <br />
	One Ring to bring them all and in the darkness bind
	them. <br />
	In the Land of Mordor where the Shadows lie.
	</p>
	<p>
	<br />
	</p>`;

	const onChange = () => {
		console.log('onChange was called!');
	};

	return (
		<Fragment>
			{/*  Form  */}
			<Form>
				{/* Title  */}
				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Write a Category"
						id="category-name"
					/>
					<Form.Text className="text-muted">
						Field must contain a unique value
					</Form.Text>
				</Form.Group>

				{/*   Slug  */}
				<Form.Group className="mb-3">
					<Form.Label>Slug</Form.Label>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon3">
							https://example.com/
						</InputGroup.Text>
						<FormControl
							id="basic-url"
							aria-describedby="basic-addon3"
							placeholder="designcourses"
						/>
					</InputGroup>
					<Form.Text className="text-muted">
						Field must contain a unique value
					</Form.Text>
				</Form.Group>

				{/* Parent  */}
				<Form.Group className="mb-3">
					<Form.Label>Parent</Form.Label>
					<FormSelect options={parentOptions} />
				</Form.Group>

				{/*  Editor  */}
				<Form.Group className="mb-3">
					<ReactQuillEditor initialValue={initialValue} />
				</Form.Group>

				{/* Parent  */}
				<Form.Group className="mb-3">
					<Form.Label>Enabled</Form.Label>
					<Form.Check
						type="checkbox"
						defaultChecked
						label=""
						className=" form-switch"
						onChange={onChange}
					/>
				</Form.Group>
			</Form>
		</Fragment>
	);
};

export default AddNewCategoryPopup;
