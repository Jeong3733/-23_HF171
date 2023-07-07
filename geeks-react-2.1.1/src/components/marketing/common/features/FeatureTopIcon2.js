// Section : Features
// Style : Features with top icon

// import node module libraries
import { Fragment } from 'react';

const FeatureTopIcon = ({ item }) => {
	return (
		<Fragment>
			{/*  icon */}
			<div className="icon-shape icon-lg bg-primary h3 text-white rounded-3 mb-4">
				{item.icon}
			</div>
			{/*  heading */}
			<h2 className="fw-bold">{item.title}</h2>
			{/*  text */}
			<p className="fs-4">{item.description}</p>
		</Fragment>
	);
};
export default FeatureTopIcon;
