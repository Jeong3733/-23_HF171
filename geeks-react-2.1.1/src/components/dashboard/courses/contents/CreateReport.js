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
  Button,
  Spinner,
} from 'react-bootstrap';

// import sub components
// import ResultFileTable from 'components/dashboard/courses/contents/ResultFileTable';
import ResultPageTable from 'components/dashboard/courses/contents/ResultPageTable';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { getPageReport, getPageResultInfo } from 'components/utils/LoadData';

const CreateReport = ({ file_id, page_id, comp_page_id, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const updateItem = (newDict) => {
    const updatedData = data.pageResultInfo.data.map((item) => {
      if (item.page_id === page_id && item.comp_page_id === comp_page_id) {
        return newDict;
      }
      return item;
    });
    data.pageResultInfo.setData(updatedData);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    getPageReport(file_id, page_id, comp_page_id).then(() => {
      getPageResultInfo(page_id, comp_page_id).then((getData) => {
        setIsLoading(false);
        updateItem(getData);
      });
    });
  };
  // console.log(data.pageResultInfo.data);
  return (
    <Button
      className=" d-md-flex align-items-center justify-content-between "
      variant="primary"
      onClick={handleSubmit}
    >
      리포트 생성
      {isLoading ? <Spinner animation="border" role="status" /> : null}
    </Button>
  );
};

export default CreateReport;
