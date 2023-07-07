// import node module libraries
import { useState } from 'react';
import { Card, Collapse, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import custom components
import Ratings from 'components/marketing/common/ratings/Ratings';

// Import required utility file
import { getSlug } from 'helper/utils';

const CompanyFilters = () => {
	const [openLocation, setOpenLocation] = useState(true);
	const [openDesignations, setOpenDesignations] = useState(true);
	const [openCompanyType, setOpenCompanyType] = useState(true);
	const [openCompanyRating, setOpenCompanyRating] = useState(true);
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
					onClick={() => setOpenDesignations(!openDesignations)}
					aria-controls="designations"
					aria-expanded={openDesignations}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Designations
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
				<Collapse in={openDesignations}>
					<div id="designations">
						<div className="mt-3">
							{[
								'Accountant (4)',
								'Executive Accountant (8)',
								'Assistant Manger (12)',
								'Software Developer (23)',
								'HR Executive (28)'
							].map((item, index) => (
								<Form.Check
									type="checkbox"
									className="mb-2"
									id={index}
									key={index}
								>
									<Form.Check.Input type="checkbox" />
									<Form.Check.Label>{item}</Form.Check.Label>
								</Form.Check>
							))}
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
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
							{[
								'Gujarat (4)',
								'Rajasthan (6)',
								'Delhi (5)',
								'Pune (12)',
								'Kolkata (8)'
							].map((item, index) => (
								<Form.Check
									type="checkbox"
									className="mb-2"
									id={getSlug(item)}
									key={index}
								>
									<Form.Check.Input type="checkbox" />
									<Form.Check.Label>{item}</Form.Check.Label>
								</Form.Check>
							))}
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Link
					to="#"
					onClick={() => setOpenCompanyRating(!openCompanyRating)}
					aria-controls="company-rating"
					aria-expanded={openCompanyRating}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Company Rating
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
				<Collapse in={openCompanyRating}>
					<div id="company-rating">
						<div className="mt-3">
							{[5, 4, 3, 2, 1].map((item, index) => (
								<Form.Check
									type="radio"
									id={`formRating${item}`}
									className="mb-1"
									key={index}
								>
									<Form.Check.Input type="radio" name="customRadio" />
									<Form.Check.Label>
										<span className="text-warning">
											<Ratings rating={item} size="1.2rem" />
										</span>{' '}
										{index > 0 && <span>& above</span>}
									</Form.Check.Label>
								</Form.Check>
							))}
						</div>
					</div>
				</Collapse>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Link
					to="#"
					onClick={() => setOpenCompanyType(!openCompanyType)}
					aria-controls="company-type"
					aria-expanded={openCompanyType}
					className="fs-5 text-dark fw-semi-bold"
					data-bs-toggle="collapse"
				>
					Company Type
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
				<Collapse in={openCompanyType}>
					<div id="company-type">
						<div className="mt-3">
							{[
								'Startup (4,532)',
								'Public (532)',
								'Government (312)',
								'Conglomerate (670)',
								'Unicorn (88)'
							].map((item, index) => (
								<Form.Check
									type="checkbox"
									className="mb-2"
									id={getSlug(item)}
									key={index}
								>
									<Form.Check.Input type="checkbox" />
									<Form.Check.Label>{item}</Form.Check.Label>
								</Form.Check>
							))}
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

export default CompanyFilters;
