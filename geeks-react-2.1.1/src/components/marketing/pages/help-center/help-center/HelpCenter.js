// import node module libraries
import { Fragment } from 'react';

// import sub components
import ContactSupportSection from './ContactSupportSection';
import HeroGradientHeader from './HeroGradientHeader';
import HelpCenterFAQs from './HelpCenterFAQs';

const HelpCenter = () => {
	return (
		<Fragment>
			{/* hero gradient header with features */}
			<HeroGradientHeader />

			{/* FAQs section  */}
			<HelpCenterFAQs />

			{/* contact / support section */}
			<ContactSupportSection />
		</Fragment>
	);
};
export default HelpCenter;
