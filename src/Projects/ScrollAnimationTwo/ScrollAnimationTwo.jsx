import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react";
import img1 from "../../assets/img1.png";
import ParallaxImageTwo from './ParallaxImageTwo';
import { imageData } from './imageData';


const ScrollAnimationTwo = () => {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: targetRef,
      offset: ["start start", "end end"]
    }
  );

  const screen = 3;

  const logoY = useTransform(
    scrollYProgress,
    [0, 0.5/screen, 2.5 / screen, 3 / screen],
    ["70dvh","0dvh", "0dvh", "-70dvh"]
  );

  const imageY = imageData.map(({y}) => useTransform(
    scrollYProgress, 
    [0,1], y
  )
);

const opacityText = useTransform(
  scrollYProgress,
  [0, 0.05],
  [1,0]
);

const textUp = useTransform(
  scrollYProgress,
  [0, 0.05],
  [0,-100]
);



  return (

    <div className='overflow-clip' ref={targetRef}>
      <div className='text-center z-20 h-screen pt-90 bg-[#990933] text-white'>
        <motion.h2 className='text-8xl' style={{ opacity:opacityText, y:textUp}}>DENEME</motion.h2>
      </div>
      <div className='h-dvh w-full bg-[#990933] grid place-items-center sticky top-0'>
        <motion.div 
        style={{ y:logoY }}
        className='text-center text-white'>
          <div className='size-52 p-10 rounded-full overflow-hidden bg-lime-50 mb-2 drop-shadow-amber-200'>
            <img src={img1} className='h-full w-full objec-cover' />
          </div>
          <h3>nawaCode</h3>
          <p>Parallax Project</p>
        </motion.div>
      </div>

      <div className='h-[300dvh] relative'>
        {imageData.map(({imgPath, caption, className, size}, i) => (
          <ParallaxImageTwo imgPath={imgPath} caption={caption} className={className} size={size} y={imageY[i]} key={imgPath+i}/>
        ))}
      </div>
    </div>
  )
}

export default ScrollAnimationTwo