// import node module libraries
import { Card } from 'react-bootstrap';
import Icon from '@mdi/react';

const StatRightBGIcon = (props) => {
	const { title, value, summary, iconName, iconColorVariant, classValue } =
		props;

	return (
		<Card border="light" className={`${classValue}`}>
			<Card.Body>
				<span className="fs-6 text-uppercase fw-semi-bold">{title}</span>
				<div className="mt-2 d-flex justify-content-between align-items-center">
					<div className="lh-1">
						<h2 className="h1 fw-bold mb-1">{value}</h2>
						<span>{summary}</span>
					</div>
					<div>
						<span
							className={`bg-light-${iconColorVariant} icon-shape icon-xl rounded-3 text-dark-${iconColorVariant}`}
						>
							<Icon path={iconName} size={1} />
						</span>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default StatRightBGIcon;
