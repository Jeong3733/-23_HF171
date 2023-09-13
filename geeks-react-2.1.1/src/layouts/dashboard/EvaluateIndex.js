// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// import sub components
import EvaluateVertical from './EvaluateVertical';
import HeaderDefault from './HeaderDefault';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { loadCompetitionInfo, loadUser } from 'components/utils/LoadData';

const EvaluateIndex = (props) => {
  const { children, className, overflowHidden } = props;
  const { competition_id } = useParams();
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const Auth = useAuth();
  const navigate = useNavigate();
  function doLogOut() {
    Auth.userLogout();
    setIsLoggedIn(false);
    navigate('/');
    alert('로그아웃 완료');
  }

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [competitionInfo, setCompetitionInfo] = useState({});
  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);

    // competitionInfo
    loadCompetitionInfo(competition_id).then((response) => {
      setCompetitionInfo(response);
    });

    if (isLoggedIn) {
      const user = Auth.getUser();
      loadUser(user).then((getData) => {
        setUserInfo(getData);
      });
    }
  }, []);

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
          competitionInfo={competitionInfo}
        />
      </div>
      <section id="page-content">
        <div className="header">
          <HeaderDefault
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
            UserInfo={userInfo}
            isLoggedIn={isLoggedIn}
            doLogOut={doLogOut}
          />
        </div>
        <div className={`container-fluid ${className ? className : 'p-4'}`}>
          {children}
          <Outlet context={{ isLoggedIn, Auth, competitionInfo }} />
        </div>
      </section>
    </div>
  );
};

export default EvaluateIndex;
