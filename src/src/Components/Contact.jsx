import React from "react";
import facebookIcon from "../assets/img/facebook-icon.png";
import whatsappIcon from "../assets/img/whatsapp-icon.png";
import instagramIcon from "../assets/img/instagram-icon.png";
import linkedinIcon from "../assets/img/linkedin-icon.png";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center py-11 bg-stone-900 text-white dark:bg-stone-800"
    >
      <h2 className="py-8 text-2xl sm:text-4xl text-stone-50">Contact Us</h2>
      <div className="flex w-full justify-evenly md:mr-32 text-sm sm:text-base">
        <span>
          <p className="underline text-bold"> Address: </p>
          <address className="w-28 md:w-52">
            1st Avenue / Roddington 230 5th street
          </address>
          <p className="underline text-bold">Contact Number: </p>
          <p>+77 777 7777</p>
        </span>
        <span>
          <ul className="text-center flex flex-col gap-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#sellers">Popular</a>
            </li>
            <li>
              <a href="#new">New</a>
            </li>
          </ul>
        </span>
        <span>
          <ul className="flex flex-col gap-2">
            <p>Social Media:</p>
            <li className="flex gap-2">
              <p>LinkedIn:</p>
              <a
                href="https://www.linkedin.com/in/joeltokatli/"
                target={"_blank"}
              >
                <img src={linkedinIcon} alt="linkedin-icon" className="w-7" />
              </a>
            </li>
            <li className="flex gap-2">
              <p>Whatsapp:</p>
              <a href="">
                <img src={whatsappIcon} alt="whatsapp-icon" className="w-7" />
              </a>
            </li>
            <li className="flex gap-2">
              <p>Facebook:</p>
              <a href="">
                <img src={facebookIcon} alt="facebook-icon" className="w-7" />
              </a>
            </li>
            <li className="flex gap-2">
              <p>Instagram:</p>
              <a href="">
                <img
                  src={instagramIcon}
                  alt="instagram-icon"
                  className="w-7"
                  href="https://www.google.com"
                />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Contact;
