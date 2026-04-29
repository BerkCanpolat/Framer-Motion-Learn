import React, { useRef } from 'react'
import ParallaxPractice from './ParallaxPractice'
import img1 from "../../assets/img1.png";
import { motion, useScroll, useTransform } from "motion/react";


const ScrollPractice = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll(
        {
            target: targetRef,
            offset: ["start start", "end end"]
        }
    );

    const sections = 6;

    const maskImage = useTransform(
        scrollYProgress,
        [0, 1.5 / sections],
        [
            "linear-gradient(#000 100%, transparent 100%)",
            "linear-gradient(#000 0%, transparent 0%)",
        ]
    );

    const scale = useTransform(
        scrollYProgress,
        [2 / sections, 3.5 / sections, 4.5/sections, 6/sections],
        [1, 0.5, 0.5, 1]
    );

    const rotateTimeLine = [2/sections,2.5/sections,3.5/sections,4.5/sections,5/sections,6/sections];

    const rotateX = useTransform(
        scrollYProgress,
        rotateTimeLine,
        [
            "0deg",
            "-15deg",
            "0deg",
            "0deg",
            "15deg",
            "0deg",
        ]
    )

    const rotateY = useTransform(
        scrollYProgress,
        rotateTimeLine,
        [
            "0deg",
            "20deg",
            "0deg",
            "0deg",
            "20deg",
            "0deg",
        ]
    )

    const rotateZ = useTransform(
        scrollYProgress,
        rotateTimeLine,
        [
            "0deg",
            "3deg",
            "0deg",
            "0deg",
            "3deg",
            "0deg",
        ]
    );

    const y1 = useTransform(scrollYProgress,[3/sections, 5/sections], [100,-200])
    const y2 = useTransform(scrollYProgress,[3/sections, 5/sections], [-100,200])
    const y3 = useTransform(scrollYProgress,[3/sections, 5/sections], [0,-500])
    const y4 = useTransform(scrollYProgress,[3/sections, 5/sections], [100,0])


  return (
    <div ref={targetRef}>

        <div
        style={{ perspective: "2000px" }} 
        className='sticky top-0'>
        <motion.div 
        style={{ scale,rotateX,rotateY,rotateZ }}
        className='relative h-screen w-full'>
            <div className='flex flex-col items-center justify-center h-full text-8xl bg-black text-white'>
                <h2>Berk Practice</h2>
            </div>

            <motion.div 
            style={{ maskImage }}
            className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100'>
                <h2 className='text-8xl font-bold'>.PROJECTS</h2>
                <p className='text-center'>
                        CUSTOMER PROJECTS, PERSONAL PROJECTS,
                            <br />
                            SOME RESEARCH AND PLAYGROUND
                    </p>
            </motion.div>
        </motion.div>
        </div>

        <div className='h-[300dvh]' />

        <div className='relative h-screen'>
            <ParallaxPractice style={{y:y1}} imgPath={img1} classname={"top-0 lef-5"}/>
            <ParallaxPractice style={{y:y2}} imgPath={img1} classname={"bottom-0 left-10"}/>
            <ParallaxPractice style={{y:y3}} imgPath={img1} classname={"top-0 right-5"}/>
            <ParallaxPractice style={{y:y4}} imgPath={img1} classname={"bottom-0 right-5"}/>
        </div>

        <div className='h-[200dvh]'/>


    </div>
  )
}

export default ScrollPractice