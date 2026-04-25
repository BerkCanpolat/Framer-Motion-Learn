import React from 'react'
import { motion } from "motion/react";

//Dragelastic -> Sürüklerken belirlediğimiz sınırların hafif dışına ne kadar esnek şekilde çıkabileceğini belirtir.


const DraggableCard = () => {
  return (
    <motion.div drag dragConstraints={{left: -100, right: 100, top: -200, bottom: 120}} dragElastic={0.1}>
        Drag Me!
    </motion.div>
  )
}

export default DraggableCard