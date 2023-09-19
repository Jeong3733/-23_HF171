// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// import sub components
import CourseCard from 'components/marketing/pages/competition/CourseCard';

const CourseSlider = ({
  data,
  isLoggedIn,
  category,
  recommended,
  popular,
  trending,
}) => {
  const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Slider {...settings} className="pb-sm-5 mb-5 slick-slider-wrapper">
        {data
          .filter(function (dataSource) {
            if (isLoggedIn) {
              if (category != null) {
                dataSource =
                  dataSource.competition_type_list.some(
                    (item) => item.type === category,
                  ) && dataSource.user_id != false;
              } else {
                dataSource = dataSource.user_id != false;
              }
            } else {
              if (category != null) {
                dataSource = dataSource.competition_type_list.some(
                  (item) => item.type === category,
                );
              }
            }
            return dataSource;
          })
          .map((item, index) => {
            return (
              <div className="item px-md-1" key={item.competition_info_id}>
                <CourseCard
                  key={index}
                  item={item}
                  isLoggedIn={isLoggedIn}
                  extraclass="mx-1"
                />
              </div>
            );
          })}
      </Slider>
    </Fragment>
  );
};

// Specifies the default values for props
CourseSlider.defaultProps = {
  recommended: false,
  popular: false,
  trending: false,
  category: null,
  isLoggedIn: false,
};

// Typechecking With PropTypes
CourseSlider.propTypes = {
  recommended: PropTypes.bool,
  popular: PropTypes.bool,
  trending: PropTypes.bool,
  category: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

export default CourseSlider;
