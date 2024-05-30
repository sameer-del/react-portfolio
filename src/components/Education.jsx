import React from "react";
import css from "../assets/skill/css.png";
import html from "../assets/skill/html.png";
import figma from "../assets/skill/figma.png";
import python from "../assets/skill/python.png";
import tailwind from "../assets/skill/tailwind.png";
import javascript from "../assets/skill/javascript.png";

const Education = () => {
  return (
    <section
      className="min-h-[95vh]  lg:min-h-[90vh] lg:px-[8rem] mt-[30px] "
      id="education"
    >
      <h1 className="text-[40px] text-accent font-bold leading-[0.8] pt-[2rem] lg:text-[50px] text-center lg:p-8 ">
        skills
      </h1>
      <div className="container image  h-[90vh} flex flex-wrap gap-[30px] mt-[3rem] ml-[1rem]   mx-auto lg:grid-cols-3 lg:gap-[40px]  lg:mt-4  ">
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px]  text-white border flex flex-col items-center lg:rounded-[15px] btn">
          <h1 className="text-[20px] p-2 ">html</h1>
          <img className="w-[100px] p-2" src={html} alt="" />
        </div>
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px]  text-white border flex flex-col items-center lg:rounded-[15px]  btn">
          <h1 className="text-[20px] p-2 ">css</h1>
          <img className="w-[100px]  " src={css} alt="" />
        </div>
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px]  text-white border flex flex-col items-center lg:rounded-[15px] btn ">
          <h1 className="text-[20px] p-2 ">figma</h1>
          <img className="w-[100px] p-2" src={figma} alt="" />
        </div>
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px] text-white border flex flex-col items-center lg:rounded-[15px] btn ">
          <h1 className="text-[20px] p-2 ">javascript</h1>
          <img className="w-[100px] p-2" src={javascript} alt="" />
        </div>
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px]  text-white border flex flex-col items-center lg:rounded-[15px] btn ">
          <h1 className="text-[20px] p-2 ">python</h1>
          <img className="w-[100px] p-2" src={python} alt="" />
        </div>
        <div className=" w-[150px] rounded-[45px] lg:w-[350px] lg:h-[180px]  text-white border flex flex-col items-center lg:rounded-[15px]  btn">
          <h1 className="text-[20px] p-2 ">tailwind css</h1>
          <img className="w-[100px] p-2" src={tailwind} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Education;
