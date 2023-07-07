// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeroCollage from './HeroCollage';
import CareerPositions from './CareerPositions';

const CareerList = () => {
	return (
		<Fragment>
			{/* hero with collage */}
			<HeroCollage />

			{/* career positions */}
			<CareerPositions />
		</Fragment>
	);
};

export default CareerList;
