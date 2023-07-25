// import node module libraries
import { Fragment, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  ListGroup,
  Accordion,
  Card,
  Image,
  Badge,
  Button,
  Modal,
  useAccordionButton,
  AccordionContext,
} from 'react-bootstrap';

// import simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import media files
import InverseLogo from 'assets/images/brand/logo/logo-inverse.svg';

// import sub components
import AddNewCategoryPopup from 'components/dashboard/courses/CoursesCategory.js';

// import sub components
import FileListPopup from 'components/dashboard/courses/FileListPopup';
import SummaryPopup from 'components/dashboard/courses/SummaryPopup';
import DocumentQAPopup from 'components/dashboard/courses/DocumentQAPopup';
import PlagiarismCheckPopup from 'components/dashboard/courses/PlagiarismCheckPopup';

// import routes file
import { DashboardMenu } from 'routes/dashboard/DashboardRoutes';

const NavbarVertical = (props) => {
  const popupList = {
    FileListPopup: <FileListPopup />,
    SummaryPopup: <SummaryPopup />,
    DocumentQAPopup: <DocumentQAPopup />,
    PlagiarismCheckPopup: <PlagiarismCheckPopup />,
  };

  const [showFile, setShowFile] = useState(false);
  const [showSumamary, setShowSumamary] = useState(false);
  const [showQA, setShowQA] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleCloseFile = () => setShowFile(false);
  const handleCloseSumamary = () => setShowSumamary(false);
  const handleCloseQA = () => setShowQA(false);
  const handleCloseCheck = () => setShowCheck(false);

  const handleShowFile = () => setShowFile(true);
  const handleShowSumamary = () => setShowSumamary(true);
  const handleShowQA = () => setShowQA(true);
  const handleShowCheck = () => setShowCheck(true);

  const location = useLocation();

  return (
    <Fragment>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="nav-scroller">
          <Link className="navbar-brand" to="/dashboard/overview">
            <Image src={InverseLogo} alt="" />
          </Link>
        </div>
        {/* Dashboard Menu */}
        <Accordion
          defaultActiveKey="0"
          as="ul"
          className="navbar-nav flex-column"
        >
          {DashboardMenu.map(function (menu, index) {
            if (menu.popup) {
              return (
                <Card bsPrefix="nav-item" key={index}>
                  {/* menu item without any childern items like Help Center, Documentation and Changelog items*/}
                  <Link
                    // to={menu.link}
                    className={`nav-link ${
                      location.pathname === menu.link ? 'active' : ''
                    }`}
                    key={menu.popup}
                    onClick={handleShow}
                  >
                    {typeof menu.icon === 'string' ? (
                      <i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
                    ) : (
                      menu.icon
                    )}
                    {menu.title}
                    {menu.badge ? (
                      <Badge
                        className="ms-1"
                        bg={menu.badgecolor ? menu.badgecolor : 'primary'}
                      >
                        {menu.badge}
                      </Badge>
                    ) : (
                      ''
                    )}
                  </Link>
                  <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Create New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{popupList[menu.popup]}</Modal.Body>
                    <Modal.Footer className="d-flex justify-content-start border-0 pt-0">
                      {/*  Action Buttons  */}
                      <Button variant="primary" onClick={handleClose}>
                        Add New Category
                      </Button>
                      <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* end of menu item without any childern items */}
                </Card>
              );
            } else {
              return (
                <Card bsPrefix="nav-item" key={index}>
                  {/* menu item without any childern items like Help Center, Documentation and Changelog items*/}
                  <Link
                    to={menu.link}
                    className={`nav-link ${
                      location.pathname === menu.link ? 'active' : ''
                    }`}
                  >
                    {typeof menu.icon === 'string' ? (
                      <i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
                    ) : (
                      menu.icon
                    )}
                    {menu.title}
                    {menu.badge ? (
                      <Badge
                        className="ms-1"
                        bg={menu.badgecolor ? menu.badgecolor : 'primary'}
                      >
                        {menu.badge}
                      </Badge>
                    ) : (
                      ''
                    )}
                  </Link>
                  {/* end of menu item without any childern items */}
                </Card>
              );
            }
          })}
        </Accordion>
        {/* end of Dashboard Menu */}
      </SimpleBar>
    </Fragment>
  );
};

export default NavbarVertical;
