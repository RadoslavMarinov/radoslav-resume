import React from "react";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <div style={{}} className="mx-8 md:mx-14">
      {children}
    </div>
  );
};
export default MainSection;
