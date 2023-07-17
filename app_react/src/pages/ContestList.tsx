import React from "react";
import { useNavigate } from "react-router-dom";

function ContestList() {
  const navigate = useNavigate();
  return (
    <>
      <div>ContestList</div>
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

export default ContestList;
