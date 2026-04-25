import { motion } from "motion/react";
import { useState } from "react";

const CollapsibleList = () => {
    const [expanded, setExpanded] = useState(null);
    const items = [1,2,3];
  return (
    <div>
        {items.map((id) => (
            <motion.div
            className="card"
            layout
            key={id}
            onClick={() => setExpanded((prev) => (prev === id ? null : id))}>
                <h3>Item {id}</h3>
                {expanded === id && (
                    <motion.p>
                        This section expands and contracts with a layout
                    </motion.p>
                )}

            </motion.div>
        ))}
    </div>
  )
}

export default CollapsibleList