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
import play from "../images/play.png";
import play_icon from "../images/play_icon.svg";
import close from "../images/close.svg";
import dots from "../images/vertical_dots.svg";
import hamish from "../images/hamish.png";
import seb from "../images/seb.png";
import girl from "../images/girl.png";
import start_mission from "../images/start_mission.png";
//Components
import CloseButton from "../components/CloseButton";
//animations
import {
  draw,
  fadeIn,
  container,
  item
} from "../animations";

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
      <Info>
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
        >
          Complete challenges and build team stories with
          friends or family!
        </motion.div>
      </Info>
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
                <CloseButton toggle={toggleStoryHandler} />
              </Story>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Challenge>
      <AnimatePresence>
        {aboutShow && (
          <About>
            <motion.div
              variants={draw}
              initial="hidden"
              animate="show"
              exit="exit"
              className="page"
            >
              <div className="decoration-1">
                <img src={play} alt="play" />
              </div>
              <div className="decoration-2">
                <img src={hamish} alt="play" />
              </div>
              <div className="decoration-3">
                <img src={seb} alt="play" />
              </div>
              <div className="wrapper">
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
                    Start!
                  </motion.button>
                </section>
                <section>
                  <h4>Challenges</h4>
                  <div className="challenge-item">
                    <div className="challenge-preview">
                      <img src={hamish} alt="preview" />
                    </div>
                    <div>
                      <p>
                        <b>Easy challenge</b>
                      </p>
                      <p>Walk 5 times per weeks</p>
                    </div>
                  </div>
                  <div className="challenge-item">
                    <div className="challenge-preview">
                      <img src={hamish} alt="preview" />
                    </div>
                    <div>
                      <p>
                        <b>Easy challenge</b>
                      </p>
                      <p>Walk 5 times per weeks</p>
                    </div>
                  </div>
                </section>
                <Mission>
                  <img src={start_mission} alt="mission" />
                  <small>
                    At Startpass our mission is to combat
                    stress and depression pandemic by
                    creating a platform that brings people
                    toghether to complete challenges and
                    learn about themselves.
                  </small>
                </Mission>
              </div>
              <CloseButton toggle={toggleAboutHandler} />
            </motion.div>
          </About>
        )}
      </AnimatePresence>
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
          whileHover={{ scale: 1.05 }}
          variants={item}
        ></motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -8,
            left: -8,
            right: 8,
            bottom: 8
          }}
          variants={item}
        ></motion.div>
        <motion.div
          drag
          dragConstraints={{
            top: -8,
            left: -8,
            right: 8,
            bottom: 8
          }}
          variants={item}
        ></motion.div>
      </Members>
    </div>
  );
};

export default Home;

const Info = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 500px;
  z-index: 2;
  div {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
    border-radius: 19px;
    text-align: center;
    padding: 1rem;
    color: white;
    font-weight: bold;
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
    left: -80px;
    top: -90px;
    background-image: url(${hamish});
    background-size: contain, cover;
  }
  div:nth-of-type(2) {
    left: 100px;
    top: -80px;
    background-image: url(${seb});
    background-size: contain, cover;
  }
  div:nth-of-type(3) {
    left: 0px;
    bottom: -110px;
    background-image: url(${girl});
    background-size: contain, cover;
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
  background: white;
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 4;
  video {
    margin: auto;
    display: block;
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
    background: ${token.colors.primary.primaryGradient};
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
    }
  }
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
    padding: 5.6rem 1.4rem 4.8rem 1.4rem;
    text-align: center;
    max-width: 1200px;
    min-height: 100vh;
    margin: 12vh auto 0rem auto;
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    .decoration-1 {
      position: absolute;
      top: 0%;
      left: 0%;
      transform: translate(-20%, -20%);
      width: 100px;
      height: 100px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .decoration-2 {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-30%, -30%);
      width: 60px;
      height: 60px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .decoration-3 {
      position: absolute;
      top: 0%;
      right: 0%;
      transform: translate(50%, -10%);
      width: 90px;
      height: 90px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    section {
      margin: 10% 0;
    }
    h4 {
      text-align: left;
      margin-bottom: 0.8rem;
      color: ${token.colors.gray.light};
    }
    .challenge-item {
      text-align: left;
      background: ${token.colors.gray.lightest};
      padding: 1.2rem 1rem;
      border-radius: 24px;
      display: flex;
      justify-content: start;
      align-items: center;
      .challenge-preview {
        width: 40px;
        height: 40px;
        margin: 0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:first-of-type {
        margin-bottom: 1rem;
      }
      p {
        color: black;
        font-size: 17px;
        line-height: 1;
        margin: 0.4rem 0;
      }
    }
  }
`;

const Mission = styled.div`
  margin: 1.6rem 0;
  padding: 1rem;
  text-align: center;
  small {
    color: ${token.colors.gray.light};
    font-weight: 500;
    font-size: 17px;
  }
  img {
    margin: 1rem auto;
    width: 72px;
  }
`;

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
