import React, {useEffect, useState} from "react";

import { motion } from "framer-motion";

const MarketContent = ({
  title,
  subTitle,
  text,
  imgSrc,
  flexRowReverse = false,
}) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <div
      className={`marketContent flex_center flex-wrap w-full px-4 md:px-10 xl:px-20 h-auto relative max-w-[1100px] max-md:gap-6 ${
        flexRowReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="left w-full md:w-[50%] flex flex-col items-start gap-4 text-white max-lg:text-center max-lg:items-center">
        <motion.h3
          className="text_xlarge leading-[1] motion-element"
          initial={{ opacity: 0,   x: flexRowReverse ? 50 : -50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: .2, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
        >
          {title}
        </motion.h3>

        <motion.p  initial={{ opacity: 0,   x: flexRowReverse ? 50 : -50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: .5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }} className="text_medium font-semibold motion-element">{subTitle}</motion.p>

        <motion.p  initial={{ opacity: 0,   x: flexRowReverse ? 50 : -50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: .8, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }} className="text_medium font-light motion-element">{text}</motion.p>

        <motion.button  initial={{ opacity: 0,   x: flexRowReverse ? 50 : -50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }} className="flex-center relative w-auto gap-2 font-light motion-element">
          <span className="relative">
            Learn more
            <span className="line bg_gradient absolute bottom-0 w-full h-[.7px] left-0"></span>
          </span>
          <span className="relative ml-2">→</span>
        </motion.button>
      </div>

      <div className="rightImage w-full md:w-[50%] flex_center">
        <motion.img  initial={{ opacity: 0,  x: flexRowReverse ? -50 : 50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          src={imgSrc}
          alt={title}
          className="w-[100%] h-auto object-contain motion-element pointer-events-none"
        />
      </div>
    </div>
  );
};

export default MarketContent;
