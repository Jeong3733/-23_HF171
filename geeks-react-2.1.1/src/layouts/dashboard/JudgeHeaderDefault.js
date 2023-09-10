// import node module libraries
import { Fragment } from 'react';
import { Menu, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { Nav, Navbar, InputGroup, Form } from 'react-bootstrap';

const JudgeHeaderDefault = (props) => {
  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Link
              id="nav-toggle"
              to="#"
              onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}
            >
              <Menu size="18px" />
            </Link>
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default JudgeHeaderDefault;
