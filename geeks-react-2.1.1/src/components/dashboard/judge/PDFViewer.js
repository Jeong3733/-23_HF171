import { s3Link } from 'helper/utils';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Typography, IconButton } from '@mui/material';
import { debounce } from 'lodash';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { createStyles, makeStyles } from '@mui/styles';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card } from 'react-bootstrap';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// 하단에 설명 참조
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (props) => {
  // const classes = usePageStyles();

  const pdfRef = useRef();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  // const { selectedPdf, handleCloseModal } = props;
  const selectedPdf = s3Link(props.fileInfo.path);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  const handlePagePrev = useMemo(
    () =>
      debounce(() => {
        if (pageNumber <= 1) {
          return;
        }
        setPageNumber(pageNumber - 1);
      }, 300),
    [pageNumber],
  );

  const handlePageNext = useMemo(
    () =>
      debounce(() => {
        if (pageNumber > numPages) {
          return;
        }
        setPageNumber(pageNumber + 1);
      }, 300),
    [numPages, pageNumber],
  );

  return (
    <div className="d-flex align-items-center flex-column gap-2">
      <Card className={` shadow-none`}>
        <Document
          inputRef={pdfRef}
          file={selectedPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => {
            alert('load error');
            // handleCloseModal();
          }}
        >
          <Page
            pageNumber={pageNumber}
            // width={pdfRef.current?.clientWidth}
            // height={pdfRef.current?.clientHeight}
            renderTextLayer={true}
          />
        </Document>
      </Card>
      <Card className={`shadow-none d-flex align-items-center`}>
        <div className="d-flex align-items-center">
          <IconButton
            // color="secondary"
            disabled={!(pageNumber > 1)}
            onClick={handlePagePrev}
          >
            <ArrowCircleLeftOutlinedIcon />
          </IconButton>

          <Typography>
            {pageNumber} / {numPages}
          </Typography>

          <IconButton
            // color="secondary"
            disabled={pageNumber >= numPages}
            onClick={handlePageNext}
          >
            <ArrowCircleRightOutlinedIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default PDFViewer;
