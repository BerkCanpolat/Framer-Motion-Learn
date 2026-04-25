import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";


const DissmissAbleAlert = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <button onClick={() => setOpen((o) => !o)} className='alert-button'>Toggle Alert</button>
        <AnimatePresence>
            {
                open && (
                    <motion.div
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: 50, opacity: 0}}
                    transition={{duration: 0.25}}
                    className='alert'
                    >
                        Ths is an animated alert.
                    </motion.div>
                )
            }
        </AnimatePresence>
    </div>
  )
}

export default DissmissAbleAlert