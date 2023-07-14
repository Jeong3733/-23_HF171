// import node module libraries
import { useState } from 'react';
import { Card, Collapse, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import RangeSlider from 'components/elements/range-slider/RangeSlider';

// Import required utility file
import { getSlug } from 'helper/utils';

const JobFilters = () => {
	const [openLocation, setOpenLocation] = useState(true);
	const [openSalary, setOpenSalary] = useState(true);
	const [openEducation, setOpenEducation] = useState(true);
	const [openLastUpdated, setOpenLastUpdated] = useState(true);
	return (
		<Card className="border mb-6 mb-md-0 shadow-none">
			<Card.Header>
				<h4 className="mb-0 fs-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-filter text-muted me-2"
						viewBox="0 0 16 16"
					>
						<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
					</svg>
					All Filters
				</h4>
			</Card.Header>
			<Card.Body className="py-3">
				<Link
					to="#"
					onClick={() => setOpenLocation(!openLocation)}
					aria-controls="locations"
					aria-expanded={openLocation}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Locations
					<span className="float-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							fill="currentColor"
							className="bi bi-chevron-down"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</span>
				</Link>
				<Collapse in={openLocation}>
					<div id="locations">
						<div className="mt-3">
							{['Gujarat (4)', 'Rajasthan (8)', 'Delhi (12)', 'Pune (412)'].map(
								(item, index) => (
									<Form.Check
										type="checkbox"
										className="mb-2"
										id={getSlug(item)}
										key={index}
									>
										<Form.Check.Input type="checkbox" />
										<Form.Check.Label>{item}</Form.Check.Label>
									</Form.Check>
								)
							)}
							<Link to="#" className="fw-semi-bold">
								12+ More
							</Link>
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Link
					to="#"
					onClick={() => setOpenSalary(!openSalary)}
					aria-controls="salary"
					aria-expanded={openSalary}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Salary
					<span className="float-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							fill="currentColor"
							className="bi bi-chevron-down"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</span>
				</Link>
				<Collapse in={openSalary}>
					<div id="salary">
						<div className="mt-3">
							{['0-3 Lakhs', '3-6 Lakhs', '6-10 Lakhs', '10-15 Lakhs'].map(
								(item, index) => (
									<Form.Check
										type="checkbox"
										className="mb-2"
										id={getSlug(item)}
										key={index}
									>
										<Form.Check.Input type="checkbox" />
										<Form.Check.Label>{item}</Form.Check.Label>
									</Form.Check>
								)
							)}
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<h4 className="mb-4 fs-5">Experience</h4>
				<RangeSlider startValue={15} rangeMin={0} rangeMax={30} />
				<div className="d-flex justify-content-between mt-2 fs-6 text-dark">
					<span>0 yrs</span>
					<span>30 yrs</span>
				</div>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Link
					to="#"
					onClick={() => setOpenLastUpdated(!openLastUpdated)}
					aria-controls="last-updated"
					aria-expanded={openLastUpdated}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Last updated
					<span className="float-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							fill="currentColor"
							className="bi bi-chevron-down"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</span>
				</Link>
				<Collapse in={openLastUpdated}>
					<div id="last-updated">
						<div className="mt-3">
							<select className="selectpicker form-control" data-width="100%">
								<option value="">Last Day</option>
								<option value="Newest">Newest</option>
								<option value="Oldest">Oldest</option>
							</select>
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Link
					to="#"
					onClick={() => setOpenEducation(!openEducation)}
					aria-controls="education"
					aria-expanded={openEducation}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Education
					<span className="float-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							fill="currentColor"
							className="bi bi-chevron-down"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</span>
				</Link>
				<Collapse in={openEducation}>
					<div id="education">
						<div className="mt-3">
							{['M.Tech', 'MBA / MTech', 'Any Graduate', 'Post Graduate'].map(
								(item, index) => (
									<Form.Check
										type="checkbox"
										className="mb-2"
										id={getSlug(item)}
										key={index}
									>
										<Form.Check.Input type="checkbox" />
										<Form.Check.Label>{item}</Form.Check.Label>
									</Form.Check>
								)
							)}
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="py-3 d-grid">
				<Button as="a" variant="outline-secondary" href="#">
					Clear Data
				</Button>
			</Card.Body>
		</Card>
	);
};

export default JobFilters;
