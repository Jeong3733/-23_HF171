// import node module libraries
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Outlet, useParams, useOutletContext } from 'react-router-dom';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub component
import CommonHeaderTabs from 'components/marketing/pages/jobs/company/CommonHeaderTabs';
// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';
import { isNotEmptyObj } from 'helper/utils';
import {
  getUserInfo,
  loadCompetitionInfo,
  loadCompetitionInfoByUser,
  loadUserList,
} from 'components/utils/LoadData';

const DetailLayout = () => {
  const { competition_id } = useParams();
  const { isLoggedIn, Auth } = useOutletContext();

  const [competitionInfo, setCompetitionInfo] = useState({});
  const [creatorInfo, setCreatorInfo] = useState({});
  const [userList, setUserList] = useState([]);

  function loadData() {
    loadUserList(competition_id).then((getData) => {
      setUserList(getData);
      getData.map((i) => {
        if (i.role_type === 'CREATOR') {
          getUserInfo(i.user_id).then((getData) => {
            setCreatorInfo(getData);
          });
        }
      });
    });
  }
  useEffect(() => {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      const user = Auth.getUser();
      // console.log(isLoggedIn);
      loadCompetitionInfoByUser(user, competition_id).then((getData) => {
        setCompetitionInfo(getData);
      });
    } else {
      loadCompetitionInfo(competition_id).then((getData) => {
        setCompetitionInfo(getData);
      });
    }
    loadData();
  }, [isLoggedIn]);

  if (isNotEmptyObj(competitionInfo)) {
    return (
      <CommonHeaderTabs
        Auth={Auth}
        isLoggedIn={isLoggedIn}
        competitionInfo={competitionInfo}
        creatorInfo={creatorInfo}
        userList={userList}
      >
        <Outlet context={{ isLoggedIn, Auth, competitionInfo }} />
      </CommonHeaderTabs>
    );
  }
};

export default DetailLayout;
