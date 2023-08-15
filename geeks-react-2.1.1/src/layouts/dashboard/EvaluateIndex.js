// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import sub components
import EvaluateVertical from './EvaluateVertical';
import HeaderDefault from './HeaderDefault';

// impoort Auth module
import { useAuth } from 'components/AuthContext';

const EvaluateIndex = (props) => {
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
  });

  return (
    <div
      id="db-wrapper"
      className={`${overflowHidden ? 'chat-layout' : ''} ${
        showMenu ? '' : 'toggled'
      }`}
    >
      <div className="navbar-vertical navbar">
        <EvaluateVertical
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

export default EvaluateIndex;
