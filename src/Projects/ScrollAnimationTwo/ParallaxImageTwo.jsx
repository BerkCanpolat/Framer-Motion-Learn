import React from 'react'
import { motion } from "motion/react";
import { twMerge } from 'tailwind-merge'

const scale = {
    small: .50,
    medium: .75,
    large: 1,
    extraLarge: 1.1,
}


const ParallaxImageTwo = ({ imgPath, caption, className, size = "large", y }) => {
  return (

    <motion.div
    drag="x"
    dragConstraints={{left:-20, right:20,}}
    dragElastic={.5}
    style={{y, scale: scale[size]}}
    className={twMerge("z-50 grid gap-2 text-lg text-white absolute", className)}>
        <div className='size-44 rounded-xl overflow-hidden drop-shadow-amber-300'>
            <img src={imgPath} className='h-full w-full object-cover pointer-events-none'/>
        </div>

        <div>
            <p>{caption}</p>
        </div>
    </motion.div>
  )
}

export default ParallaxImageTwo