// Section : Section Heading Left
// Style : H2 title and description in left aligned

// import node module libraries
import { Fragment } from 'react';

const SectionHeadingLeft2 = ({ title, description }) => {
	return (
		<Fragment>
			<h2 className="mb-1 display-4 fw-bold">{title}</h2>
			<p className="h2 text-muted">{description}</p>
		</Fragment>
	);
};

export default SectionHeadingLeft2;
