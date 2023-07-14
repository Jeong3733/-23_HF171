// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Image, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// import sub components
import BlogCard from './BlogCard';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogArticleSingle = () => {
	const blogInfo = useParams();
	const postid = Number(blogInfo.id);

	const authorAndSharing = (data) => {
		return (
			<div className="d-flex justify-content-between align-items-center mb-5">
				<div className="d-flex align-items-center">
					<Image
						src={data.authorimage}
						alt=""
						className="rounded-circle avatar-md"
					/>
					<div className="ms-2 lh-1">
						<h5 className="mb-1 ">{data.authorname}</h5>
						<span className="text-primary">{data.aboutauthor}</span>
					</div>
				</div>
				<div>
					<span className="ms-2 text-muted">Share</span>
					<Link to="#" className="ms-2 text-muted">
						<i className="fab fa-facebook"></i>
					</Link>
					<Link to="#" className="ms-2 text-muted">
						<i className="fab fa-twitter"></i>
					</Link>
					<Link to="#" className="ms-2 text-muted ">
						<i className="fab fa-linkedin"></i>
					</Link>
				</div>
			</div>
		);
	};
	return (
		<Fragment>
			<section className="py-4 py-lg-8 pb-14 bg-white ">
				<Container>
					{BlogArticlesList.filter(function (dataSource) {
						return dataSource.id === postid;
					}).map((item, index) => (
						<Fragment key={index}>
							<Row className="justify-content-center">
								<Col xl={8} lg={8} md={12} sm={12} className="mb-2">
									<div className="text-center mb-4">
										<Link
											to="#"
											className="fs-5 fw-semi-bold d-block mb-4 text-primary"
										>
											{item.category}
										</Link>
										<h1 className="display-3 fw-bold mb-4">{item.title}</h1>
										<span className="mb-3 d-inline-block">
											{item.readinglength} min read
										</span>
									</div>
									{/* Author */}
									{authorAndSharing(item)}
								</Col>
							</Row>
							<Row className="justify-content-center">
								{/* Image */}
								<Col
									xl={10}
									lg={10}
									md={12}
									sm={12}
									className="mb-6 text-center"
								>
									<Image
										src={item.blogpostimage}
										alt=""
										className="img-fluid rounded-3"
									/>
								</Col>
							</Row>
							<Row className="justify-content-center">
								<Col xl={8} lg={8} md={12} sm={12} className="mb-2">
									{/* Blog Content */}
									<div
										dangerouslySetInnerHTML={{
											__html: item.content
										}}
									></div>
									<hr className="mt-8 mb-5" />
									{/* Author */}
									{authorAndSharing(item)}
									{/* Subscribe to Newsletter */}
									<div className="py-12">
										<div className="text-center mb-6">
											<h2 className="display-4 fw-bold">
												Sign up for our Newsletter
											</h2>
											<p className="mb-0 lead">
												Join our newsletter and get resources, curated content,
												and design inspiration delivered straight to your inbox.
											</p>
										</div>
										{/* Form */}
										<Form className="row px-md-20">
											<Form.Group
												className="mb-3 col ps-0 ms-2 ms-md-0"
												controlId="formBasicEmail"
											>
												<Form.Control
													type="email"
													placeholder="Email Address"
												/>
											</Form.Group>
											<Form.Group
												className="mb-3 col-auto ps-0"
												controlId="formSubmitButton"
											>
												<Button variant="primary" type="submit">
													{' '}
													Submit
												</Button>
											</Form.Group>
										</Form>
									</div>
								</Col>
							</Row>
						</Fragment>
					))}
				</Container>

				{/* Related Post */}
				<Container>
					<Row>
						<Col xl={12} lg={12} md={12} sm={12}>
							<div className="my-5">
								<h2>Related Post</h2>
							</div>
						</Col>
						{BlogArticlesList.filter(function (dataSource) {
							return (
								dataSource.id === 6 ||
								dataSource.id === 7 ||
								dataSource.id === 15
							);
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

export default BlogArticleSingle;
