// import MDI icons
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

const FeatureBulletList = ({ item }) => {
	return (
		<div className="text-dark fw-semi-bold lh-1 fs-4 mb-3 mb-lg-0">
			<span className="icon-shape icon-xs rounded-circle bg-light-warning text-center me-2">
				<Icon path={mdiCheck} size={0.7} className="text-dark-warning" />
			</span>
			<span className="align-middle">{item.title}</span>
		</div>
	);
};
export default FeatureBulletList;
