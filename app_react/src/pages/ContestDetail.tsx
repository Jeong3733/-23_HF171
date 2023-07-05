import React from "react";
import { useSearchParams } from "react-router-dom";

function ContestDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cid = searchParams.get("cid");
  console.log(cid);
  return (
    <>
      <h2>ContestDetail</h2>
      <div>cid : {cid}</div>
      <div>cid : {cid}</div>
      <div>cid : {cid}</div>
    </>
  );
}

export default ContestDetail;
