// import node module libraries
import { Row, Col, Container, Card, Image } from 'react-bootstrap';

// import data files
import DeveloperGeeksData from 'data/marketing/compare-plans/DeveloperGeeksData';

// import MDI icons
import Icon from '@mdi/react';
import { mdiHeart, mdiFormatQuoteOpen } from '@mdi/js';

const DeveloperGeeks = () => {
	return (
		<section className="pb-14 pt-8 ps-0 bg-light ">
			<Container>
				<Row>
					<Col xl={{ span: 6, offset: 3 }} md={12}>
						{/* heading */}
						<div className="text-center mb-8">
							<h1 className="display-4 fw-bold mb-3">
								Developer{' '}
								<Icon path={mdiHeart} className="text-danger mx-1" size={2} />{' '}
								Geeks
							</h1>
							<p className="fs-4">
								Our average call quality rating is 4.4 out of 5. That leads to
								happy tweets like these:
							</p>
						</div>
					</Col>
				</Row>

				<Row>
					{DeveloperGeeksData.map((item, index) => {
						return (
							<Col md={6} xs={12} key={index} className="mb-4">
								<Card className="mb-6 mb-lg-0">
									{/* card body */}
									<Card.Body className="p-6">
										<Icon
											path={mdiFormatQuoteOpen}
											className="text-light-primary lh-1 mb-3 d-block"
											size={2}
										/>
										<p className="fs-3 text-dark fw-semi-bold">
											{item.content}
										</p>
										<div className="d-flex mt-4 align-items-center">
											<Image
												src={item.image}
												alt=""
												className="avatar avatar-md rounded-circle"
											/>
											<div className="ms-2">
												<h5 className="text-primary mb-0">{item.name}</h5>
												<p className="mb-0 fs-6">{item.designation}</p>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};
export default DeveloperGeeks;
