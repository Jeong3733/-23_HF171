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

  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);
  }, []);
  return (
    <Fragment>
      <NavbarDefault login={isLoggedIn} setLogin={setIsLoggedIn} />
      <main>
        {props.children}
        <Outlet isLoggedIn={isLoggedIn} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
