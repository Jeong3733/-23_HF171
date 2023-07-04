import React from "react";
import { Link } from "react-router-dom";

function RouteMain() {
  return (
    <>
      <Link to={"/"}>Main</Link>
      <br />
      <Link to={"/contestlist"}>ContestList</Link>
      <br />
      <Link to={"/info"}>Info</Link>
      <br />
      <Link to={"/login"}>Login</Link>
      <br />
      <Link to={"/mypage"}>Mypage</Link>
    </>
  );
}

export default RouteMain;
