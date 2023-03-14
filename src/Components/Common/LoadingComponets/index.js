import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ color }) => {
  return (
    <div className="w-full h-[20vh] absolute top-1/2 left-1/2 pb-8">
      <ReactLoading type={"spin"} color={`${color}`} height={30} width={30} />
    </div>
  );
};

export default Loading;
