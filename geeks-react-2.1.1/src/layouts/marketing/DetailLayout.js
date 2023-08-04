// import node module libraries
import React, { Fragment, useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';
import { Container } from 'react-bootstrap';

// import sub component
import CommonHeaderTabs from 'components/marketing/pages/jobs/company/CommonHeaderTabs';
// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const DetailLayout = ({ isLoggedIn }) => {
  const { competition_id } = useParams();
  const [competitionInfo, setCompetitionInfo] = useState({});

  useEffect(() => {
    const data1 = {
      competitionId: competition_id,
    };
    if (isLoggedIn) {
      const Auth = useAuth();
      const user = Auth.getUser();
      apiUtils
        .GetCompetitionInfoByCompetitionIdByUserId(user, data1)
        .then((response) => {
          const getCompetitionInfo = response.data;
          setCompetitionInfo(getCompetitionInfo);
        })
        .catch((error) => {
          // alert(error.response.data);
          const getCompetitionInfo = [
            {
              competition_id: '11111',
              competition_name: '11111',
              competition_image: 'competition_image',
              competition_readme: 'competition_readme',
              competition_description: 'competition_description',
              competition_state: 'competition_state',
              competition_start_date: 'start_date',
              competition_end_date: 'end_date',
              user_id: 'sbe07032',
              team_id: 'team_id',
              role_type: 'role_type',
              competition_type: [
                { type: '개발' },
                { type: '교육' },
                { type: '엔터테인먼트' },
              ],
            },
          ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
          setCompetitionInfo(getCompetitionInfo[0]);
          handleLogError(error);
        });
    } else {
      apiUtils
        .GetCompetitionInfoByCompetitionId(data1)
        .then((response) => {
          const getCompetitionInfo = response.data;
          setCompetitionInfo(getCompetitionInfo);
        })
        .catch((error) => {
          // alert(error.response.data);
          const getCompetitionInfo = [
            {
              competition_id: '11111',
              competition_name: '11111',
              competition_image: 'competition_image',
              competition_readme: 'competition_readme',
              competition_description: 'competition_description',
              competition_state: 'competition_state',
              competition_start_date: 'start_date',
              competition_end_date: 'end_date',
              competition_type: [
                { type: '개발' },
                { type: '교육' },
                { type: '엔터테인먼트' },
              ],
            },
          ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
          setCompetitionInfo(getCompetitionInfo[0]);
          handleLogError(error);
        });
    }
  }, [competition_id]);
  const data = ComapniesListData[0];
  return (
    <CommonHeaderTabs data={data} info={competitionInfo}>
      <Outlet />
    </CommonHeaderTabs>
  );
};

export default DetailLayout;
