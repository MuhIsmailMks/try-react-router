import React from "react";
import { motion } from "framer-motion";

export const AboutColumn = ({ title, text, gradientBg = false }) => {
  return (
    <div
      className={`colContainer flex_center flex-col h-full w-[50%] text-center  ${
        gradientBg ? "bg_gradient" : ""
      }`}
     
    >
      <motion.h4  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.7 }}
      viewport={{ once: true, amount: 1 }} className="text_xlarge">{title}</motion.h4>
      <motion.p className="w-[60%] text_small font-light"  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.7 }}
      viewport={{ once: true, amount: 1 }}>{text}</motion.p>
    </div>
  );
};

export const LineColumn = () => {
  return <div  className="line w-[1px] bg-[#665DCD] h-full relative"></div>;
};
