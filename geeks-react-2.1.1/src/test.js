export const getAuthed = async (url) => {
  await renewAccessTokenIfGoingExpire();

  let token = getLocalToken();
  let res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  let j = await res.json();
  return j;
};
//
export const checkAccessTokenWillExpireInDay = (days) => {
  // decode access token
  // check exp
  // if will exp in a day
  let decoded = getDecodedAccessToken();
  return moment(decoded.exp * 1000)
    .subtract(days, "days")
    .isBefore(moment());
};

export const getDecodedAccessToken = () => {
  let accessToken = getLocalToken();
  let decoded = jwt_decode(accessToken);
  return decoded;
};

export const exchangeRefreshTokenWithNewAccessToken = async () => {
  let refreshToken = localStorage.getItem("refreshToken");
  let username = getDecodedAccessToken().username;
  let res = await post("/api/auth/renew", {
    username,
    refreshToken,
  });
  return res.token;
};

export const renewAccessTokenIfGoingExpire = async () => {
  let willExpire = checkAccessTokenWillExpireInDay(1);
  if (willExpire) {
    let token = await exchangeRefreshTokenWithNewAccessToken();
    localStorage.setItem("token", token);
  }
};
