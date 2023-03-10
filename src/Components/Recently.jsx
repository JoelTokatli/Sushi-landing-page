import React from "react";
import spinach from "../assets/img/spinach-leaf.png";
import RecentlyImg from "../assets/img/recently-salmon-sushi.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import branchLeft from "../assets/img/leaf-branch-2.png";
import branchRight from "../assets/img/leaf-branch-3.png";

const Recently = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center relative h-screen scroll-smooth pt-20"
      id="new"
    >
      <img
        src={branchLeft}
        alt=""
        className="w-20 absolute md:mt-28 mt-28 md:w-40 opacity-30 bottom-24 left-0"
      />
      <div className="flex flex-col-reverse items-center pb-8 md:flex-row-reverse gap-8 md:gap-24">
        <img
          data-aos="fade-in"
          src={RecentlyImg}
          alt=""
          className="w-72 md:w-[410px]"
        />
        <div
          data-aos="zoom-in"
          className="flex flex-col w-96 text-center md:text-justify md:items-start items-center gap-2"
        >
          <p className="text-amber-800 text-xl dark:text-amber-600">
            Recently Added
          </p>
          <span>
            <p className="text-stone-800 text-4xl dark:text-neutral-200">
              Sushi Samurai
            </p>
            <span className="flex gap-4 text-stone-800 md:pl-0 pl-10">
              <p className="text-stone-800 text-4xl dark:text-neutral-200 ">
                Salmon Cheese
              </p>
              <img src={spinach} alt="" className="h-8 mt-1" />
            </span>
          </span>
          <p className="dark:text-neutral-400">
            Enjoy our traditional japanese sushi rolls and deserves, while you
            have a nice time, get a great service and watch live events at our
            stand, come and have an amazing dinner.
          </p>
        </div>
      </div>
      <a
        href="#home"
        className="absolute rounded-full bg-amber-800 text-white bottom-0 right-0 mb-6 mr-6 p-1"
      >
        <AiOutlineArrowUp />
      </a>
      <img
        src={branchRight}
        alt=""
        className="w-20 absolute right-0 top-24 -rotate-45  md:w-32 opacity-30"
      />
    </div>
  );
};

export default Recently;
