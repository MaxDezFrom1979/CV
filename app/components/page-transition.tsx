import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PageTransitionProps } from "~/types";

export default function PageTransition({
  children,
  enterDirection = "right",
  exitDirection = "left",
}: PageTransitionProps & React.HTMLAttributes<HTMLDivElement>) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{
        x: enterDirection === "right" ? width : -width,
      }}
      animate={{ x: 0 }}
      exit={{
        x: exitDirection === "right" ? width : -width,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
