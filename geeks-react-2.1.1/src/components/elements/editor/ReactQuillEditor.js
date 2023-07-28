// import node module libraries
import { useState } from "react";
import ReactQuill from "react-quill";

const ReactQuillEditor = (props) => {
  const [state, setState] = useState(props.value);
  const { initialValue } = props;
  const handleChangeParent = props.handleChange;
  function handleChange(value, delta) {
    setState(value);
    handleChangeParent({ target: {name: "competitionReadme", value: value }});
    console.log(value);
  }
  return (
    <ReactQuill
      onChange={handleChange}
      defaultValue={initialValue}
    />
  );
};

export default ReactQuillEditor;
