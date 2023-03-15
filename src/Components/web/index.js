import React from "react";
import AddComment from "../AddComment";
import AllComments from "../AllComments";
import SelectCommentComp from "../SelectComment";
const Web = () => {
  return (
    <div className="w-full h-screen bg-[#CBE4DE] pt-4">
      <AllComments />
      <SelectCommentComp />
      <AddComment />
    </div>
  );
};

export default Web;
