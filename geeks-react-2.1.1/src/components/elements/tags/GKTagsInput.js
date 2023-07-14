/********************************
Component : Tag Input Control
*********************************

Availalble Parameters

defaulttags  : Optional, here you can pass default tag list like this  defaulttags={["jQuery", "bootstrap"]}

*/

// Import required libraries
import React from 'react';
import PropTypes from 'prop-types';
import ReactTagInput from '@pathofdev/react-tag-input';

const GKTagsInput = ({ defaulttags }) => {
	const [tags, setTags] = React.useState(defaulttags);
	return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />;
};

GKTagsInput.propTypes = {
	defaulttags: PropTypes.array
};

GKTagsInput.defaultProps = {
	defaulttags: []
};

export default GKTagsInput;
