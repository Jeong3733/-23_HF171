// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import SectionHeadingCenter from 'components/marketing/common/section-headings/SectionHeadingCenter';
import FeatureTopIcon from 'components/marketing/common/features/FeatureTopIcon';

const Features4Columns = () => {
	const title = 'Build better skills,faster';
	const subtitle = 'Why Learn with Geeks';
	const description = `Explore new skills, deepen existing passions, and get lost in creativity. What you find
    just might surprise and inspire you.`;

	const features = [
		{
			id: 1,
			icon: 'settings',
			title: 'Learn the latest skills',
			description: `Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.`
		},
		{
			id: 2,
			icon: 'user',
			title: 'Get ready for a career',
			description: `Pellentesque eu mi rhoncus, rhoncus tortor a, interdum nisi.`
		},
		{
			id: 3,
			icon: 'award',
			title: 'Earn a Certificate',
			description: `Quisque tempus lectus cursus, imperdiet eros vel, pulvinar arcu.`
		},
		{
			id: 4,
			icon: 'users',
			title: 'Upskill your organization',
			description: `Etiam dignissim est tristique ex porta, bibendum commodo.`
		}
	];

	return (
		<section className="py-8 py-lg-18 bg-white">
			<Container>
				<SectionHeadingCenter
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<Row>
					{features.map((item, index) => {
						return (
							<Col lg={3} md={6} sm={12} key={index}>
								<FeatureTopIcon item={item} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Features4Columns;
