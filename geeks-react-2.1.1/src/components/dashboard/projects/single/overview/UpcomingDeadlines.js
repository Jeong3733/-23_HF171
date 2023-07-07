// import node module libraries
import { Card, Table, ProgressBar, Image } from 'react-bootstrap';

// import data files
import UpcomingDeadlinesData from 'data/dashboard/projects/UpcomingDeadlinesData';

const UpcomingDeadlines = () => {
	return (
		<Card>
			<Card.Header>
				<h4 className="mb-0">Upcoming Deadlines</h4>
			</Card.Header>

			{/* table */}
			<div className="overflow-y-hidden">
				<Table hover responsive className="mb-0 text-nowrap table-centered">
					<thead className="table-light">
						<tr>
							<th scope="col">Member</th>
							<th scope="col">Task</th>
							<th scope="col">Deadline</th>
							<th scope="col">Workload</th>
						</tr>
					</thead>
					<tbody>
						{UpcomingDeadlinesData.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<div className="d-flex align-items-center">
											<div className="avatar avatar-sm">
												<Image
													src={item.memberimage}
													alt=""
													className="rounded-circle"
												/>
											</div>
											<div className="ms-2">
												<h5 className="mb-0">{item.member}</h5>
											</div>
										</div>
									</td>
									<td>{item.task}</td>
									<td>{item.deadline}</td>
									<td>
										<div className="d-flex align-items-center">
											<ProgressBar
												className="flex-auto"
												style={{ height: '6px' }}
											>
												<ProgressBar variant="success" now={item.workload} />
											</ProgressBar>
											<div className="ms-2">
												<span>{item.workload}%</span>
											</div>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</Card>
	);
};
export default UpcomingDeadlines;
