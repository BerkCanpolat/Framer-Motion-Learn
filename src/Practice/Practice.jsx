import React from "react";
import { motion } from "motion/react";
import AnimatedButton from "./AnimatedButton";
import FeaturedList from "./FeaturedList";
import DraggableCard from "./DraggableCard";
import DissmissAbleAlert from "./DissmissAbleAlert";
import StepSwitcher from "./StepSwitcher";
import CollapsibleList from "./CollableList";
import LiveBadge from "./LiveBadge";

const Practice = () => {
  return (
    <>

    {/* Practice 1 */}
      {/* <motion.div
        initial={{opacity: 0, y: -40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, ease: "easeInOut"}}
        style={{
          width: 150,
          height: 150,
          background: "red",
        }}
      >
        Hello World!
      </motion.div> */}

      {/* Practice 2 */}
      {/* <div className="box">
      <motion.button
        whileHover={{scale: 1.05, y: -5}}
        whileTap={{scale: .9, y: 1}}
        transition={{type: "spring", stiffness: 300, damping: 10}}
      >
        Click Me!
      </motion.button>
      </div> */}

      {/* Practice 3 */}
      {/* <div className="box">
      <AnimatedButton> Click </AnimatedButton>
      <AnimatedButton damping={0} stiffness={0}> Click </AnimatedButton>
      </div> */}


      {/* Practice 4 */}
      {/* <div className="box">
      <FeaturedList />
      </div> */}

      {/* Practice 5 */}
      {/* <div className="box">
      <DraggableCard />
      </div> */}

      {/* Practice 6 */}
      {/* <div className="box">
      <DissmissAbleAlert />
      </div> */}

      {/* Practice 7 */}
      {/* <div className="box">
      <StepSwitcher />
      </div> */}

      {/* Practice 8 */}
      {/* <div className="box">
      <CollapsibleList />
      </div> */}

      {/* Practice 9 */}
      <div className="box">
      <LiveBadge />
      </div>
    </>
  );
};

export default Practice;