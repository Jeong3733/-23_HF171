// import node module libraries
import { Link } from 'react-router-dom';
import { Card, Table, Badge } from 'react-bootstrap';

// import profile layout wrapper
import ProfileLayout from './ProfileLayout';

// import data files
import QuizAttemptsData from 'data/marketing/quiz/QuizAttemptsData';

const QuizAttempt = () => {
	const ResultBadge = ({ result }) => {
		let bgValue = '';
		switch (result) {
			case 'Fail':
				bgValue = 'danger-soft';
				break;
			case 'Pending':
				bgValue = 'warning-soft';
				break;
			case 'Pass':
				bgValue = 'success-soft';
				break;
			default:
				break;
		}
		return <Badge bg={bgValue}>{result}</Badge>;
	};
	return (
		<ProfileLayout>
			<Card>
				<Card.Header className="card-header">
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-1">My Quiz Attempt</h3>
						<p className="mb-0">You can find all of your order Invoices.</p>
					</div>
				</Card.Header>
				<Table
					responsive
					hover
					className="text-nowrap text-lg-wrap table-centered"
				>
					<thead className="table-light">
						<tr>
							<th>Quiz Info</th>
							<th>Questions</th>
							<th>Correct</th>
							<th>Incorrect</th>
							<th>Marks</th>
							<th>Result</th>
						</tr>
					</thead>
					<tbody>
						{QuizAttemptsData.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<div>
											<Link to="#">
												<h5 className="mb-1">{item.quizTitle}</h5>
											</Link>
											<small>{item.attemptDateTime}</small>
										</div>
									</td>
									<td>{item.questions}</td>
									<td>{item.correct}</td>
									<td>{item.incorrect}</td>
									<td>{item.marks}</td>
									<td>
										<ResultBadge result={item.result} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Card>
		</ProfileLayout>
	);
};

export default QuizAttempt;
