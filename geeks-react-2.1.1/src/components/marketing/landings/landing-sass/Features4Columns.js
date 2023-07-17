// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import MDI icons
import { mdiFlash, mdiLayers, mdiCellphone, mdiInfinity } from '@mdi/js';

// import custom components
import FeatureTopIcon3 from 'components/marketing/common/features/FeatureTopIcon3';

const Features4Columns = () => {
	const features = [
		{
			id: 1,
			icon: mdiFlash,
			title: 'Easy Setup Process',
			description: `Vivamus sit amet eros facilisis, suscipit libero eget, elementum diam. Praesent quam.`
		},
		{
			id: 2,
			icon: mdiLayers,
			title: 'Quality First',
			description: `Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee.`
		},
		{
			id: 3,
			icon: mdiCellphone,
			title: 'Customizable',
			description: `Mauris interdum leo vel eleifend fringilla, nibh elit interdum nisi nec porttitor nunc egestas.`
		},
		{
			id: 4,
			icon: mdiInfinity,
			title: 'Unlimited',
			description: `Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum velit esse cillum.`
		}
	];

	return (
		<section className="py-lg-20 py-8">
			<Container>
				<Row>
					{features.map((item, index) => {
						return (
							<Col lg={3} md={6} sm={12} key={index}>
								<FeatureTopIcon3 item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Features4Columns;
