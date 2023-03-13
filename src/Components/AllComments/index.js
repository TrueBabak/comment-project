import React from "react";
import Comment from "./Comment";

const AllComments = ({ id, name, lname }) => {
  return (
    <div>
      <Comment id={id} name={name} lname={lname} />
    </div>
  );
};

export default AllComments;
