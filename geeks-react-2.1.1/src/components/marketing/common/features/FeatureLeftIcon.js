// Section : Features
// Style : Features item with left icon

// import node module libraries
import PropTypes from 'prop-types';

const FeatureLeftIcon = ({ item }) => {
	return (
		<div className="d-flex align-items-center">
			<span
				className={`icon-sahpe icon-lg bg-light-${item.colorclass} rounded-circle text-center text-dark-${item.colorclass} fs-4`}
			>
				<i className={`fe fe-${item.icon}`}></i>
			</span>
			<div className="ms-3">
				<h4 className="mb-0 fw-semi-bold">{item.title}</h4>
				<p className="mb-0">{item.description}</p>
			</div>
		</div>
	);
};

// Typechecking With PropTypes
FeatureLeftIcon.propTypes = {
	item: PropTypes.any.isRequired
};

export default FeatureLeftIcon;
