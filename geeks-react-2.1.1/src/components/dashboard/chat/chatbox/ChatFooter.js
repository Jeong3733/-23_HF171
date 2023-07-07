// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

// import sub custom components
import SendMessage from './SendMessage';

// import bootstrap icons
import { EmojiSmile, Paperclip, Mic } from 'react-bootstrap-icons';

const ChatFooter = () => {
	const ToggleActions = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to="#"
			className="text-link fs-4"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	return (
		<div className="bg-light px-4 py-3 chat-footer">
			<SendMessage />
			<div className="mt-3 d-flex">
				<div>
					<Link to="#" className="text-link me-2">
						{' '}
						<EmojiSmile size={16} />
					</Link>
					<Link to="#" className="text-link me-2">
						{' '}
						<Paperclip size={16} />
					</Link>
					<Link to="#" className="text-link me-2">
						{' '}
						<Mic size={16} />
					</Link>
				</div>
				<Dropdown>
					<Dropdown.Toggle as={ToggleActions}>
						<i className="fe fe-more-horizontal"></i>
					</Dropdown.Toggle>
					<Dropdown.Menu as="ul">
						{['Action', 'Another action', 'Something else here'].map(
							(item, index) => {
								return (
									<Dropdown.Item eventKey="1" as="li" bsPrefix=" " key={index}>
										<Link to="#" className="dropdown-item">
											{item}
										</Link>
									</Dropdown.Item>
								);
							}
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};
export default ChatFooter;
