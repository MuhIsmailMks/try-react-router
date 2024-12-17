import React from "react";
import { AboutColumn, LineColumn } from "../components/AboutColumn";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex_center h-auto">
      <div className="container flex_center flex-col gap-10 text-white w-[95%]  ">
        <motion.h3
          className="text_title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
        >
          About Gravity Team
        </motion.h3>

        <motion.p
          className="text_medium text-center w-full lg:w-[70%]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
        >
          At Gravity Team, we are on the mission to balance the supply and
          demand across crypto markets worldwide. We are a crypto native market
          maker founded by traders, developers, and innovators who are strong
          believers and supporters of the future of decentralization and digital
          assets.
        </motion.p>

        {/* colums about Tema */}
        <div className="relative columns w-full h-auto flex_center max-lg:flex-col mt-20">
          <div className="relative columnLeft w-full lg:w-[49%] flex_center flex-col">
            <div className="topColumn relative w-full h-[140px] lg:h-[160px] flex_center">
              <AboutColumn
                title={"~$100 billion"}
                text={"cumulative trading volume to date"}
              />

              <LineColumn />

              <AboutColumn
                title={"0.8%"}
                text={"of the global crypto spot trading volume"}
                gradientBg={true}
              />
            </div>

            <div className="line w-full bg_gradient h-[1px] relative"></div>

            <div className="bottomColumn relative w-full h-[140px] lg:h-[160px] flex_center">
              <AboutColumn title={"2017"} text={"start, crypto-native"} />

              <LineColumn />

              <AboutColumn title={"1,200+"} text={"crypto-asset pairs"} />
            </div>
          </div>

          <div className="h-[1px] lg:h-[320px] bg-[#665DCD] relative w-full lg:w-[1px]"></div>

          <div className="relative columnLeft w-full lg:w-[49%] flex_center flex-col">
            <div className="topColumn relative w-full h-[140px] lg:h-[160px] flex_center">
              <AboutColumn
                title={"~30 "}
                text={"Gravity Teammates (& growing)"}
              />

              <LineColumn />

              <AboutColumn
                title={"25+"}
                text={"leading global and local crypto exchanges"}
              />
            </div>

            <div className="line w-full bg_gradient h-[1px] relative"></div>

            <div className="bottomColumn relative w-full h-[140px] lg:h-[160px] flex_center">
              <AboutColumn title={"24/7"} text={"liquidity"} />

              <LineColumn />

              <AboutColumn title={"5 billion+"} text={"trades done to date"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
