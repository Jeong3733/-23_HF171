// import node module libraries
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const ApexCharts = (props) => {
	// ** Props
	const { options, series, width, type, height } = props;
	return (
		<Chart
			options={options}
			series={series}
			type={type}
			width={width}
			height={height}
		/>
	);
};

// ** PropTypes
ApexCharts.propTypes = {
	options: PropTypes.object.isRequired,
	series: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number
};

// ** Default Props
ApexCharts.defaultProps = {
	type: 'line'
};

export default ApexCharts;
