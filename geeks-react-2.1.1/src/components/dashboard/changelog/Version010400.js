// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_01_04_00 = () => {
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v1.4.0</code> - Jun 10, 2022
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks React Update</h4>
									<ul>
										<li>Added react-beautiful-dnd package</li>
										<li>
											Added required data and media files for new react pages
											listed below.
										</li>
									</ul>
									<div className="mb-3">
										<h4>New React Dashboard Pages / Functionalities:</h4>
										<ul>
											<li>
												Added - Chat Application ( APPS &#8594; Chat )
												<br />
												<code>src/components/dashboard/chat/*.*</code>
											</li>
											<li>
												Added - Task Kanban Application ( APPS &#8594; Task )
												<br />
												<span className="text-muted">
													( Facilities : drag drop task, add new task, delete
													task. )
												</span>
												<br />
												<code>src/components/dashboard/task-kanban/*.*</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>New Components / React Files:</h4>
										<ul>
											<li>
												Added below files to manage chat component.
												<br />
												<code>/src/hooks/useChatOperations.js</code>
												<br />
												<code>/src/context/providers/ChatProvider.js</code>
												<br />
												<code>/src/reducers/ChatReducer.js</code>
											</li>
										</ul>
										<ul>
											<li>
												Added below files to manage task kanban component.
												<br />
												<code>/src/hooks/useTaskKanban.js</code>
												<br />
												<code>
													/src/context/providers/TaskKanbanProvider.js
												</code>
												<br />
												<code>/src/reducers/TaskKanbanReducer.js</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>New SCSS Files:</h4>
										<ul>
											<li>
												<code>
													src/assets/scss/theme/components/_task-kanban.scss
												</code>
											</li>
											<li>
												<code>
													src/assets/scss/theme/components/_chat-app.scss
												</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated React Files:</h4>
										<ul>
											<li>
												Updated below context to pass data through the chat and
												task kanban apps component tree.
												<br />
												<code>/src/context/Context.js</code>
											</li>

											<li>
												Updated routes files for newly added pages
												<br />
												<code>/src/layouts/AllRoutes.js</code>
												<br />
												<code>/src/routes/dashboard/NavbarVertical.js</code>
												<br />
												<code>/src/routes/dashboard/DashboardRoutes.js</code>
											</li>

											<li>
												Updated below files to fix some issues
												<br />
												<span className="text-muted">
													( Updated FlatPickr component with additional option
													parameter. )
												</span>
												<br />
												<code>
													/src/components/elements/flat-pickr/FlatPickr.js
												</code>
												<br />
												<span className="text-muted">
													( Added a class in FormSelect component to fix
													cosmetic issue. )
												</span>
												<br />
												<code>
													/src/components/elements/form-select/FormSelect.js
												</code>
											</li>
											<li>
												Updated below files for chat application.
												<br />
												<span className="text-muted">
													( Added a class for chat component as optional
													parameter)
												</span>
												<br />
												<code>/src/layouts/dashboard/DashboardIndex.js</code>
												<br />
												<span className="text-muted">
													( Added one status in PropTypes for predefined value
													range )
												</span>
												<br />
												<code>
													/src/components/elements/bootstrap/Avatar.js
												</code>
											</li>
											<li>
												Updated App.js by adding required stylesheet.
												<br />
												<code>/src/App.js</code>
											</li>
										</ul>
									</div>
									<div className="mb-3">
										<h4>Updated SCSS Files:</h4>
										<ul>
											<li>
												<code>
													/src/assets/scss/theme/components/_button.scss
												</code>
											</li>
											<li>
												<code>/src/assets/scss/theme/_theme.scss</code>
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_01_04_00;
