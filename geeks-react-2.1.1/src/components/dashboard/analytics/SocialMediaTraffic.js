// import node module libraries
import { Card, Table, ProgressBar } from 'react-bootstrap';
import Icon from '@mdi/react';

// import data files
import SocialMediaTrafficData from 'data/dashboard/SocialMediaTrafficData';

const SocialMediaTraffic = ({ title }) => {
	return (
		<Card className="h-100 ">
			<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
				<h4 className="mb-0">{title} </h4>
			</Card.Header>
			<Card.Body className="p-0">
				<Table hover className="mb-0 text-nowrap table-centered">
					<tbody>
						{SocialMediaTrafficData.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<Icon
											path={item.icon}
											size={0.6}
											className="text-primary"
										/>
										<span className="ms-2 d-none d-md-inline-block">
											{item.media}
										</span>
									</td>
									<td>
										<span>{item.counter}</span> <span>({item.percent}%)</span>
									</td>
									<td>
										<ProgressBar
											variant={item.progressbarvariant}
											now={item.percent}
											className="mb-2"
											style={{ height: '5px' }}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
};
export default SocialMediaTraffic;
