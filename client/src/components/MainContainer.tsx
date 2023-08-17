// MainContainer.tsx
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainContainer;
 