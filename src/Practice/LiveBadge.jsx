import { motion } from "motion/react";

const LiveBadge = () => {
  return (
    <motion.div className="live-container"
    animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
                "0 0 0px rgba(198, 28, 255, 0.4)",
                "0 0 8px rgba(200, 0, 255, 0.7)",
                "0 0 0px rgba(153, 0, 255, 0.4)",
            ],
        }}
        transition={{
            duration: .5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
        }}>
        <motion.span className=""
        >
            LIVE
        </motion.span>
    </motion.div>
  )
}

export default LiveBadge