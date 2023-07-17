// Section : Header
// Style : H2 title, subtitle with description in left aligned

// import node module libraries
import { Fragment } from 'react';

const SectionHeadingLeftBold = ({ title, subtitle, description }) => {
	return (
		<Fragment>
			{subtitle && (
				<span className="text-primary ls-md text-uppercase fw-semi-bold">
					{subtitle}
				</span>
			)}
			<h2 className="display-4 mt-4 mb-3 fw-bold">{title}</h2>
			<h3>{description}</h3>
		</Fragment>
	);
};

export default SectionHeadingLeftBold;
