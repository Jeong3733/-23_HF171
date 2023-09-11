// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

const DefaultLayout = (props) => {
  // const [login, setLogin] = useState(true);
  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function doLogOut() {
    Auth.userLogout();
    setIsLoggedIn(false);
    alert('로그아웃 완료');
  }

  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, [isLoggedIn]);

  return (
    <Fragment>
      <NavbarDefault isLoggedIn={isLoggedIn} doLogOut={doLogOut} Auth={Auth} />
      <main>
        {props.children}
        <Outlet context={{ isLoggedIn, Auth }} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
