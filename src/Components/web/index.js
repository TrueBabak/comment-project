import React from "react";
import AddComment from "../AddComment";
import AllComments from "../AllComments";
import SelectCommentComp from "../SelectComment";
const Web = () => {
  return (
    <div className="bg-[#CBE4DE] pt-4 pb-10">
      <AllComments />
      <SelectCommentComp />
      <AddComment />
    </div>
  );
};

export default Web;
