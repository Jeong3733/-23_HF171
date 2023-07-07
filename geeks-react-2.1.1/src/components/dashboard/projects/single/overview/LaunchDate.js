// import node module libraries
import { Card } from 'react-bootstrap';

const LaunchDate = () => {
	return (
		<Card className="mb-4 bg-primary border-primary">
			<Card.Body>
				<Card.Title className="text-white" as="h4">
					Launch Date
				</Card.Title>
				<div className="d-flex justify-content-between align-items-center mt-8">
					<div>
						<h1 className="display-4 text-white mb-1">121 Days</h1>
						<p className="mb-0 text-white">15 December, Friday</p>
					</div>
					<div>
						<i className="fe fe-flag fs-1 text-light-primary"></i>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};
export default LaunchDate;
