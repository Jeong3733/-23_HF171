import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../components/AuthContext";
import { apiUtils } from "../components/utils/ApiUtils";
import { handleLogError } from "../components/utils/ErrorUtils";
import { Cookies, useCookies } from "react-cookie";

function Main() {
  const Auth = useContext(AuthContext);

  const [cookies, setCookie] = useCookies(["refreshToken"]);
  const refreshToken = cookies.refreshToken;
  const cookie = new Cookies();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = Auth.userIsAuthenticated();
    setIsLoggedIn(isLoggedIn);

    // Auth.getUser() = 신분증 = 로그인을 하고 springboot에서 받아온 Access 토큰
    apiUtils.getUserInfo(Auth.getUser()).then((response) => {
      user = response.data;
    });
  }, []);

  // const handleGetUserInfo = (e) => {
  //     e.preventDefault();

  //     console.log("access" + Auth.getUser().accessToken)
  //     console.log("refresh" + cookie.get("refreshToken"));

  //     apiUtils.getUserInfo(Auth.getUser())
  //         .then(response => {
  //             console.log(response.data);
  //         })
  //         .catch(error => {
  //             handleLogError(error);
  //         })
  // };

  const handleLogout = () => {
    Auth.userLogout();
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>로그인 O</h1>
          <h1>Refresh Token : ${refreshToken}</h1>
          <button onClick={handleGetUserInfo}>유저 정보 가져오기</button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <h1>로그인 X</h1>
      )}
    </div>
  );
}

export default Main;
