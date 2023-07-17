// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeroAcademy from './HeroAcademy';
import AcademyStats from './AcademyStats';
import MostPopularCourses from './MostPopularCourses';
import BecomeAnInstructor from './BecomeAnInstructor';
import WhatCustomersSay from './WhatCustomersSay';

const HomeAcademy = () => {
	return (
		<Fragment>
			{/* Hero Academy banner section */}
			<HeroAcademy />

			{/* Various acedamy statistics  */}
			<AcademyStats />

			{/* Most Popular Courses */}
			<MostPopularCourses />

			{/* Become an instructor */}
			<BecomeAnInstructor />

			{/* What our customers say */}
			<WhatCustomersSay />
		</Fragment>
	);
};
export default HomeAcademy;
