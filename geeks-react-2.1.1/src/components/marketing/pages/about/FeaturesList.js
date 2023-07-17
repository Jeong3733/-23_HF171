// Section : Features
// Style : Three Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import MDI icons
import { mdiSchoolOutline, mdiAccountGroup, mdiFinance } from '@mdi/js';

// import custom components
import FeatureTopIconCard from 'components/marketing/common/features/FeatureTopIconCard';

// import sub components
import SectionHeading from './SectionHeading';

const Features3Columns = () => {
	const title = 'Our core values';
	const description = `Our core values are the fundamental beliefs of a person or organization geeks academy. We help
    people understand the difference between right and wrong.`;

	const features = [
		{
			id: 1,
			icon: mdiSchoolOutline,
			title: 'Make Education Accessible',
			description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
            blanvolutpat nunc.`
		},
		{
			id: 2,
			icon: mdiAccountGroup,
			title: 'Learn and Grow',
			description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blanvolutpat nunc.`
		},
		{
			id: 3,
			icon: mdiFinance,
			title: 'Make Education Accessible',
			description: `Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id
            blanvolutpat nunc.`
		}
	];

	return (
		<section className="py-lg-16 py-10">
			<Container>
				<SectionHeading title={title} description={description} />
				<Row>
					{features.map((item, index) => {
						return (
							<Col md={4} sm={12} key={index}>
								<FeatureTopIconCard item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Features3Columns;
