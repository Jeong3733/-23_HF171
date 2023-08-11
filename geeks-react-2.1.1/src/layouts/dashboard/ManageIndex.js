// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ManageVertical from './ManageVertical';
import HeaderDefault from './HeaderDefault';

const ManageIndex = (props) => {
  const { children, className, overflowHidden } = props;
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, [isLoggedIn]);

  return (
    <div
      id="db-wrapper"
      className={`${overflowHidden ? 'chat-layout' : ''} ${
        showMenu ? '' : 'toggled'
      }`}
    >
      <div className="navbar-vertical navbar">
        <ManageVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
        />
      </div>
      <section id="page-content">
        <div className="header">
          <HeaderDefault
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
          />
        </div>
        <div className={`container-fluid ${className ? className : 'p-4'}`}>
          {children}
          <Outlet context={{ isLoggedIn, Auth }} />
        </div>
      </section>
    </div>
  );
};
export default ManageIndex;
