import React, { createContext, useState } from "react";

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  return (
    <HoverContext.Provider
      value={{ isHovered, setIsHovered, isOpacity, setIsOpacity }}
    >
      {children}
    </HoverContext.Provider>
  );
};

export default HoverContext;
