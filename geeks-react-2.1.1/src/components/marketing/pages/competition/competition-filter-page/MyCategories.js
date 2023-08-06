// import node module libraries
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// import custom components
import SectionHeadingLeft from 'components/marketing/common/section-headings/SectionHeadingLeft';

// import sub components
import CoursesTabSliderByType from 'components/marketing/pages/competition/competition-filter-page/CoursesTabSliderByType';

// impoort Auth module
import { useAuth } from 'components/AuthContext';
import { apiUtils } from 'components/utils/ApiUtils';
import { handleLogError } from 'components/utils/ErrorUtils';

// import utility file
import { isNotEmptyObj } from 'helper/utils';

const MyCategories = (props) => {
  // console.log('MyCategoriesMyCategoriesMyCategories');
  const { Auth, isLoggedIn } = props;
  const [competitionList, setCompetitionList] = useState({});

  useEffect(() => {
    // const Auth = useAuth();
    const user = Auth.getUser();
    apiUtils
      .GetCompetitionInfoByUserId(user)
      .then((response) => {
        const getCompetitionList = response.data;
        setCompetitionList(getCompetitionList);
      })
      .catch((error) => {
        // alert(error.response.data);
        const getCompetitionList = [
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
              { type: '개발' },
              { type: '교육' },
              { type: '엔터테인먼트' },
            ],
          },
          {
            competition_info_id: '22222',
            competition_name: '22222',
            competition_image: 'competition_image',
            competition_readme: 'competition_readme',
            competition_description: 'competition_description',
            competition_state: 'competition_state',
            competition_start_date: 'start_date',
            competition_end_date: 'end_date',
            user_id: '',
            team_id: '',
            role_type: '',
            competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
          },
          {
            competition_info_id: '33333',
            competition_name: '33333',
            competition_image: 'competition_image',
            competition_readme: 'competition_readme',
            competition_description: 'competition_description',
            competition_state: 'competition_state',
            competition_start_date: 'start_date',
            competition_end_date: 'end_date',
            user_id: '',
            team_id: '',
            role_type: '',
            competition_type_list: [{ type: '개발' }, { type: '교육' }],
          },
          {
            competition_info_id: '44444',
            competition_name: '44444',
            competition_image: 'competition_image',
            competition_readme: 'competition_readme',
            competition_description: 'competition_description',
            competition_state: 'competition_state',
            competition_start_date: 'start_date',
            competition_end_date: 'end_date',
            user_id: 'sbe07032',
            team_id: 'team_id',
            role_type: 'role_type',
            competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
          },
          {
            competition_info_id: '55555',
            competition_name: '55555',
            competition_image: 'competition_image',
            competition_readme: 'competition_readme',
            competition_description: 'competition_description',
            competition_state: 'competition_state',
            competition_start_date: 'start_date',
            competition_end_date: 'end_date',
            user_id: 'sbe07032',
            team_id: 'team_id',
            role_type: 'role_type',
            competition_type_list: [{ type: '교육' }, { type: '엔터테인먼트' }],
          },
          {
            competition_info_id: '66666',
            competition_name: '66666',
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
              { type: '개발' },
              { type: '교육' },
              { type: '금융' },
            ],
          },
        ]; // 실제로는 API 등을 통해 얻어온 데이터를 사용합니다.
        setCompetitionList(getCompetitionList);
        handleLogError(error);
      });
  }, [isLoggedIn]);
  const title = '나의 공모전';
  // const subtitle = 'Browse Categories';
  // const description = `Choose from 32,000 online video courses with new additions published every month.`;

  if (isNotEmptyObj(competitionList)) {
    return (
      <section className="py-1 py-lg-2">
        <Container>
          <SectionHeadingLeft
            title={title}
            // description={description}
            // subtitle={subtitle}
          />
          <CoursesTabSliderByType
            data={competitionList}
            isLoggedIn={isLoggedIn}
          />
        </Container>
      </section>
    );
  }
};
export default MyCategories;
