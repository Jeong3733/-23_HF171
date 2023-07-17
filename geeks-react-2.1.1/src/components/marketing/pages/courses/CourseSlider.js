// import node module libraries
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// import sub components
import CourseCard from './CourseCard';

// import data files
import { AllCoursesData } from 'data/slider/AllCoursesData';

const CourseSlider = ({ recommended, popular, trending, category }) => {
	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Fragment>
			<Slider {...settings} className="pb-sm-5 mb-5 slick-slider-wrapper">
				{AllCoursesData.filter(function (dataSource) {
					if (recommended === true) {
						dataSource = dataSource.recommended;
					}
					if (popular === true) {
						dataSource = dataSource.popular;
					}
					if (trending === true) {
						dataSource = dataSource.trending;
					}
					if (category != null) {
						dataSource = dataSource.category === category;
					}
					return dataSource;
				}).map((item, index) => (
					<div className="item px-md-1" key={item.id}>
						<CourseCard key={index} item={item} extraclass="mx-2" />
					</div>
				))}
			</Slider>
		</Fragment>
	);
};

// Specifies the default values for props
CourseSlider.defaultProps = {
	recommended: false,
	popular: false,
	trending: false,
	category: null
};

// Typechecking With PropTypes
CourseSlider.propTypes = {
	recommended: PropTypes.bool,
	popular: PropTypes.bool,
	trending: PropTypes.bool,
	category: PropTypes.string
};

export default CourseSlider;
