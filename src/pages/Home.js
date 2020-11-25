import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout
} from "framer-motion";
//assets
import token from "../designToken";
import logo from "../images/startpass_logo.svg";
import play_icon from "../images/play_icon.svg";
import dots from "../images/vertical_dots.svg";
import hamish from "../images/hamish.png";
import seb from "../images/seb.png";
import girl from "../images/girl.png";
import close from "../images/close.svg";
import poster from "../images/poster.png";
//Components
import BottomNav from "../components/BottomNav";
import Modal from "../components/Modal";
import Form from "../components/Form";
//animations
import { container, item, fadeUpIn } from "../animations";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const video = useRef(null);
  // const videoCanPlay = video.onLoadedData && showStory;
  // console.log(video);

  const toggleModalHandler = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const toggleStoryHandler = () => {
    setShowStory(!showStory);
  };

  return (
    <div className="splash">
      <Nav>
        <motion.div className="nav-contents">
          <div className="logo-container">
            <motion.img
              src={logo}
              alt="startpass"
              whileHover={{ opacity: 0.6 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 }
              }}
            />
          </div>
          <div className="about-btn-container">
            <motion.div
              onClick={toggleModalHandler}
              className="about-btn"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0.4 }}
              animate={{
                scale: 1,
                transition: { duration: 1 }
              }}
            >
              <img src={dots} alt="about button" />
            </motion.div>
          </div>
        </motion.div>
        <Info>
          <motion.div
            variants={fadeUpIn}
            initial="hidden"
            animate="show"
          >
            Complete challenges and build team stories with
            friends!
          </motion.div>
        </Info>
      </Nav>
      <Challenge>
        <AnimateSharedLayout type="crossfade">
          <motion.div
            onClick={toggleStoryHandler}
            layoutId="story"
            className="play-btn-container"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 1
              }
            }}
          >
            <PlayButton>
              <motion.div
                whileHover={{ opacity: 0.5 }}
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    repeat: Infinity,
                    duration: 1.6
                  }
                }}
                className="play-button-content"
              >
                <img src={play_icon} alt="play icon" />
              </motion.div>
            </PlayButton>
          </motion.div>
          <AnimatePresence>
            {showStory && (
              <Story layoutId="story">
                <div className="video-container">
                  <div
                    className="video-bubble"
                    onClick={toggleStoryHandler}
                  >
                    Startpass Team
                  </div>
                  <video
                    ref={video}
                    autoPlay
                    loop
                    playsInline
                    preload
                    poster={poster}
                  >
                    <source src="https://firebasestorage.googleapis.com/v0/b/startpass-8f4f5.appspot.com/o/startpass%20portrait.mp4?alt=media&token=4960d27e-c920-47c4-acb2-11725181f43e" />
                  </video>
                  <div
                    onClick={toggleStoryHandler}
                    className="close-btn-relative"
                  >
                    <img src={close} alt="close" />
                  </div>
                </div>
              </Story>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Challenge>

      <Members
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          drag
          dragConstraints={{
            top: -8,
            left: -8,
            right: 8,
            bottom: 8
          }}
          variants={item}
        >
          <motion.img src={hamish} alt="hamish" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -8,
            left: -8,
            right: 8,
            bottom: 8
          }}
          variants={item}
        >
          <img src={seb} alt="seb" />
        </motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -8,
            left: -8,
            right: 8,
            bottom: 8
          }}
          variants={item}
        >
          <img src={girl} alt="seb" />
        </motion.div>
      </Members>
      <BottomNav toggleModalHandler={toggleModalHandler} />
      <Modal
        showModal={showModal}
        toggleModalHandler={toggleModalHandler}
      >
        <div className="wrapper">
          <Form
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Home;

const Info = styled(motion.div)`
  position: absolute;
  top: 116%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 720px;
  z-index: 2;
  div {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
    border-radius: 19px;
    text-align: center;
    padding: 1rem;
    color: white;
    font-weight: 700;
    max-width: 500px;
    margin: auto;
  }
`;

const Members = styled(motion.div)`
  width: 70px;
  height: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  div {
    width: 60px;
    height: 60px;
    border-radius: 26px;
    position: absolute;
  }
  div:nth-of-type(1) {
    left: -10px;
    top: -100px;
  }
  div:nth-of-type(2) {
    left: 100px;
    bottom: -90px;
  }
  div:nth-of-type(3) {
    left: -72px;
    bottom: -100px;
  }
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  height: 8vh;
  z-index: 2;
  .nav-contents {
    .logo-container {
      height: 32px;
      width: 172px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      ${token.layout.media.tablet} {
        height: 40px;
        width: 192px;
        img {
          width: 100%;
        }
      }
      ${token.layout.media.desktop} {
        height: 51.6px;
        width: 275.2px;
        img {
          width: 80%;
        }
      }
    }
    .about-btn-container {
      position: absolute;
      right: 0%;
      top: 50%;
      transform: translateY(-50%);
      .about-btn {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
        width: 48px;
        height: 48px;
        border-radius: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 18%;
        }
      }
    }
  }
`;

const Challenge = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const Story = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  @media screen and (min-width: 640px) {
    padding: 1.6rem;
  }
  .video-container {
    position: relative;
  }
  video {
    background: white;
    width: 100vw;
    height: 101vh;
    object-fit: cover;
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.4);
    @media screen and (min-width: 640px) {
      max-width: 320px;
      max-height: 640px;
      border-radius: 24px;
    }
  }
  .video-bubble {
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 1rem;
    background: ${token.colors.primary.primaryGradient};
    display: block;
    border-radius: 24px;
    color: white;
    font-weight: bold;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
  .close-btn-relative {
    position: absolute;
    bottom: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 56px;
    background: white;
    display: flex;
    justify-content: center;
    border-radius: 24px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    img {
      width: 24px;
    }
  }
`;

const PlayButton = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  z-index: 3;
  .play-button-content {
    width: 88px;
    height: 88px;
    background: linear-gradient(#ffe976, #ffb800);
    border-radius: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 32px rgba(0, 0, 0, 0.2);
    &::after {
      content: "";
      background: white;
      width: 76px;
      height: 76px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 34px;
    }
    img {
      z-index: 1;
      position: relative;
      right: -2px;
      width: 32px;
    }
  }
`;

// const About = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 3;
//   overflow: scroll;
//   .page {
//     border-radius: 24px 24px 0 0;
//     background: white;
//     padding: 5.6rem 1.4rem 4.8rem 1.4rem;
//     text-align: center;
//     max-width: 1200px;
//     min-height: 100vh;
//     margin: 12vh auto 0rem auto;
//     box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
//     position: relative;
//     .decoration-1 {
//       position: absolute;
//       top: 0%;
//       left: 0%;
//       transform: translate(-20%, -20%);
//       width: 100px;
//       height: 100px;
//       overflow: hidden;
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .decoration-2 {
//       position: absolute;
//       top: 0%;
//       left: 50%;
//       transform: translate(-30%, -30%);
//       width: 60px;
//       height: 60px;
//       overflow: hidden;
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .decoration-3 {
//       position: absolute;
//       top: 0%;
//       right: 0%;
//       transform: translate(50%, -10%);
//       width: 90px;
//       height: 90px;
//       overflow: hidden;
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     section {
//       margin: 10% 0;
//     }
//     h4 {
//       text-align: left;
//       margin-bottom: 0.8rem;
//       color: ${token.colors.gray.light};
//     }
//     .challenge-item {
//       text-align: left;
//       background: ${token.colors.gray.lightest};
//       padding: 1.2rem 1rem;
//       border-radius: 24px;
//       display: flex;
//       justify-content: start;
//       align-items: center;
//       .challenge-preview {
//         width: 40px;
//         height: 40px;
//         margin: 0.5rem;
//         img {
//           width: 100%;
//           height: 100%;
//         }
//       }
//       &:first-of-type {
//         margin-bottom: 1rem;
//       }
//       p {
//         color: black;
//         font-size: 17px;
//         line-height: 1;
//         margin: 0.4rem 0;
//       }
//     }
//   }
// `;

// const Members = styled(motion.div)`
//   position: fixed;
//   z-index: 0;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 90px;
//   height: 90px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid red;
//   /* .member {
//     position: absolute;
//     display: block;
//     width: 60px;
//     height: 60px;
//     background: rgba(0, 0, 0, 0.1);
//     img {
//       width: 100%;
//     }
//   }
//   .m-1 {
//     transform: translate(-100px, -100px);
//   }
//   .m-2 {
//     transform: translate(100px, -80px);
//   }
//   .m-3 {
//     transform: translate(0px, 120px);
//   } */
// `;
