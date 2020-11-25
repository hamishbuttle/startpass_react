import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const BottomNav = ({ toggleModalHandler }) => {
  const fadeUpIn = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
  };

  return (
    <AnimatePresence>
      <Nav
        variants={fadeUpIn}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.a
          whileHover={{ opacity: 0.6 }}
          onClick={toggleModalHandler}
          href="#"
        >
          Early Access
        </motion.a>
        <motion.a
          whileHover={{ opacity: 0.6 }}
          href="https://medium.com/startpass"
        >
          Medium
        </motion.a>
      </Nav>
    </AnimatePresence>
  );
};

export default BottomNav;

const Nav = styled(motion.nav)`
  position: fixed;
  bottom: 5%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 0.8rem;
    color: white;
    font-weight: 900;
    font-size: 19px;
    letter-spacing: 0.5px;
  }
`;
