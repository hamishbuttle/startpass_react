import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout
} from "framer-motion";
//assets
import token from "../designToken";
import logo from "../images/startpass_logo.svg";
import play from "../images/play.svg";
import close from "../images/close.svg";
import dots from "../images/vertical_dots.svg";
import hamish from "../images/hamish.png";
import seb from "../images/seb.png";
import girl from "../images/girl.png";
//animations
import { draw } from "../animations";

const Home = () => {
  const [aboutShow, setAboutShow] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const toggleAboutHandler = () => {
    setAboutShow(!aboutShow);
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
              onClick={toggleAboutHandler}
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
            <motion.img
              src={play}
              alt="play icon"
              whileHover={{ opacity: 0.8 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  repeat: Infinity,
                  duration: 2
                }
              }}
            />
          </motion.div>
          <AnimatePresence>
            {showStory && (
              <Story layoutId="story">
                <div className="btn-close-container">
                  <motion.button
                    onClick={toggleStoryHandler}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ opacity: 0.2 }}
                    className="btn-close"
                  >
                    <img src={close} alt="close" />
                  </motion.button>
                </div>
              </Story>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Challenge>
      <AnimatePresence>
        {aboutShow && (
          <About>
            <motion.div
              // drag="y"
              variants={draw}
              initial="hidden"
              animate="show"
              exit="exit"
              className="page"
            >
              <section>
                <h1>
                  Startpass <br />
                  <span>Challenge</span>
                </h1>
                <h3>
                  Complete real world challenges and build
                  team stories with friends or family!
                </h3>
                <motion.button
                  whileHover={{
                    scale: 1.1
                  }}
                  className="btn-primary"
                >
                  Start Today!
                </motion.button>
                <div className="btn-close-container">
                  <motion.button
                    onClick={toggleAboutHandler}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ opacity: 0.2 }}
                    className="btn-close"
                  >
                    <img src={close} alt="close" />
                  </motion.button>
                </div>
              </section>
            </motion.div>
          </About>
        )}
      </AnimatePresence>
      <Members>
        <motion.div className="member m-1">
          <motion.img drag src={hamish} alt="hamish" />
        </motion.div>
        <div className="member m-2">
          <img src={seb} alt="hamish" />
        </div>
        <div className="member m-3">
          <img src={girl} alt="hamish" />
        </div>
      </Members>
    </div>
  );
};

export default Home;

const Nav = styled(motion.nav)`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  height: 8vh;
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
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%;)
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const About = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  overflow: scroll;
  .page {
    border-radius: 24px 24px 0 0;
    background: white;
    padding: 4.8rem 1.4rem 0rem 1.4rem;
    text-align: center;
    max-width: 1200px;
    min-height: 200vh;
    margin: 12vh auto 0rem auto;
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.1);
  }
`;

const Story = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: white;
  position: fixed;
  z-index: 4;
`;

const Members = styled(motion.div)`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  .member {
    position: absolute;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
    }
  }
  .m-1 {
    transform: translate(-100px, -100px);
  }
  .m-2 {
    transform: translate(100px, -80px);
  }
  .m-3 {
    transform: translate(0px, 120px);
  }
`;
