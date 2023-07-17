// import node module libraries
import { Link } from 'react-router-dom';
import { Image, Card } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

const Assignee = () => {
	return (
		<Card className="mb-4">
			<Card.Body className="py-3">
				<Card.Title as="h4">Assignee</Card.Title>
				<div className="d-flex align-items-center">
					<Image
						src={Avatar1}
						alt=""
						className="avatar-md avatar rounded-circle"
					/>
					<div className="ms-3">
						<h4 className="mb-0">
							Marvin McKinney <small className="text-muted ">(Owner)</small>
						</h4>
					</div>
				</div>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Card.Title as="h4">Team</Card.Title>
				<div className="d-flex align-items-center">
					<Avatar
						size="sm"
						src={Avatar1}
						type="image"
						name="Paul Haney"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={Avatar2}
						type="image"
						name="Gali Linear"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={Avatar3}
						type="image"
						name="Mary Holler"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={Avatar4}
						type="image"
						name="Lio Nordal"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={Avatar5}
						type="image"
						name="Jamie Lova"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={Avatar6}
						type="image"
						name="Mary Holler"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Link
						to="#"
						className="btn btn-icon btn-white border border-2 rounded-circle btn-dashed ms-2"
					>
						+
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Assignee;
