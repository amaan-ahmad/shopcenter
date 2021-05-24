import React from "react";
import { motion } from "framer-motion";
import { Toast } from "./Styles/Common";

export default function AnimatedGlassToast({ children }) {
  return (
    <>
      <motion.div
        initial={{ top: "-100%", position: "absolute", left: "50%" }}
        animate={{ top: "10%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Toast>{children}</Toast>
      </motion.div>
    </>
  );
}
