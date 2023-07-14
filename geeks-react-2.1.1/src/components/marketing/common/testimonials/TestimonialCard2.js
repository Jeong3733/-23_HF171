// import node module libraries
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen } from '@mdi/js';

const TestimonialCard2 = ({ item }) => {
	return (
		<div className="item">
			<div>
				<span className="display-3 text-muted">
					<Icon path={mdiFormatQuoteOpen} size={2} />
				</span>
				<p className="fs-3 text-dark lh-lg mb-4">"{item.content}"</p>

				<div className="d-flex align-items-center">
					<div>
						<Image
							src={item.image}
							alt=""
							className="avatar avatar-lg rounded-circle"
						/>
					</div>
					<div className="ms-3">
						<h4>
							{item.name}
							<span className="text-info"> /</span>{' '}
							<span className="text-muted">{item.designation}</span>
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

// Typechecking With PropTypes
TestimonialCard2.propTypes = {
	item: PropTypes.object.isRequired
};

export default TestimonialCard2;
