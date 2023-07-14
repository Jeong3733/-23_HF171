// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

// import sub components
import BlogCard from './BlogCard';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogCategory = () => {
	return (
		<Fragment>
			{/* Page header */}
			<section className="pt-9 pb-9 bg-white">
				<Container>
					<Row>
						<Col
							lg={{ span: 10, offset: 1 }}
							xl={{ span: 8, offset: 2 }}
							md={12}
							sm={12}
						>
							<div className="text-center mb-5">
								<h1 className="display-2 fw-bold">Tutorial</h1>
								<p className="lead">
									Our features, journey, tips and us being us. Lorem ipsum dolor
									sit amet, accumsan in, tempor dictum neque.
								</p>
							</div>
							{/* Form */}
							<Form className="row px-md-20">
								<div className="mb-3 col ps-0 ms-2 ms-md-0">
									<Form.Control
										type="email"
										placeholder="Email Address"
										required=""
									/>
								</div>
								<div className="mb-3 col-auto ps-0">
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</div>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Page Content */}
			<section className="pb-12 bg-white">
				<Container>
					<Row>
						{BlogArticlesList.filter(function (dataSource) {
							return dataSource.category === 'Tutorial';
						}).map((item, index) => (
							<Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
								<BlogCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default BlogCategory;
