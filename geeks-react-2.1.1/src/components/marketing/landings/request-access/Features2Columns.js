// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';
import {
	LightningChargeFill,
	ChatFill,
	CloudFill,
	GridFill
} from 'react-bootstrap-icons';

// import custom components
import FeatureTopIcon2 from 'components/marketing/common/features/FeatureTopIcon2';
import SectionHeadingLeft2 from 'components/marketing/common/section-headings/SectionHeadingLeft2';

const Features2Columns = () => {
	const features = [
		{
			id: 1,
			icon: <LightningChargeFill />,
			title: 'Fast and intuitive',
			description: `Duis ac ultrices lacus. Nulla pulvinar justo ac ex pulvinar placerat. Curabitur sit amet sagittis sapienlectus.`
		},
		{
			id: 2,
			icon: <ChatFill />,
			title: 'Contextual feedback',
			description: `Vivamus gravida sem nec nunc euismod, eu facilisis augue congue. Etiam pharetra aliquet interdum.`
		},
		{
			id: 3,
			icon: <CloudFill />,
			title: 'Cloud storage',
			description: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae consequat interdum.`
		},
		{
			id: 4,
			icon: <GridFill />,
			title: 'Well-integrated',
			description: `Praesent dolor velit, porta id pharetra quis, rutrum vitae velit. In ut neque qnas tristique imperdiet porta.`
		}
	];

	return (
		<section className="pb-8 pb-lg-12 bg-white">
			<Container>
				<Row>
					<Col xl={{ offset: 2, span: 8 }} sm={12}>
						<Row>
							<Col lg={9} md={12} sm={12} className="mb-8">
								{/*  Section left heading */}
								<SectionHeadingLeft2
									title="A simple and powerful experience out of the box."
									description="Everything you need, customize and extend when you need more."
								/>
							</Col>
						</Row>
						<Row>
							<Col lg={12} md={12} sm={12}>
								<Row>
									{features.map((item, index) => {
										return (
											<Col
												key={index}
												md={6}
												sm={12}
												className="pe-lg-6 mb-lg-6 mb-4"
											>
												<FeatureTopIcon2 item={item} />
											</Col>
										);
									})}
								</Row>
							</Col>
						</Row>
						<hr className="mt-6" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Features2Columns;
