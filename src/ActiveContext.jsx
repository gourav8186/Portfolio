import React, { createContext, useState } from "react";

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <ActiveContext.Provider value={{ isTouched, setIsTouched }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContext;
