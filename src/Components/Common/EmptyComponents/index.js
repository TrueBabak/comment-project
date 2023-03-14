import React from "react";

const EmptyComponent = ({ title }) => {
  return (
    <div className="w-5/6 flex justify-center items-center min-h-[20vh] mt-10 font-mono text-xl mx-auto bg-[#2E4F4F] text-white relative rounded-xl px-4 py-2 shadow-md shadow-[#0E8388]">
      <div>{title}</div>
    </div>
  );
};

export default EmptyComponent;
