// import node module libraries
import { Card, Table, Image } from 'react-bootstrap';

// import data files
import BrowsersStatistics from 'data/dashboard/BrowsersStatistics';

const Browsers = ({ title }) => {
	return (
		<Card className="h-100 ">
			<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
				<h4 className="mb-0">{title}</h4>
			</Card.Header>
			<Card.Body className="p-0">
				<Table hover className="mb-0 text-nowrap table-centered">
					<tbody>
						{BrowsersStatistics.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<Image src={item.logo} alt="" className="me-2" />{' '}
										<span className="align-middle ">{item.browser}</span>
									</td>
									<td>{item.percent}%</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
};
export default Browsers;
