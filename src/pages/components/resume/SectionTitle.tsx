import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[2em] p-3 text-heading w-full text-center">{title}</h2>
  );
};

export default SectionTitle;
