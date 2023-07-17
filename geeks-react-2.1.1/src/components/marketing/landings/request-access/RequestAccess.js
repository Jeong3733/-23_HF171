// import node module libraries
import { Fragment } from 'react';

// import custom components
import LogosTopHeadingOffset from 'components/marketing/common/clientlogos/LogosTopHeadingOffset';

// import sub components
import HeroFormCenter from './HeroFormCenter';
import HeroFormLeft from './HeroFormLeft';
import Features2Columns from './Features2Columns';
import TestimonialSection from './TestimonialSection';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterCenter';

// import data files
import LogoList2 from 'data/marketing/clientlogos/LogoList2';

const RequestAccess = () => {
	return (
		<Fragment>
			{/* Landing Page Navbar */}
			<NavbarLanding />

			<main>
				{/* Hero section with center form */}
				<HeroFormCenter />

				{/* Brand logo section */}
				<LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />

				{/* Features : Out of the box */}
				<Features2Columns />

				{/* Testimonial slider section */}
				<TestimonialSection />

				{/* Hero section with left form */}
				<HeroFormLeft />
			</main>

			{/* Footer with center alignment */}
			<FooterCenter />
		</Fragment>
	);
};
export default RequestAccess;
