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
  const getIdHandler = async (userId) => {
    await axios.get(`employees/${userId}`).then((res) => {
      setSelectComment(res.data);
      setCommentId(res.data.id);
    });
  };
  const RemoveCommentHandler = async () => {
    await axios.delete(`employees/${CommentId}`);
    setSelectComment(null);
    const { data } = await axios.get("employees");
    setComment(data);
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
