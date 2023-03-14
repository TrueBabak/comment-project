import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
//BsTrashFill
import { BsTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ShowSelectedComponent = () => {
  const { SelectComment, RemoveCommentHandler, Comment, setComment } =
    useContext(Context);
  return (
    <div className="w-5/6 min-h-[20vh] mt-10 text-lg mx-auto bg-[#2E4F4F] text-white rounded-xl px-4 py-2 shadow-md shadow-[#0E8388] flex flex-col justify-between relative">
      <div>
        <div className="flex">
          <p className="mr-2">Name:</p>
          <p>{SelectComment.first_name}</p>
        </div>
        <div className="flex">
          <p className="mr-2">Lastname:</p>
          <p>{SelectComment.last_name}</p>
        </div>
        <div className="flex">
          <p className="mr-2">Email:</p>
          <p>{SelectComment.email}</p>
        </div>
      </div>
      <div>
        <div className="flex bg-[#2C3333] px-4 py-2 rounded-lg border border-[#0E8388] text-justify mt-5">
          <p className="mr-2">Body:</p>
          <p>{SelectComment.massage}</p>
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <IconContext.Provider
          value={{
            color: "",
            className: "cursor-pointer hover:text-[#0E8388] text-[#CBE4DE]",
          }}
        >
          <div onClick={() => RemoveCommentHandler()}>
            <BsTrashFill />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ShowSelectedComponent;
