import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="py-5 bg-green-50 flex justify-center w-5/6 mx-auto">
      <ReactLoading type={"spin"} color={"#654fef"} height={30} width={30} />
    </div>
  );
};

export default Loading;
