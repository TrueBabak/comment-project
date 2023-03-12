import axios from "axios";
import React, { useEffect, useState } from "react";

const Web = () => {
  const [Comment, setComment] = useState(null);
  useEffect(() => {
    const { data } = axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComment(res));
  }, []);
  if (Comment) {
    console.log(Comment);
  }
  return <div>{!Comment ? <p>loading</p> : <p>loaded</p>}</div>;
};

export default Web;
