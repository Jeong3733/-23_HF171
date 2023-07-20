import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import "assets/scss/theme.scss";

import IndexPage from "components/marketing/pages/IndexPage";
import AddNewCourse from "components/marketing/pages/courses/add-new-course/AddNewCourse";
import CourseFilterPage from "components/marketing/pages/courses/course-filter-page/CourseFilterPage";
import ComingSoon from "components/marketing/pages/specialty/ComingSoon";
import Error404 from "components/marketing/pages/specialty/Error404";
import MaintenanceMode from "components/marketing/pages/specialty/MaintenanceMode";
import DefaultLayout from "layouts/marketing/DefaultLayout";
import NotFound from "layouts/marketing/NotFound";
import SignIn from "components/dashboard/authentication/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/authentication/sign-in/" element={<SignIn />} />

      {/* Routes with DefaultLayout */}
      <Route element={<DefaultLayout />}>
        {/* <Route path="/" element={<CourseIndex />} /> */}
        <Route path="/" element={<IndexPage />}></Route>
        <Route
          path="/add-new-competition/"
          element={<AddNewCourse />}
        />

        {/* 1.0 전체 공모전 */}
        <Route
          path="/explore"
          element={<CourseFilterPage />}
        />

        {/* 2.0 공모전 상세 */}
        <Route
          path="/detail/:competiton_id"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/readme"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id/readme"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id/announcements"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id/qna"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id/submit"
          element={<ComingSoon />}
        />
        <Route
          path="/evaluate/:schedule_id"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/:schedule_id"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/qna"
          element={<ComingSoon />}
        />
        <Route
          path="/detail/:competiton_id/announcements"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id"
          element={<ComingSoon />}
        />

        {/* 3.0 공모전 개설 */}
        <Route
          path="/add-new-competition"
          element={<ComingSoon />}
        />
      </Route>

      {/* Routes with AnotherLayout */}
      <Route element={<ComingSoon />}>
        {/* 4.0 평가 */}
        <Route
          path="/evaluate/:schedule_id"
          element={<ComingSoon />}
        />
        <Route
          path="/evaluate/:schedule_id/files/:file_id"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/readme"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/:schedule_id"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/:schedule_id/readme"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/:schedule_id/permissions"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/members"
          element={<ComingSoon />}
        />
        <Route
          path="/manage/:competiton_id/announcements"
          element={<ComingSoon />}
        />
      </Route>

      {/* Routes with NotFound */}
      <Route element={<NotFound />}>
        <Route
          path="/coming-soon/"
          element={<ComingSoon />}
        />
        <Route path="/404/" element={<Error404 />} />
        <Route
          path="/maintenance-mode/"
          element={<MaintenanceMode />}
        />
      </Route>
      
      {/*Redirect*/}
      <Route
        path="*"
        element={<Navigate to="/404/" replace />}
      />
    </Routes>
  );
};

export default AllRoutes;
