// Section : Features
// Style : Features with top MDI icon

// import node module libraries
import { Fragment } from 'react';

// import MDI icons
import Icon from '@mdi/react';

const FeatureTopIcon3 = ({ item }) => {
	return (
		<Fragment>
			{/* features */}
			<div className="mb-6 mb-lg-0 fs-4">
				{/* icon */}
				<div
					className="icon-shape icon-lg bg-primary text-white rounded-circle
                text-center mb-4"
				>
					<Icon path={item.icon} size={1} className="mdi-24px lh-1" />
				</div>
				{/*  heading */}
				<h2 className="fw-bold">{item.title}</h2>
				{/*  text */}
				<p className="fs-4">{item.description}</p>
			</div>
		</Fragment>
	);
};
export default FeatureTopIcon3;
