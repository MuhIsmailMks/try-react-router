import React from "react";
import { motion } from "framer-motion";

const JoinTeam = () => {
  return (
    <section className="flex_center h-auto relative flex-col overflow-hidden py-[150px] lg:py-[200px]">
      <div className="container flex_center max-md:flex-wrap relative gap-10 text-white w-full lg:w-[95%]  z-10 max-md:px-7">
        <div className="title flex  justify-center w-full md:w-[50%] z-10">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true, amount: 1 }}
            className=" text-center md:text-left text-[40px] lg:text-[58px]  leading-[1.2] "
          >
            Join <br /> <span className="pl-4">Grativy Team</span>
          </motion.h3>
        </div>

        <div className="contentContainer w-full md:w-[48%] flex items-start flex-col max-lg:items-center h-auto relative gap-4 md:gap-6   z-10 max-sm:pr-0 max-lg:pr-4">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true, amount: 1 }}
            className="font-extralight text_medium w-full lg:w-[460px]"
          >
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a
            better place for everyone.
            <br />
            <br />
            As we emphasize it in our name - Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff and have fun whilst doing so!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true, amount: 1 }}
            className="flex-center relative w-auto gap-2 font-light text_medium tracking-[.2px]"
          >
            <span className="relative">
              Learn more about working with us
              <span className="line bg_gradient absolute bottom-0 w-full h-[.7px] left-0"></span>
            </span>
            <span className="relative ml-2">→</span>
          </motion.button>
        </div>

        {/* background */}
        <div className="background  max-w-[2000px] absolute bottom-0  h-full w-full left-[50%] translate-x-[-50%] z-0 ">
          <img
            src="/images/bgJoinTeam.png"
            alt=""
            className="absolute w-[110%] md:w-[70%] lg:w-[40%] max-w-[1000px]  left-[3%] bottom-[20vw] md:bottom-[0%]  "
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
