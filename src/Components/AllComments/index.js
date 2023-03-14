import axios from "axios";
import React, { useContext, useEffect } from "react";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";
import CommentComp from "./Comment";
// <Comment id={id} name={name} lname={lname} />

const AllComments = ({ id, name, lname }) => {
  const { Comment, setComment } = useContext(Context);
  useEffect(() => {
    axios.get("employees").then((res) => setComment(res.data));
  }, []);
  return (
    <div className="w-5/6 bg-[#082032] mx-auto">
      {!Comment ? (
        <Loading color={"deepskyblue"} />
      ) : (
        Comment.map((c) => {
          return (
            <CommentComp
              key={c.id}
              id={c.id}
              name={c.first_name}
              lname={c.last_name}
            />
          );
        })
      )}
    </div>
  );
};

export default AllComments;
