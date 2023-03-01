import React from "react";
import aboutImg from "../assets/img/about-sushi.png";
import HomeTextImg from "../assets/img/about-sushi-title.png";
import homeTopBranch from "../assets/img/leaf-branch-1.png";

const About = () => {
  return (
    <div
      className=" w-full flex flex-col items-center justify-center relative scroll-smooth pt-20 md:pt-32"
      id="about"
    >
      <img
        src={homeTopBranch}
        alt=""
        className="w-20 absolute right-0 bottom-5  md:w-40 opacity-30 translate-x-2 -rotate-12"
      />
      <div className="flex flex-col-reverse items-center pb-8 md:flex-row-reverse gap-6 md:gap-24">
        <img
          data-aos="fade-right"
          src={aboutImg}
          alt=""
          className="w-60 md:w-80"
        />
        <div
          data-aos="fade-left"
          className="flex flex-col w-96 text-center md:text-justify md:items-start items-center"
        >
          <span className="text-amber-800 text-xl sm:text-2xl dark:text-amber-600 font-indieFlower">
            About us
          </span>
          <p className="text-stone-800 text-2xl md:text-2xl dark:text-neutral-100 underline font-mono">
            We Provide
          </p>
          <span className="flex gap-4 text-stone-800 md:pl-0 pl-10">
            <p className="text-stone-800 text-lg md:text-2xl dark:text-neutral-100 underline font-mono">
              Healthy Food
            </p>
            <img src={HomeTextImg} alt="" className="h-8 mt-1" />
          </span>
          <p className="text-stone-700 dark:text-neutral-300 text-sm sm:text-base tracking-wide max-w-80 sm:px-0 px-4">
            Enjoy our traditional japanese sushi rolls and deserves, while you
            have a nice time, get a great service and watch live events at our
            stand, come and have an amazing dinner.
          </p>
        </div>
      </div>
      <img
        src={homeTopBranch}
        alt=""
        className="w-20 absolute left-0 bottom-5  md:w-40 opacity-30 -scale-x-100"
      />
    </div>
  );
};

export default About;
