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
      <Link to={"/signIn"}>Login</Link>
      <br />
      <Link to={"/signUp"}>SignUp</Link>
      <br />
      <Link to={"/mypage"}>Mypage</Link>
    </>
  );
}

export default RouteMain;
