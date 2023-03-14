import React from "react";
import AllComments from "../AllComments";
import SelectCommentComp from "../SelectComment";
const Web = () => {
  return (
    <div className="w-full h-screen bg-[#CBE4DE] pt-4">
      <AllComments />
      <SelectCommentComp />
    </div>
  );
};

export default Web;
