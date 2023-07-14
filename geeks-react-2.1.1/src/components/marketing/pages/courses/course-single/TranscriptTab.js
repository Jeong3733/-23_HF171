// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// import data files
import { Transcripts } from 'data/marketing/CourseIndexData';

const TranscriptTab = () => {
	return (
		<Fragment>
			<h3 className="mb-3">Transcript from the "Introduction" Lesson</h3>
			{Transcripts.map((item, index) => (
				<div className="mb-4" key={index}>
					<h4>
						{item.title}{' '}
						<Link to="#" className="text-primary ms-2 h4">
							{item.duration}
						</Link>
					</h4>
					<div
						dangerouslySetInnerHTML={{
							__html: item.description
						}}
					/>
				</div>
			))}
		</Fragment>
	);
};
export default TranscriptTab;
