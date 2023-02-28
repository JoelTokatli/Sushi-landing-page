import React from "react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className="md:flex md:item-center md:justify-between md:shadow-none shadow shadow-neutral-300 bg-orange-100 bg-opacity-95  py-3 z-10 fixed w-screen px-8  text-amber-800 dark:text-neutral-200 tracking-wider dark:bg-neutral-800 dark:shadow-black">
        <div className="flex justify-between">
          <span className="flex gap-2">
            <img src={logo} alt="logo-img" className="w-7" />
            <p>SushiGood</p>
          </span>
          <span className="flex gap-2">
            <button
              className={`md:hidden h-min mt-1`}
              onClick={() => {
                handleClick();
              }}
            >
              {isDark ? <BsSunFill /> : <BsMoonStars />}
            </button>

            <p
              className={`md:hidden mt-1`}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <HiOutlineXMark /> : <HiMenu />}
            </p>
          </span>
        </div>
        <ul
          className={`  md:flex gap-4 text-center ${
            show ? "block" : "hidden"
          } `}
        >
          <button
            className={`mt-1 hidden sm:block h-min`}
            onClick={() => {
              handleClick();
            }}
          >
            {isDark ? <BsSunFill /> : <BsMoonStars />}
          </button>
          <li
            onClick={() => {
              show ? setShow(false) : "";
            }}
          >
            <a href="#home">Home</a>
          </li>{" "}
          <li
            onClick={() => {
              show ? setShow(false) : "";
            }}
          >
            <a href="#about">About</a>
          </li>{" "}
          <li
            onClick={() => {
              show ? setShow(false) : "";
            }}
          >
            <a href="#sellers">Popular</a>
          </li>{" "}
          <li
            onClick={() => {
              show ? setShow(false) : "";
            }}
          >
            <a href="#new">New</a>
          </li>{" "}
          <li
            onClick={() => {
              show ? setShow(false) : "";
            }}
          >
            <a href="#contact">Contact</a>
          </li>{" "}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
