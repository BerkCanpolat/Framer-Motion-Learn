import React from 'react'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge';


const scale = {
    small: .50,
    medium: .75,
    large: 1,
    extraLarge: 1.1
};

const ScrollParallaxImgA2 = ({ imgPath, caption, className, size = "large", y }) => {
  return (
    <motion.div
    style={{ y, scale: scale[size] }}
    className={twMerge("z-40 grid gap-2 text-lg text-white absolute", className)}
    >
        <div className='size-44 rounded-xl overflow-hidden drop-shadow-amber-300'>
            <img src={imgPath} className='w-full h-full object-cover' />
        </div>

        <div>
            <p>{caption}</p>
        </div>
    </motion.div>
  )
}

export default ScrollParallaxImgA2