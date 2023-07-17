// import node module libraries
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// import profile layout wrapper
import ProfileLayoutWrap from './ProfileLayoutWrap';

const SocialProfiles = () => {
	const location = useLocation();

	return (
		<ProfileLayoutWrap pathpara={location.pathname}>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Social Profiles</h3>
						<p className="mb-0">
							Add your social profile links in below social accounts.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<Form>
						{/*  Twitter  */}
						<Row className="mb-5">
							<Col lg={3} md={4} sm={12}>
								<h5>Twitter</h5>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<Form.Control
									type="text"
									placeholder="Twitter Profile Name"
									className="form-control mb-1"
								/>
								<Form.Text className="text-muted">
									Add your Twitter username (e.g. johnsmith).
								</Form.Text>
							</Col>
						</Row>
						{/*  Facebook  */}
						<Row className="mb-5">
							<Col lg={3} md={4} sm={12}>
								<h5>Facebook</h5>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<Form.Control
									type="text"
									placeholder="Facebook Profile Name"
									className="form-control mb-1"
								/>
								<Form.Text className="text-muted">
									Add your Facebook username (e.g. johnsmith).
								</Form.Text>
							</Col>
						</Row>
						{/*  Instagram  */}
						<Row className="mb-5">
							<Col lg={3} md={4} sm={12}>
								<h5>Instagram</h5>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<Form.Control
									type="text"
									placeholder="Instagram Profile Name"
									className="form-control mb-1"
								/>
								<Form.Text className="text-muted">
									Add your Instagram username (e.g. johnsmith).
								</Form.Text>
							</Col>
						</Row>
						{/*  Linked in  */}
						<Row className="mb-5">
							<Col lg={3} md={4} sm={12}>
								<h5>LinkedIn Profile URL</h5>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<Form.Control
									type="text"
									placeholder="LinkedIn Profile URL "
									className="form-control mb-1"
								/>
								<Form.Text className="text-muted">
									Add your linkedin profile URL. (
									https://www.linkedin.com/in/jitu-chauhan-ba004b78)
								</Form.Text>
							</Col>
						</Row>
						{/*  Youtube  */}
						<Row className="mb-3">
							<Col lg={3} md={4} sm={12}>
								<h5>YouTube</h5>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<Form.Control
									type="text"
									placeholder="YouTube URL"
									className="form-control mb-1"
								/>
								<Form.Text className="text-muted">
									Add your Youtube profile URL.
								</Form.Text>
							</Col>
						</Row>
						{/*  Button  */}
						<Row>
							<Col lg={{ span: 6, offset: 3 }} sm={12}>
								<Button variant="primary" type="submit">
									Save Social Profile
								</Button>
							</Col>
						</Row>
					</Form>
				</Card.Body>
			</Card>
		</ProfileLayoutWrap>
	);
};

export default SocialProfiles;
