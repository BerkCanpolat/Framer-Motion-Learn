import React, { useState } from 'react'
import { motion } from "motion/react"

const BasicsOfMotion = () => {


    const [isVisible, setIsVisible] = useState(true);



  return (
    <div style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem"
    }}>
        <button
        onClick={() => setIsVisible(!isVisible)}
         className='example-button'>Show/Hide</button>
        {
            isVisible && (
                <motion.div
                initial={{
                    rotate: '0deg'
                }} 
                animate={{
                    rotate: "180deg"
                }}
                exit={{
                    rotate: "0deg"
                }}
                transition={{
                    duration: 1,
                    ease: "circIn"
                }}
                style={{
                    width: 150,
                    height: 150,
                    background: "black"
                }}>

                </motion.div>

            )
        }
    </div>
  )
}

export default BasicsOfMotion