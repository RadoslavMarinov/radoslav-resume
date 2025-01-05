import Objective from "@/components/resume/Objective";
import { StaticImage } from "@/components/StaticImage";
import React from "react";

const ResumePage: React.FC = () => {
  return (
    <div
      id="resume-page"
      style={{}}
      className="justify-center flex flex-col md:flex-row "
    >
      <div className="flex-grow w-full md:max-w-64 md:min-w-52 md:h-[100vh] flex flex-col items-center text-center text-white bg-rsm-left-nav basis-1/5 min-w-32 p-4">
        <StaticImage
          src="rsm-image.jpeg"
          className="max-w-36 border rounded-[50%]"
        ></StaticImage>
        <span>Resume</span>
      </div>
      <div style={{}} className="mx-8 md:mx-14">
        <Objective></Objective>
      </div>
    </div>
  );
};

export default ResumePage;
