// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_02_00_00 = () => {
	const NewSass = [
		'/src/assets/scss/theme/root/*.*',
		'/src/assets/scss/theme/_root.scss',
		'/src/assets/scss/theme/vendor/map/_map.scss',
		'/src/assets/scss/theme/components/_password.scss',
		'/src/assets/scss/theme/components/_breadcrumb.scss',
		'/src/assets/scss/theme/vendor/lightbox/_lightbox.scss',
		'/src/assets/scss/theme/vendor/nouislider/_nouislider.scss'
	];
	const UpdatedSass = [
		'/src/assets/scss/theme/utilities/_background.scss',
		'/src/assets/scss/theme/utilities/_border.scss',
		'/src/assets/scss/theme/utilities/_icon-shape.scss',
		'/src/assets/scss/theme/utilities/_sizing.scss',
		'/src/assets/scss/theme/utilities/_text.scss',
		'/src/assets/scss/theme/vendor/apex-chart/_apexchart.scss',
		'/src/assets/scss/theme/vendor/flatpickr/_flatpickr.scss',
		'/src/assets/scss/theme/vendor/modal-video/_modal-video.scss',
		'/src/assets/scss/theme/vendor/quill/_quill-snow.scss',
		'/src/assets/scss/theme/vendor/slick-slider/_slick_slider.scss',
		'/src/assets/scss/theme/vendor/slick-slider/_slick-theme.scss',
		'/src/assets/scss/theme/vendor/stepper/_stepper.scss',
		'/src/assets/scss/theme/vendor/tag-input/_tag-input.scss',
		'/src/assets/scss/theme/vendor/tippyjs/_tippy.scss',
		'/src/assets/scss/theme/_theme.scss',
		'/src/assets/scss/theme/_utilities.scss',
		'/src/assets/scss/theme/_variables.scss',
		'/src/assets/scss/theme.scss'
	];
	const NewMedia = [
		'/src/assets/images/hero/hero-icon-bg-dark.svg',
		'/src/assets/images/job/*.*',
		'/src/assets/images/png/*.*'
	];
	const NewRoutes = [
		'/src/routes/marketing/JobListing.js',
		'/src/routes/marketing/HelpCenterRoutes.js',
		'/src/routes/marketing/NavbarMegaMenuRoutes.js'
	];

	const NewReactFiles = [
		'/src/AppConfig.js',
		'/src/reducers/AppConfigReducer.js',
		'/src/context/providers/AppProvider.js',
		'/src/layouts/marketing/navbars/DarkLightMode.js',
		'/src/layouts/marketing/navbars/NavbarJobPages.js',
		'/src/layouts/marketing/navbars/mega-menu/*.*',
		'/src/layouts/marketing/navbars/CategoriesDropDown.js',
		'/src/layouts/marketing/navbars/HelpCenterDropDown.js',
		'/src/layouts/marketing/JobListingLayout.js',
		'/src/layouts/marketing/AcademyLayout.js',
		'/src/layouts/marketing/HelpCenterLayout.js',
		'/src/layouts/marketing/HelpCenterTransparentLayout.js',
		'/src/layouts/dashboard/ChatLayout.js',
		'/src/layouts/dashboard/MailLayout.js',
		'/src/layouts/dashboard/TaskKanbanLayout.js',
		'/src/components/marketing/common/LogosTopHeadingOffset2.js',
		'/src/components/marketing/common/quiz/Question.js',
		'/src/components/marketing/common/stats/StatTopSVGIcon.js',
		'/src/components/marketing/common/stats/StatTopBigIcon.js',
		'/src/components/marketing/common/jobs/JobSearchBox.js',
		'/src/components/marketing/common/cards/GetEnrolledCourseCard.js',
		'/src/components/marketing/common/testimonials/TestimonialsSlider.js',
		'/src/components/marketing/common/testimonials/TestimonialCard3.js',
		'/src/components/marketing/common/call-to-action/CTALightBG.js',
		'/src/components/marketing/common/call-to-action/CTA2Buttons.js',
		'/src/elements/range-slider/RangeSlider.js',
		'/src/elements/stepper/GKStepper2.js',
		'/src/elements/lightbox/GKLightbox.js'
	];
	const UpdatedReactFiles = [
		'/src/index.js',
		'/src/helper/utils.js',
		'/src/context/Context.js',
		'/src/layouts/AllRoutes.js',
		'/src/routes/marketing/NavbarDefault.js',
		'/src/routes/marketing/StudentDashboardMenu.js',
		'/src/layouts/marketing/navbars/NavbarLanding.js',
		'/src/components/elements/from-select/FormSelect.js',
		'/src/components/marketing/common/ratings/Ratings.js',
		'/src/layouts/marketing/navbars/help-center/NavbarHelpCenter.js',
		'/src/components/elements/miscellaneous/GridListViewButton.js'
	];

	const DeletedReactFiles = [
		'/src/layouts/marketing/footers/FooterLandings.js'
	];
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v2.0.0</code> - Feb 02, 2023
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">
										Geeks React Update [{' '}
										<span className="text-danger">Breaking Update</span> ]
									</h4>
									<ul>
										<li>Updated Symantic and UI Changes</li>
										<li>Added academy landing page with Mega Menu</li>
										<li>Quiz pages for students and instructor</li>
										<li>Job Listing Pages</li>
										<li>Table improvements</li>
										<li>Dark/Light Mode</li>
										<li>Required packages are Updated</li>
										<li>
											Added <code>simplebar</code> package
										</li>
										<li>
											Added <code>nouislider-react</code> package
										</li>
										<li>
											Added <code>react-simple-typewriter</code> package
										</li>
										<li>
											Added <code>yet-another-react-lightbox</code> package
										</li>
										<li>Fixed a few bugs</li>
										<li>
											Added/Updated required data and media files for react
											components.
										</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Components / Layout / React Files:</h4>
									<ul>
										{NewReactFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Routes:</h4>
									<ul>
										{NewRoutes.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="mb-3">
									<h4>New SCSS Files:</h4>
									<ul>
										{NewSass.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Media Files:</h4>
									<ul>
										{NewMedia.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
										<li>
											<code>/src/assets/images/background/*.*</code>
											<span className="comment d-block">
												( Added some new files)
											</span>
										</li>
										<li>
											<code>/src/assets/images/path/*.*</code>
											<span className="comment d-block">
												( Replaced all JPGs to SVGs)
											</span>
										</li>
										<li>
											<code>/src/assets/images/svg/*.*</code>
											<span className="comment d-block">
												( Added some new files)
											</span>
										</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>Updated React Files:</h4>
									<ul>
										<li>
											Updated all required react files consiering new pages,
											symantic UI, table improvements and dark/light mode
											facilities integration.
											<br />A few major updated files are...
										</li>
										{UpdatedReactFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
										<li>
											Updated below main index file for semantic UI changes
											<br />
											<code>/public/index.html</code>
										</li>
									</ul>
								</div>
								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										<li>
											<code>/src/assets/scss/theme/components/*.*</code>
											<span className="comment d-block">
												( Excluding _gallery.scss, _ie.scss and _reboot.scss
												files )
											</span>
										</li>
										{UpdatedSass.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Deleted React Files:</h4>
									<ul>
										{DeletedReactFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_02_00_00;
