import CountUp from "react-countup";
import aboutImg from "../assets/about-img-removebg.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const slideInVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      className="min-h-[85vh]  lg:min-h-[88vh] lg:px-[8rem] mt-[30px] text-white "
      id="about"
      ref={ref}
    >
      <h1 className="text-[40px] text-accent font-bold leading-[0.8] lg:text-[50px] text-center lg:p-8 ">
        About <span className="text-grey">me</span>
      </h1>
      <div className="mx-4 lg:w-full lg:flex lg:justify-between lg:mt-[5rem]  lg:h-[60vh]">
        <div className="max-w-[300px] mx-auto py-4 lg:max-w-[500px] lg:py-0 lg:h-[100%] lg:mx-[0] ">
          <motion.img
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants}
            transition={{ duration: 1 }}
            className="w-[800px] h-full"
            src={aboutImg}
            alt=""
          />
        </div>
        <div className="max-w-[300px] mx-auto lg:mx-[0] lg:max-w-[700px] lg:mt-5">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants2}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="uppercase text-white text-[25px]  py-3 lg:text-[50px] lg:py-1"
          >
            frontend developer
          </motion.h1>

          <motion.h3
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants2}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=" text-white text-[22px] font-heading lg:text-[32px] lg:text-start"
          >
            student
          </motion.h3>
          <motion.p
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? "visible" : "hidden"}
            variants={slideInVariants2}
            transition={{ duration: 0.8, delay: 0.9 }}
            className=" font-primary text-cyan-50 py-2  text-[18px]  lg:max-w-[80%] "
          >
            The web is my canvas, and coding is my paintbrush. I find joy in the
            process of transforming designs into dynamic and user-friendly
            interfaces. My journey in web development is not just a pursuit of
            technical excellence; it's an exploration of the ever-evolving
            landscape where creativity meets code. As a relentless learner, I
            embrace challenges as opportunities to grow. In the fast-paced realm
            of technology
          </motion.p>

          <div className="count grid grid-cols-2 gap-3 py-4  lg:grid lg:grid-cols-3 lg:mt-6 lg:gap-0 ">
            <div className="flex flex-col justify-center items-center  btn    rounded-md  h-[80px] uppercase text-[13px] lg:w-[150px] ">
              <span className="text-[25px] tracking-[2px] ">
                {inView ? <CountUp start={20} end={3} duration={5} /> : null}
              </span>
              year of studying
            </div>
            <div className="flex flex-col justify-center items-center btn   rounded-md h-[80px] uppercase text-[13px] lg:w-[150px]">
              <span className="text-[25px] tracking-[2px]">
                {inView ? <CountUp start={0} end={15} duration={5} /> : null}
              </span>
              number of projects
            </div>
            <div className="flex flex-col justify-center items-center btn   rounded-md col-span-2 h-[80px] uppercase text-[13px] lg:col-span-1 lg:w-[150px]">
              <span className="text-[25px] tracking-[2px]">
                {inView ? <CountUp start={0} end={13} duration={5} /> : null}
              </span>
              number of completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
