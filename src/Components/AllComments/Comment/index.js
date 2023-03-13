import React from "react";

const Comment = ({ id }) => {
  const getIdHandler = (userId) => {
    console.log(userId);
  };
  return (
    <div onClick={() => getIdHandler(id)}>
      <div className="bg-red-800 px-4 py-2 flex">Comment components</div>
    </div>
  );
};

export default Comment;
