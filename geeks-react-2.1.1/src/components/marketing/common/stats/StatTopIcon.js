// import node module libraries
import { Card, ProgressBar } from 'react-bootstrap';

export const StatTopIcon = (props) => {
	const { title, value, iconName, colorVariant, progress, classValue, flat } =
		props;

	return (
		<Card
			border="light"
			className={`h-100 ${classValue ? classValue : ''} ${
				flat ? 'shadow-none' : ''
			}`}
		>
			<Card.Body className="p-0 ">
				<div className={`p-${flat ? 0 : 4}`}>
					<span
						className={`icon-shape icon-sm bg-light-${colorVariant} text-dark-${colorVariant} rounded-3`}
					>
						<i className={`fe fe-${iconName}`}></i>
					</span>
					<h2 className="h1 fw-bold mb-0 mt-4 lh-1">{value}</h2>
					<p>{title}</p>
					<ProgressBar
						now={progress}
						variant={colorVariant}
						className="mb-2"
						style={{ height: '2px' }}
					/>
				</div>
			</Card.Body>
		</Card>
	);
};

export default StatTopIcon;
