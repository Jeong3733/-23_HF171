// import node module libraries
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import {
	mdiReplyOutline,
	mdiReplyAllOutline,
	mdiArrowRightBoldOutline
} from '@mdi/js';

const MailDetailsFooter = () => {
	return (
		<Fragment>
			<Button
				variant="outline-secondary"
				size="sm"
				className="fs-5 me-2 mb-2 mb-md-0"
			>
				<Icon path={mdiReplyOutline} className="me-2" size={0.6} />
				Reply
			</Button>
			<Button
				variant="outline-secondary"
				size="sm"
				className="fs-5 me-2 mb-2 mb-md-0"
			>
				<Icon path={mdiReplyAllOutline} className="me-2" size={0.6} />
				Reply All
			</Button>
			<Button
				variant="outline-secondary"
				size="sm"
				className="fs-5 me-2 mb-2 mb-md-0"
			>
				<Icon path={mdiArrowRightBoldOutline} className="me-2" size={0.6} />
				Forward
			</Button>
		</Fragment>
	);
};
export default MailDetailsFooter;
