import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "simplebar/dist/simplebar.min.css";
import "tippy.js/animations/scale.css";
import "assets/scss/theme.scss";

import RouteMain from "./components/RouteMain.tsx";

import Main from "./pages/Main.tsx";
import ContestList from "./pages/ContestList.tsx";
import ContestDetail from "./pages/ContestDetail.tsx";
import Info from "./pages/Info.tsx";
import AuthLayout from "layouts/dashboard/AuthLayout";
import DefaultLayout from "layouts/marketing/DefaultLayout";

import Mypage from "./pages/Mypage.tsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>MAIN</h1>
        <RouteMain />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/contestlist" element={<ContestList />} />
            <Route path="/c" element={<ContestDetail />} />
            <Route path="/info" element={<Info />} />
            <Route element={<AuthLayout />}>
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Route>
            <Route path="/mypage" element={<Mypage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
