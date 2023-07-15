// import node module libraries
import { useState, Fragment } from 'react';
import { Image } from 'react-bootstrap';

// import required files for lightbox
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GKLightbox = (props) => {
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<Image
				src={props.image}
				alt="image"
				className="rounded-3 img-fluid cursor_pointer"
				onClick={() => setOpen(true)}
			/>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[{ src: props.image }]}
			/>
		</Fragment>
	);
};

export default GKLightbox;
