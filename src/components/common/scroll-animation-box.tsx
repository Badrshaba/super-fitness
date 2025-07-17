import { motion } from "framer-motion";

export default function ScrollAnimationBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
