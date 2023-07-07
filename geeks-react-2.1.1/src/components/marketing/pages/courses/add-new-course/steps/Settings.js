// import node module libraries
import { Card, Form, Button } from 'react-bootstrap';

// import custom components
import GKTagsInput from 'components/elements/tags/GKTagsInput';

const Settings = (props) => {
	const { previous } = props;

	return (
		<Form>
			{/* Card */}
			<Card className="mb-3  border-0">
				<Card.Header className="border-bottom px-4 py-3">
					<h4 className="mb-0">Requirements</h4>
				</Card.Header>
				{/* Card body */}
				<Card.Body>
					<GKTagsInput defaulttags={['jQuery', 'bootstrap']} />
				</Card.Body>
			</Card>
			<div className="d-flex justify-content-between mb-22">
				{/* Button */}
				<Button variant="secondary" onClick={previous}>
					Previous
				</Button>
				<Button variant="danger">Submit For Review</Button>
			</div>
		</Form>
	);
};
export default Settings;
