import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from "motion/react";

const ParallaxPractice = ({ style, imgPath, classname}) => {
  return (
    <motion.div
    style={style} 
    className={twMerge("absolute w-80 aspect-video overflow-clip", classname)}>
        <img src={imgPath} className='w-full h-full object-cover' />
    </motion.div>
  )
}

export default ParallaxPractice