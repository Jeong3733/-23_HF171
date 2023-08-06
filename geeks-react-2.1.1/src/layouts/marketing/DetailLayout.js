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
        .GetCompetitionInfoChkByCompetitionId(user, data1)
        .then((response) => {
          const getCompetitionInfo = response.data;
          setCompetitionInfo(getCompetitionInfo);
        })
        .catch((error) => {
          // alert(error.response.data);
          const getCompetitionInfo = [
            {
              competition_info_id: '11111',
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
