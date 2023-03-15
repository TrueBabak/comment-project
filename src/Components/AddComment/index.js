import React, { useContext, useRef } from "react";
import { Context } from "../Context";

const AddComment = () => {
  const {
    NameChangeHandler,
    LastNameChangeHandler,
    EmailChangeHandler,
    MassageChangeHandler,
    createPost,
    UserObject,
  } = useContext(Context);
  return (
    <div className="w-5/6 min-h-[15vh] bg-[#2E4F4F] text-white mx-auto relative rounded-xl px-4 shadow-md shadow-[#0E8388] mt-10 py-8 mb-10">
      <div className="flex justify-between w-4/6 mx-auto">
        <div className="mb-3 py-2 border-b border-b-[#0e8388]">
          FirstName:{" "}
          <input
            className="mx-4 rounded-xl px-2 py-2 text-black placeholder:text-[#2e4f4f]"
            type="text"
            placeholder="Enter Your Name.."
            onChange={(e) => NameChangeHandler(e)}
            maxLength="10"
            value={UserObject.first_name}
          />
        </div>
        <div className="mb-3 py-2 border-b border-b-[#0e8388]">
          LastName:{" "}
          <input
            className="mx-4 rounded-xl px-2 py-2 text-black placeholder:text-[#2e4f4f]"
            type="text"
            placeholder="Enter Your Last Name.."
            onChange={(e) => LastNameChangeHandler(e)}
            maxLength="10"
            value={UserObject.last_name}
          />
        </div>
      </div>
      <div className="mb-3 flex justify-center items-center">
        <div className="border-b border-b-[#0e8388] py-2 ">
          Email:{" "}
          <input
            className=" mx-4 rounded-xl px-2 py-2 text-black placeholder:text-[#2e4f4f]"
            type="text"
            placeholder="Enter Your Email.."
            onChange={(e) => EmailChangeHandler(e)}
            value={UserObject.email}
          />
        </div>
      </div>
      <div className="mb-3 py-2 border-b border-b-[#0e8388] flex items-center justify-between mx-10">
        <div className="mb-3">Massage: </div>
        <textarea
          className="rounded-xl px-2 py-2 text-black placeholder:text-[#2e4f4f] flex-wrap w-4/6"
          type="text"
          placeholder="Enter Your Email.."
          onChange={(e) => MassageChangeHandler(e)}
          value={UserObject.massage}
        />
      </div>
      <div className="flex justify-center items-center">
        <div
          className="mx-auto border border-[#0E8388] rounded-xl px-4 py-2 cursor-pointer hover:bg-[#0E8388] transition-all duration-300 ease-in-out"
          onClick={createPost}
        >
          Click
        </div>
      </div>
    </div>
  );
};

export default AddComment;
