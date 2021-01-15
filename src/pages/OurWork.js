import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  staticShow,
} from "../animation";
import { useScroll } from "../hooks/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie
        ref={element}
        variants={staticShow}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <ImageFrame>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </ImageFrame>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        initial="hidden"
        animate={controls2}
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <ImageFrame>
            <motion.img variants={photoAnimation} src={theracer} alt="racer" />
          </ImageFrame>
        </Link>
      </Movie>
      <Movie
        ref={element3}
        variants={fade}
        initial="hidden"
        animate={controls3}
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <ImageFrame>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="goodtimes"
            />
          </ImageFrame>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const ImageFrame = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
