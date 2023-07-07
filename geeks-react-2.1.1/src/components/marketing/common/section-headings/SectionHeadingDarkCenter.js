// Section Heading
// Style : H2 title, subtitle with description in center aligned

// import node module libraries
import PropTypes from 'prop-types';

const SectionHeadingDarkCenter = ({
	title,
	subtitle,
	description,
	className,
	dark
}) => {
	return (
		<div className="text-center mb-8">
			{subtitle && (
				<span className="text-warning ls-md text-uppercase fw-semi-bold">
					{subtitle}
				</span>
			)}
			<h2
				className={`${className} mt-4 mb-3 ${dark ? 'text-white' : ''} fw-bold`}
			>
				{title}
			</h2>
			<p className={`lead ${dark ? 'text-white-50' : ''} px-8`}>
				{description}
			</p>
		</div>
	);
};

// Typechecking With PropTypes
SectionHeadingDarkCenter.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string.isRequired,
	className: PropTypes.string,
	dark: PropTypes.bool
};

// Specifies the default values for props
SectionHeadingDarkCenter.defaultProps = {
	className: 'display-3',
	dark: true
};

export default SectionHeadingDarkCenter;
