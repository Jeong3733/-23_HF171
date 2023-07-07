// import node module libraries
import { Fragment, useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';

const Question = (props) => {
	const { item } = props;
	const [selectedValue, setSelectedValue] = useState(0);
	const type = item.interface === 'checkbox' ? 'checkbox' : 'radio';
	return (
		<Fragment>
			<h3 className="mb-3">{item.question}</h3>
			{item.interface === 'button' ? (
				<Fragment>
					{item.answers.map((answer, index) => (
						<Form.Check
							key={index}
							type="radio"
							id={`radio-${answer.id}`}
							bsPrefix="d-grid"
							className="mb-2"
						>
							<Form.Check.Input
								type="radio"
								className="btn-check"
								name={'answer-' + item.id}
							/>
							<Form.Check.Label className="btn btn-outline-light-primary text-dark-primary text-start">
								{answer.answer}
							</Form.Check.Label>
						</Form.Check>
					))}
				</Fragment>
			) : (
				<ListGroup>
					{item.answers.map((answer, index) => {
						return (
							<ListGroup.Item
								key={index}
								className={`list-group-item-action ${
									selectedValue === answer.value ? 'bg-light' : ''
								}`}
								aria-current="true"
							>
								<Form.Check
									type={type}
									id={answer.id}
									name={'answer-' + item.id}
									label={answer.answer}
									value={answer.value}
									onChange={(e) => setSelectedValue(e.currentTarget.value)}
								/>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			)}
		</Fragment>
	);
};

export default Question;
