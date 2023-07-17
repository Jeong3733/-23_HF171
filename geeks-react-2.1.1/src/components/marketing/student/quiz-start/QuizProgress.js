// import node module libraries
import { ProgressBar } from 'react-bootstrap';

const QuizProgress = (props) => {
	let progress = (props.currentQuestion / props.totalQuestion) * 100;
	return (
		<div className="mt-3">
			<div className="d-flex justify-content-between">
				<span>Exam Progress:</span>
				<span>
					{' '}
					Question {props.currentQuestion} out of {props.totalQuestion}
				</span>
			</div>
			<div className="mt-2">
				<ProgressBar style={{ height: '6px' }}>
					<ProgressBar
						now={progress}
						style={{ width: progress + '%' }}
						variant="success"
					/>
				</ProgressBar>
			</div>
		</div>
	);
};
export default QuizProgress;
