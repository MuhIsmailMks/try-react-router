import React from "react";
import { motion } from "framer-motion";
import GetButton from "../components/GetButton";

const Contact = () => {
  return (
    <section className="flex_center h-auto relative py-[100px] lg:py-[20px]">

      <div className="container flex_center flex-col gap-10 text-white w-[95%]  relative z-10">
        <motion.h3 initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: .5, duration: 0.7 }}
viewport={{ once: true, amount: 1 }}  className="text_title">Contact Us</motion.h3>

        <motion.p initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: .8, duration: 0.7 }}
viewport={{ once: true, amount: 1 }}  className="text_medium font-light text-center w-full lg:w-[620px]">
          We are always open to discuss new value-adding partnerships. Do reach
          out if you are an exchange or a project looking for liquidity; an
          algorithmic trader or a software developer looking to improve the
          markets with us or just have a great idea you can't wait to share with
          us!
        </motion.p> 

        <GetButton/>

      </div>

      <div className="bg absolute w-full h-full top-0 left-0">
        <div className="background  max-w-[2000px] absolute bottom-0  h-full w-full left-[50%] translate-x-[-50%] z-0 ">
          <img
            src="/images/bgContactLeft.png"
            alt=""
            className="absolute w-[110%] md:w-[60%] lg:w-[38%] max-w-[1000px]  left-[3%] bottom-[20vw] md:bottom-[-20%]  "
          />
          <img
            src="/images/bgContactRight.png"
            alt=""
            className="absolute w-[110%] md:w-[60%] lg:w-[68%] max-w-[1000px] right-[3%] lg:right-[-10%] bottom-[20vw] md:bottom-[-80%]  "
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
