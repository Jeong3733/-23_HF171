export const StatTopBigIcon = (props) => {
	const { value, title, iconName, colorVariant } = props;

	return (
		<div className="py-7 text-center">
			<div className="mb-3">
				<i className={`fe fe-${iconName} fs-2 text-${colorVariant}`}> </i>
			</div>
			<div className="lh-1">
				<h2 className="mb-1">{value}</h2>
				<span>{title}</span>
			</div>
		</div>
	);
};

export default StatTopBigIcon;
