// import node module libraries
import { Fragment } from 'react';
import { CourseFAQs } from 'data/marketing/CourseIndexData';

const FAQTab = () => {
	return (
		<Fragment>
			<h3 className="mb-3">Course - Frequently Asked Questions</h3>
			{CourseFAQs.map((item, index) => (
				<div className="mb-4" key={index}>
					<h4>{item.question}</h4>
					<div dangerouslySetInnerHTML={{ __html: item.answer }} />
				</div>
			))}
		</Fragment>
	);
};
export default FAQTab;
