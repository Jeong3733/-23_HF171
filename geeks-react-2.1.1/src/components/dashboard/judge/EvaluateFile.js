// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';

// import sub components
import PDFViewer from './PDFViewer';

const EvaluateFile = () => {
  const { judge_id, post_id, file_id } = useParams();
  const { fileInfo } = useOutletContext();

  return (
    <Fragment>
      <h5 className="mb-0">{judge_id}</h5>
      <h5 className="mb-0">{post_id}</h5>
      <h5 className="mb-0">{file_id}</h5>
      <PDFViewer fileInfo={fileInfo} />
    </Fragment>
  );
};

export default EvaluateFile;
