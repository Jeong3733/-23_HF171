// import node module libraries
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// import profile layout wrapper
import ProfileLayoutWrap from './ProfileLayoutWrap';

const DeleteProfile = () => {
	const location = useLocation();

	return (
		<ProfileLayoutWrap pathpara={location.pathname}>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Delete your account</h3>
						<p className="mb-0">Delete or Close your account permanently.</p>
					</div>
				</Card.Header>
				<Card.Body>
					<span className="text-danger h4">Warning</span>
					<p>
						If you close your account, you will be unsubscribed from all your 0
						courses, and will lose access forever.
					</p>
					<Link to="/" className="btn btn-danger">
						Close My Account
					</Link>
				</Card.Body>
			</Card>
		</ProfileLayoutWrap>
	);
};

export default DeleteProfile;
