import React from "react";

const Comment = ({ id, name, lname }) => {
  const getIdHandler = (userId) => {
    console.log(userId);
  };
  return (
    <div onClick={() => getIdHandler(id)}>
      <div className="bg-red-800 px-4 py-2 flex">
        <div> {name} </div>
        <div> {lname} </div>
      </div>
    </div>
  );
};

export default Comment;
