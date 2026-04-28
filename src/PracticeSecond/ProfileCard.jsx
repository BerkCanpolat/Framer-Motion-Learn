import React from 'react'
import { motion } from "motion/react";

const cardVariants = {
    hidden: { opacity: 0, y: 400},
    visible: { opacity: 1, y: 0 , transition: { duration: 1, staggerChildren: .3, delayChildren: 0.2}}
}

const itemVariants = {
    hidden: { opacity: 0, y: 30},
    visible: { opacity: 1, y: 0},
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0
  },
  hover: {
    scale: 1.05,
    y: -3
  }
}

const avatarVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",  
            stiffness: 260,    
            damping: 20        
        }
    }
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const ProfileCard = () => {

    const nameSurname = ["Berk","Canpolat"];

  return (
    <div className='flex items-center justify-center h-screen'>
        <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ rotate: "5deg" }}
        className='w-62.5 bg-amber-400 rounded flex flex-col items-center justify-center gap-1 py-5'>
            <motion.div
            variants={avatarVariants} 
            className='w-15 h-15 bg-black rounded-full border-2 border-white mb-5' />
            {
                nameSurname.map((item) => (
                    <motion.p key={item} variants={textVariants}>
                        {item}
                    </motion.p>
                ))
            }
            <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            className='bg-blue-600 text-white rounded py-1 px-5 mt-10 cursor-pointer'>Profile Card</motion.button>
        </motion.div>
    </div>
  )
}

export default ProfileCard