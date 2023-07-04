import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div>Login</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
      <br />
    </>
  );
}

export default Login;
