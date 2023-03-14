import axios from "axios";
import { createContext, useEffect, useState } from "react";
import EmptyComponent from "../Common/EmptyComponents";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
  CommentId: null,
  setCommentId: () => {},
  SelectComment: null,
  setSelectComment: () => {},
  getIdHandler: () => {},
  RemoveCommentHandler: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  const [CommentId, setCommentId] = useState(null);
  const [SelectComment, setSelectComment] = useState(null);
  const getIdHandler = (userId) => {
    setSelectComment(userId);
    setCommentId(userId);
  };
  const RemoveCommentHandler = () => {
    console.log("removed");
    console.log(CommentId);
    axios.delete(`employees/${CommentId}`);
  };
  return (
    <Context.Provider
      value={{
        Comment,
        setComment,
        CommentId,
        setCommentId,
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
