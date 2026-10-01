"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred, render children directly with no animation wrapper
  if (shouldReduceMotion) {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0.85, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
