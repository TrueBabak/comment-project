import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";

const CommentComp = ({ detail }) => {
  const { getIdHandler, SelectComment, setSelectComment } = useContext(Context);
  return (
    <div
      onClick={() => getIdHandler(detail.id)}
      className="bg-[#2C3333] px-4 py-2 rounded-lg border border-[#0E8388] flex-wrap"
    >
      <div>Name: {detail.first_name} </div>
      <div>Lastname: {detail.last_name} </div>
      <div>Email: {detail.email} </div>
    </div>
  );
};

export default CommentComp;
