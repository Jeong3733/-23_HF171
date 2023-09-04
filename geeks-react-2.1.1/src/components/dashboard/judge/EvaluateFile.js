// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluateFile = () => {
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

export default EvaluateFile;
