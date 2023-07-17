// import node module libraries
import { Col, Row, Image, ListGroup } from 'react-bootstrap';

// import custom components
import SectionHeadingLeftBold from 'components/marketing/common/section-headings/SectionHeadingLeftBold';

// import MDI icons
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

// import media files
import FeaturedImg1 from 'assets/images/svg/featured-img-1.svg';

const HeroLeftImage = () => {
	const title = 'Build the sites you want with Geeks UI you love';
	const subtitle = 'Build fast, launch faster';
	const description =
		'Mauris interdum leo vel eleifend fringilla nibh elit interdc nunc elementum nisi.';

	const featurescol1 = [
		{ content: 'Earnings' },
		{ content: 'Conversion Rates' },
		{ content: 'Top security' }
	];
	const featurescol2 = [
		{ content: 'High converting' },
		{ content: 'Easy to use' },
		{ content: '200+ Integrations' }
	];

	return (
		<Row className="align-items-center">
			<Col lg={6} md={12} xs={12}>
				{/* image */}
				<div className="mb-4 mb-lg-0 bg-gray-200 rounded-4 ">
					<Image src={FeaturedImg1} alt="..." className="img-fluid w-100" />
				</div>
			</Col>
			<Col lg={6} md={12} xs={12} className="mt-4 mt-lg-0">
				{/* content */}
				<div className="ps-lg-7">
					<SectionHeadingLeftBold
						title={title}
						description={description}
						subtitle={subtitle}
					/>
					<Row className="mt-5">
						{/* list */}
						<Col>
							<ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
								{featurescol1.map((item, index) => {
									return (
										<ListGroup.Item
											key={index}
											bsPrefix="mb-2"
											className="d-flex"
										>
											<Icon
												path={mdiCheckCircle}
												size={0.7}
												className="text-success mt-1 me-2"
											/>{' '}
											{item.content}
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Col>
						<Col>
							{/* list */}
							<ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
								{featurescol2.map((item, index) => {
									return (
										<ListGroup.Item
											key={index}
											bsPrefix="mb-2"
											className="d-flex"
										>
											<Icon
												path={mdiCheckCircle}
												size={0.7}
												className="text-success mt-1 me-2"
											/>{' '}
											{item.content}
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default HeroLeftImage;
