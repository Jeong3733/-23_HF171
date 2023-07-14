// import node module libraries
import React from 'react';
import Odometer from 'react-odometerjs';

const GKOdometer = ({ value }) => {
	return (
		<div>
			<Odometer value={value} />
		</div>
	);
};

export default GKOdometer;
