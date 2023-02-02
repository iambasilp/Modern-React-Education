import React from "react";
import hero from "../assets/hero.png";
import { logos } from "../constants";
const Home = () => {
  return (
    <div className="section" id="home">
      <div className="flex md:flex-row flex-col justify-between items-center  md:mt-8 mt-0 ">
        <div className="flex-1 w-full flex flex-col items-start justify-center">
          <div className="font-bold text-xs text-Teal mb-4 ">
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-gray leading-7 max-w-sm text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="bg-Teal font-bold text-white px-6 py-3 rounded-lg mr-4">
              GetStarted
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="flex-1.5 flex justify-center items-center md:my-0 my-10 md:w-[60%]">
          <img src={hero} alt="home__image"  />
        </div>
      </div>
      <div className="mb-5">
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">100+ leading universities ans companies</span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap  gap-8">
        {logos.map((logo,index)=>(
          <div className="flex-1 flex  justify-center items-center" key={index}>
            <img src={logo} alt="brand logo" className="min-w-[100px] max-w-[130px] object-cover"  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
