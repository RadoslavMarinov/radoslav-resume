import { StaticImage } from "@/components/StaticImage";
import React from "react";

const ResumePage: React.FC = () => {
  return (
    <div id="resume-page" style={{}} className=" flex flex-row flex-wrap">
      <div className="h-[100vh] flex flex-col text-center text-white bg-rsm-left-nav basis-1/5 min-w-32 p-4">
        <StaticImage
          src="rsm-image.jpeg"
          className="border rounded-[50%]"
        ></StaticImage>
        <span>Resume</span>
      </div>
      <div style={{}} className="basis-4/5 p-4">
        Welcome to the resume page!
      </div>
    </div>
  );
};

export default ResumePage;
