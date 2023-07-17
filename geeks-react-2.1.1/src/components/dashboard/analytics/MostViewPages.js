// import node module libraries
import { Link } from 'react-router-dom';
import { Card, Table } from 'react-bootstrap';

// import data files
import PageStatistics from 'data/dashboard/PageStatistics';

const MostViewPages = ({ title }) => {
	return (
		<Card className="h-100">
			<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
				<h4 className="mb-0">{title}</h4>
			</Card.Header>
			<Card.Body className="p-0">
				<Table hover className="mb-0 text-nowrap table-centered">
					<thead className="table-light">
						<tr>
							<th scope="col">Page</th>
							<th scope="col">Exits</th>
							<th scope="col">Views</th>
						</tr>
					</thead>
					<tbody>
						{PageStatistics.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										{item.link}{' '}
										<Link to="#" className="text-inherit">
											<i className="fe fe-external-link"></i>
										</Link>
									</td>
									<td>{item.exits}</td>
									<td>{item.views}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
};
export default MostViewPages;
