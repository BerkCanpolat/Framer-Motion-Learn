import React, { useRef } from 'react'
import ParallaxImage from './ParallaxImageProps'
import img1 from "../../assets/img1.png";
import { motion, useScroll, useTransform } from "motion/react";

const ScrollAnimation = () => {

    const targetRef = useRef(null);

    const sections = 6;


    // target: targetRef: "Sadece bu div'e odaklan."

    //offset: ["start start", "end end"]: Bu şu anlama gelir: İlk "start start": Hedef div'in başlangıcı, ekranın başlangıcına (en üstüne) değdiği an animasyon başlasın (0 değeri). İkinci "end end": Hedef div'in bitişi, ekranın bitişine (en altına) değdiği an animasyon bitsin (1 değeri).
    const { scrollYProgress } = useScroll(
        {
            target: targetRef,
            offset: ["start start", "end end"]
        }
    );



    const maskImage = useTransform(
        scrollYProgress, 
        [0, 1.5 / sections], 
        [
        "linear-gradient(#000 100%, transparent 100%)",
        "linear-gradient(#000 0%, transparent 0%)",
        ]
    )

    const rotateTimeline = [2 / sections, 2.5 / sections , 3.5 / sections, 4.5/sections, 5/sections, 6/sections];

    const scale = useTransform(
        scrollYProgress, 
        [2 / sections, 3.5 / sections, 4.5/sections, 6/sections], 
        [1, 0.5, 0.5, 1]
    );

    const rotateX = useTransform(
        scrollYProgress, 
        rotateTimeline, 
        [
            "0deg",
            "-15deg",
            "0deg",
            "0deg",
            "-15deg",
            "0deg",
        ]
    );

    const rotateY = useTransform(
        scrollYProgress, 
        rotateTimeline, 
        [
            "0deg",
            "20deg",
            "0deg",
            "0deg",
            "20deg",
            "0deg",
        ]
    );

    const rotateZ = useTransform(
        scrollYProgress, 
        rotateTimeline, 
        [
            "0deg",
            "3deg",
            "0deg",
            "0deg",
            "3deg",
            "0deg",
        ]
    );

    const y1 = useTransform(scrollYProgress, [3/sections, 5/sections], [100, -200]);
    const y2 = useTransform(scrollYProgress, [3/sections, 5/sections], [-200, 200]);
    const y3 = useTransform(scrollYProgress, [3/sections, 5/sections], [0, -500]);
    const y4 = useTransform(scrollYProgress, [3/sections, 5/sections], [100, 0]);

  return (
    <div ref={targetRef}>

        <div style={{ perspective: "2000px" }} className='sticky top-0'>
            <motion.div 
            style={{scale, rotateX, rotateY, rotateZ}}
            className='w-full h-screen relative'>
                <div className='h-full grid place-items-center bg-black text-white text-8xl font-bold'>
                    <h2>nawaCode</h2>
                </div>

                <motion.div
                style={{maskImage}} 
                className='absolute inset-0 bg-gray-100 grid justify-center content-center gap-5'>
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
        <ParallaxImage style={{y: y1}} imgPath={img1} className="top-0 left-5"/>
        <ParallaxImage style={{y: y2}} imgPath={img1} className="bottom-0 left-10"/>
        <ParallaxImage style={{y: y3}} imgPath={img1} className="top-0 right-5"/>
        <ParallaxImage style={{y: y4}} imgPath={img1} className="bottom-0 right-5"/>
    </div>

    <div className='h-[200dvh]' />

    </div>
  )
}

export default ScrollAnimation