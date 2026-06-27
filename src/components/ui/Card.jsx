import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

function Card({ className, children, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={cn("card-base rounded-2xl p-5", className)}
    >
      {children}
    </motion.div>
  );
}

export default Card;
