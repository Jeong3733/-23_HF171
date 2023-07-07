// import node module libraries
import { Card } from 'react-bootstrap';

// import bootstrap icons
import { Calendar4, Clock, CurrencyDollar } from 'react-bootstrap-icons';

const ProjectSchedule = () => {
	return (
		<Card className="mb-4">
			{/* start date  */}
			<Card.Body className="py-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center">
						<Calendar4 size={16} className="text-primary" />
						<div className="ms-2">
							<h5 className="mb-0 text-body">Start Date</h5>
						</div>
					</div>
					<div>
						<div>
							<p className="text-dark mb-0 fw-semi-bold">01 Jan, 2021</p>
						</div>
					</div>
				</div>
			</Card.Body>

			{/* end date  */}
			<Card.Body className="border-top py-3">
				<div
					className="d-flex justify-content-between
                      align-items-center"
				>
					<div className="d-flex align-items-center">
						<Calendar4 size={16} className="text-primary" />
						<div className="ms-2">
							<h5 className="mb-0 text-body">End Date</h5>
						</div>
					</div>
					<div>
						<div>
							<p className="text-dark mb-0 fw-semi-bold">30 Dec, 2021</p>
						</div>
					</div>
				</div>
			</Card.Body>

			{/* estimated time  */}
			<Card.Body className="border-top py-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center">
						<Clock size={16} className="text-primary" />
						<div className="ms-2">
							<h5 className="mb-0 text-body">Estimated Time</h5>
						</div>
					</div>
					<div>
						<div>
							<p className="text-dark mb-0 fw-semi-bold">30 Days</p>
						</div>
					</div>
				</div>
			</Card.Body>

			{/* cost  */}
			<Card.Body className="border-top py-3">
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center">
						<CurrencyDollar size={16} className="text-primary" />
						<div className="ms-2">
							<h5 className="mb-0 text-body">Cost</h5>
						</div>
					</div>
					<div>
						<div>
							<p className="text-dark mb-0 fw-semi-bold">$18,000</p>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};
export default ProjectSchedule;
