// import custom components
import ApexCharts from 'components/elements/charts/ApexCharts';

const ProgressChart = (props) => {
	const { value } = props;
	const TaskSectionChartSeries = [value];
	const TaskSectionChartOptions = {
		chart: { height: 40, width: 40, type: 'radialBar' },
		grid: {
			show: false,
			padding: { left: -15, right: -15, top: -12, bottom: -15 }
		},
		colors: ['#19cb98'],
		plotOptions: {
			radialBar: {
				hollow: { size: '30%' },
				dataLabels: {
					showOn: 'always',
					name: {
						show: true,
						fontSize: '11px',
						fontFamily: undefined,
						fontWeight: 600,
						color: undefined,
						offsetY: 4
					},
					value: { show: false }
				}
			}
		},
		stroke: { lineCap: 'round' },
		labels: [value + '%']
	};

	return (
		<ApexCharts
			options={TaskSectionChartOptions}
			series={TaskSectionChartSeries}
			type="radialBar"
			height={40}
			width={40}
		/>
	);
};

export default ProgressChart;
