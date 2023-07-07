// import node module libraries
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

// import sub components
import PrintInvoiceDetails from './PrintInvoiceDetails';

// import profile layout wrapper
import ProfileLayout from 'components/marketing/student/ProfileLayout';

const InvoiceDetails = () => {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});

	return (
		<ProfileLayout>
			<Card>
				<Link
					to="#"
					className="text-muted print-link no-print text-end me-5 mt-3 "
					onClick={handlePrint}
				>
					<i className="fe fe-printer"></i>
				</Link>
				<PrintInvoiceDetails ref={componentRef} />
			</Card>
		</ProfileLayout>
	);
};

export default InvoiceDetails;
