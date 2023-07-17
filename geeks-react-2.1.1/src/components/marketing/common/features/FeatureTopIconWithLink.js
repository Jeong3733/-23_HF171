/**
 * Section : Features
 * Style : Features with top icon and link to redirect
 * Added in	: v1.3.0
 *
 * Availalble Parameters
 *
 * item.icon		: 	Feather icon name
 * item.title		: 	Title of feature
 * item.link		: 	Link/url that for redirection
 * item.description	: 	Description of feature
 * item.linkname	:	linkname at footer that will be redirected to the link parameter
 * isCard			:	Optional - default false, use this parameter if you want to wrap with card.
 * isButton			:	Optional - default false, use this parameter if you want to show buttion as link, default it will show as hyperlink.
 * buttonVariant	:	Optional - default primary, it's useful if button paramenter has been used, possible value like, secondary, outline-success etc...
 *
 */

// import node module libraries
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

const FeatureTopIconWithLink = ({
	item,
	isCard,
	isButton,
	buttonVariant,
	className
}) => {
	return (
		<Fragment>
			{isCard ? (
				<Card className="border mb-md-0 mb-4">
					<Card.Body>
						{/*  icon */}
						<div className="mb-4">{item.icon}</div>

						{/* heading  */}
						<h3 className="fw-semi-bold">
							<Link to={item.link} className="text-inherit">
								{item.title}
							</Link>
						</h3>

						{/*  text */}
						<p>{item.description}</p>

						{/* link or button */}
						{isButton ? (
							<Link
								to={item.link}
								className={`btn btn-${buttonVariant} btn-sm`}
							>
								{item.linkname}
							</Link>
						) : (
							<Link to={item.link} className="link-primary fw-semi-bold">
								{item.linkname}
								<Icon
									path={mdiArrowRight}
									className="text-primary ms-1"
									size={0.6}
								/>
							</Link>
						)}
					</Card.Body>
				</Card>
			) : (
				<div className={`border-bottom-md-0 mb-3 mb-lg-0 ${className}`}>
					<div className="p-5">
						{/*  icon */}
						<div className="mb-4">{item.icon}</div>

						{/* heading  */}
						<h3 className="fw-semi-bold">
							<Link to={item.link} className="text-inherit">
								{item.title}
							</Link>
						</h3>

						{/*  text */}
						<p>{item.description}</p>

						{/* link or button */}
						{isButton ? (
							<Link
								to={item.link}
								className={`btn btn-${buttonVariant} btn-sm`}
							>
								{item.linkname}
							</Link>
						) : (
							<Link to={item.link} className="link-primary fw-semi-bold">
								{item.linkname}
								<Icon
									path={mdiArrowRight}
									className="text-primary ms-1"
									size={0.6}
								/>
							</Link>
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
};

FeatureTopIconWithLink.propTypes = {
	item: PropTypes.object.isRequired,
	isCard: PropTypes.bool,
	isButton: PropTypes.bool,
	className: PropTypes.string,
	buttonVariant: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
		'outline-primary',
		'outline-secondary',
		'outline-success',
		'outline-danger',
		'outline-warning',
		'outline-info',
		'outline-light',
		'outline-dark'
	])
};

FeatureTopIconWithLink.defaultProps = {
	isCard: false,
	isButton: false,
	buttonVariant: 'primary',
	className: ''
};

export default FeatureTopIconWithLink;
