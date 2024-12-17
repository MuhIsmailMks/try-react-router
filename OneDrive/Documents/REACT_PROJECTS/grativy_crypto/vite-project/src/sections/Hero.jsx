import React from "react";
import { motion } from "framer-motion";
import GetButton from "../components/GetButton";


const Hero = () => {
  return (
    <section className="relative w-full h-auto flex_center min-h-[100vh]">
      <div className="container flex_center flex-col gap-6 text-white w-[90%] lg:w-[70%]">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="text_title"
        >
          Balancing{" "}
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="text_title max-lg:mb-[2rem]"
        >
          Crypto Markets
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="text-center w-full lg:w-[60%] text_medium"
        >
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </motion.p>
        <GetButton/>
      </div>
    </section>
  );
};

export default Hero;
