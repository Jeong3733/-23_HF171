// import node module libraries
import { Fragment } from 'react';

// import sub components
import CommonHeaderTabs from '../CommonHeaderTabs';

// import sub components
import TeamGrid from './TeamGrid';

const ProjectTeam = () => {
	return (
		<Fragment>
			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* team grid */}
			<TeamGrid />
		</Fragment>
	);
};

export default ProjectTeam;
