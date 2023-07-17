// import node module libraries
import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import data files
import InvoiceData from 'data/marketing/InvoiceData';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/student/ProfileLayout';

const Invoice = () => {
	return (
		<ProfileLayout>
			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Invoices</h3>
						<p className="mb-0">You can find all of your order Invoices.</p>
					</div>
				</Card.Header>
				<Card.Body className="p-0">
					{/* Table */}
					<div className="table-invoice border-0">
						<Table
							hover
							responsive
							className="mb-0 text-nowrap table-centered "
						>
							<thead className="table-light">
								<tr>
									<th scope="col">Order ID</th>
									<th scope="col">Date</th>
									<th scope="col">Amount</th>
									<th scope="col">Status</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								{InvoiceData.map((item, index) => (
									<tr key={index}>
										<td>
											<Link to="/marketing/student/student-invoice-details/">
												#{item.id}
											</Link>
										</td>
										<td>{item.invoicedate}</td>
										<td>{item.amount}</td>
										<td>
											<Badge bg={item.status === 'Due' ? 'danger' : 'success'}>
												{item.status}
											</Badge>
										</td>
										<td>
											<Link
												to={`assets/images/pdf/${item.pdf}`}
												target="_blank"
												className="fe fe-download"
												download
											/>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default Invoice;
