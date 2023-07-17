// import node module libraries
import React, { Fragment } from 'react';

// import sub components
import CommonHeaderTabs from '../CommonHeaderTabs';
import FilesTable from './FilesTable';

const ProjectFiles = () => {
	return (
		<Fragment>
			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* files listing table */}
			<FilesTable />
		</Fragment>
	);
};

export default ProjectFiles;
