import React from 'react'
import { motion } from "motion/react";

//StaggerChildren -> Animasyonları belli aralıklarla başlatmamıza olanak sağlar.(Genelde Sırayla)
//DelayChildren -> Animasyonun ne zaman başlayacağını bildirir.


const container = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: .3, delayChildren: 2}},
}

const item = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
}

const FeaturedList = () => {

    const features = ["Fast"," Declarative", "Powerful", "Fun"];

  return (
    <motion.ul variants={container} initial="hidden" animate="visible">
        {features.map((feature) => (
            <motion.li
            key={feature}
            variants={item}>
                {feature}
            </motion.li>
        ))}
    </motion.ul>    
  )
}

export default FeaturedList