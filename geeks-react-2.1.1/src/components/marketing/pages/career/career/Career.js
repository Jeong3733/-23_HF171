// import node module libraries
import { Fragment } from 'react';

// import sub components
import Collage from './Collage';
import CareerAtGeeks from './CareerAtGeeks';
import TeamMemberAtGeeks from './TeamMemberAtGeeks';
import GeeksCulture from './GeeksCulture';
import CTAButton from 'components/marketing/common/call-to-action/CTAButton';

const Career = () => {
	const title = 'Join the Geeks team & shape the future of design';
	const description = `If you’re passionate and ready to dive in, we’d love to meet you. We’re committed to supporting our employee professional development and well-being.`;
	const btntext = 'View opportunities';
	const btnlink = '#';

	return (
		<Fragment>
			{/* collage gallery */}
			<Collage />

			{/* career at geeks */}
			<CareerAtGeeks />

			{/* team member at geeks */}
			<TeamMemberAtGeeks />

			{/* geeks culture */}
			<GeeksCulture />

			{/* hero call to action */}
			<CTAButton
				title={title}
				description={description}
				btntext={btntext}
				btnlink={btnlink}
			/>
		</Fragment>
	);
};

export default Career;
