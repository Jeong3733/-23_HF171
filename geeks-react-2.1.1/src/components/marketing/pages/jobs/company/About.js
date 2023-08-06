// import node module libraries
import { Link, useOutletContext } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';

// import sub component
import CommonHeaderTabs from './CommonHeaderTabs';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';

const About = () => {
  const { competitionInfo } = useOutletContext();
  return (
    <Container>
      <div className="mb-6">
        {/* About the company text */}
        <div
          dangerouslySetInnerHTML={{
            __html: competitionInfo.competition_readme,
          }}
        ></div>
        ;
      </div>
    </Container>
  );
};

export default About;
