import React from "react";
import SectionTitle from "./SectionTitle";
import EduSection from "./EduSection";

const Education: React.FC = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Education"></SectionTitle>
      <div className="w-full flex flex-col items-center">
        <EduSection
          fromTo="2004 September - 2007 June"
          description="Second Qualification Level Specialist - Electronics / Technical School
        “Vasil Dimitrov” - Madan, Bulgaria"
        />

        <EduSection
          fromTo="2007 September - 2013 September"
          description="Master Degree - Electrical Engineering / University of Transport “Todor
 Kableshkov” - Sofia, Bulgaria"
        />
      </div>
    </div>
  );
};

export default Education;
