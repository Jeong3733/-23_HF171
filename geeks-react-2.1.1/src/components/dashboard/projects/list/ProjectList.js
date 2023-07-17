// import node module libraries
import React, { Fragment, useState } from 'react';
import { Row, Col, Breadcrumb, Offcanvas, Button } from 'react-bootstrap';

// import sub components
import OffcanvasCreateProjectForm from '../OffcanvasCreateProjectForm';
import ProjectListTable from './ProjectListTable';

const ProjectList = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Create New Project</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
								<Breadcrumb.Item active>List</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Button onClick={handleShow}>Create a Project</Button>
							<Offcanvas
								show={show}
								onHide={handleClose}
								placement="end"
								name="end"
								style={{ width: '600px' }}
							>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title as="h3">Create Project</Offcanvas.Title>
								</Offcanvas.Header>
								<Offcanvas.Body className="pt-0">
									<OffcanvasCreateProjectForm onClick={handleClose} />
								</Offcanvas.Body>
							</Offcanvas>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<ProjectListTable onNewProject={handleShow} />
				</Col>
			</Row>
		</Fragment>
	);
};

export default ProjectList;
