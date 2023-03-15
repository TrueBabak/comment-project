import axios from "axios";
import { createContext, useState } from "react";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
  CommentId: null,
  setCommentId: () => {},
  SelectComment: null,
  UserObject: () => {},
  setUserObject: null,
  setSelectComment: () => {},
  getIdHandler: () => {},
  RemoveCommentHandler: () => {},
  NameChangeHandler: () => {},
  LastNameChangeHandler: () => {},
  EmailChangeHandler: () => {},
  MassageChangeHandler: () => {},
  createPost: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  const [CommentId, setCommentId] = useState(null);
  const [SelectComment, setSelectComment] = useState(null);
  const [UserObject, setUserObject] = useState({});
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
  const createPost = () => {
    axios.post("employees", {
      ...UserObject,
    });
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
        NameChangeHandler,
        LastNameChangeHandler,
        EmailChangeHandler,
        MassageChangeHandler,
        createPost,
        UserObject,
        setUserObject,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
