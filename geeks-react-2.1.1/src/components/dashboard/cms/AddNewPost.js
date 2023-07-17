// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Trash, XCircle, Copy } from 'react-feather';
import {
	Col,
	Row,
	Breadcrumb,
	Card,
	Button,
	Form,
	InputGroup,
	FormControl,
	ListGroup,
	Image,
	Badge
} from 'react-bootstrap';

// import custom components
import { FlatPickr } from 'components/elements/flat-pickr/FlatPickr';
import { FormSelect } from 'components/elements/form-select/FormSelect';
import { DropFiles } from 'components/elements/dropfiles/DropFiles';
import DotBadge from 'components/elements/bootstrap/DotBadge';
import ReactQuillEditor from 'components/elements/editor/ReactQuillEditor';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

const AddNewPost = () => {
	const initialValue = `<h4>One Ring to Rule Them All</h4>
  <br />
  <p>
  Three Rings for the
  <i> Elven-kingsunder</i> the sky, <br />
  Seven for the <u>Dwarf-lords</u> in halls of stone,
  Nine for Mortal Men, <br />
  doomed to die, One for the Dark Lord on his dark
  throne. <br />
  In the Land of Mordor where the Shadows lie.
  <br />
  <br />
  </p>
  <p>
  One Ring to
  <b>rule</b> them all, <br />
  One Ring to find them, <br />
  One Ring to bring them all and in the darkness bind
  them. <br />
  In the Land of Mordor where the Shadows lie.
  </p>
  <p>
  <br />
  </p>`;

	const categoryOptions = [
		{ value: 'course', label: 'Course' },
		{ value: 'post-category', label: 'Post Category' },
		{ value: 'workshop', label: 'Workshop' },
		{ value: 'marketing', label: 'Marketing' }
	];

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Add New Post</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">CMS</Breadcrumb.Item>
								<Breadcrumb.Item active>Add New Post</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Link to="/cms/all-posts" className="btn btn-outline-secondary ">
								Back to All Post
							</Link>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={9} lg={8} md={12} sm={12}>
					<Card>
						<Card.Header>
							<h4 className="mb-0">Create Post</h4>
						</Card.Header>
						<Card.Body>
							<Button variant="outline-secondary" className="me-1 mb-1">
								<i class="fe fe-image me-1"></i> Photo
							</Button>

							<Button variant="outline-secondary" className="me-1 mb-1">
								<i class="fe fe-video me-1"></i> Video
							</Button>

							<Button variant="outline-secondary" className="me-1 mb-1">
								Quote
							</Button>

							<Button variant="outline-secondary" className="mb-1">
								<i class="fe fe-link me-1"></i> Link
							</Button>

							<Form
								action="#"
								className="dropzone mt-4 p-4 border-dashed text-center"
							>
								<DropFiles />
							</Form>

							{/*  Form  */}
							<Form className="mt-4">
								<Row>
									<Col md={9} sm={12}>
										{/* Date */}
										<Form.Group className="mb-3">
											<Form.Label htmlFor="selectDate">Date</Form.Label>
											<FlatPickr value={''} />
										</Form.Group>

										{/* Title  */}
										<Form.Group className="mb-3">
											<Form.Label htmlFor="postTitle">Title</Form.Label>
											<Form.Control
												type="text"
												placeholder="Post Title"
												id="postTitle"
											/>
											<Form.Text className="text-muted">
												Keep your post titles under 60 characters. Write heading
												that describe the topic content. Contextualize for Your
												Audience.
											</Form.Text>
										</Form.Group>

										{/*   Slug  */}
										<Form.Group className="mb-3">
											<Form.Label htmlFor="basic-url">Slug</Form.Label>
											<InputGroup>
												<InputGroup.Text id="basic-addon3">
													https://example.com/
												</InputGroup.Text>
												<FormControl
													id="basic-url"
													aria-describedby="basic-addon3"
													placeholder="designcourses"
												/>
											</InputGroup>
											<Form.Text className="text-muted">
												{' '}
												Field must contain a unique value
											</Form.Text>
										</Form.Group>

										{/* Excerpt */}
										<Form.Group className="mb-3">
											<Form.Label htmlFor="Excerpt">Excerpt</Form.Label>
											<Form.Control
												as="textarea"
												placeholder="Excerpt"
												id="Excerpt"
												style={{ height: '100px' }}
											/>
										</Form.Group>

										{/* Category */}
										<Form.Group className="mb-3">
											<Form.Label>Category</Form.Label>
											<FormSelect options={categoryOptions} />
										</Form.Group>
									</Col>

									<Col lg={12} md={12} sm={12}>
										{/* Editor */}
										<Form.Group className="mb-3">
											<ReactQuillEditor initialValue={initialValue} />
										</Form.Group>
										{/* button */}
										<Form.Group className="mb-3">
											<Button variant="primary" className="m-1">
												Publish
											</Button>
											<Button variant="outline-secondary">Save to Draft</Button>
										</Form.Group>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={4} md={12} sm={12}>
					{/*  List group  */}
					<Card className="mt-4 mt-lg-0 mb-4">
						<Card.Header className="d-lg-flex">
							<h4 className="mb-0">Post Info</h4>
						</Card.Header>
						<Card.Body className="p-0">
							{/*  List group  */}
							<ListGroup variant="flush">
								<ListGroup.Item>
									<span className="text-body">Post ID</span>
									<h5>8693637308</h5>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className="text-body">Status</span>
									<h5>
										<DotBadge bg="success">
											Published (unsaved changes)
										</DotBadge>
									</h5>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className="text-body">Created by</span>
									<div className="d-flex mt-2">
										<Image
											src={Avatar1}
											alt=""
											className="avatar-sm rounded-circle"
										/>
										<div className="ms-2">
											<h5 className="mb-n1">Geeks Courses</h5>
											<small>Admin</small>
										</div>
									</div>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className="text-body">Created at</span>
									<h5>Jul 30, 2:21 PM</h5>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className="text-body">First published at</span>
									<h5>Jul 30, 2:21 PM</h5>
								</ListGroup.Item>
								<ListGroup.Item>
									<span className="text-body">Last update</span>
									<h5>Aug 31, 12:21 PM</h5>
								</ListGroup.Item>
								<ListGroup.Item className="bg-transparent">
									<span className="text-body">Last Published</span>
									<h5>Aug 31, 12:21 PM</h5>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>

					<Card className="mt-4 mt-lg-0 mb-4">
						<Card.Header className="d-lg-flex">
							<h4 className="mb-0">Actions</h4>
						</Card.Header>
						<Card.Body className="p-0">
							{/*  List group  */}
							<ListGroup variant="flush">
								<ListGroup.Item className="d-flex justify-content-between align-items-center">
									<span className="text-body">Unpublish</span>
									<Link to="#" className="text-inherit">
										<XCircle size="18px" />{' '}
									</Link>
								</ListGroup.Item>

								<ListGroup.Item className="d-flex justify-content-between align-items-center">
									<span className="text-body">Duplicate</span>
									<Link to="#" className="text-inherit">
										<Copy size="18px" />
									</Link>
								</ListGroup.Item>

								<ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent">
									<span className="text-body">Delete</span>
									<Link to="#">
										<Trash size="18px" className="text-danger" />
									</Link>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>

					<Card className="mt-4 mt-lg-0 mb-4">
						<Card.Header className="d-lg-flex">
							<h4 className="mb-0">Revision History</h4>
						</Card.Header>
						<Card.Body className="p-0">
							{/*  List group  */}
							<ListGroup variant="flush">
								<ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent">
									<div>
										<h5 className="mb-0">Aug 31, 12:21 PM</h5>
										<span className="text-body">Geeks Coures</span>
									</div>
									<div>
										<Badge bg="success">Published</Badge>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default AddNewPost;
