// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeaderBreadcrumb from '../HeaderBreadcrumb';
import AllFAQsList from './AllFAQsList';

const HelpCenterFAQ = () => {
	const breadcrumb = [
		{
			page: 'Help Center',
			link: '/marketing/help-center/'
		},
		{
			page: 'Faq',
			link: '#'
		}
	];

	return (
		<Fragment>
			{/* header and breadcrumb */}
			<HeaderBreadcrumb
				title="Frequently Asked Questions"
				breadcrumb={breadcrumb}
			/>

			{/* Most asked, General inquiries and Support FAQs section */}
			<AllFAQsList />
		</Fragment>
	);
};
export default HelpCenterFAQ;
