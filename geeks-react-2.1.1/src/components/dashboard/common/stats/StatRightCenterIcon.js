const StatRightCenterIcon = (props) => {
	const { title, value, iconName, iconColorVariant } = props;

	return (
		<div className="d-flex align-items-center justify-content-between p-4">
			<div>
				<h2 className="h1 fw-bold mb-0">{value}</h2>
				<p className="mb-0 ">{title}</p>
			</div>
			<div className="ms-3">
				<div
					className={`icon-shape icon-lg bg-light-${iconColorVariant} text-${iconColorVariant} rounded-circle`}
				>
					<i className={`fe fe-${iconName} fs-3`}></i>
				</div>
			</div>
		</div>
	);
};

export default StatRightCenterIcon;
