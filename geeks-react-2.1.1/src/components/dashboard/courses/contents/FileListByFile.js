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

const FileListByFile = () => {
  const { competition_id, post_id } = useParams();
  // console.log(competition_id);

  return (
    <Row>
      <Col md={12}></Col>
      <Col md={12}></Col>
    </Row>
  );
};

export default FileListByFile;
