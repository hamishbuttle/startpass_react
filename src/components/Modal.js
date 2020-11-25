import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import token from "../designToken";
import CloseButton from "./CloseButton";
import { fadeInOut } from "../animations";

const Modal = ({
  children,
  toggleModalHandler,
  showModal
}) => {
  //animations
  const modalContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, when: "beforeChildren" }
    },
    exit: {
      opacity: 0
    }
  };

  const modal = {
    hidden: { y: "100vh" },
    show: { y: 0 },
    exit: { y: "100vh" }
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <BetaSignUpModal
            variants={modalContainer}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div variants={modal} className="modal">
              {children}
            </motion.div>
          </BetaSignUpModal>
        )}
      </AnimatePresence>
      <CloseButton
        toggle={showModal}
        toggleFunc={toggleModalHandler}
      />
    </>
  );
};
export default Modal;

const BetaSignUpModal = styled(motion.div)`
  position: fixed;
  top: 0%;
  left: 0;
  bottom: 0;
  right: 0%;
  background-color: rgba(255, 225, 65, 1, 0.6);
  backdrop-filter: blur(6px);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding-top: 1.6rem;
  transition: all 1s ease;
  @media screen and (min-width: 640px) {
    align-items: center;
    padding-top: 0rem;
  }
  .modal {
    width: 88%;
    min-height: 400px;
    background: white;
    border-radius: 32px;
    padding: 8%;
    box-shadow: 2px 2px 32px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 640px) {
      padding: 4%;
      max-width: 560px;
    }
  }
`;
