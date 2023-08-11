// import node module libraries
import { useState } from 'react';
import ReactQuill from 'react-quill';

const ReactQuillEditorPost = (props) => {
  const [state, setState] = useState(props.value);
  const { initialValue } = props;
  const handleChangeParent = props.handleChange;
  function handleChange(value) {
    setState(value);
    handleChangeParent({ target: { id: 'contents', value: value } });
    // console.log(value);
  }
  return <ReactQuill onChange={handleChange} defaultValue={initialValue} />;
};

export default ReactQuillEditorPost;
