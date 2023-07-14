// import node module libraries
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCardFullWidth = ({ item }) => {
	const CategoryColors = (category) => {
		switch (category) {
			case 'Courses':
				return 'success';
			case 'Tutorial':
				return 'warning';
			case 'Workshop':
				return 'primary';
			case 'Company':
				return 'info';
			default:
				return 'primary';
		}
	};

	return (
		<Card className="mb-4 shadow-lg">
			<Row className="g-0">
				{/*  Image */}
				<Link
					to={`/marketing/blog/article-single/${item.id}`}
					className="col-lg-8 col-md-12 col-12 bg-cover img-left-rounded"
					style={{
						background: `url(${item.blogpostimage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'top center'
					}}
				>
					<Card.Img
						variant="left"
						src={item.blogpostimage}
						className="img-fluid d-lg-none invisible"
					/>
				</Link>
				<Col lg={4} md={12} sm={12}>
					{/*  Card body */}
					<Card.Body>
						<Link
							to={`/marketing/blog/article-single/${item.id}`}
							className={`fs-5 mb-3 fw-semi-bold d-block text-${CategoryColors(
								item.category
							)}`}
						>
							{item.category}
						</Link>
						<h1 className="mb-2 mb-lg-4">
							<Link
								to={`/marketing/blog/article-single/${item.id}`}
								className="text-inherit"
							>
								{item.title}
							</Link>
						</h1>
						<p> {item.details} </p>
						{/*  Media content */}
						<Row className="align-items-center g-0 mt-lg-7 mt-4">
							<Col className="col-auto">
								{/*  Img  */}
								<Image
									src={item.authorimage}
									alt=""
									className="rounded-circle avatar-sm me-2"
								/>
							</Col>
							<Col className="col lh-1 ">
								<h5 className="mb-1">{item.author}</h5>
								<p className="fs-6 mb-0">{item.postedon}</p>
							</Col>
							<Col className="col-auto">
								<p className="fs-6 mb-0">{item.readinglength} Min Read</p>
							</Col>
						</Row>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};

// Typechecking With PropTypes
BlogCardFullWidth.propTypes = {
	item: PropTypes.object.isRequired
};

export default BlogCardFullWidth;
