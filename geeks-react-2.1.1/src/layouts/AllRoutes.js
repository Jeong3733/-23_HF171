import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import 'assets/scss/theme.scss';

// ** Import Layouts
import EvaluateIndex from 'layouts/dashboard/EvaluateIndex';
import ManageIndex from 'layouts/dashboard/ManageIndex';
import EvaluateDetailIndex from 'layouts/dashboard/EvaluateDetailIndex';

import IndexPage from 'components/marketing/pages/IndexPage';
import AddNewCourse from 'components/marketing/pages/courses/add-new-course/AddNewCourse';
import CourseFilterPage from 'components/marketing/pages/competition/competition-filter-page/CourseFilterPage';
import ComingSoon from 'components/marketing/pages/specialty/ComingSoon';
import Error404 from 'components/marketing/pages/specialty/Error404';
import MaintenanceMode from 'components/marketing/pages/specialty/MaintenanceMode';
import DefaultLayout from 'layouts/marketing/DefaultLayout';
import DetailLayout from 'layouts/marketing/DetailLayout';
import NotFound from 'layouts/marketing/NotFound';
import SignIn from 'components/dashboard/authentication/SignIn';
import SignUp from 'components/dashboard/authentication/SignUp';
import SignUpSuccess from 'components/dashboard/authentication/SignUpSuccess';

import About from 'components/marketing/pages/jobs/company/About';
import Announcements from 'components/marketing/pages/jobs/company/Announcements';
// import QNA from 'components/marketing/pages/jobs/company/Announcements';
import QNA from 'components/marketing/pages/jobs/company/QNA';
// import Submits from 'components/marketing/pages/jobs/company/Announcements';
import Submits from 'components/marketing/pages/jobs/company/Submits';

// 4.0 평가 리스트
import EvaluateList from 'components/dashboard/cms/all-posts/EvaluateList';

import EvaluateSubmitList from 'components/dashboard/cms/all-posts/EvaluateSubmitList';
import EvaluateFileList from 'components/dashboard/cms/all-posts/EvaluateFileList';
import EvaluateMemberList from 'components/dashboard/cms/all-posts/EvaluateMemberList';

import EvaluatesFile from 'components/dashboard/cms/all-posts/EvaluatesFile';

// 5.0 관리 리스트
import ManageReadme from 'components/dashboard/cms/all-posts/ManageReadme';
import ManageMembers from 'components/dashboard/cms/all-posts/ManageMembers';
import ManageSubmits from 'components/dashboard/cms/all-posts/ManageSubmits';
import ManageAnnouncements from 'components/dashboard/cms/all-posts/ManageAnnouncements';
import ManageEvaluates from 'components/dashboard/cms/all-posts/ManageEvaluates';

import CompanyBenifits from 'components/marketing/pages/jobs/company/Benifits';
import CompanyPhotos from 'components/marketing/pages/jobs/company/Photos';
import UploadResume from 'components/marketing/pages/jobs/upload-resume/UploadResume';
import JobsList from 'components/marketing/pages/jobs/listing/JobsList';

// Study
import ChatLayout from './dashboard/ChatLayout'; // ( added in v2.0.0 )
import Chat from 'components/dashboard/chat/Chat';
import LandingCourses from 'components/marketing/landings/landing-courses/LandingCourses';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/authentication/sign-in/" element={<SignIn />} />
      <Route path="/authentication/sign-up/" element={<SignUp />} />
      <Route
        path="/authentication/sign-up-success/"
        element={<SignUpSuccess />}
      />

      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout />}>
        {/* <Route path="/" element={<CourseIndex />} /isLoggedIn> */}
        <Route path="/" element={<IndexPage />} />

        {/* 1.0 전체 공모전 */}
        <Route path="/explore" element={<CourseFilterPage />} />

        <Route element={<DetailLayout />}>
          {/* 2.0 공모전 상세 */}
          {/* 소개글 */}
          <Route path="/detail/:competition_id/" element={<About />} />
          <Route path="/detail/:competition_id/readme/" element={<About />} />
          {/* 공지사항 */}
          <Route
            path="/detail/:competition_id/announcements/"
            element={<Announcements />}
          />
          <Route
            path="/detail/:competition_id/announcements/:post_id/"
            element={<Announcements />}
          />
          {/* QA 게시판 */}
          <Route path="/detail/:competition_id/qna/" element={<QNA />} />
          <Route
            path="/detail/:competition_id/qna/:post_id/"
            element={<QNA />}
          />

          {/* 제출 */}
          <Route
            path="/detail/:competition_id/submits/"
            element={<Submits />}
          />
          <Route
            path="/detail/:competition_id/submits/:post_id/"
            element={<Submits />}
          />
        </Route>
        {/* 3.0 공모전 개설 */}
        <Route path="/add-new-competition/" element={<AddNewCourse />} />
      </Route>

      {/* ---------------------------------------- */}
      {/* 4.0 평가 리스트 */}
      <Route element={<EvaluateIndex />}>
        <Route
          path="/evaluate/:competition_id/"
          element={<EvaluateSubmitList />}
        />
        <Route
          path="/evaluate/:competition_id/submits/"
          element={<EvaluateSubmitList />}
        />
        <Route
          path="/evaluate/:competition_id/:post_id/files/"
          element={<EvaluateFileList />}
        />
        <Route
          path="/evaluate/:competition_id/:post_id/member/"
          element={<EvaluateMemberList />}
        />
      </Route>

      {/* 4.1 평가 세부 */}
      <Route element={<EvaluateDetailIndex />}>
        <Route
          path="/evaluate/:competition_id/:post_id/files/:file_id/"
          element={<EvaluatesFile />}
        />
      </Route>

      {/* ---------------------------------------- */}
      {/* 5.0 관리 */}
      <Route element={<ManageIndex />}>
        <Route path="/manage/:competition_id/" element={<ManageReadme />} />
        <Route
          path="/manage/:competition_id/readme/"
          element={<ManageReadme />}
        />
        <Route
          path="/manage/:competition_id/members/"
          element={<ManageMembers />}
        />
        <Route
          path="/manage/:competition_id/submits/"
          element={<ManageSubmits />}
        />
        <Route
          path="/manage/:competition_id/announcements/"
          element={<ManageAnnouncements />}
        />
        <Route
          path="/manage/:competition_id/evaluate/"
          element={<ManageEvaluates />}
        />
      </Route>

      {/* Routes with ChatLayout */}
      <Route element={<ChatLayout />}>
        <Route path="/chat" element={<Chat />} />
      </Route>
      <Route path="/test/" element={<LandingCourses />} />

      {/* Routes with NotFound */}
      <Route element={<NotFound />}>
        <Route path="/coming-soon/" element={<ComingSoon />} />
        <Route path="/404/" element={<Error404 />} />
        <Route path="/maintenance-mode/" element={<MaintenanceMode />} />
      </Route>

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/404/" replace />} />
    </Routes>
  );
};

export default AllRoutes;
