export const pageVariants = {
  initial: {
    y: "10%",
    opacity: 0.2,
  },
  in: {
    y: 0,
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
  duration: 0.2,
};
