import { createContext, useState } from "react";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
  getIdHandler: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  const getIdHandler = (userId) => {
    console.log(userId);
  };
  return (
    <Context.Provider value={{ Comment, setComment, getIdHandler }}>
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
