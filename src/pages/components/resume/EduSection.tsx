import React from "react";

interface EdiSectionProps {
  // children: React.ReactNode;
  fromTo: string;
  description: string;
}

const EduSection: React.FC<EdiSectionProps> = ({ fromTo, description }) => {
  return (
    <div className="w-full py-6 flex flex-row gap-6 flex-wrap lg:flex-nowrap lg:justify-start justify-center">
      <div className="text-rsm-tertiary lg:w-1/4">{fromTo}</div>
      <div className="lg:w-3/4">{description}</div>
    </div>
  );
};

export default EduSection;
