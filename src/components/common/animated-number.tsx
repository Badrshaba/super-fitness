/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function AnimatedNumber({ target }: { target: number }) {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplayCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        {displayCount.toLocaleString()}+
      </motion.h3>
    </div>
  );
}
