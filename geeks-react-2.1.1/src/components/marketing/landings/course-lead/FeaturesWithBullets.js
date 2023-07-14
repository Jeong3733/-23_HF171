// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import custom components
import FeatureBulletList from 'components/marketing/common/features/FeatureBulletList';

const FeaturesWithBullets = () => {
	const features = [
		{
			id: 1,
			title: 'Shareable Certificate'
		},
		{
			id: 2,
			title: 'Flexible Deadlines'
		},
		{
			id: 3,
			title: '100% Online Courses'
		},
		{
			id: 4,
			title: 'Approx.24 hours'
		}
	];

	return (
		<section className="py-4 shadow-sm position-relative bg-white">
			<Container>
				<Row>
					{features.map((item, index) => {
						return (
							<Col key={index} lg={3} md={6} sm={12}>
								<FeatureBulletList item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};
export default FeaturesWithBullets;
