import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import EmptyComponent from "../Common/EmptyComponents";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";
import CommentComp from "./Comment";

const AllComments = () => {
  const { Comment, setComment } = useContext(Context);
  useEffect(() => {
    axios.get("employees").then((res) => setComment(res.data));
  }, []);
  return (
    <div className="w-5/6 min-h-[15vh] bg-[#2E4F4F] text-white mx-auto relative rounded-xl px-4 shadow-md shadow-[#0E8388] grid grid-cols-4 gap-4 items-center">
      {!Comment ? (
        <Loading color={"#CBE4DE"} />
      ) : Comment.length === 0 ? (
        <EmptyComponent title="Database is Empty :(" />
      ) : (
        Comment.map((c) => {
          return (
            <div className="">
              <CommentComp detail={c} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllComments;
