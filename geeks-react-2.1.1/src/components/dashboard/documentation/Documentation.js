// import node module libraries
import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Documentation = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">Geeks React</h1>
							<p className="mb-0">
								Welcome to the Geeks ReactJS version of the original Geeks
								theme.
							</p>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={7} md={12} sm={12}>
					<Card>
						<Card.Body>
							<h2 className="fw-bold">Getting Started</h2>
							<p className="lead">
								A professional Geeks React Kit that comes with plenty of
								ready-to-use components that will help you to build more
								beautiful application (web app) and frontend pages.{' '}
							</p>

							<p>
								Geeks UI Kit is built with the most popular front-end framework{' '}
								<a
									href="https://react-bootstrap.github.io/"
									target="_blank"
									rel="noreferrer"
								>
									React Bootstrap
								</a>{' '}
								with react-scripts.
							</p>
							<p>
								This doc will guide you to understand how Geeks-React theme is
								organized, basics of how to customize, and how to compile from
								the source code if you want.
							</p>

							<hr className="mb-5 mt-5" />

							<h2 className="mb-0 fw-bold">Running in Local environment</h2>
							<p>This project is scaffolded using Create React App.</p>

							<ol>
								<li>
									<h4 className="mb-0 fw-bold">Requirements Node.js</h4>
									<p>
										Before proceeding you'll need to have the latest stable{' '}
										<a
											href="https://nodejs.org/en/download/"
											target="_blank"
											rel="noreferrer"
										>
											{' '}
											nodejs.
										</a>{' '}
										Install <code>Node.js</code> or already have it installed on
										your machine move to next step.
									</p>
								</li>
								<li>
									{' '}
									<h4 className="mb-0 fw-bold">Install Geeks React</h4>
									<p>
										Open the <span>"geeks-react” </span>directory with your cmd
										or terminal. Open the project folder and install its
										dependencies.{' '}
									</p>
									<pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
										cd geeks-react{' '}
									</pre>
									<pre className="prism-code language-jsx mb-2  bg-dark text-white fs-5">
										npm install{' '}
									</pre>
									<p>
										This command will download all the necessary dependencies
										for geeks in the node_modules directory.
									</p>
								</li>
								<li>
									<h4 className="mb-0 fw-bold">Start</h4>
									<p>
										Run <code>npm start</code>. A local web server will start at{' '}
										<a
											href="http://localhost:3000"
											target="_blank"
											rel="noreferrer"
										>
											http://localhost:3000{' '}
										</a>
										Once the installation is done, you can now start your app by
										running.
									</p>
									<pre className="prism-code language-jsx  bg-dark text-white fs-5">
										npm start
									</pre>
								</li>
							</ol>
							<hr className="mb-5 mt-5" />
							<h2 className="mb-0 fw-bold">Creating a Production Build.</h2>
							<p>Production build of your app.</p>
							<ol>
								<li>
									<div className="mb-4">
										<p>
											Run <code>npm run build</code> command in your project
											directory to make the Production build app.
										</p>
										<pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
											npm run build
										</pre>
									</div>
								</li>
								<li>
									<div className="">
										<p> Open Static Server for the production build</p>
										<pre className="prism-code language-jsx  bg-dark text-white fs-5 mb-2">
											node server.js
										</pre>
										<p>
											Once you execute above command, the production build run
											locally at <code>http://localhost:9000</code>.
										</p>
									</div>
								</li>
							</ol>

							<hr className="mb-5 mt-5" />

							<h2 className="mb-0 fw-bold">File Structure:</h2>
							<p>
								Inside the zip-file you'll find the following directories and
								files. Both compiled and minified distrubution files, as well as
								the source files are included in the package.
							</p>

							<code>
								<pre>
									{`
theme/
├── server.js
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
├── README.md
├── build/
├── public/
│   ├── .htaccess
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
	├── assets/
	│   ├── fonts/
	│   ├── images/
	│   └── scss/
	├── components/
	├── context/
	├── data/
	├── helpers/
	├── hooks/
	├── layouts/
	├── reducers/
	├── routes/
	├── App.js
	├── App.test.js
	├── index.js
	├── reportWebVitals.js
	└── setupTests.js  
`}
								</pre>
							</code>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Documentation;
