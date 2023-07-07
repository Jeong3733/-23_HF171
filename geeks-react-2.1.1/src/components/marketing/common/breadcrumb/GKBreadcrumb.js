// import node module libraries
import { Fragment } from 'react';
import { Navbar, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GKBreadcrumb = ({ breadcrumb }) => {
	return (
		<Fragment>
			<Navbar aria-label="breadcrumb" bsPrefix=" ">
				<ListGroup as="ol" bsPrefix="breadcrumb">
					{breadcrumb.map((item, index) => {
						return (
							<ListGroup.Item
								as="li"
								bsPrefix="breadcrumb-item"
								key={index}
								active={index === breadcrumb.length - 1 ? true : false}
							>
								{index === breadcrumb.length - 1 ? (
									item.page
								) : (
									<Link to={item.link}>{item.page}</Link>
								)}
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Navbar>
		</Fragment>
	);
};
export default GKBreadcrumb;
