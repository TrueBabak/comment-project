import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";
import CommentComp from "./Comment";

const AllComments = () => {
  const { Comment, setComment } = useContext(Context);
  useEffect(() => {
    axios.get("employees").then((res) => setComment(res.data));
  }, []);
  return (
    <div className="w-5/6 min-h-[8vh] bg-[#2E4F4F] text-white mx-auto relative rounded-xl px-4 py-2 shadow-md shadow-[#0E8388] flex justify-between grid grid-cols-4 gap-4">
      {!Comment ? (
        <Loading color={"2C3333"} />
      ) : (
        Comment.map((c) => {
          return (
            <div className="">
              <CommentComp detail={c}/>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllComments;
