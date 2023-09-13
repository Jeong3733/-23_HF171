// import node module libraries
import { Link, useOutletContext } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';

// import sub component
import CommonHeaderTabs from './CommonHeaderTabs';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';

const About = () => {
  const { competitionInfo } = useOutletContext();
  return (
    <Container className="mb-6">
      <Row>
        {/* About the company text */}
        <Col
          style={{ maxWidth: '100%', overflow: 'hidden' }}
          dangerouslySetInnerHTML={{
            __html: competitionInfo.competition_readme,
          }}
        />
      </Row>
    </Container>
  );
};

export default About;
