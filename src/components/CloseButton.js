import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
//assets
import close from "../images/close.svg";

const CloseButton = ({ toggle }) => {
  return (
    <div className="btn-close-container">
      <motion.button
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={toggle}
        whileHover={{ scale: 1.2 }}
        whileTap={{ opacity: 0.2 }}
        className="btn-close"
      >
        <img src={close} alt="close" />
      </motion.button>
    </div>
  );
};

export default CloseButton;
