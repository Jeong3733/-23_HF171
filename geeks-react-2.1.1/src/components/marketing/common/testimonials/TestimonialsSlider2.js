// import node module libraries
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// import sub components
import TestimonialCard2 from './TestimonialCard2';

// import data files
import { TestimonialsList } from 'data/marketing/testimonials/TestimonialsList';

const TestimonialsSlider2 = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	};

	return (
		<Fragment>
			<Slider {...settings} className="pb-5 mb-5 slider-arrow-left">
				{TestimonialsList.map((item, index) => (
					<div className="item" key={item.id}>
						<TestimonialCard2 key={index} item={item} />
					</div>
				))}
			</Slider>
		</Fragment>
	);
};

// Specifies the default values for props
TestimonialsSlider2.defaultProps = {
	recommended: false,
	popular: false,
	trending: false
};

// Typechecking With PropTypes
TestimonialsSlider2.propTypes = {
	recommended: PropTypes.bool,
	popular: PropTypes.bool,
	trending: PropTypes.bool
};

export default TestimonialsSlider2;
