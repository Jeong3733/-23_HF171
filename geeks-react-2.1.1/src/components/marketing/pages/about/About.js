// import node module libraries
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import TeamGridRoundImages from './TeamGridRoundImages';
import JustifiedGallery from './JustifiedGallery';
import FeaturesList from './FeaturesList';
import HeroContent from './HeroContent';
import CTAButton from './CTAButton';
import Stat from './Stat';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

const About = () => {
	return (
		<Fragment>
			{/* Default Navbar */}
			<NavbarDefault login />

			<main>
				<section className="py-10 bg-white">
					<Container>
						{/* Hero Title */}
						<HeroContent />

						{/* Justified Gallery Section */}
						<JustifiedGallery />

						{/* 4 Columns Stat */}
						<Stat />
					</Container>
				</section>

				{/* Three Columns Features Section */}
				<FeaturesList />

				{/* Team Section in Rounded Image with Grid Layout */}
				<TeamGridRoundImages />

				{/* Hero Call to Action */}
				<CTAButton />
			</main>

			{/* Footer with links */}
			<FooterWithLinks />
		</Fragment>
	);
};

export default About;
