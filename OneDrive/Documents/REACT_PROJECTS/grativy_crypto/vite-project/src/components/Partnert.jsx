import React from 'react'
import { motion } from "framer-motion";

const Partnert = ({image, text}) => {
  return (
    <motion.div initial={{ opacity: 0  }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 1 }}  className="parnert box_gradient flex_center ratioBox w-[80%] md:w-[200px] h-auto rounded-lg border-[#00367c77] border-[.1px]">
    
    <div className="contentInn relative w-[40%] h-auto flex_center">

      <motion.img  initial={{ opacity: 0, scale:0 }}
    whileInView={{ opacity: 1, scale:1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    viewport={{ once: true, amount: 1 }}  src={image} alt={text} className='rounded-lg pointer-events-none relative z-10 '/>

      <motion.span  initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.7 }}
    viewport={{ once: true, amount: 1 }}  className='name absolute bottom-[-45%] text-white opacity-70 text_small'>{text}</motion.span>

    </div>

  </motion.div>
  )
}

export default Partnert
