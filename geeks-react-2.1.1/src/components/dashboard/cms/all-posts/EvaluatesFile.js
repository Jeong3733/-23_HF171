// import node module libraries
import React, { useState, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// import { Logger } from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// import sub components
import PostsTable from './PostsTable';
import { s3Link } from 'helper/utils';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluatesFile = () => {
  const { judge_id, post_id, file_id } = useParams();

  // const file = "/logo192.png";
  // const type = "png";
  const file = 'opensurvey_trend_finance_2022.pdf';
  const type = 'pdf';
  // const file = "excel.xlsx";
  // const type = "xlsx";
  // const file = "proposal.docx";
  // const type = "docx";
  // const file = "new_user_credentials.csv";
  // const type = "csv";
  // const [view, setView] = useState(false);

  // const handleView = () => {
  //   setView(!view);
  // };

  // const onError = (e) => {
  //   Logger.logError(e, 'error in file-viewer');
  // };

  return (
    <Fragment>
      <h5 className="mb-0">{judge_id}</h5>
      <h5 className="mb-0">{post_id}</h5>
      <h5 className="mb-0">{file_id}</h5>

      {/* <button onClick={handleView}>View</button>
      {view && (
        <FileViewer
          fileType={type}
          filePath={s3Link(file)}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
      )} */}
    </Fragment>
  );
};

export default EvaluatesFile;
