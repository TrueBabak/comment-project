import axios from "axios";
import React, { useEffect, useState } from "react";
import AllComments from "../AllComments";
import Loading from "../Common/LoadingComponets";
//setComment(res.data.slice(0, 4))
const Web = () => {
  const [Comment, setComment] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComment(res.data.slice(0, 7)));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 w-5/6 m-auto bg-green-100 relative">
      {!Comment ? (
        <Loading color={"#654fef"} />
      ) : (
        Comment.map((c) => {
          return <AllComments key={c.id} />;
        })
      )}
    </div>
  );
};

export default Web;
