import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
  SelectComment: null,
  setSelectComment: () => {},
  getIdHandler: () => {},
  RemoveCommentHandler: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  const [SelectComment, setSelectComment] = useState(null);
  const getIdHandler = (userId) => {
    setSelectComment(userId);
  };
  const RemoveCommentHandler = () => {
    console.log("removed");
  };
  return (
    <Context.Provider
      value={{
        Comment,
        setComment,
        getIdHandler,
        SelectComment,
        setSelectComment,
        RemoveCommentHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
