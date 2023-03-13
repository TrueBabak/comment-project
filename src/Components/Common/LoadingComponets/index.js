import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ color }) => {
  return (
    <div className="py-5 flex justify-center top-1/2 left-1/2 absolute">
      <ReactLoading type={"spin"} color={`${color}`} height={30} width={30} />
    </div>
  );
};

export default Loading;
