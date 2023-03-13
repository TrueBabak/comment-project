import { createContext, useState } from "react";

export const ContextApi = {
  Comment: null,
  setComment: () => {},
};
export const Context = createContext(ContextApi);

// Provider
const ContextsProvider = ({ children }) => {
  const [Comment, setComment] = useState(null);
  return (
    <Context.Provider value={{ Comment, setComment }}>
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
