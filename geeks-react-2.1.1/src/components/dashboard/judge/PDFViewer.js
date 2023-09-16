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

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// 하단에 설명 참조
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (props) => {
  const classes = usePageStyles();

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
    <Box className={classes.modalPdf}>
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
          width={pdfRef.current?.clientWidth}
          height={pdfRef.current?.clientHeight}
          renderTextLayer={false}
        />
      </Document>
      <Box className={classes.pageNumber}>
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
      </Box>

      {/* <Box className={classes.closeButton}>
        <IconButton size="large" onClick={handleCloseModal}>
          <HighlightOffIcon />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default PDFViewer;

const usePageStyles = makeStyles((theme) =>
  createStyles({
    modalPdf: {
      // position: 'fixed',
      // zIndex: 0,
      // top: 0,
      // left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      '& .react-pdf__Document': {
        display: 'flex',
        width: '100% !important',
        height: '100% !important',
        justifyContent: 'center',
      },

      '& .react-pdf__Page': {
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        margin: '1em',
      },

      '& .react-pdf__Document Canvas': {
        margin: '0 auto',
        width: '100% !important',
        // height: '100% !important',
        // width: 'auto',
        maxHeight: 'calc(100vh - 5em)',
        maxWidth: 'fit-content',
        objectFit: 'contain',
      },
    },

    pageNumber: {
      display: 'flex',
      gap: '1em',
      width: '100%',
      justifyContent: 'center',
      '& p': {
        fontSize: 18,
        fontWeight: 700,
        alignSelf: 'center',
      },

      '& button': {
        width: 'auto',
        height: 'auto',
        '& svg': {
          width: '30px',
          height: '30px',
        },
      },
    },

    closeButton: {
      position: 'absolute',
      display: 'flex',
      top: 0,
      left: 0,
      width: '100%',
      justifyContent: 'flex-end',

      '& button': {
        width: 'auto',
        height: 'auto',

        '& svg': {
          width: '40px',
          height: '40px',
        },
      },
    },
  }),
);
