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
import Chat from 'components/dashboard/chat/Chat';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const DocumentQAPopup = ({ fileInfo }) => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Fragment>
      file_info.data.file_id: {fileInfo.data.file_id}
      <Chat />
    </Fragment>
  );
};

export default DocumentQAPopup;
