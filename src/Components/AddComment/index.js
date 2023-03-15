import axios from "axios";
import React, { useState } from "react";

const AddComment = () => {
  const [UserObject, setUserObject] = useState({});
  const NameChangeHandler = (e) => {
    setUserObject({ ...UserObject, first_name: e.target.value });
  };
  const LastNameChangeHandler = (e) => {
    setUserObject({ ...UserObject, last_name: e.target.value });
  };
  const EmailChangeHandler = (e) => {
    setUserObject({ ...UserObject, email: e.target.value });
  };
  const MassageChangeHandler = (e) => {
    setUserObject({ ...UserObject, massage: e.target.value });
  };
  console.log(UserObject);
  return (
    <div className="w-5/6 min-h-[15vh] bg-[#2E4F4F] text-white mx-auto relative rounded-xl px-4 shadow-md shadow-[#0E8388] mt-10 py-8">
      <div className="flex justify-between w-4/6 mx-auto">
        <div className="mb-3 py-2 border-b border-b-[#0e8388]">
          FirstName:{" "}
          <input
            className="mx-4 rounded-xl px-2 py-2 text-black placeholder:text-[#2e4f4f]"
            type="text"
            placeholder="Enter Your Name.."
            onChange={(e) => NameChangeHandler(e)}
            maxLength="10"
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
        />
      </div>
    </div>
  );
};

export default AddComment;
