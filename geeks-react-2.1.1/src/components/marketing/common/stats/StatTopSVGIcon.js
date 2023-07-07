// import node module libraries
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const StatTopSVGIcon = (props) => {
	const { item } = props;
	return (
		<Card className="border-top border-muted border-4 card-hover-with-icon ">
			<Card.Body>
				<div
					className="icon-shape icon-lg rounded-circle bg-light text-muted mb-3  card-icon"
					dangerouslySetInnerHTML={{
						__html: item.icon
					}}
				></div>
				<div className="d-flex align-items-center justify-content-between">
					<div>
						{/* category / heading */}
						<h4 className="mb-0">{item.category}</h4>
						{/* statistics text */}
						<p className="mb-0 text-muted">{item.stat}</p>
					</div>
					<Link to="#" className="text-inherit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default StatTopSVGIcon;
