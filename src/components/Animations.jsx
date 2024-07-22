export const pageVariants = {
  initial: {
    x: "40%",
    opacity: 0.2,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: "40%",
    opacity: 0.2,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6,
};
