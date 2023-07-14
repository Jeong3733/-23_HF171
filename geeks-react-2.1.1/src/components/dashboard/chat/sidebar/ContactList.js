// import node module libraries
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// import custom components
import { Avatar } from 'components/elements/bootstrap/Avatar';

// import context file
import { ChatContext } from 'context/Context';

const ContactList = () => {
	const {
		ChatState: { users, loggedInUserId }
	} = useContext(ChatContext);

	let data = Object.values(
		users
			.filter((user) => user.id !== loggedInUserId)
			.sort((a, b) =>
				a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
			)
			.reduce((rearrange, element) => {
				let alphabet = element.name[0];
				if (!rearrange[alphabet])
					rearrange[alphabet] = { alphabet, record: [element] };
				else rearrange[alphabet].record.push(element);
				return rearrange;
			}, {})
	);

	return (
		<SimpleBar style={{ maxHeight: '650px' }}>
			<ListGroup bsPrefix="list-unstyled" as="ul" className="contacts-list">
				{data.map((item, index) => {
					return (
						<ListGroup.Item as="li" bsPrefix=" " key={index}>
							<div className="bg-light py-1 px-4 border-bottom fw-semi-bold">
								{item.alphabet}
							</div>
							{item.record.map((subItem, subIndex) => {
								return (
									<Link
										to="#"
										className="text-link contacts-link"
										key={subIndex}
									>
										<div className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom">
											<div className="d-flex position-relative">
												<Avatar
													size="md"
													className="rounded-circle"
													type={subItem.image ? 'image' : 'initial'}
													src={subItem.image}
													status={subItem.status.toLowerCase()}
													alt={subItem.name}
													name={subItem.name}
												/>
												<div className=" ms-2">
													<h5 className="mb-0">{subItem.name}</h5>
													<p className="mb-0 text-muted text-truncate">
														Online
													</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</SimpleBar>
	);
};
export default ContactList;
