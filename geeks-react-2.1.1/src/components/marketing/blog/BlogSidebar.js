// import node module libraries
import React, { Fragment } from 'react';
import {
	Col,
	Row,
	Container,
	Card,
	ListGroup,
	Form,
	Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'react-bootstrap-icons';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

// import sub components
import BlogCard from './BlogCard';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogSidebar = () => {
	return (
		<Fragment>
			{/* Default Navbar */}
			<NavbarDefault login />

			<main>
				{/*  Page header  */}
				<section className="pt-9 pb-9 bg-white">
					<Container>
						<Row>
							<Col
								xl={{ offset: 2, span: 8 }}
								lg={{ offset: 1, span: 10 }}
								md={12}
								sm={12}
							>
								<div className="text-center mb-5">
									<h1 className=" display-2 fw-bold">Geeks Newsroom</h1>
									<p className=" lead">
										Stories, tips, and tools to inspire you to find your most
										creative self. Subscribe to get curated content delivered
										directly to your inbox.
									</p>
								</div>
								{/*  Form */}
								<Form className="row px-md-20">
									<Form.Group
										className="mb-3 col ps-3"
										controlId="formBasicEmail"
									>
										<Form.Control type="email" placeholder="Email Address" />
									</Form.Group>
									<Form.Group
										className="mb-3 col-auto ps-0"
										controlId="formSubmitButton"
									>
										<Button variant="primary" type="submit">
											Submit
										</Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</Container>
				</section>

				{/*  Content */}
				<section className="pb-16 bg-white">
					<Container>
						<Row>
							<Col lg={8} md={7} sm={12}>
								<Row>
									{BlogArticlesList.slice(0, 6).map((item, index) => (
										<Col lg={6} md={12} sm={12} key={index} className="d-flex">
											<BlogCard item={item} />
										</Col>
									))}
								</Row>
							</Col>
							<Col lg={4} md={5} sm={!2} className="mt-6 mt-md-0">
								{/*  search */}
								<div className="mb-4">
									<div className="mb-3 position-relative">
										<Form.Control type="search" placeholder="Search..." />
										<span className="position-absolute end-0 top-0 my-2 me-2">
											<SearchIcon size={15} className="me-1" />
										</span>
									</div>
								</div>
								{/*  card */}
								<Card className="mb-4 border ">
									{/*  card body */}
									<Card.Body className="p-4">
										<h3>Recent Posts</h3>
										<div className="mt-3">
											<ListGroup
												as="ul"
												className=" mb-0"
												bsPrefix="list-unstyled"
											>
												{BlogArticlesList.slice(0, 4).map((item, index) => (
													<ListGroup.Item
														as="li"
														className="mb-3"
														bsPrefix=" "
														key={index}
													>
														<h4 className="lh-lg">
															<Link to="#" className="text-inherit">
																{item.title}
															</Link>
														</h4>
													</ListGroup.Item>
												))}
											</ListGroup>
										</div>
									</Card.Body>
								</Card>
								{/*  card */}
								<Card className="mb-4 border ">
									{/*  card body */}
									<Card.Body className="p-4">
										<h3>Categories</h3>
										<div className="mt-3">
											{/*  list */}
											<ListGroup
												as="ul"
												className="mb-0 nav nav-x-0 flex-column"
												bsPrefix="list-unstyled"
											>
												{[
													'Business',
													'Marketing',
													'Courses',
													'Dashboard',
													'Landings',
													'E-commerce'
												].map((item, index) => (
													<ListGroup.Item
														as="li"
														className="lh-lg mb-1"
														bsPrefix=" "
														key={index}
													>
														<i className="fe fe-arrow-right text-muted"></i>{' '}
														<Link to="#" className="text-link d-inline">
															{item}
														</Link>
													</ListGroup.Item>
												))}
											</ListGroup>
										</div>
									</Card.Body>
								</Card>
								{/*  card */}
								<Card className="mb-4 border ">
									{/*  card body */}
									<Card.Body className="p-4">
										<h3>Archive</h3>
										<div className="mt-3">
											{/*  list */}
											<ListGroup
												as="ul"
												className="mb-0 nav nav-x-0 flex-column"
												bsPrefix="list-unstyled"
											>
												{[
													'March 2021',
													'February 2021',
													'January 2021',
													'December 2020'
												].map((item, index) => (
													<ListGroup.Item
														as="li"
														className="lh-lg mb-1"
														bsPrefix=" "
														key={index}
													>
														<i className="fe fe-arrow-right text-muted"></i>{' '}
														<Link to="#" className="text-link d-inline">
															{item}
														</Link>
													</ListGroup.Item>
												))}
											</ListGroup>
										</div>
									</Card.Body>
								</Card>
								{/*  card */}
								<Card className="mb-4 border ">
									{/*  card body */}
									<Card.Body className="p-4">
										<h3>Tags</h3>
										<div className="mt-3">
											{[
												'business',
												'e-commerce',
												'course',
												'dashboard',
												'landings',
												'marketing'
											].map((item, index) => (
												<Fragment key={index}>
													<Link to="#" className="btn btn-light btn-xs mb-2">
														{item}
													</Link>{' '}
												</Fragment>
											))}
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			</main>

			{/* Footer with links */}
			<FooterWithLinks />
		</Fragment>
	);
};

export default BlogSidebar;
