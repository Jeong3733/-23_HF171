// import node module libraries
import { Fragment } from 'react';

// import custom components
import LogosTopHeading from 'components/marketing/common/clientlogos/LogosTopHeading';
import CTA2Buttons from 'components/marketing/common/call-to-action/CTA2Buttons';

// import sub components
import HeroFormRight from './HeroFormRight';
import TestimonialSection from './TestimonialSection';
import FeaturesWithBullets from './FeaturesWithBullets';
import CourseDescriptionSection from './CourseDescriptionSection';
import FAQsection from './FAQsection';
import YourInstructor from './YourInstructor';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const CourseLead = () => {
	return (
		<Fragment>
			{/* Default Navbar */}
			<NavbarDefault />

			<main>
				{/* Hero section with right form */}
				<HeroFormRight />

				{/* Feature section with bullet  */}
				<FeaturesWithBullets />

				{/* Course description section  */}
				<CourseDescriptionSection />

				{/* Your instructor section */}
				<YourInstructor />

				{/*  Logo section */}
				<LogosTopHeading
					title="Trusted by top-tier product companies"
					logos={LogoList2}
				/>

				{/* Testimonial slider section */}
				<TestimonialSection />

				{/*  FAQs section */}
				<FAQsection />

				{/*  CTA section */}
				<CTA2Buttons
					title="Join more than 1 million learners worldwide"
					description="Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier."
					btntext1="Start Learning for Free"
					btnlink1="/authentication/sign-up"
					btntext2="Geeks for Business"
					btnlink2="/authentication/sign-up"
				/>
			</main>

			{/* Footer section */}
			<FooterWithLinks />
		</Fragment>
	);
};
export default CourseLead;
