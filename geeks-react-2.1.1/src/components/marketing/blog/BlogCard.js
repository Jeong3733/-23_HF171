// import node module libraries
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ item }) => {
	const CategoryColors = (category) => {
		switch (category) {
			case 'Courses':
				return 'success';
			case 'Tutorial':
				return 'primary';
			case 'Workshop':
				return 'warning';
			case 'Company':
				return 'info';
			default:
				return 'primary';
		}
	};

	return (
		<Card className="mb-4 shadow-lg">
			<Link to={`/marketing/blog/article-single/${item.id}`}>
				<Card.Img
					variant="top"
					src={item.blogpostimage}
					className="rounded-top-md img-fluid"
				/>
			</Link>
			{/* Card body  */}
			<Card.Body>
				<Link
					to="#"
					className={`fs-5 fw-semi-bold d-block mb-3 text-${CategoryColors(
						item.category
					)}`}
				>
					{item.category}
				</Link>
				<h3>
					<Link
						to={`/marketing/blog/article-single/${item.id}`}
						className="text-inherit"
					>
						{item.title}
					</Link>
				</h3>
				<p> {item.details} </p>
				{/*  Media content  */}
				<Row className="align-items-center g-0 mt-4">
					<Col className="col-auto">
						<Image
							src={item.authorimage}
							alt=""
							className="rounded-circle avatar-sm me-2"
						/>
					</Col>
					<Col className="col lh-1">
						<h5 className="mb-1">{item.authorname}</h5>
						<p className="fs-6 mb-0">{item.postedon}</p>
					</Col>
					<Col className="col-auto">
						<p className="fs-6 mb-0">{item.readinglength} Min Read</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

// Typechecking With PropTypes
BlogCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default BlogCard;
