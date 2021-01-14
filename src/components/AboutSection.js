import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { Layout, Description, Image, Hide } from "../styles";
// Animations
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas you have. we have
          pros with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="guy with a camera"
          variants={photoAnimation}
        />
      </Image>
    </About>
  );
};

// Styled Component
const About = styled(Layout)``;

export default AboutSection;
