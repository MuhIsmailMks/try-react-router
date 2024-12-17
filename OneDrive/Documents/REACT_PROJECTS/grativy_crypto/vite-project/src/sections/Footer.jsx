import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-[#747474] h-auto  min-h-[300px] w-full flex_center mt-[100px] py-10 overflow-clip">
      <div className="container w-[90%] max-w-[2000px] flex_center flex-col gap-10 md:gap-20 text-white font-light max-md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="top w-full flex justify-between max-md:flex-col-reverse max-md:gap-6 max-md:items-center "
        >
          <ul className="flex flex-col gap-3">
            <li className="mb-3">
              <h3 className="font-medium">GRATIVY TEAM</h3>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
          </ul>

          <div className="logo max-md:mb-10">
            <img src="/images/logo.png" alt="" className="h-[40px] w-auto" />
          </div>
        </motion.div>

        <div className="bottom w-full flex justify-between max-md:flex-col max-md:gap-2 ">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Terms of Use & Privacy Policy
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            @2022 Grativy Team. All Rights Reversed
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
