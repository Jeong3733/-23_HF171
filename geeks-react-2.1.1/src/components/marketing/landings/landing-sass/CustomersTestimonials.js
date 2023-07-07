// import node module libraries
import { Col, Row, Image } from 'react-bootstrap';

// import data files
import CustomersTestimonialsData from 'data/marketing/landing-sass/CustomersTestimonialsData';

const CustomersTestimonials = () => {
	return (
		<Row>
			{CustomersTestimonialsData.map((item, index) => {
				return (
					<Col lg={{ offset: 1, span: 5 }} md={6} xs={12} key={index}>
						<div className="mb-10 mb-md-0">
							<div className="mb-4">
								<Image src={item.image} alt="" />
							</div>
							<p className="fs-3 mb-5">"{item.content}"</p>
							<h4 className="mb-0">{item.name}</h4>
							<p>{item.designation}</p>
						</div>
					</Col>
				);
			})}
		</Row>
	);
};

export default CustomersTestimonials;
