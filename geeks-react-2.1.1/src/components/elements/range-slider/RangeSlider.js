// import node module libraries
import React, { Fragment, useState } from 'react';
import Nouislider from 'nouislider-react';
import PropTypes from 'prop-types';

const RangeSlider = (props) => {
	const { startValue, rangeMin, rangeMax } = props;
	const [value] = useState(startValue);

	const handleOnSlide = (render, handle, value, un, percent) => {
		// Slider handle code goes here...
	};

	return (
		<Fragment>
			<Nouislider
				range={{ min: rangeMin, max: rangeMax }}
				start={value}
				step={1}
				connect
				tooltips={{
					to: function (value) {
						return value.toFixed(0);
					}
				}}
				onSlide={handleOnSlide}
			/>
		</Fragment>
	);
};

// ** PropTypes
RangeSlider.propTypes = {
	startValue: PropTypes.number,
	rangeMin: PropTypes.number,
	rangeMax: PropTypes.number
};

// ** Default Props
RangeSlider.defaultProps = {
	startValue: 20,
	rangeMin: 0,
	rangeMax: 100
};

export default RangeSlider;
