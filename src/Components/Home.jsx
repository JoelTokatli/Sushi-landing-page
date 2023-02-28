import React from "react";
import HomeImg from "../assets/img/home-sushi-rolls.png";
import HomeTextImg from "../assets/img/home-sushi-title.png";
import homeTopBranch from "../assets/img/leaf-branch-2.png";
import homeBottomBranch from "../assets/img/leaf-branch-4.png";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full flex flex-col items-center justify-center relative min-h-[600px] pt-32 overflow-hidden"
    >
      <img
        src={homeTopBranch}
        alt=""
        className="w-20 absolute rotate-90 md:mt-28 mt-28 md:w-40 opacity-30 top-0 left-0"
      />
      <div className="flex flex-col items-center pb-8 md:flex-row gap-8 md:gap-24">
        <img
          data-aos="fade-right"
          src={HomeImg}
          alt=""
          className="w-72 md:w-[410px]"
        />
        <div
          className="flex flex-col text-center items-center gap-1"
          data-aos="zoom-in"
        >
          <h2 className="flex text-5xl text-stone-800 dark:text-neutral-100">
            Enjoy Delicious{" "}
          </h2>
          <span className="flex gap-4 text-stone-800 dark:text-neutral-100">
            <p className="text-4xl">Sushi Food</p>
            <img src={HomeTextImg} alt="" className="h-8 mt-1" />
          </span>
          <p className="w-80 text-stone-700 opacity-80 dark:text-neutral-300">
            Enjoy a good traditional japanese dinner with our best dishes in the
            restaurant and improve your day!
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
