import React from 'react'
import { motion } from "framer-motion";

const GetButton = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.7 }}
    viewport={{ once: true, amount: 1 }} >
       <button className="bg_gradient w-[191px] h-[58px] flex_center text_large duration-200 hover:scale-95">
          Get in touch
        </button>
    </motion.div>
  )
}

export default GetButton
