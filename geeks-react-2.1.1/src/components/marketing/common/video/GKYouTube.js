// import node module libraries
import React, { Fragment } from 'react';
import YouTube from 'react-youtube';

const GKYouTube = (props) => {
	const opts = {
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0
		}
	};
	return (
		<Fragment>
			<YouTube
				videoId={props.videoId}
				opts={opts}
				className="position-absolute top-0 end-0 start-0 end-0 bottom-0 h-100 w-100"
				iframeClassName="h-100"
			/>
		</Fragment>
	);
};

export default GKYouTube;
