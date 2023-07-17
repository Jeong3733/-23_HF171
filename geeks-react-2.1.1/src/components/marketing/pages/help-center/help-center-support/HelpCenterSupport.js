// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeaderBreadcrumb from '../HeaderBreadcrumb';
import SupportForm from './SupportForm';

const HelpCenterSupport = () => {
	const breadcrumb = [
		{
			page: 'Help Center',
			link: '/marketing/help-center/'
		},
		{
			page: 'Support',
			link: '#'
		}
	];

	return (
		<Fragment>
			{/* header and breadcrumb */}
			<HeaderBreadcrumb title="Support" breadcrumb={breadcrumb} />

			{/* support form  */}
			<SupportForm />
		</Fragment>
	);
};
export default HelpCenterSupport;
