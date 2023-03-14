import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ color }) => {
  return (
    <div className="py-5 flex justify-center items-center absolute w-full h-[30vh]">
      <ReactLoading type={"spin"} color={`${color}`} height={30} width={30} />
    </div>
  );
};

export default Loading;
