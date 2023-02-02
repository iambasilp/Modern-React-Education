import React from "react";
import about from "../assets/About.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} className="p-4" alt="about image" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br />
            best <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ut veniam tempore odio tenetur enim, quas animi nulla
            officia sequi aliquid debitis minus fuga praesentium aspernatur
            soluta, impedit provident quisquam.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">Know</button>
        </div>
      </div>
    </div>
  );
};

export default About;
