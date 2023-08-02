// import node module libraries
import { useState } from 'react';
import ReactQuill from 'react-quill';

const ReactQuillEditorPopup = (props) => {
  const [state, setState] = useState(props.initialValue);
  function handleChange(value) {
    setState(value);
  }
  return <ReactQuill value={state} onChange={handleChange} />;
};

export default ReactQuillEditorPopup;
