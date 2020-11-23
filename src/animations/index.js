export const draw = {
  hidden: {
    y: 400,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 800,
    oapcity: 0.5
  }
};

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.4
    }
  },
  exit: { opacity: 1 }
};

export const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 }
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2,
      duration: 0.4
    }
  }
};

export const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
};
