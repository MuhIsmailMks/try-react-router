import clsx from "clsx";
import React, { useState, useEffect } from "react";

import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => {
  return (
    <LinkScroll className="base-bold text-p4 uppercase transition-colors cursor-pointer duration-500 hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );
};

const Header = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={clsx(
        `fixed left-0 top-[0px] w-full z-50 h-[100px] lg:h-[90px] lg:px-4 flex_center duration-0`,
        !isOpen &&
          isBlurred &&
          "active duration-200"
      )}
    >
      <div className="container relative h-full w-full flex_center flex-wrap">
        <a href="" className="lg:hidden flex-1 cursor-pointer z-2 ml-4 z-30">
          <img src="/images/logo.png" width={115} height={55} alt="logo" />
        </a>

        <button
          className="menu_btn lg:hidden z-30 size-10  rounded-full flex_center mr-4"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/icons/${isOpen ? "close" : "open"}.svg`}
            alt=""
            width={50}
            height={50}
            className="w-full h-auto object-contain opacity-75"
          />
        </button>

        {/* menu */}
        <div
          className={clsx(
            `menuHeaderContainer absolute lg:relative duration-300 flex_center w-full md:w-[50%] lg:w-full max-lg:h-screen h-auto  max-lg:right-0 max-lg:top-0 max-lg:w-full max-lg:opacity-0 `,
            isOpen
              ? "active max-lg:opacity-100 backdrop-blur-md bg-opacity-30 bg-black"
              : "max-lg:pointer-events-none"
          )}
        >
          <div className="w-full h-auto relative max-lg:h-screen  flex_between px-[2%] text-white max-lg:flex-col max-lg:justify-center">
            <div className="logo max-lg:hidden ">
              <img src="/images/logo.png" width={115} height={55} alt="logo" />
            </div>

            <div className="links z-10 max-lg:w-full max-lg:px-4">
              <ul className="flex_center max-sm:gap-6 max-lg:gap-10 lg:gap-6 max-lg:flex-col">
                <li>About Us</li>
                <li className="flex_center flex-col">
                  <div className="flex_center dropMenuBtn max-lg:w-full max-lg:justify-start"  onClick={toggleDropdown}>
                  <p>Our Services</p>
                  <span> <img src="/images/icons/arrowDown.svg" alt="arrow" className={clsx('duration-300', isDropdownActive ? "rotate-[180deg]" : "")} /></span>
                  </div>
                  <div className={clsx("dropMenuContainer relative lg:absolute flex_center w-full lg:w-[150%] lg:h-[200px] rounded-lg  text-white lg:font-semibold gap-5 flex-col text-left lg:text-center overflow-hidden  duration-500", isDropdownActive ? 'active lg:opacity-100 lg:top-[150%]  max-lg:h-[200px] ' : 'lg:opacity-0 lg:top-[-1000px] max-lg:h-0 ')}>
                   <a href="#" className="text_xsmall">Market Analysis</a>
                   <a href="#" className="text_xsmall">Crypto Trading</a>
                   <a href="#" className="text_xsmall">Consulting & Support</a>
                   <a href="#" className="text_xsmall">DeFi Services</a>
                  </div>
                </li>
                <li>Work with Us</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="get flex_center gap-3 max-md:mt-4 max-lg:mt-10 max-lg:w-full max-lg:justify-start max-lg:px-4">
              <span className="w-[30px] h-[30px] rounded-full bg_gradient"></span>
              <p className="uppercase"> Get In Touch</p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
