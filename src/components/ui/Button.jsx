import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/20",
  secondary: "bg-white text-slate-900 border border-slate-200 hover:border-primary/30 hover:text-primary dark:bg-slate-900 dark:text-white dark:border-slate-700",
  accent: "bg-accent text-slate-950 hover:bg-accent/90 focus:ring-accent/20",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
};

function Button({ className, variant = "primary", children, ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
