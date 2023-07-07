// import node module libraries
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

const MailDetailHeader = () => {
	return (
		<div className="d-md-flex justify-content-between align-items-center">
			<div className="d-flex mb-3 mb-md-0">
				<div>
					<GKTippy content="Back to inbox">
						<Button
							variant="outline-secondary"
							size="sm"
							as={Link}
							to="/dashboard/mail"
						>
							<i className="fe fe-arrow-left fs-5"></i>
						</Button>
					</GKTippy>
				</div>
				{/* <!-- button group --> */}
				<div className="ms-2">
					<ButtonGroup aria-label="Action Button Group" size="sm">
						<GKTippy content="Archive">
							<Button variant="outline-secondary">
								<i className="fe fe-archive fs-5"></i>
							</Button>
						</GKTippy>
						<GKTippy content="Spam">
							<Button variant="outline-secondary">
								<i className="fe fe-alert-triangle fs-5"></i>
							</Button>
						</GKTippy>
						<GKTippy content="Delete">
							<Button variant="outline-secondary">
								<i className="fe fe-trash-2 fs-5"></i>
							</Button>
						</GKTippy>
					</ButtonGroup>
				</div>
				<div className="ms-2">
					<GKTippy content="Mark as unread">
						<Button variant="outline-secondary" size="sm">
							<i className="fe fe-mail fs-5"></i>
						</Button>
					</GKTippy>
				</div>
			</div>
			{/* <!-- button --> */}
			<div className="d-flex align-items-center">
				<div>
					<span>4 of 437</span>
				</div>
				<div className="ms-3">
					<GKTippy content="Newer">
						<Button variant="outline-secondary" size="sm">
							<i className="fe fe-chevron-left fs-5"></i>
						</Button>
					</GKTippy>{' '}
					<GKTippy content="Older">
						<Button variant="outline-secondary" size="sm">
							<i className="fe fe-chevron-right fs-5"></i>
						</Button>
					</GKTippy>
				</div>
			</div>
		</div>
	);
};
export default MailDetailHeader;
