import React from "react";
import popular1 from "../assets/img/popular-onigiri.png";
import popular2 from "../assets/img/popular-sushi-rolls.png";
import popular3 from "../assets/img/popular-spring-rols.png";

const BestSellers = () => {
  return (
    <div
      id="sellers"
      className=" w-full flex flex-col items-center justify-center relative text-black  gap-8 pt-20 md:pt-32"
    >
      <article className="flex flex-col gap-2 text-center">
        <h2 className="text-amber-800 text-xl sm:text-2xl dark:text-amber-600 font-indieFlower">
          The Best Food
        </h2>
        <span className="text-stone-800 text-2xl  sm:text-3xl dark:text-neutral-200 underline font-mono">
          Popular Dishes
        </span>
      </article>
      <div className="flex flex-col justify-content-center items-center gap-12 md:gap-16 md:flex-row pt-6 tracking-widest">
        <div
          className="flex flex-col justify-center items-center bg-orange-200 relative bottom-0 rounded shadow shadow-amber-900 dark:bg-neutral-800 dark:shadow-black"
          data-aos="fade-right"
        >
          <img
            src={popular1}
            alt=""
            className="w-60 relative -top-9  delay-200 hover:translate-y-4"
            data-aos="zoom-in"
          />
          <span className="text-center">
            <p className="text-stone-900  dark:text-neutral-200">Onigiri</p>
            <p className="text-stone-600 dark:text-neutral-400">
              Japanese Dish
            </p>
          </span>
          <p className="pb-3 text-amber-800 dark:text-amber-600 font-bold tracking-wide underline">
            10.99$
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center bg-orange-200 relative bottom-0 rounded shadow shadow-amber-900 delay-200 dark:bg-neutral-800 dark:shadow-black"
          data-aos="fade-right"
        >
          <img
            src={popular2}
            alt=""
            className="w-60 relative -top-9  delay-500"
            data-aos="zoom-in"
          />
          <span className="text-center ">
            <p className="text-stone-900 dark:text-neutral-200">Spring Rolls</p>
            <p className="text-stone-600 dark:text-neutral-400">
              Japanese Dish
            </p>
            <p className="pb-3 text-amber-800 font-bold tracking-wide underline dark:text-amber-600">
              14.99$
            </p>
          </span>
        </div>
        <div
          className="flex flex-col justify-center items-center bg-orange-200 relative bottom-0 rounded shadow shadow-amber-900 dark:bg-neutral-800 dark:shadow-black sm:delay-500"
          data-aos="fade-right"
        >
          <img
            data-aos="zoom-in"
            src={popular3}
            alt=""
            className="w-60 relative -top-9 delay-700"
          />
          <span className="text-center">
            <p className="text-stone-900 dark:text-neutral-200">Dragon Rolls</p>
            <p className="text-stone-600 dark:text-neutral-400">
              Japanese Dish
            </p>
          </span>
          <p className="pb-3 text-amber-800 font-bold tracking-wide underline dark:text-amber-600">
            19.99$
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
