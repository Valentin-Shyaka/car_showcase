import { motion } from "framer-motion"

interface BubbleProps{
  styles: string
}

export const StyledBubbles = ({styles}:BubbleProps) => (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ ease: "easeOut", duration: 4, times:[0, 0.2, 1],delay:  0.3, }}
      className={styles}
      layout
    />
  )