// import node module libraries
import { Link } from 'react-router-dom';

// import sub components
import LevelIcon from './LevelIcon';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

const LevelIconWithTooltip = ({ level }) => {
	if (level === 'Beginner' || level === 'Intermediate' || level === 'Advance') {
		return (
			<GKTippy content={level}>
				<Link to="#">
					<LevelIcon level={level} />
				</Link>
			</GKTippy>
		);
	} else {
		return '';
	}
};
export default LevelIconWithTooltip;
