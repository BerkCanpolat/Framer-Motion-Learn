import React, { useRef } from 'react'
import ImageScrollA1 from './ImageScrollA1'
import imgOne from '../../../../assets/img1.png'
import { motion, useScroll, useTransform } from 'motion/react'

const ScrollAnimationA1 = () => {

  const mainRef = useRef(null);

  const sections = 10;

  const { scrollYProgress } = useScroll(
    {
      target: mainRef,
      offset: ["start start", "end end"]
    }
  );

  const scale = useTransform(
    scrollYProgress,
    [2 / sections, 3.5 / sections, 8.5 / sections, 10 / sections],
    [1, 0.5, 0.5, 1],
  );

  const maskDiv = useTransform(
    scrollYProgress,
    [0, 1.5 / sections],
    [
      "linear-gradient(#000 100%, transparent 100%)",
      "linear-gradient(#000 0%, transparent 0%)",
    ]
  );

  const rotateTimeLine = [2 / sections, 3 / sections, 3.5 / sections, 8.5 / sections, 9 / sections, 10 / sections];

  const rotateX = useTransform(
    scrollYProgress,
    rotateTimeLine,
    [
      "0deg",
      "15deg",
      "0deg",
      "0deg",
      "-15deg",
      "0deg"
    ]
  );

  const rotateY = useTransform(
    scrollYProgress,
    rotateTimeLine,
    [
      "0deg",
      "20deg",
      "0deg",
      "0deg",
      "-20deg",
      "0deg"
    ]
  );

  const rotateZ = useTransform(
    scrollYProgress,
    rotateTimeLine,
    [
      "0deg",
      "3deg",
      "0deg",
      "0deg",
      "-3deg",
      "0deg"
    ]
  );

  const y1 = useTransform(
    scrollYProgress,
    [3/sections, 5/sections],
    [100, -200]
  );
  const y2 = useTransform(
    scrollYProgress,
    [3/sections, 5/sections],
    [-200, 200]
  );

  const y3 = useTransform(
    scrollYProgress,
    [3/sections, 5/sections],
    [0, 500]
  );
  const y4 = useTransform(
    scrollYProgress,
    [3/sections, 5/sections],
    [100, 0]
  );

  const sliderRef = useRef(null);


  const { scrollYProgress: sliderProgress } = useScroll({
  target: sliderRef,
  offset: ["start start", "end start"]
});

const slideX = useTransform(
  sliderProgress,
  [0, 1],
  ["0%", "-250%"]
);

  return (
    <div ref={mainRef}>

      <div
      style={{ perspective: "2000px" }}
      className='sticky top-0'>

        <motion.div 
        style={{ scale: scale, rotateX, rotateY, rotateZ }}
        className='w-full h-screen relative'>

          <div className='h-full bg-black text-white flex flex-col items-center justify-center text-8xl'>
            <h2>Demo Projects</h2>
          </div>

          <motion.div 
          style={{ maskImage: maskDiv }}
          className='absolute inset-0 flex flex-col items-center justify-center gap-5'>
            <h2 className='text-6xl'>Berk Canpolat</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta similique <br /> quos culpa sed vero laboriosam obcaecati!</p>
          </motion.div>

        </motion.div>


      </div>

      <div className='h-[300dvh]'/>

      <div className='relative h-screen'>
        <ImageScrollA1 imgPath={imgOne} className={"top-0 left-5"} style={{ y: y1 }}/>
        <ImageScrollA1 imgPath={imgOne} className={"bottom-0 left-10"} style={{ y: y2 }}/>
        <ImageScrollA1 imgPath={imgOne} className={"top-0 right-5"} style={{ y: y3 }}/>
        <ImageScrollA1 imgPath={imgOne} className={"bottom-0 right-15"} style={{ y: y4 }}/>
      </div>



      <div className='h-[200dvh]'/>

      <div
      ref={sliderRef}
      className='relative h-[300dvh]'
      >

      <div className='sticky top-0 h-screen overflow-hidden px-5'>

        <motion.div
        style={{ x: slideX }}
        className='flex items-center gap-10 h-full w-max'
        >
        <ImageScrollA1 imgPath={imgOne} className={"w-150 shrink-0 relative"}/>
        <ImageScrollA1 imgPath={imgOne} className={"w-150 shrink-0 relative"}/>
        <ImageScrollA1 imgPath={imgOne} className={"w-150 shrink-0 relative"}/>
        <ImageScrollA1 imgPath={imgOne} className={"w-150 shrink-0 relative"}/>
        <ImageScrollA1 imgPath={imgOne} className={"w-150 shrink-0 relative"}/>
        </motion.div>
      </div>

      </div>


      {/* <div className='h-[300dvh]'/> */}

    </div>
  )
}

export default ScrollAnimationA1