// import node module libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, ListGroup, Row, Col } from 'react-bootstrap';

// import custom components
import InstructorReviewCard from 'components/marketing/common/cards/InstructorReviewCard';
import { FormSelect } from 'components/elements/form-select/FormSelect';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// Import required data files
import { InstructorReviewsData } from 'data/marketing/InstructorReviewsData';

const Reviews = () => {
	const courselist = [
		{ value: '1', label: 'How to easily create a website' },
		{ value: '2', label: 'Grunt: The JavaScript Task...' },
		{ value: '3', label: 'Vue js: The JavaScript Task...' }
	];
	const ratinglist = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' }
	];
	const sortby = [
		{ value: 'Newest', label: 'Newest' },
		{ value: 'Oldest', label: 'Oldest' }
	];

	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header className="d-lg-flex align-items-center justify-content-between">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Reviews</h3>
						<p className="mb-0">
							You have full control to manage your own account setting.
						</p>
					</div>
					<div>
						<Link to="#" className="btn btn-outline-primary btn-sm">
							Export To CSV...
						</Link>
					</div>
				</Card.Header>
				<Card.Body>
					{/* Form */}
					<Form className="mb-4">
						<Row>
							<Col xl={6} lg={6} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={courselist} placeholder="All" />
							</Col>
							<Col xl={3} lg={3} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={ratinglist} placeholder="Rating" />
							</Col>
							<Col xl={3} lg={3} md={4} sm={12} className="mb-2 mb-lg-0">
								<FormSelect options={sortby} placeholder="Sort" />
							</Col>
						</Row>
					</Form>

					{/* List group */}
					<ListGroup variant="flush" className="border-top">
						{InstructorReviewsData.filter(function (datasource) {
							return datasource;
						}).map((item, index) => (
							<ListGroup.Item key={index} className="px-0 py-4">
								<InstructorReviewCard item={item} />
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Reviews;
