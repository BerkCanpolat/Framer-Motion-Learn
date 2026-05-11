import { motion,useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AnimatedCard from "./ScrollAnimatedCardA3";

const cardData2 = [
  { heading: "Web design & development", imgBackground: "red"   },
  { heading: "Branding",                 imgBackground: "green" },
  { heading: "Digital Marketing",        imgBackground: "blue"  },
];
 
const ScrollAnimationA3 = () => {
 
  // Başlık da kendi ref'ini izliyor — aynı mantık
  const titleRef = useRef(null);
 
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end start"],
  });
 
  const titleScale   = useTransform(titleProgress, [0, 1], [1, 0.8]);
  const titleOpacity = useTransform(titleProgress, [0, 1], [1, 0]);
 
  return (
    <div className='bg-gray-200 relative'>
 
      {/* Başlık */}
      <div ref={titleRef} className='h-[500px] sticky top-0'>
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity, height: '500px' }}
          className='flex items-end text-8xl lg:text-[160px] uppercase lg:leading-35 px-36 overflow-clip'
        >
          <h1 className='w-full h-max'>
            our <br />
            <span className='ml-20 lg:ml-52'>services</span>
          </h1>
        </motion.div>
      </div>
 
      {/* Kartlar — her biri AnimatedCard, kendi animasyonunu kendisi yönetiyor */}
      {cardData2.map((data) => (
        <AnimatedCard
          key={data.heading}
          heading={data.heading}
          imgBackground={data.imgBackground}
        />
      ))}
 
      <div className='h-dvh' />
    </div>
  );
};
 
export default ScrollAnimationA3;