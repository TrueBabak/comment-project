import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AllComments from "../AllComments";
import Loading from "../Common/LoadingComponets";
import { Context } from "../Context";
//setComment(res.data.slice(0, 4))
const Web = () => {
  const { Comment, setComment } = useContext(Context);
  useEffect(() => {
    axios.get("employees").then((res) => setComment(res.data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 w-5/6 m-auto bg-green-100 relative py-16">
      {!Comment ? (
        <Loading color={"deepskyblue"} />
      ) : (
        Comment.map((c) => {
          return (
            <AllComments
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

export default Web;
