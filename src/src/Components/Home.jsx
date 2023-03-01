import React from "react";
import HomeImg from "../assets/img/home-sushi-rolls.png";
import HomeTextImg from "../assets/img/home-sushi-title.png";
import homeTopBranch from "../assets/img/leaf-branch-2.png";
import homeBottomBranch from "../assets/img/leaf-branch-4.png";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full flex flex-col items-center justify-center relative pt-28 sm:pt-52 overflow-hidden"
    >
      <img
        src={homeTopBranch}
        alt=""
        className="w-20 absolute rotate-90 md:mt-28 mt-28 md:w-40 opacity-30 top-0 left-0"
      />
      <div className="flex flex-col-reverse items-center pb-8 md:flex-row gap-8 md:gap-24">
        <img
          data-aos="fade-right"
          src={HomeImg}
          alt=""
          className="w-60 md:w-80"
        />
        <div
          className="flex flex-col text-center items-center sm:text-justify  gap-2"
          data-aos="zoom-in"
        >
          <h2 className="flex text-2xl md:text-4xl text-stone-800 dark:text-neutral-100 underline font-mono">
            Enjoy Delicious{" "}
          </h2>
          <span className="flex gap-4 text-stone-800 dark:text-neutral-100">
            <p className="text-xl md:text-3xl sm:pl-6 pl-8 underline font-mono ">
              Sushi Food
            </p>
            <img src={HomeTextImg} alt="" className="h-6 md:mt-2 mt-1" />
          </span>
          <p className="text-stone-700 dark:text-neutral-300 text-sm sm:text-base tracking-wide max-w-[384px]  sm:px-0 px-4 text-justify">
            Food come to us from our relatives, wether they have wings or roots.
            This is how we consider food, it also has a culture it has a history
            that passes from generation to generation.
          </p>
        </div>
      </div>
      <img
        src={homeBottomBranch}
        alt=""
        className="w-20 absolute right-0 bottom-5  md:w-40 opacity-30 md:translate-x-10"
      />
    </div>
  );
};

export default Home;
