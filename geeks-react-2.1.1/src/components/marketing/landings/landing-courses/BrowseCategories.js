// import node module libraries
import { Container } from 'react-bootstrap';

// import custom components
import SectionHeadingLeft from 'components/marketing/common/section-headings/SectionHeadingLeft';

// import sub components
import CoursesTabSlider from './CoursesTabSlider';

const BrowseCategories = () => {
	const title = "The world's top courses";
	const subtitle = 'Browse Categories';
	const description = `Choose from 32,000 online video courses with new additions published every month.`;

	return (
		<section className="py-8 py-lg-16 bg-light-gradient-bottom bg-white">
			<Container>
				<SectionHeadingLeft
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<CoursesTabSlider />
			</Container>
		</section>
	);
};
export default BrowseCategories;
