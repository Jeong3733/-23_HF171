export const StatTopLine = (props) => {
	const { title, value } = props;

	return (
		<div className="border-top pt-4 mt-xl-10 mt-5 mb-md-5">
			<h1 className="display-3 fw-bold mb-0">{value}</h1>
			<p className="lead text-muted">{title}</p>
		</div>
	);
};

export default StatTopLine;
