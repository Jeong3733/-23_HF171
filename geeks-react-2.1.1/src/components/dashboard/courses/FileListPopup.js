// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const FileListPopup = () => {
  const { competiton_id, post_id } = useParams();
  // console.log(competiton_id);

  return (
    <Fragment>
      <div className="d-md-flex align-items-center">
        <span>competiton_id : {competiton_id}</span>
        <span>post_id : {post_id}</span>
        <span>
          참고
          /Users/ktg/Desktop/23_HF171/geeks-react-2.1.1/src/components/dashboard/cms/all-posts/EvaluateFileList.js
        </span>
      </div>
    </Fragment>
  );
};

export default FileListPopup;
