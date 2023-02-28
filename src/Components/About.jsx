import React from "react";
import aboutImg from "../assets/img/about-sushi.png";
import HomeTextImg from "../assets/img/about-sushi-title.png";
import homeTopBranch from "../assets/img/leaf-branch-1.png";

const About = () => {
  return (
    <div
      className=" w-full flex flex-col items-center justify-center relative h-screen scroll-smooth md:pt-20"
      id="about"
    >
      <img
        src={homeTopBranch}
        alt=""
        className="w-20 absolute right-0 bottom-5  md:w-40 opacity-30 translate-x-2 -rotate-12"
      />
      <div className="flex flex-col items-center pb-8 md:flex-row gap-8 md:gap-24">
        <img
          data-aos="fade-right"
          src={aboutImg}
          alt=""
          className="w-72 md:w-96"
        />
        <div
          data-aos="fade-left"
          className="flex flex-col w-96 text-center md:text-justify md:items-start items-center"
        >
          <span className="text-amber-800 text-xl dark:text-amber-600">
            About us
          </span>
          <p className="text-stone-800 text-4xl dark:text-neutral-100">
            We Provide
          </p>
          <span className="flex gap-4 text-stone-800 md:pl-0 pl-10">
            <p className="text-stone-800 text-4xl dark:text-neutral-100">
              Healthy Food
            </p>
            <img src={HomeTextImg} alt="" className="h-8 mt-1" />
          </span>
          <p className="dark:text-neutral-300">
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
