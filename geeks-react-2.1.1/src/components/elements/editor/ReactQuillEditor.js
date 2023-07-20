// import node module libraries
import { useState } from "react";
import ReactQuill from "react-quill";

const ReactQuillEditor = (props) => {
  const [state, setState] = useState(props.initialValue);
  function handleChange(value, name) {
    setState(value);
    console.log(name);
  }
  return (
    <ReactQuill
      value={state}
      id="competition_intro"
      name="competition_intro"
      onChange={handleChange}
    />
  );
};

export default ReactQuillEditor;
