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
import { loadCompetitionListByUserId } from 'components/utils/LoadData';

const MyCategories = (props) => {
  // console.log('MyCategoriesMyCategoriesMyCategories');
  const { Auth, isLoggedIn } = props;
  const [competitionList, setCompetitionList] = useState({});

  useEffect(() => {
    // const Auth = useAuth();
    const user = Auth.getUser();
    loadCompetitionListByUserId(user).then((getData) => {
      setCompetitionList(getData);
    });
  }, []);
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
