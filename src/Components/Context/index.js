import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
  SelectComment: null,
  setSelectComment: () => {},
  getIdHandler: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  const [SelectComment, setSelectComment] = useState(null);
  const getIdHandler = (userId) => {
    setSelectComment(userId);
  };
  return (
    <Context.Provider
      value={{
        Comment,
        setComment,
        getIdHandler,
        SelectComment,
        setSelectComment,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
