import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import 'assets/scss/theme.scss';

// ** Import Layouts
import EvaluateIndex from 'layouts/dashboard/EvaluateIndex';
import ManageIndex from 'layouts/dashboard/ManageIndex';
import EvaluateDetailIndex from 'layouts/dashboard/EvaluateDetailIndex';

import IndexPage from 'components/marketing/pages/IndexPage';
import AddNewCourse from 'components/marketing/pages/courses/add-new-course/AddNewCourse';
import CourseFilterPage from 'components/marketing/pages/courses/course-filter-page/CourseFilterPage';
import ComingSoon from 'components/marketing/pages/specialty/ComingSoon';
import Error404 from 'components/marketing/pages/specialty/Error404';
import MaintenanceMode from 'components/marketing/pages/specialty/MaintenanceMode';
import DefaultLayout from 'layouts/marketing/DefaultLayout';
import NotFound from 'layouts/marketing/NotFound';
import SignIn from 'components/dashboard/authentication/SignIn';
import SignUp from 'components/dashboard/authentication/SignUp';
import SignUpSuccess from 'components/dashboard/authentication/SignUpSuccess';

import CompanyAbout from 'components/marketing/pages/jobs/company/About';
import CompanyReviews from 'components/marketing/pages/jobs/company/Reviews';
import Announcements from 'components/marketing/pages/jobs/company/Announcements';
import QNA from 'components/marketing/pages/jobs/company/Announcements';
import Submit from 'components/marketing/pages/jobs/company/Submit';

// 4.0 평가 리스트
import EvaluateList from 'components/dashboard/cms/all-posts/EvaluateList';
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
        {/* <Route path="/" element={<CourseIndex />} /> */}
        <Route path="/" element={<IndexPage />}></Route>

        {/* 1.0 전체 공모전 */}
        <Route path="/explore" element={<CourseFilterPage />} />

        {/* 2.0 공모전 상세 */}
        {/* 소개글 */}
        <Route path="/detail/:competiton_id/" element={<CompanyAbout />} />
        <Route
          path="/detail/:competiton_id/readme/"
          element={<CompanyAbout />}
        />
        {/* 공지사항 */}
        <Route
          path="/detail/:competiton_id/announcements/"
          element={<Announcements />}
        />

        {/* QA 게시판 */}
        <Route path="/detail/:competiton_id/qna/" element={<QNA />} />
        {/* 제출 */}
        <Route path="/detail/:competiton_id/submits/" element={<Submit />} />

        {/* ---------------------------------------- */}
        <Route
          path="/detail/:competiton_id/schedules/:schedule_id/"
          element={<CompanyReviews />}
        />
        <Route
          path="/detail/:competiton_id/schedules/:schedule_id/readme/"
          element={<CompanyAbout />}
        />
        <Route
          path="/detail/:competiton_id/schedules/:schedule_id/announcements/"
          element={<CompanyPhotos />}
        />
        <Route
          path="/detail/:competiton_id/schedules/:schedule_id/qna/"
          element={<CompanyPhotos />}
        />
        <Route
          path="/detail/:competiton_id/schedules/:schedule_id/submits/"
          element={<CompanyPhotos />}
        />
        {/* ---------------------------------------- */}
        {/* 3.0 공모전 개설 */}
        <Route path="/add-new-competition/" element={<AddNewCourse />} />
      </Route>

      {/* ---------------------------------------- */}
      {/* 4.0 평가 리스트 */}
      <Route element={<EvaluateIndex />}>
        <Route path="/evaluate/:competiton_id" element={<EvaluateList />} />
        <Route
          path="/evaluate/:competiton_id/list/"
          element={<EvaluateList />}
        />
        <Route
          path="/evaluate/:competiton_id/result/"
          element={<EvaluateList />}
        />
      </Route>
      {/* 4.1 평가 세부 */}
      <Route element={<EvaluateDetailIndex />}>
        <Route
          path="/evaluate/:competiton_id/files/:file_id"
          element={<EvaluatesFile />}
        />
      </Route>

      {/* ---------------------------------------- */}
      {/* 5.0 관리 */}
      <Route element={<ManageIndex />}>
        <Route path="/manage/:competiton_id/" element={<ManageReadme />} />
        <Route
          path="/manage/:competiton_id/readme/"
          element={<ManageReadme />}
        />
        <Route
          path="/manage/:competiton_id/members/"
          element={<ManageMembers />}
        />
        <Route
          path="/manage/:competiton_id/submits/"
          element={<ManageSubmits />}
        />
        <Route
          path="/manage/:competiton_id/announcements/"
          element={<ManageAnnouncements />}
        />
        <Route
          path="/manage/:competiton_id/evaluate/"
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
