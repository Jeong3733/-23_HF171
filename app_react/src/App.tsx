import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteMain from "./components/RouteMain.tsx";

import Main from "./pages/Main.tsx";
import ContestList from "./pages/ContestList.tsx";
import ContestDetail from "./pages/ContestDetail.tsx";
import Info from "./pages/Info.tsx";
import Login from "./pages/Login.tsx";
import Mypage from "./pages/Mypage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>MAIN</h1>
        <RouteMain />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contestlist" element={<ContestList />} />
          <Route path="/c" element={<ContestDetail />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
