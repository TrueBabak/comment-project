import React from "react";
import Comment from "./Comment";

const AllComments = ({ id }) => {
  return (
    <div>
      <Comment id={id} />
    </div>
  );
};

export default AllComments;
