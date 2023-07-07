// import node module libraries
import React from 'react';
import { Card, Image, Row, Col, Table } from 'react-bootstrap';

// import media files
import Logo from 'assets/images/brand/logo/logo-icon.svg';

const PrintInvoiceDetails = React.forwardRef((props, ref) => {
	return (
		<Card className="border-0" ref={ref}>
			<Card.Body>
				{/* Card body */}
				<div className="d-flex justify-content-between mb-6">
					<div>
						{/* Images */}
						<Image src={Logo} alt="" className="mb-4 avatar-lg" />
						<h4 className="mb-0">Geeks Courses</h4>
						<small>INVOICE ID: #1001</small>
					</div>
				</div>
				{/* Row */}
				<Row>
					<Col md={8} sm={12}>
						<span className="fs-6">Invoice From</span>
						<h5 className="mb-3">Darlene Wilson</h5>
						<p>
							4333 Edwards Rd <br /> undefined Erie, Oklahoma <br />
							14355 United States
						</p>
					</Col>
					<Col md={4} sm={12}>
						<span className="fs-6">Invoice To</span>
						<h5 className="mb-3">Jorge Fisher</h5>
						<p>
							775 Rolling Green Rd <br /> undefined Orange, Oklahoma <br />{' '}
							45785 United States
						</p>
					</Col>
				</Row>
				{/* Row */}
				<Row className="mb-5">
					<Col sm={8}>
						<span className="fs-6">INVOICED ID</span>
						<h6 className="mb-0">#1001</h6>
					</Col>
					<Col sm={4}>
						<span className="fs-6">Due Date</span>
						<h6 className="mb-0">20 April 2020</h6>
					</Col>
				</Row>
				{/* Table */}
				<div className="table-responsive mb-12">
					<Table borderless className="mb-0 text-nowrap">
						<thead className="table-light">
							<tr>
								<th scope="col">Item</th>
								<th scope="col">Quantity</th>
								<th scope="col">Unit Price</th>
								<th scope="col">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-dark">
								<td>
									Monthly{' '}
									<span className="fs-6 text-muted">
										(1 Jan,2020 to 1 Feb, 2020)
									</span>
								</td>
								<td>1</td>
								<td>$39.00</td>
								<td>$39.00</td>
							</tr>
						</tbody>
						<tfoot>
							<tr className="text-dark">
								<td colSpan="2"></td>
								<td colSpan="1" className="pb-0">
									Total
								</td>
								<td className="pb-0">$39.00</td>
							</tr>
							<tr className="text-dark">
								<td colSpan="2"></td>
								<td colSpan="1" className="py-0">
									Net Amount
								</td>
								<td className="py-0">$37.00</td>
							</tr>
							<tr className="text-dark">
								<td colSpan="2"></td>
								<td colSpan="1" className="pt-0">
									Tax*
								</td>
								<td className="pt-0">$2.00</td>
							</tr>
							<tr className="text-dark">
								<td colSpan="2"></td>
								<td colSpan="1" className="border-top py-1 fw-bold">
									Grand Total
								</td>
								<td className="border-top py-1 fw-bold">$478.50</td>
							</tr>
						</tfoot>
					</Table>
				</div>
				{/* Short note */}
				<p className="border-top pt-3 mb-0 ">
					Notes: Invoice was created on a computer and is valid without the
					signature and seal.
				</p>
			</Card.Body>
		</Card>
	);
});

export default PrintInvoiceDetails;
