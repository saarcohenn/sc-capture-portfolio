import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: white;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
