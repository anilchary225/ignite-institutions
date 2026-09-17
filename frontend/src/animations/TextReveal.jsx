import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { eases } from "./transitions";

export default function TextReveal({
  text = "",
  as: Tag = "span",
  className = "",
  wordClassName = "",
  delayStep = 0.035,
  once = true,
  amount = 0.2,
}) {
  const shouldReduceMotion = useReducedMotion();

  const words = React.useMemo(() => {
    return String(text || "")
      .split(/(\s+)/)
      .filter((part) => part.length > 0);
  }, [text]);

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayStep,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: eases.cinematic,
      },
    },
  };

  const MotionTag = motion[Tag] || motion.span;

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {words.map((word, i) => {
        if (/^\s+$/.test(word)) {
          return <span key={`space-${i}`}>{word}</span>;
        }
        return (
          <motion.span
            key={`word-${i}`}
            variants={wordVariants}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
