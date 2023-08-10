// import node module libraries
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  Nav,
  Tab,
  Breadcrumb,
} from 'react-bootstrap';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import FilesTable from 'components/dashboard/cms/all-posts/FilesTable';
import FileListByFile from 'components/dashboard/courses/contents/FileListByFile';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const DocumentQAPopup = ({ data }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      competition_id: {competition_id}
      <br />
      post_id: {post_id}
      <br />
      data.file_info.file_id: {data.file_info.file_id}
    </Fragment>
  );
};

export default DocumentQAPopup;
