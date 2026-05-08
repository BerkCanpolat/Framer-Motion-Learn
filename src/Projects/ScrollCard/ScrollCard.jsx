import React, { useRef } from 'react'
import Card from './Card'
import { motion, useScroll, useTransform } from "motion/react";
import useWindowSize from './useWindowSize';


const ScrollCard = () => {
    
    const targetRef = useRef(null);

    const { size } = useWindowSize();

    const { scrollY } = useScroll({
        target: targetRef,
        offset: ["start start","end end"]
    });

    const title_height = 500;
    const card_padding = 80;
    const card_margin = 208;

    const cardTimeLine = cardData.map((_, i) => {
        const start = title_height + i * size.height + card_padding + (i + 1) * card_margin;
        const end = title_height + (i+1) * size.height + (i + 1) * card_margin;

        return [start, end];
    });

    const timeline = [[0,title_height], ...cardTimeLine];

    const animation = timeline.map((data) => (
        {
            scale: useTransform(
                scrollY, 
                data,
                [1, 0.8]
            ),

            opacity: useTransform(
                scrollY, 
                data,
                [1, 0]
            ),
        }
    ))



  return (
    <div ref={targetRef} className='bg-gray-200 relative'>
        <motion.div 
        style={{ scale: animation[0].scale, opacity: animation[0].opacity, height: `${title_height}px` }}
        className='sticky top-0 flex items-end text-8xl lg:text-[160px] uppercase lg:leading-35 px-36 overflow-clip'>
            <h1 className='w-full h-max'>
                our <br />
                <span className='ml-20 lg:ml-52'>services</span>
            </h1>
        </motion.div>

        {cardData.map((data, i) => (
            <React.Fragment key={data.heading}>
                <motion.div
                style={{ scale: animation[i+1].scale, opacity: animation[i+1].opacity}} 
                className='h-dvh py-20 sticky top-0'>
                    <Card heading={data.heading} imgBackground={data.imgBackground} />
                </motion.div>
    
                <div className='h-52'/>

            </React.Fragment>
        ))}

        <div  className='h-dvh'/>
    </div>
  )
}

export default ScrollCard

const cardData = [
    {
        heading: "Web design & development",
        imgBackground: "red",
    },
    {
        heading: "Branding",
        imgBackground: "green",
    },
    {
        heading: "Digital Marketing",
        imgBackground: "blue",
    },
]