import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-full fixed bottom-2 z-50 ">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto  flex justify-between text-2xl text-white/50 items-center  px-[20px]">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <i className="bx bx-home-alt"></i>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <i className="bx bx-info-circle"></i>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="education"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <i className="bx bxs-graduation"></i>
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <i className="bx bx-phone-call"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
