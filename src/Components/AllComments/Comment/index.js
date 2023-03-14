import React from "react";

const Comment = ({ id, name, lname }) => {
  const getIdHandler = (userId) => {
    console.log(userId);
  };
  return (
    <div onClick={() => getIdHandler(id)}>
      <div className="">
        <div> {name} </div>
        <div> {lname} </div>
      </div>
    </div>
  );
};

export default Comment;
