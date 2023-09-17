// import node module libraries
import { Fragment, useEffect, useState } from 'react';
import { Menu, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  InputGroup,
  Form,
  Badge,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import EvaluationPopup from 'components/dashboard/courses/EvaluationPopup';

const JudgeHeaderDefault = ({
  data,
  setShowPlagiarismCheckPopup,
  AllData,
  navigate,
}) => {
  const fileInfo = AllData.fileInfo.data;
  const itemList = AllData.itemList.data;
  const scoreList = AllData.scoreList.data;
  // fileInfo, itemList, scoreList 하나라도 빈 값이면 return
  if (!fileInfo || !itemList || !scoreList) {
    return <Fragment />;
  }
  console.log('JudgeHeaderDefault');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  console.log('>>>>');
  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center gap-2 ps-2">
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Button>
            <Link
              id="nav-toggle"
              to="#"
              onClick={() => data.SidebarToggleMenu(!data.showMenu)}
            >
              <Menu size="18px" />
            </Link>
            {fileInfo.file_title}
          </div>

          <div className="d-flex align-items-center gap-2">
            <Button onClick={() => setShowPlagiarismCheckPopup(true)}>
              표절 검사
            </Button>
            <Button variant="primary" onClick={toggleShow}>
              평가하기
            </Button>
            <Offcanvas
              show={show}
              placement={'end'}
              onHide={handleClose}
              scroll={true}
              backdrop={false}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <EvaluationPopup data={AllData} />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default JudgeHeaderDefault;
