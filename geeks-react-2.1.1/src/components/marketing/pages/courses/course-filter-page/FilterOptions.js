// import node module libraries
import { Form, Card } from 'react-bootstrap';

// import sub components
import Ratings from 'components/marketing/common/ratings/Ratings';

const FilterOptions = () => {
	return (
		<Card>
			{/* Card header */}
			<Card.Header>
				<h4 className="mb-0">Filter</h4>
			</Card.Header>
			{/* Card body */}
			<Card.Body>
				<span className="dropdown-header px-0 mb-2"> Category</span>
				<Form>
					{/* Checkboxes for Courses */}
					{[
						'React',
						'Javascript',
						'Angular',
						'Node',
						'Angular JS',
						'GatsBy',
						'GraphQL',
						'VueJs',
						'Bootstrap',
						'Figma',
						'Sketch',
						'HTML5'
					].map((item, index) => (
						<Form.Check
							type="checkbox"
							className="mb-1"
							label={item}
							key={index}
						/>
					))}
				</Form>
			</Card.Body>
			{/* Card body */}
			<Card.Body className="border-top">
				<span className="dropdown-header px-0 mb-2"> Ratings</span>
				{/* Radio for Ratings */}
				<Form>
					{[4.5, 4.0, 3.5, 3.0].map((item, index) => (
						<Form.Check
							type="radio"
							id={`formRating${item}`}
							className="mb-1"
							key={index}
						>
							<Form.Check.Input type="radio" name="customRadio" />
							<Form.Check.Label>
								<span className="text-warning">
									<Ratings rating={item} />
								</span>{' '}
								<span className="fs-6 pt-1">{item} & UP</span>
							</Form.Check.Label>
						</Form.Check>
					))}
				</Form>
			</Card.Body>
			{/* Card body */}
			<Card.Body className="border-top">
				<span className="dropdown-header px-0 mb-2"> Skill Level</span>
				<Form>
					{/* Checkboxes for Level */}
					{['All Level', 'Beginner', 'Intermediate', 'Advance'].map(
						(item, index) => (
							<Form.Check
								type="checkbox"
								className="mb-1"
								label={item}
								key={index}
							/>
						)
					)}
				</Form>
			</Card.Body>
		</Card>
	);
};
export default FilterOptions;
