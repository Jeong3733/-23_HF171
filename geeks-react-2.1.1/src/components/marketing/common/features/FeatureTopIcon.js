// Section : Features
// Style : Features with top icon

const FeatureTopIcon = ({ item }) => {
	return (
		<div className="mb-4">
			{/* Icon */}
			<div className="display-4 text-primary">
				<i className={`fe fe-${item.icon}`}></i>
			</div>
			{/* Para */}
			<div className="mt-4">
				<h3>{item.title}</h3>
				<p className="fs-4">{item.description}</p>
			</div>
		</div>
	);
};
export default FeatureTopIcon;
