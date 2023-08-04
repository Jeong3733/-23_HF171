// import node module libraries
import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Card, Nav, Tab, Breadcrumb } from 'react-bootstrap';

// import sub components
import PostsTable from './PostsTable';

// import data files
import {
  allposts,
  allPublishedPosts,
  allScheduledPosts,
  allDraftPosts,
  allDeletedPosts,
} from 'data/courses/AllPostsData';

const EvaluatesFile = () => {
  const { competition_id, post_id, file_id } = useParams();

  return (
    <Fragment>
      <h5 className="mb-0">{competition_id}</h5>
      <h5 className="mb-0">{post_id}</h5>
      <h5 className="mb-0">{file_id}</h5>
    </Fragment>
  );
};

export default EvaluatesFile;
