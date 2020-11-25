import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInOut } from "../animations";
//assets
import close from "../images/close.svg";

const CloseButton = ({ toggle, toggleFunc }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <div className="btn-close-container">
          <motion.button
            variants={fadeInOut}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={toggleFunc}
            whileHover={{ scale: 1.2 }}
            whileTap={{ opacity: 0.2 }}
            className="btn-close"
          >
            <img src={close} alt="close" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CloseButton;
