import { s3Link } from 'helper/utils';
import React from 'react';
import { useState } from 'react';

const PDFViewer = ({ fileInfo }) => {
  console.log(fileInfo);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log(s3Link(fileInfo.path));
  return (
    <div>
      <h1>PDF Viewer</h1>
    </div>
  );
};
export default PDFViewer;
