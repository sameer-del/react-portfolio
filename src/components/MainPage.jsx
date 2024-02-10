import React from "react";
import { TypeAnimation } from "react-type-animation";
import photo from "../assets/remove-home-page.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="min-h-[85vh] flex items-center lg:min-h-[78vh] lg:px-[8rem] mt-[30px]"
      id="home"
    >
      <div className="container mx-auto text-white">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:text-left">
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants}
            transition={{ duration: 1 }}
            className="text "
          >
            <div className="flex-1 text-center font-secondary lg:text-left">
              <h1 className="text-[50px] font-bold leading-[0.8] lg:text-[90px] font-secondary">
                Sameer <span>Ahamed</span>
              </h1>
              <div className="mt-6 text-[32px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
                <span className=" mr-4">Iam a</span>
                <TypeAnimation
                  sequence={[
                    "developer",
                    2000,
                    "Designer...",
                    2000,
                    "student..",
                    2000,
                  ]}
                  speed={30}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
              <p className=" font-bold text-[19px] mt-6 max-w-[90%]  mx-auto lg:max-w-[60%] capitalize lg:mx-0 lg:text-start">
                I'm sameer,a dedicated college student on a mission to dive deep
                into the world of web development.my skills as a Frontend
                Developer.{" "}
              </p>
              <div className="py-[20px] w-max-lg">
                <button className="btn font-heading  rounded-xl px-6 py-1 text-white font-bold pb-[8px] text-[18px]">
                  {" "}
                  <a href="Resume-sam.png" target="blank" download={true}>
                    resume
                  </a>
                </button>
              </div>

              <div className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/sameer-del" target="blank">
                  <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sameer-ahamed-0b671027a/"
                  target="blank"
                >
                  <i class="bx bxl-linkedin-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/sxmeer_xhxmed_?igshid=YzVkODRmOTdmMw=="
                  target="blank"
                >
                  <i class="bx bxl-instagram-alt"></i>
                </a>
              </div>
            </div>
          </motion.div>
          <div>
            <motion.img
              ref={ref}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? "visible" : "hidden"}
              variants={slideInVariants}
              transition={{ duration: 1, delay: 0.5 }}
              src={photo}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
