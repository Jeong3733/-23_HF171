// import node module libraries
import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import sub components
import ManageVertical from './ManageVertical';
import HeaderDefault from './HeaderDefault';
import { isNotEmptyObj } from 'helper/utils';

const ManageIndex = (props) => {
  const { children, className, overflowHidden } = props;
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const Auth = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { competition_id } = useParams();
  const [competitionInfo, setCompetitionInfo] = useState({});

  useEffect(() => {
    const isLoggedInChk = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedInChk);

    // competitionInfo
    const data1 = {
      competitionId: competition_id,
    };
    apiUtils
      .GetCompetitionInfoByCompetitionId(data1)
      .then((response) => {
        const getCompetitionInfo = response.data;
        setCompetitionInfo(getCompetitionInfo);
        // console.log(competitionInfo);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompetitionInfo = {
          competition_info_id: 1,
          competition_name: 'ICT 택관컴퍼니',
          competition_image: 'a941fab3-812a-4a6a-a008-28c70b01e52f',
          competition_readme: '<p>ICT 택관컴퍼니 입니다~</p>',
          competition_description: 'ICT 택관컴퍼니',
          competition_state: null,
          competition_start_date: '2023-08-02T00:00',
          competition_end_date: '2023-08-25T00:00',
          competition_type_list: [
            {
              competition_info_id: 1,
              type: '개발',
            },
            {
              competition_info_id: 1,
              type: '교육',
            },
            {
              competition_info_id: 1,
              type: '엔터테인먼트',
            },
          ],
          competition_docs_list: [
            {
              competition_info_id: 1,
              docs_path: '447d2d03-8d89-4b68-bcf3-20d9cdc864f8',
              file_title: 'competitionDocs',
            },
          ],
        }; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompetitionInfo(getCompetitionInfo);
        handleLogError(error);
      });
  }, [isLoggedIn, competition_id]);

  console.log(competitionInfo);
  if (isNotEmptyObj(competitionInfo)) {
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
            <Outlet context={{ isLoggedIn, Auth, competitionInfo }} />
          </div>
        </section>
      </div>
    );
  }
};
export default ManageIndex;
